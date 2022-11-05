/**
 * Created by scarboni on 21.12.2020
 */

const path = require("path");
const fs = require("fs");

const wrapper_errors = {
  libNotEnabled: (lib) => `You must enable ${lib} before using this function`,
};

const argTypeValuesDefault = {
  int: 0,
  int64: 0,
  long: 0,
  string: "",
  double: 0.0,
  float: 0.0,
  bool: false,
};

const setters = {};
fs.readdirSync(path.join(__dirname, "setters/bass")).forEach(function (file) {
  if (file.indexOf(".js") > -1)
    setters[file] = require("./" + path.join("setters/bass", file));
});

["bassmix", "bassenc"].forEach((plugin) => {
  fs.readdirSync(path.join(__dirname, `setters/plugins/${plugin}`)).forEach(
    function (file) {
      if (file.indexOf(".js") > -1)
        setters[`${plugin}-${file}`] = require("./" +
          path.join(`setters/plugins/${plugin}`, file));
    }
  );
});

var structs = {};
setters["setStructs.js"](structs);

for (let prop in structs) {
  argTypeValuesDefault[prop] = structs[prop].generateNewObject().ref();
}
const argCallbackBuilders = {};
var callbacks = {};
setters["setCallbacks.js"](callbacks);
for (let prop in callbacks) {
  argCallbackBuilders[prop] = callbacks[prop];
}

class libFile {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.dl = null;
    return this;
  }
  setPath(basePath) {
    if (basePath) this.path = path.join(basePath, this.name);
    else {
      this.path = this.name;
      this.name = path.basename(this.name);
    }
  }
  enable(dl) {
    if (!dl) return false;
    this.dl = dl;
    return true;
  }
  isEnabled() {
    return this.dl == null ? false : true;
  }
  disable() {
    this.dl = null;
  }
  tryFunc(fun, ...args) {
    if (!this.isEnabled())
      throw new Error(wrapper_errors.libNotEnabled(this.id));
    var finalArgs = [];
    for (let i in this.ffiFunDeclaration[fun][1]) {
      if (this.basicGeneratedInputs[fun][1][i] === "callback") {
        let builder = argCallbackBuilders[this.ffiFunDeclaration[fun][2][i]];
        if (args[i] !== undefined)
          finalArgs.push(builder.generateNewObject(args[i]));
        else finalArgs.push(builder.generateNewObject(null));
      } else {
        if (args[i] !== undefined) finalArgs.push(args[i]);
        else finalArgs.push(this.basicGeneratedInputs[fun][1][i]);
      }
    }
    return this.dl[fun](...finalArgs);
  }
  rawFunc(fun, ...args) {
    return this.dl[fun](...args);
  }
  setDebugData({ ffiFunDeclaration }) {
    this.ffiFunDeclaration = ffiFunDeclaration;
    this.basicGeneratedInputs = generateTestInput(ffiFunDeclaration);
  }
  getDebugData() {
    return {
      ffiFunDeclaration: this.ffiFunDeclaration,
      basicGeneratedInputs: this.basicGeneratedInputs,
    };
  }
}

function generateTestInput(ffiFunDeclaration) {
  var basicGeneratedInputs = {};
  for (let fun in ffiFunDeclaration) {
    let values = ffiFunDeclaration[fun];
    let returnType = values[0];
    let argTypes = values[1];
    if (values[2]) argTypes = values[2];

    let generatedArgValues = [];
    for (let i in argTypes) {
      if (argTypeValuesDefault[argTypes[i]] !== undefined)
        generatedArgValues.push(argTypeValuesDefault[argTypes[i]]);
      else if (argCallbackBuilders[argTypes[i]] !== undefined)
        generatedArgValues.push("callback");
      else generatedArgValues.push(null);
    }
    basicGeneratedInputs[fun] = [returnType, generatedArgValues];
  }
  return basicGeneratedInputs;
}
exports = module.exports = libFile;

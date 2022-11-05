import Fs from "fs";

const lars = Fs.readFileSync(
  "/Users/Lars_Vinter/Desktop/bassmix-lars.h",
  "utf-8"
);

const lines = lars.split("\n");

const map = {
  BOOL: "bool",
  DWORD: "int",
  QWORD: "int64",
  "const char *": "string",
  "const void *": "pointer",
  "const int *": "int",
  "void *": "pointer",
  "float *": "pointer",
  "DWORD *": "pointer",
  HENCODE: "int",
  HSTREAM: "int",
  HSYNC: "int",
  "SYNCPROC *": "pointer",
  "HSTREAM *": "pointer",
};

const obj = {};

lines.forEach((line) => {
  const my2 = line.match(/^(.*)BASSMIXDEF\((.+?)\)\((.*)\);$/);
  // console.log(my2);
  if (my2) {
    const typ = map[my2[1].trim()];
    const name = my2[2];
    // console.log(typ);
    const params = my2[3].split(",");

    let val = params.map((param) => {
      param = param.trim();
      if (param === "void") {
        param = null;
      } else {
        const my3 = param.match(/^(.*)(\ |\*)(.+?)$/);
        if (my3) {
          param = (my3[1] + my3[2]).trim();
          if (param in map) {
            param = map[param];
          } else {
          }
        }
      }
      return param;
    });

    if (val[0] === null) val = [];

    obj[name] = [typ, val];
  }
});

const fns = obj;

const createStr = (fns) => JSON.stringify(fns, null, 2);

const output = `/**
* Automagically created on ${new Date().toString()}
*/

const key = "mixer";

function getFfiFunDeclarations(bass) {
  return ${createStr(fns)}
};
exports.key = key;
exports.getFfiFunDeclarations = getFfiFunDeclarations;
`;

Fs.writeFileSync("libmix.js", output);

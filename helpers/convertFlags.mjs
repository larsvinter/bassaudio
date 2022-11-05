import Fs from "fs";

const lars = Fs.readFileSync(
  "/Users/Lars_Vinter/Desktop/bassmix-lars.h",
  "utf-8"
);

const lines = lars.split("\n");
const data = lines.map((a) => {
  const line = a.match(/(#define\ )(.+?)(\ )(.*)$/);
  if (line) {
    return [line[2], line[4]];
  }
});

const flags = {};

data.forEach((val) => {
  if (val) {
    flags[val[0]] = val[1];
  }
});

const createStr = (fl) => {
  let str = "";
  for (let [key, value] of Object.entries(fl)) {
    value = value.trim();
    // Check if there's a comment in the value thing
    const my = value.match(/^(.*)(\/\/|\/\*)(.*)$/);
    const final = {};
    if (my) {
      final.val = my[1].trim();
      final.comment = my[3].trim();
    } else {
      final.val = value;
    }

    // First check if the flag is a self reference and then replace
    if (flags[final.val]) {
      final.val = flags[final.val];

      // Check if there's a comment in the value thing
      const my2 = final.val.match(/^(.*)(\/\/|\/\*)(.*)$/);
      // console.log(my2);
      if (my2) {
        final.val = my2[1].trim();
        final.comment = my2[3].trim();
      }
    }

    const removeComment = (val) => {
      const found2 = val.match(/^(.*)(\/\/|\/\*)(.*)$/);
      if (found2) return found2[1].trim();
      return val.trim();
    };

    // Secondly check if the flag is an | with self references and then replace
    const doMatch = final.val.match(/^(.*)(\|)(.*)$/);
    if (doMatch) {
      final.val =
        removeComment(flags[doMatch[1].trim()]) +
        " | " +
        removeComment(flags[doMatch[3].trim()]);
    }

    // Then check if the flag is a string and make sure to use quote
    // if (isNaN(final.val)) final.val = `"${final.val}"`;

    // if (flags[value]) value = flags[value];
    if (!final.comment) {
      str = str + `    ${key}: ${final.val},\n`;
    } else {
      str = str + `    ${key}: ${final.val}, // ${final.comment}\n`;
    }
  }
  return str;
};

const output = `/**
* Automagically created on ${new Date().toString()}
*/

function setFlags(bass) {
  bass.BASSMIX_flags = {
${createStr(flags)}  };
}

exports = module.exports = setFlags;
`;

Fs.writeFileSync("setFlags.js", output);

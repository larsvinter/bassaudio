/**
 * Automagically created on Sat Nov 05 2022 19:40:29 GMT+0100 (Central European Standard Time)
 */

const key = "encoder";

function getFfiFunDeclarations(bass) {
  return {
    BASS_Encode_GetVersion: ["int", ["void"]],
    BASS_Encode_Start: ["int", ["int", "string", "int", "pointer", "pointer"]],
    BASS_Encode_StartLimit: [
      "int",
      ["int", "string", "int", "pointer", "pointer", "int"],
    ],
    BASS_Encode_StartUser: [
      "int",
      ["int", "string", "int", "pointer", "pointer"],
    ],
    BASS_Encode_AddChunk: ["bool", ["int", "string", "pointer", "int"]],
    BASS_Encode_Write: ["bool", ["int", "pointer", "int"]],
    BASS_Encode_Stop: ["bool", ["int"]],
    BASS_Encode_StopEx: ["bool", ["int", "bool"]],
    BASS_Encode_SetPaused: ["bool", ["int", "bool"]],
    BASS_Encode_IsActive: ["int", ["int"]],
    BASS_Encode_SetNotify: ["bool", ["int", "pointer", "pointer"]],
    BASS_Encode_GetCount: ["int64", ["int", "int"]],
    BASS_Encode_SetChannel: ["bool", ["int", "int"]],
    BASS_Encode_GetChannel: ["int", ["int"]],
    BASS_Encode_UserOutput: ["bool", ["int", "int64", "pointer", "int"]],
    BASS_Encode_CastInit: [
      "bool",
      [
        "int",
        "string",
        "string",
        "string",
        "string",
        "string",
        "string",
        "string",
        "string",
        "int",
        "int",
      ],
    ],
    BASS_Encode_CastSetTitle: ["bool", ["int", "string", "string"]],
    BASS_Encode_CastSendMeta: ["bool", ["int", "int", "pointer", "int"]],
    BASS_Encode_CastGetStats: ["string", ["int", "int", "string"]],
    BASS_Encode_ServerInit: [
      "int",
      ["int", "string", "int", "int", "int", "pointer", "pointer"],
    ],
    BASS_Encode_ServerKick: ["bool", ["int", "string"]],
  };
}
exports.key = key;
exports.getFfiFunDeclarations = getFfiFunDeclarations;

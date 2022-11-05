/**
 * Automagically created on Sat Nov 05 2022 20:15:44 GMT+0100 (Central European Standard Time)
 */

const key = "mixer";

function getFfiFunDeclarations(bass) {
  return {
    BASS_Mixer_GetVersion: ["int", []],
    BASS_Mixer_StreamCreate: ["int", ["int", "int", "int"]],
    BASS_Mixer_StreamAddChannel: ["bool", ["int", "int", "int"]],
    BASS_Mixer_StreamAddChannelEx: [
      "bool",
      ["int", "int", "int", "int64", "int64"],
    ],
    BASS_Mixer_StreamGetChannels: ["int", ["int", "pointer", "int"]],
    BASS_Mixer_ChannelGetMixer: ["int", ["int"]],
    BASS_Mixer_ChannelIsActive: ["int", ["int"]],
    BASS_Mixer_ChannelFlags: ["int", ["int", "int", "int"]],
    BASS_Mixer_ChannelRemove: ["bool", ["int"]],
    BASS_Mixer_ChannelSetPosition: ["bool", ["int", "int64", "int"]],
    BASS_Mixer_ChannelGetPosition: ["int64", ["int", "int"]],
    BASS_Mixer_ChannelGetPositionEx: ["int64", ["int", "int", "int"]],
    BASS_Mixer_ChannelGetLevel: ["int", ["int"]],
    BASS_Mixer_ChannelGetLevelEx: ["bool", ["int", "pointer", "float", "int"]],
    BASS_Mixer_ChannelGetData: ["int", ["int", "pointer", "int"]],
    BASS_Mixer_ChannelSetSync: [
      "int",
      ["int", "int", "int64", "pointer", "pointer"],
    ],
    BASS_Mixer_ChannelRemoveSync: ["bool", ["int", "int"]],
    BASS_Mixer_ChannelSetMatrix: ["bool", ["int", "pointer"]],
    BASS_Mixer_ChannelSetMatrixEx: ["bool", ["int", "pointer", "float"]],
    BASS_Mixer_ChannelGetMatrix: ["bool", ["int", "pointer"]],
    BASS_Mixer_ChannelSetEnvelope: [
      "bool",
      ["int", "int", "const BASS_MIXER_NODE *", "int"],
    ],
    BASS_Mixer_ChannelSetEnvelopePos: ["bool", ["int", "int", "int64"]],
    BASS_Mixer_ChannelGetEnvelopePos: ["int64", ["int", "int", "pointer"]],
    BASS_Split_StreamCreate: ["int", ["int", "int", "int"]],
    BASS_Split_StreamGetSource: ["int", ["int"]],
    BASS_Split_StreamGetSplits: ["int", ["int", "pointer", "int"]],
    BASS_Split_StreamReset: ["bool", ["int"]],
    BASS_Split_StreamResetEx: ["bool", ["int", "int"]],
    BASS_Split_StreamGetAvailable: ["int", ["int"]],
  };
}
exports.key = key;
exports.getFfiFunDeclarations = getFfiFunDeclarations;

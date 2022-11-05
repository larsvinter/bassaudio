/**
 * Automagically created on Sat Nov 05 2022 18:17:09 GMT+0100 (Central European Standard Time)
 */

function setFlags(bass) {
  bass.BASSMIX_flags = {
    BASS_CONFIG_MIXER_BUFFER: 0x10601,
    BASS_CONFIG_MIXER_POSEX: 0x10602,
    BASS_CONFIG_SPLIT_BUFFER: 0x10610,
    BASS_MIXER_RESUME: 0x1000, // resume stalled immediately upon new/unpaused source
    BASS_MIXER_POSEX: 0x2000, // enable BASS_Mixer_ChannelGetPositionEx support
    BASS_MIXER_NOSPEAKER: 0x4000, // ignore speaker arrangement
    BASS_MIXER_QUEUE: 0x8000, // queue sources
    BASS_MIXER_END: 0x10000, // end the stream when there are no sources
    BASS_MIXER_NONSTOP: 0x20000, // don't stall when there are no sources
    BASS_MIXER_CHAN_ABSOLUTE: 0x1000, // start is an absolute position
    BASS_MIXER_CHAN_BUFFER: 0x2000, // buffer data for BASS_Mixer_ChannelGetData/Level
    BASS_MIXER_CHAN_LIMIT: 0x4000, // limit mixer processing to the amount available from this source
    BASS_MIXER_CHAN_MATRIX: 0x10000, // matrix mixing
    BASS_MIXER_CHAN_PAUSE: 0x20000, // don't process the source
    BASS_MIXER_CHAN_DOWNMIX: 0x400000, // downmix to stereo/mono
    BASS_MIXER_CHAN_NORAMPIN: 0x800000, // don't ramp-in the start
    BASS_MIXER_BUFFER: 0x2000, // buffer data for BASS_Mixer_ChannelGetData/Level
    BASS_MIXER_LIMIT: 0x4000, // limit mixer processing to the amount available from this source
    BASS_MIXER_MATRIX: 0x10000, // matrix mixing
    BASS_MIXER_PAUSE: 0x20000, // don't process the source
    BASS_MIXER_DOWNMIX: 0x400000, // downmix to stereo/mono
    BASS_MIXER_NORAMPIN: 0x800000, // don't ramp-in the start
    BASS_ATTRIB_MIXER_LATENCY: 0x15000,
    BASS_ATTRIB_MIXER_THREADS: 0x15001,
    BASS_ATTRIB_MIXER_VOL: 0x15002,
    BASS_ACTIVE_WAITING: 5,
    BASS_ACTIVE_QUEUED: 6,
    BASS_SPLIT_SLAVE: 0x1000, // only read buffered data
    BASS_SPLIT_POS: 0x2000,
    BASS_ATTRIB_SPLIT_ASYNCBUFFER: 0x15010,
    BASS_ATTRIB_SPLIT_ASYNCPERIOD: 0x15011,
    BASS_MIXER_ENV_FREQ: 1,
    BASS_MIXER_ENV_VOL: 2,
    BASS_MIXER_ENV_PAN: 3,
    BASS_MIXER_ENV_LOOP: 0x10000, // flag: loop
    BASS_MIXER_ENV_REMOVE: 0x20000, // flag: remove at end
    BASS_SYNC_MIXER_ENVELOPE: 0x10200,
    BASS_SYNC_MIXER_ENVELOPE_NODE: 0x10201,
    BASS_SYNC_MIXER_QUEUE: 0x10202,
    BASS_POS_MIXER_RESET: 0x10000, // flag: clear mixer's playback buffer
    BASS_POS_MIXER_DELAY: 5,
    BASS_CTYPE_STREAM_MIXER: 0x10800,
    BASS_CTYPE_STREAM_SPLIT: 0x10801,
  };
}

exports = module.exports = setFlags;

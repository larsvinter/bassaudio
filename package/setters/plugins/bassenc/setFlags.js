/**
 * Automagically created on Sat Nov 05 2022 18:07:59 GMT+0100 (Central European Standard Time)
 */

function setFlags(bass) {
  bass.BASSENC_flags = {
    BASS_ERROR_ACM_CANCEL: 2000, // ACM codec selection cancelled
    BASS_ERROR_CAST_DENIED: 2100, // access denied (invalid password)
    BASS_ERROR_SERVER_CERT: 2101, // missing/invalid certificate
    BASS_CONFIG_ENCODE_PRIORITY: 0x10300,
    BASS_CONFIG_ENCODE_QUEUE: 0x10301,
    BASS_CONFIG_ENCODE_CAST_TIMEOUT: 0x10310,
    BASS_CONFIG_ENCODE_ACM_LOAD: 0x10302,
    BASS_CONFIG_ENCODE_CAST_PROXY: 0x10311,
    BASS_CONFIG_ENCODE_CAST_BIND: 0x10312,
    BASS_CONFIG_ENCODE_SERVER_CERT: 0x10320,
    BASS_CONFIG_ENCODE_SERVER_KEY: 0x10321,
    BASS_ENCODE_NOHEAD: 1, // don't send a WAV header to the encoder
    BASS_ENCODE_FP_8BIT: 2, // convert floating-point sample data to 8-bit integer
    BASS_ENCODE_FP_16BIT: 4, // convert floating-point sample data to 16-bit integer
    BASS_ENCODE_FP_24BIT: 6, // convert floating-point sample data to 24-bit integer
    BASS_ENCODE_FP_32BIT: 8, // convert floating-point sample data to 32-bit integer
    BASS_ENCODE_FP_AUTO: 14, // convert floating-point sample data back to channel's format
    BASS_ENCODE_BIGEND: 16, // big-endian sample data
    BASS_ENCODE_PAUSE: 32, // start encording paused
    BASS_ENCODE_PCM: 64, // write PCM sample data (no encoder)
    BASS_ENCODE_RF64: 128, // send an RF64 header
    BASS_ENCODE_MONO: 0x100, // convert to mono (if not already)
    BASS_ENCODE_QUEUE: 0x200, // queue data to feed encoder asynchronously
    BASS_ENCODE_WFEXT: 0x400, // WAVEFORMATEXTENSIBLE "fmt" chunk
    BASS_ENCODE_CAST_NOLIMIT: 0x1000, // don't limit casting data rate
    BASS_ENCODE_LIMIT: 0x2000, // limit data rate to real-time
    BASS_ENCODE_AIFF: 0x4000, // send an AIFF header rather than WAV
    BASS_ENCODE_DITHER: 0x8000, // apply dither when converting floating-point sample data to integer
    BASS_ENCODE_AUTOFREE: 0x40000, // free the encoder when the channel is freed
    BASS_ACM_DEFAULT: 1, // use the format as default selection
    BASS_ACM_RATE: 2, // only list formats with same sample rate as the source channel
    BASS_ACM_CHANS: 4, // only list formats with same number of channels (eg. mono/stereo)
    BASS_ACM_SUGGEST: 8, // suggest a format (HIWORD=format tag)
    BASS_ENCODE_COUNT_IN: 0, // sent to encoder
    BASS_ENCODE_COUNT_OUT: 1, // received from encoder
    BASS_ENCODE_COUNT_CAST: 2, // sent to cast server
    BASS_ENCODE_COUNT_QUEUE: 3, // queued
    BASS_ENCODE_COUNT_QUEUE_LIMIT: 4, // queue limit
    BASS_ENCODE_COUNT_QUEUE_FAIL: 5, // failed to queue
    BASS_ENCODE_COUNT_IN_FP: 6, // sent to encoder before floating-point conversion
    BASS_ENCODE_TYPE_MP3: "audio/mpeg",
    BASS_ENCODE_TYPE_OGG: "audio/ogg",
    BASS_ENCODE_TYPE_AAC: "audio/aacp",
    BASS_ENCODE_CAST_PUBLIC: 1, // add to public directory
    BASS_ENCODE_CAST_PUT: 2, // use PUT method
    BASS_ENCODE_CAST_SSL: 4, // use SSL/TLS encryption
    BASS_ENCODE_STATS_SHOUT: 0, // Shoutcast stats
    BASS_ENCODE_STATS_ICE: 1, // Icecast mount-point stats
    BASS_ENCODE_STATS_ICESERV: 2, // Icecast server stats
    BASS_ENCODE_SERVER_NOHTTP: 1, // no HTTP headers
    BASS_ENCODE_SERVER_META: 2, // Shoutcast metadata
    BASS_ENCODE_SERVER_SSL: 4, // support SSL/TLS encryption
    BASS_ENCODE_SERVER_SSLONLY: 8, // require SSL/TLS encryption
    BASS_ENCODE_NOTIFY_ENCODER: 1, // encoder died
    BASS_ENCODE_NOTIFY_CAST: 2, // cast server connection died
    BASS_ENCODE_NOTIFY_SERVER: 3, // server died
    BASS_ENCODE_NOTIFY_CAST_TIMEOUT: 0x10000, // cast timeout
    BASS_ENCODE_NOTIFY_QUEUE_FULL: 0x10001, // queue is out of space
    BASS_ENCODE_NOTIFY_FREE: 0x10002, // encoder has been freed
  };
}

exports = module.exports = setFlags;

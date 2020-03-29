const { Transform } = require('stream') 
const { StringDecoder } = require('string_decoder')

const { encode, decode } = require('./helper');


class transformStream extends Transform {
    constructor(options) {
      super (options)
      // The stream will have Buffer chunks. The
      // decoder converts these to String instances.
      this.shift = options.shift;
      this.action = options.action
      this._decoder = new StringDecoder('utf-8')
    }

    _transform (chunk, encoding, callback) {
      if (encoding === 'buffer') {
        chunk = this._decoder.write(chunk)
      }
  
      // Exit on CTRL + C.
      if (chunk === '\u0003') {
        process.exit()
      }
      let newChunk 
      this.action === 'encode' ? newChunk = encode(chunk, this.shift) : newChunk = decode(chunk, this.shift)

      callback(null, newChunk)
    }
  }
module.exports = transformStream;
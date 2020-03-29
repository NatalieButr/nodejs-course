const { Transform } = require('stream') 
const { StringDecoder } = require('string_decoder')

const { encode, decode } = require('./helper');


class transformStream extends Transform {
    constructor(options) {
      super (options)
      this.shift = options.shift;
      this.action = options.action
      this._decoder = new StringDecoder('utf-8')
    }

    _transform (chunk, encoding, callback) {
      if (encoding === 'buffer') {
        chunk = this._decoder.write(chunk)
      }
      if (chunk === '\u0003') {
        process.exit()
      }
      let newChunk 
      this.action === 'encode' ? newChunk = encode(chunk, this.shift) : newChunk = decode(chunk, this.shift)
      console.log(newChunk)
      callback(null, newChunk)
    }
  }
module.exports = transformStream;
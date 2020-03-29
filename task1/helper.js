const  handleArgumentError = () => {
    console.log('error')
    console.error('Invalid arguments, usage: node app.js ');
    process.exit(-1);
}

const decode = (chunk, shift) => {
    var result = "";
    shift = (26 - shift) % 26;
    result = encode(chunk, shift);
    return result;
}   
const encode = (chunk, shift) => {
    return chunk.split('').map((item, i) => {
        let char = item.charCodeAt();    
          console.log(char)     
      //  handle uppercase letters
        if(char >= 65 && char <=  90) {
         return  item = String.fromCharCode((char - 65 + shift) % 26 + 65); 
        } else if(char >= 97 && char <= 122){
          return  item = String.fromCharCode((char - 97 + shift) % 26 + 97);
        }
        return item
    }).join('')

}
module.exports = handleArgumentError;
module.exports = decode;
module.exports = encode;
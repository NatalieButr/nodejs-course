exports.handleArgumentError = () => {
    console.error('Invalid arguments, usage: node app.js ');
    process.exit(-1);
}

exports.decode = (chunk, shift) => {
    var result = "";
    shift = (26 - shift) % 26;
    result = encode(chunk, shift);
    return result;
}   
exports.encode = (chunk, shift) => {
    return chunk.split('').map((item, i) => {
        let char = item.charCodeAt();    
        if(char >= 65 && char <=  90) {
         return  item = String.fromCharCode((char - 65 + shift) % 26 + 65); 
        } else if(char >= 97 && char <= 122){
          return  item = String.fromCharCode((char - 97 + shift) % 26 + 97);
        }
        return item
    }).join('')

}
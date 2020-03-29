const app = require('commander');
const fs = require('fs');
var readline = require('readline')

const { handleArgumentError, encode, decodee } = require('./helper');
const transformStream = require('./transformSteam');

app
  .requiredOption('-a, --action <action>', 'type of action')
  .requiredOption('-s, --shift <size>', 'shift size')
  .option('-i, --input <inputFile>', 'input file')
  .option('-o, --output <outputFile>', 'output file');

app.parse(process.argv);
let inputFile, transformer, outputFile;

if((app.action === 'encode' || app.action === 'decode') && !isNaN(app.shift) ) { 
        app.input ? inputFile = fs.createReadStream(app.input, 'utf-8') : inputFile = app.args[0];
        transformer = new transformStream({shift: app.shift, action: app.action});
        app.output ? outputFile = fs.createWriteStream('oput.txt') : outputFile = process.stdout;
       
        if(app.input) {
          inputFile
          .on('error', function (err) {
            handleArgumentError()
          })
          .pipe(transformer)
          .on('error', function (err) {
            handleArgumentError()
          })
          .pipe(outputFile)
          .on('error', function (err) {
            handleArgumentError()
          })
        } else {
          
          let stdin = process.openStdin();
          process.stdout.write(`Enter the code`)
          stdin.addListener("data", function(name) {
              let result;
              app.action === 'encode' ? result = encode(name.toString(), app.shift) : result = decode(name.toString(), app.shift)
              process.stdout.write(`${result}`)
            })
        }

} else {
    handleArgumentError();
};
const app = require('commander');
const fs = require('fs');
const stream = require('stream');
const pipeline = require('stream');

const {handleArgumentError} = require('./helper');
const transformStream = require('./transformSteam');

app
  .option('-a, --action <action>', 'type of action')
  .option('-s, --shift <size>', 'shift size')
  .option('-i, --input <inputFile>', 'input file')
  .option('-o, --output <outputFile>', 'output file');

app.parse(process.argv);

console.log(app.action)
let inputFile, transformer, outputFile;

if(app.action === 'encode' || app.action === 'decode') { 
    if(app.input) {
        inputFile = fs.createReadStream(app.input, 'utf-8');
        transformer = new transformStream({shift: app.shift, action: app.action});
        app.output ? outputFile = fs.createWriteStream('oput.txt', {transformer}) : outputFile = process.stdout.write("Hello World\n");
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
        // // if(inputFile.reading) 
        // }
        // pipeline(
        //     inputFile, 
        //     transformer, 
        //     outputFile, 
        //     (err) => {
        //       if (err) {
        //         console.error('Pipeline failed', err);
        //       } else {
        //         console.log('Pipeline succeeded');
        //       }
        //     }
        // )
    } else {
        // process.stdin.setEncoding('utf8');b

        // process.stdin.on('readable', () => {
        //   let chunk;
        //   console.log(process.stdin)
        //   // Use a loop to make sure we read all available data.
        //   while ((chunk = process.stdin.read()) !== null) {
        //     process.stdout.write(`data: ${chunk}`);
        //   }
        // });
        
        // process.stdin.on('end', () => {
        //   process.stdout.write('end');
        // });

    }

} else {

  console.log(handleArgumentError, 'error')
    handleArgumentError();
};
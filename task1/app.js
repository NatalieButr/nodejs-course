const app = require('commander');

app
  .option('-a, --action <action>', 'type of action')
  .option('-s, --shift <size>', 'shift size')
  .option('-i, --input <inputFile', 'input file')
  .option('-o, --output <outputFile>', 'output file');

// app.parse(process.argv);
// console.log(process.argv);
// if (app.debug) console.log(app.opts());
// console.log('pizza details:');
// if (app.small) console.log('- small pizza size');
// if (app.pizzaType) console.log(`- ${app.pizzaType}`);
// if (app.action) console.log(app.opts());

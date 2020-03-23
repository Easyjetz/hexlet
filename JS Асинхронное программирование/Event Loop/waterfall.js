import fs from 'fs';
import { waterfall } from 'async';




// BEGIN
export const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
    waterfall([
      (callback) => fs.readFile(inputPath1, callback),
      (data1, callback) => fs.readFile(inputPath2, (err, data2) => callback(err, data1, data2)),
      (data1, data2, callback) => fs.writeFile(outputPath, `${data1}${data2}`, callback),
    ], cb);
  };
  // END
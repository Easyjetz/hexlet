const fs = require('fs');
const async = require('async');
const path = require('path');
const _ = require('lodash');
// без path
const getDirectorySize = (dir, cb) => {
    
// поскольку мы тут выставили withFileTypes, мы может использовать методы класса fs.Dirent (как я понял)
    fs.readdir(dir, {encoding: 'utf-8', withFileTypes: true}, (err, allFiles) => {       
        const files = allFiles.filter((f) => f.isFile()).map((f) => path.join(dir, f.name));        
        if (err) {
            cb(err);
            return;
        }
        async.map(files, fs.stat, (err2, result) => {
            if (err2) {
                cb(err2);
                return;
            }
            const arrSize = result.map((f) => f.size);
            const size = _.sumBy(arrSize);
            return cb(null, size);
                       
        })
    });
}
getDirectorySize('c:/Users/Dmitry/Desktop/app', (err, size) => {
    console.log(size);
});

// BEGIN решение учителя
export const getDirectorySize = (dirpath, cb) => {
    fs.readdir(dirpath, (error1, filenames) => {
      if (error1) {
        cb(error1);
        return;
      }
      const filepaths = filenames.map((name) => path.join(dirpath, name));
      async.map(filepaths, fs.stat, (error2, stats) => {
        if (error2) {
          cb(error2);
          return;
        }
        const sum = _.sumBy(stats.filter((stat) => stat.isFile()), 'size');
        cb(null, sum);
      });
    });
  };
  // END
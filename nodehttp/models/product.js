const fs = require("fs");
const path = require("path");
const mainDir = require("../utils/path");

const p = path.join(mainDir, "data", "products.json");

const getProductsFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    return cb(JSON.parse(fileContent));
  });
};

module.exports = class DataProducts {
  constructor(t) {
    this.title = t;
  }
  save() {
    getProductsFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
  static getProducts(cb) {
    getProductsFile(cb);
  }
};

// function DataProducts(t) {
//   this.title = t;
// }
// DataProducts.prototype = {
//   save: function () {
//     getProductsFile((products) => {
//       products.push(this);
//       fs.writeFile(p, JSON.stringify(products), (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     });
//   },
//   getProducts: function (cb) {
//     getProductsFile(cb);
//   },
// };
// module.exports = DataProducts;

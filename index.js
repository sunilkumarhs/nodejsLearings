// const operation = require("./moduleExports");
// const { add, sub } = operation;
// console.log(add(3, 4));
// console.log(sub(4, 3));

// const Title = require("./moduleCaching");
// console.log(title.getName());
// title.setName("ABD");
// console.log(title.getName());

// const title2 = require("./moduleCaching");
// console.log(title.getName());

// const player1 = new Title("virat");
// console.log(player1.getName());
// player1.setName("Abd");
// console.log(player1.getName());
// console.log("--------------------");
// const player2 = new Title("Rahul");
// console.log(player2.getName());

// const add = require("./add");
// const sub = require("./sub");
// console.log("Hello from index.js");

// const sum1 = add(17, 18);
// const sum2 = add(1, 7);
// console.log(sum1, sum2);
// const min1 = sub(18, 17);
// const min2 = sub(7, 1);
// console.log(min1, min2);

// const path = require("node:path");

// console.log(__dirname);
// console.log(__filename);

// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));

// console.log(path.join("folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "../index.html"));
// console.log(path.join(__dirname, "index.html"));
// console.log("------------------------------------------");
// console.log(path.resolve("folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "../index.html"));
// console.log(path.resolve(__dirname, "index.html"));

// function greet(name) {
//   console.log("Hello " + name);
// }

// function higherOrderFunc(callback) {
//   const name = "Sunil";
//   callback(name);
// }

// higherOrderFunc(greet);

// const eventEmitter = require("node:events");

// const emitter = new eventEmitter();

// emitter.on("Order_Pizza", (size, topping) => {
//   console.log(`Order recieved!, Preparing the ${size} pizza with ${topping}!!`);
// });

// emitter.on("Order_Pizza", (size) => {
//   if (size === "large") {
//     console.log("Complimenting with Drinks!");
//   }
// });

// console.log("Executed before the emitter events");
// emitter.emit("Order_Pizza", "large", "vegitable");

// const PizzaOrder = require("./PizzaShop");
// const drinkMachine = require("./DrinksMachine");

// const ordering = new PizzaOrder();
// ordering.displayNumberOfOrders();

// ordering.on("OrderPizza", (size, topping) => {
//   console.log(`Order recieved!, Preparing the ${size} pizza with ${topping}!!`);
//   drinkMachine(size);
// });

// ordering.on("OrderPizza", (size) => {
//   drinkMachine(size);
// });

// ordering.order("large", "vegitables");
// ordering.displayNumberOfOrders();

// const buffer = new Buffer.from("Sunilkumar");

// buffer.write("codevaluator");

// console.log(buffer.toString());

// console.log(buffer);
// console.log(buffer.toJSON());

// const fs = require("node:fs");

// console.log("First");
// const readFile = fs.readFileSync("./file.txt", "utf-8");
// console.log(readFile);
// console.log("Second");
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });
// console.log("Third");

// console.log("W1");
// fs.writeFileSync("./writenFile.txt", "Data has been writen");
// console.log("w2");
// fs.writeFileSync("./writenFile.txt", " Data2 has been writen", { flag: "a" });
// console.log("w3");
// fs.writeFile(
//   "./writenFile.txt",
//   " Data3 has been writen",
//   { flag: "a" },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File written!");
//     }
//   }
// );
// console.log("w4");

// const fs = require("node:fs/promises");
// console.log("first");
// fs.readFile("./file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const readFile = async () => {
//   try {
//     const data = await fs.readFile("./writenFile.txt", "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// console.log("second");
// readFile();
// console.log("third");

// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gZip = zlib.createGzip();

// const readableStream = fs.createReadStream("./file.txt", {
//   encoding: "utf-8",
//   highWaterMark: 4,
// });

// const writeableStream = fs.createWriteStream("./file2.txt");

// readableStream.pipe(writeableStream);

// readableStream.pipe(gZip).pipe(fs.createWriteStream("./zipFile.txt.gz"));

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });

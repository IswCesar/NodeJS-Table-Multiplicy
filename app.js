const { createFile, listFile } = require("./multiply/multiply");
const argv = require("./config/yargs").argv;
const colors = require("colors/safe");

let command = argv._[0];

switch (command) {
    case "list":
        console.log("List");
        listFile(argv.base, argv.limit);
        break;
    case "create":
        console.log("Create");
        createFile(argv.base, argv.limit)
            .then((fileName) =>
                console.log(`File ${colors.green(`${fileName}`)} saved`)
      )
      .catch((err) => console.log(err));
    break;
  default:
    console.log("Command undefined");
    break;
}

// console.log(argv.base);

// let parameter = argv[2];
// let base = parameter.split("=")[1];
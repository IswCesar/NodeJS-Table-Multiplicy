const opts = {
    base: {
        demand: true,
        alias: "b",
    },
    limit: {
        alias: "l",
        default: 10,
    },
};

const argv = require("yargs")
    .command("list", "Print in console multiply table", opts)
    .command("create", "Genere a file with multiply table", opts)
    .help().argv;

module.exports = {
    argv,
};
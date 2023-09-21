const inquirer = require("inquirer");

module.exports = {
  askInitAction: () => {
    const rawList = {
      type: "rawlist",
      name: "action",
      message: "What do you want to do?",
      choices: [
        { name: "Load wallet", value: "load_wallet" },
        { name: "Create new wallet", value: "new_wallet" },
        { name: "Close", value: "exit" },
      ],
    };
    return inquirer.prompt(rawList);
  },
};

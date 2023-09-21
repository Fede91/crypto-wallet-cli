const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("./lib/inquirer");
const cryptography = require("./lib/cryptography");

clear();

const main = async () => {
  console.log(
    chalk.blue(figlet.textSync("CryptoWalletCli", { horizontalLayout: "full" }))
  );

  let exit = false;

  while (!exit) {
    const response = await inquirer.askInitAction();
    console.log(response);
    switch (response.action) {
      case "exit":
        exit = true;
        console.log("Bye bye");
        break;
      case "new_wallet":
        const { addess, mnemonic } = cryptography.generateWallet();
        console.log(`WARNING! Never disclose your Seed Phrase:\n ${mnemonic}`);
        console.log(`Account One Wallet Address: 0x${addess}`);
        break;
    }
  }
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

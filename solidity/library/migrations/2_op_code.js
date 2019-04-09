var Migrations = artifacts.require("./OPCode.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

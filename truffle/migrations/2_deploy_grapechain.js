var Okonomi = artifacts.require("./OkonomiToken.sol");
  
module.exports = function(deployer) {
  deployer.deploy(Okonomi);
};

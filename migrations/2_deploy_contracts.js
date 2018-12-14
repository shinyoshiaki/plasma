const PlasmaChainManager = artifacts.require("./PlasmaChainManager");
const minHeapLib = artifacts.require("./MinHeapLib");
const arrayLib = artifacts.require("./ArrayLib");
const RLP = artifacts.require("./RLP");

module.exports = function(deployer) {
  deployer.deploy(minHeapLib);
  deployer.deploy(arrayLib);
  deployer.deploy(RLP);
  deployer.link(minHeapLib, PlasmaChainManager);
  deployer.link(arrayLib, PlasmaChainManager);
  deployer.link(RLP, PlasmaChainManager);
  const exitAge = 10;
  //   7 * (60 * 60 * 24);
  const exitWait = exitAge * 2;
  deployer.deploy(PlasmaChainManager, exitAge, exitWait);
};

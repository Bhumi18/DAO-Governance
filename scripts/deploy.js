const hre = require("hardhat");

async function main() {
  // token contract
  //   const Uni = await ethers.getContractFactory("Uni");
  //   let uni = Uni.deploy(
  //     "0xB4e6ee231C86bBcCB35935244CBE9cE333D30Bdf",
  //     "0xB4e6ee231C86bBcCB35935244CBE9cE333D30Bdf",
  //     "1700631195"
  //   );
  //   uni = await (await uni).deployed();
  //   console.log(`uni deployed to ${uni.address}`);

  // timelock contract
  //   const Timelock = await ethers.getContractFactory("Timelock");
  //   let timelock = Timelock.deploy(
  //     "0xB4e6ee231C86bBcCB35935244CBE9cE333D30Bdf",
  //     "181440"
  //   ); // 2.1 days
  //   timelock = await (await timelock).deployed();
  //   console.log(`timelock deployed to ${timelock.address}`);

  // governoralpha contract
  const GovernorAlpha = await ethers.getContractFactory("GovernorAlpha");
  let governorAlpha = GovernorAlpha.deploy(
    "0x6AD9F54098EdA3A6577c379516EC934d6873851F",
    "0x2eeFa13703Eb4483Aa588Fd5D6bfb034E1FB8d97"
  );
  governorAlpha = await (await governorAlpha).deployed();
  console.log(`governorAlpha deployed to ${governorAlpha.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// uni deployed to 0x2eeFa13703Eb4483Aa588Fd5D6bfb034E1FB8d97
// timelock deployed to 0x6AD9F54098EdA3A6577c379516EC934d6873851F
// governorAlpha deployed to 0x426DF2d74C08F16257DE10b74B84d7FbFecfDEEa

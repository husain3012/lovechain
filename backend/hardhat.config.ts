import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  paths:{
    artifacts:"../frontend/src/contracts",
  },
  typechain: {
    outDir:"../frontend/src/typechain-types"
  }
};

export default config;

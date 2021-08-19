import '@typechain/hardhat';
import 'dotenv/config';
import { HardhatUserConfig } from 'hardhat/types';
import "hardhat-packager";

const HARDHAT_ENABLE_SENTRY = false;
const mnemonic = 'test test test test test test test test test test test junk';

const config: HardhatUserConfig = {
        packager: {
            contracts: ["console"],
            includeFactories: true,
        },
        paths: {
            artifacts: "./artifacts",
            cache: "./cache",
            sources: "./contracts",
            tests: "./test",
        },
        solidity: {
            version: '0.8.0',
            settings: {
                metadata: {
                    bytecodeHash: 'none',
                },
                optimizer: {
                    enabled: false,
                    runs: 200,
                    details: {
                        yul: false,
                    },
                    "outputSelection": {
                        "*": {
                            "*": [
                                "metadata", "evm.bytecode", "evm.bytecode.functionDebugData"
                            ],
                            "": [
                                "ast"
                            ]
                        },

                    },

                },
            },
            typechain: {
                outDir: "typechain",
                target: "ethers-v5",
            },
        }
    }
export default config;
// @exports config

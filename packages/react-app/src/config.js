import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x07c6bE008DC31921D24F25006D381364F51D944d";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/COHeBkLlNnI1QF054EHw5tYy-zbJy550",
  },
};

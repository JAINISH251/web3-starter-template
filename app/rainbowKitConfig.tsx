import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, zksync, mainnet } from "wagmi/chains";

const walletConnectProjectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

// Instead of exporting the created config directly, 
// we create it only when called.
export const getConfig = () => {
  return getDefaultConfig({
    appName: "stableCoin",
    projectId: walletConnectProjectId,
    chains: [anvil, zksync, mainnet],
    ssr: true,
  });
};
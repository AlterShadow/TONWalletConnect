import { TonConnectButton, TonConnectUIProvider, THEME } from "@tonconnect/ui-react";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center bg-black h-screen w-screen">
      <TonConnectUIProvider
        manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
        uiPreferences={{ theme: THEME.DARK }}
        walletsListConfiguration={{
          includeWallets: [
            {
              appName: "safepalwallet",
              name: "SafePal",
              imageUrl:
                "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
              aboutUrl: "https://www.safepal.com/download",
              jsBridgeKey: "safepalwallet",
              platforms: ["ios", "android", "chrome", "firefox"],
            },
            {
              appName: "tonwallet",
              name: "TON Wallet",
              imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
              aboutUrl:
                "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
              universalLink: "https://wallet.ton.org/ton-connect",
              jsBridgeKey: "tonwallet",
              bridgeUrl: "https://bridge.tonapi.io/bridge",
              platforms: ["chrome", "android"],
            },
          ],
        }}
        actionsConfiguration={{
          twaReturnUrl: "https://t.me/tc_twa_demo_bot/start",
        }}
      >
        <TonConnectButton />
      </TonConnectUIProvider>
    </div>
  );
}

export default App;

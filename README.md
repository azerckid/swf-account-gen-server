```
hhywMIG5AA9QuF7miXI39bjdQUinXydH
https://polygon-mumbai.g.alchemy.com/v2/hhywMIG5AA9QuF7miXI39bjdQUinXydH
wss://polygon-mumbai.g.alchemy.com/v2/hhywMIG5AA9QuF7miXI39bjdQUinXydH
```

```
npm install alchemy-sdk
```

```
// Setup
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "hhywMIG5AA9QuF7miXI39bjdQUinXydH",
    network: Network.MATIC_MUMBAI,
};

const alchemy = new Alchemy(settings);

// Get the latest block
const latestBlock = alchemy.core.getBlockNumber();

// Get all outbound transfers for a provided address
alchemy.core
    .getTokenBalances('0x994b342dd87fc825f66e51ffa3ef71ad818b6893')
    .then(console.log);

// Get all the NFTs owned by an address
const nfts = alchemy.nft.getNftsForOwner("vitalik.eth");

// Listen to all new pending transactions
alchemy.ws.on(
    { method: "alchemy_pendingTransactions",
    fromAddress: "vitalik.eth" },
    (res) => console.log(res)
);
```

```
node <your_filename>.js
```

```
//ACCOUNT 0xc36b5f4b00D2165821778bF1b682af7eF3fc69f0
//NFTCONTRACT 0xBc55Bd38CCEcA8612700eE9e7D38E8379EA19b12
```

```
//ACCOUNT 0x47d32224ec80cA4998437070223fA56FeCa2E401
//AMBER_NFTCONTRACT 0x8867490a6F07770337955Df684D58F6AE466C525
```

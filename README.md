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
OLD
//ACCOUNT 0xc36b5f4b00D2165821778bF1b682af7eF3fc69f0
//NFTCONTRACT 0xBc55Bd38CCEcA8612700eE9e7D38E8379EA19b12
```

```
MUMBAI
//amber_01_ACCOUNT 0x2267BA87BA076e2459f39ACa718cE5f6d5D3a26c
//AMBER_NFTCONTRACT 0xA50675799Ba9014390041890A9d7c35879349dFD
```

CRONOS

```
//amber_01_ACCOUNT 0x2267BA87BA076e2459f39ACa718cE5f6d5D3a26c
//AMBER_NFTCONTRACT 0x95c3FBe092E47CFF945D29214107FA1219621D08
```

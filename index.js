const express = require("express");
const app = express();
const cors = require("cors");
const { Web3 } = require("web3");

const generateBlockchainKeys = () => {
  const web3 = new Web3(
    "https://sepolia.infura.io/v3/6183358fa70a469c8ac0f6644d09adf8"
  );
  const newAccount = web3.eth.accounts.create();
  console.log(newAccount);
  return {
    address: newAccount.address,
    publicKey: newAccount.publicKey,
    privateKey: newAccount.privateKey,
  };
};

app.use(cors());
// 블록체인 주소와 키를 반환하는 API 엔드포인트
app.get("/generateKeys", (req, res) => {
  try {
    const keys = generateBlockchainKeys();
    res.json(keys);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate keys" });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

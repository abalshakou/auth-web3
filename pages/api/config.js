export default function handler(req, res) {
    res.status(200).json({
        name: 'Web3 Auth',
        infura_id: process.env.INFURA_KEY,
        chain_id: process.env.CHAIN_ID,
        network_name: process.env.NETWORK_NAME,
        usdt_contract_address: '0x56705db9f87c8a930ec87da0d458e00a657fccb0',
    })
}
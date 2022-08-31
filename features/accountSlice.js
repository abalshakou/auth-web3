import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ethers } from 'ethers'

const initialState = {
    address: null,
    networkId: null,
    provider: null,
    connected: false,
    balance: 0,
    usdtBalance: 0,
    loading: false,
}

const connectWallet = (provider) => {
    return new Promise(async (resolve, reject) => {
        try {
            await provider.send('eth_requestAccounts', [])
        } catch (error) {
            console.error(error)
        }

        try {
            const signer = provider.getSigner()
            resolve(signer.getAddress())
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}



export default accountSlice.reducer
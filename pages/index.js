import Head from 'next/head'
import { useSelector } from 'react-redux'
import ConnectWallet, { formatAddress } from "../components/ConnectWallet";

export default function Home() {
    const account = useSelector(state => state.account)
    console.log(account)

  return (
    <div>
      <Head>
        <title>Web3 Authentification</title>
      </Head>

        <header className="flex justify-between items-center px-10 py-5">
            <div className="h-10 w-10 bg-amber-40 rounded-full"></div>
            {account.connected ? (
                <div className="space-x-3 font-mono">
              <span className="rounded-md py-1 px-2 bg-gradient-to-r from-pink-400 to-amber-200 font-mono tracking-wide">
                {formatAddress(account.address)}
              </span>
                </div>
            ) : (
                <ConnectWallet label="Login" />
            )}
        </header>

      <main>

      </main>
    </div>
  )
}

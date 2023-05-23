'use client'
import { Connector,useConnect, useDisconnect } from "wagmi";
export default function Home() {
  const {connectAsync, connectors} = useConnect();
  const {disconnect} = useDisconnect()
  console.log(connectors)

  const handleWalletConnect = async (connector: Connector) => {
    const {account, chain} = await connectAsync({connector})
    console.log(account, chain)
  }

  const handleDisconnect = () => {
    disconnect()
  }

  return <>
  <div>Welcome Trypto! 👋</div>
  {connectors.map(connector => {
    const { id, name } = connector;
    return <button key={id} onClick={() => handleWalletConnect(connector)} >
      {name}
      </button>
  })}
  <button onClick={handleDisconnect}>Disconnect</button>

  </>;
}

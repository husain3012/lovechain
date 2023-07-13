import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MetaMaskProvider } from "metamask-react";
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
    <MetaMaskProvider>

    <App />
    {/* </Web3Provider> */}
    </MetaMaskProvider>
    </RecoilRoot>

  </React.StrictMode>,
)

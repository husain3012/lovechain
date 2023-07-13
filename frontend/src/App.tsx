import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import UserAccount from "./components/UserAccount";

import Metamask from "./components/Metamask";
import Profile from "./components/Profile";
import MatchingAccounts from "./components/MachingAccounts";
// import { useWeb3 } from './context/AccountFactory'

function App() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-base-200">
      <div className="navbar bg-base-300">
        <a className="btn btn-ghost normal-case text-2xl">LoveChain 💞⛓</a>
      </div>

        <Metamask>
          <UserAccount>
            <Profile />
            <MatchingAccounts/>
          </UserAccount>
        </Metamask>
   
    </div>
  );
}

export default App;

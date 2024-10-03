
"use client";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown
,
  WalletDropdownBasename
, 
  WalletDropdownFundLink, 
  WalletDropdownLink, 
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance, 
} from '@coinbase/onchainkit/identity';
 
// omitted for brevity
const WalletComponent = () => {
  return (
  
    // omitted for brevity
     
    <Wallet>
      <ConnectWallet>
        <Avatar className="h-6 w-6" />
        <Name />
      </ConnectWallet>
      <WalletDropdown>
        <Identity 
          className="px-4 pt-3 pb-2" 
          hasCopyAddressOnClick
        >
          <Avatar />
          <Name />
          <Address />
          <EthBalance />
        </Identity>
        <WalletDropdownBasename />
        <WalletDropdownLink
          icon="wallet"
          href="https://keys.coinbase.com"
        >
          Wallet
        </WalletDropdownLink>
        <WalletDropdownFundLink />
        <WalletDropdownDisconnect />
      </WalletDropdown>
    </Wallet>
  );
};

export default WalletComponent;

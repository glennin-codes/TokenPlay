"use client";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
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
import { useAccount } from 'wagmi';

const WalletComponent = () => {
  const { address, isConnected } = useAccount();

  return (
    <Wallet>
      <ConnectWallet>
        {isConnected && address ? (
          <>
            <Avatar address={address} className="h-6 w-6" />
            <Name address={address} />
          </>
        ) : (
          <span>Connect Wallet</span>
        )}
      </ConnectWallet>
      <WalletDropdown>
        {isConnected && address ? (
          <Identity 
            className="px-4 pt-3 pb-2" 
            hasCopyAddressOnClick
            address={address}
          >
            <Avatar address={address} />
            <Name address={address} />
            <Address address={address} />
            <EthBalance address={address} />
          </Identity>
        ) : null}
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
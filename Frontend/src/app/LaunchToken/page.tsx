"use client";
import { useState } from 'react';
import { useAccount, useWriteContract, useTransaction, useChainId } from 'wagmi';
import { parseEther } from 'viem';
import { base } from 'viem/chains';
import WalletComponent from '../components/WalletComponent';

const TOKEN_FACTORY_ADDRESS = '0x...'; // Replace with your actual contract address

const TokenFactoryABI = [
  {
    "inputs": [
      {"internalType": "uint8", "name": "_maxPresaledAddresses", "type": "uint8"},
      {"internalType": "uint256", "name": "_price", "type": "uint256"},
      {"internalType": "uint256", "name": "maxTokenIds", "type": "uint256"},
      {"internalType": "string", "name": "_name", "type": "string"},
      {"internalType": "string", "name": "_symbol", "type": "string"}
    ],
    "name": "deployNFTContract",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;


export default function Home() {
 const [maxPresaledAddresses, setMaxPresaledAddresses] = useState<number>(10);
  const [price, setPrice] = useState<string>('0.1');
  const [maxTokenIds, setMaxTokenIds] = useState<number>(100);
  const [name, setName] = useState<string>('');
  const [symbol, setSymbol] = useState<string>('');

  const { address, isConnected } = useAccount();
  const chainId = useChainId();

  const { writeContract, data: hash, isPending } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useTransaction({
    hash,
  });

  const handleDeploy = () => {
    if (!address) {
      console.error('No address found. Please connect your wallet.');
      return;
    }

    writeContract({
      address: TOKEN_FACTORY_ADDRESS,
      abi: TokenFactoryABI,
      functionName: 'deployNFTContract',
      args: [maxPresaledAddresses, parseEther(price), BigInt(maxTokenIds), name, symbol],
      chainId: chainId, // Use the current chain ID
      account: address,
      chain: base
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">NFT Factory</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex justify-end">
                  <WalletComponent />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Max Presaled Addresses</label>
                  <input type="number" value={maxPresaledAddresses} onChange={(e) => setMaxPresaledAddresses(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Price (ETH)</label>
                  <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Max Token IDs</label>
                  <input type="number" value={maxTokenIds} onChange={(e) => setMaxTokenIds(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Symbol</label>
                  <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleDeploy}
                    disabled={!isConnected || isPending || isConfirming}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    {isPending ? 'Confirming...' : isConfirming ? 'Deploying...' : 'Deploy NFT Contract'}
                  </button>
                </div>
                {isSuccess && (
                  <div className="mt-2 text-sm text-green-600">
                    Successfully deployed! Transaction: {hash}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
)};
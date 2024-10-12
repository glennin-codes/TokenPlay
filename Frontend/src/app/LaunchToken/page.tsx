"use client";
import { useEffect, useState } from 'react';
import { useAccount, useWriteContract, useTransaction, useChainId } from 'wagmi';
import { parseEther } from 'viem';
import { base } from 'viem/chains';
import WalletComponent from '../components/WalletComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TOKEN_FACTORY_ADDRESS = '0x71Bae17ccd38EBaf2576E39d228F99Da9B836b2d';

const TokenFactoryABI = [
  {
    "inputs": [
      { "internalType": "uint8", "name": "_maxPresaledAddresses", "type": "uint8" },
      { "internalType": "uint256", "name": "_price", "type": "uint256" },
      { "internalType": "uint256", "name": "maxTokenIds", "type": "uint256" },
      { "internalType": "string", "name": "_name", "type": "string" },
      { "internalType": "string", "name": "_symbol", "type": "string" }
    ],
    "name": "deployNFTContract",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;

export default function LaunchToken() {
  const [maxPresaledAddresses, setMaxPresaledAddresses] = useState<number>();
  const [price, setPrice] = useState<string>('');
  const [maxTokenIds, setMaxTokenIds] = useState<number>();
  const [name, setName] = useState<string>('');
  const [symbol, setSymbol] = useState<string>('');

  const { address, isConnected } = useAccount();
  const chainId = useChainId();

  const { writeContract, data: hash, isPending } = useWriteContract();

  const { isLoading: isConfirming, isSuccess,isError } = useTransaction({
    hash,
  });
  useEffect(()=>{
    if(isSuccess){
      toast.success('Successfully deployed the NFT ');
    }
  

  },
  [isSuccess])

  const handleDeploy = () => {
    if (!address) {
      console.error('No address found. Please connect your wallet.');
      toast.error('No address found. Please connect your wallet.');
      return;
    }
    if (!maxPresaledAddresses || !price || !maxTokenIds || !name || !symbol) {
      console.error("Please fill in all required fields.");
      toast.error("Please fill in all required fields.");
      return;
    }
    writeContract({
      address: TOKEN_FACTORY_ADDRESS,
      abi: TokenFactoryABI,
      functionName: 'deployNFTContract',
      args: [maxPresaledAddresses, parseEther(price), BigInt(maxTokenIds), name, symbol],
      chainId: chainId,
      account: address,
      chain: base
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-6 flex flex-col justify-center sm:py-12 text-white">
       <ToastContainer />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-black bg-opacity-50 backdrop-blur-lg shadow-lg sm:rounded-3xl sm:p-20 border border-gray-700">
          <div className="max-w-md mx-auto">
            <div>
            <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
  Launch Your NFT
</h1>

            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-300 sm:text-lg sm:leading-7">
                <div className="flex justify-end mb-4">
                  <WalletComponent />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Max Presaled Addresses</label>
                  <input type="number" value={maxPresaledAddresses} onChange={(e) => setMaxPresaledAddresses(Number(e.target.value))} className="mt-1 block w-full bg-black bg-opacity-30 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Price (ETH)</label>
                  <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1 block w-full bg-black bg-opacity-30 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Max Token IDs</label>
                  <input type="number" value={maxTokenIds} onChange={(e) => setMaxTokenIds(Number(e.target.value))} className="mt-1 block w-full bg-black bg-opacity-30 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full bg-black bg-opacity-30 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Symbol</label>
                  <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} className="mt-1 block w-full bg-black bg-opacity-30 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
                </div>
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={handleDeploy}
                    disabled={!isConnected || isPending || isConfirming}
                    className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-3 px-6 rounded-full font-semibold hover:from-pink-600 hover:to-yellow-600 transition-all transform hover:scale-105"
                  >
                    {isPending ? 'Confirming...' : isConfirming ? 'Deploying...' : 'Deploy NFT Contract'}
                  </button>
                </div>
                {isSuccess && (
                  <div className="mt-4 text-sm text-green-400">
                    Successfully deployed! Transaction: {hash}
                  </div>
                  
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

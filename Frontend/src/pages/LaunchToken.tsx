import React from "react";
function LaunchToken() {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
       {/* Token Launch Section */}
       <section id="token-launch" className="py-20 px-4">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Launch Yout InGame Currency
              </h2>
              <div className="max-w-md mx-auto bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 border border-gray-700">
                <form>
                  <div className="mb-4">
                    <label htmlFor="tokenName" className="block text-gray-300 font-bold mb-2">
                      Token Name
                    </label>
                    <input
                      type="text"
                      id="tokenName"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      placeholder="Enter token name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tokenSymbol" className="block text-gray-300 font-bold mb-2">
                      Token Symbol
                    </label>
                    <input
                      type="text"
                      id="tokenSymbol"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      placeholder="Enter token symbol"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tokenSupply" className="block text-gray-300 font-bold mb-2">
                      Initial Supply
                    </label>
                    <input
                      type="number"
                      id="tokenSupply"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      placeholder="Enter initial supply"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-md hover:from-cyan-600 hover:to-blue-600 transition-colors transform hover:scale-105"
                  >
                    Launch Token
                  </button>
                </form>
              </div>
            </div>
          </section>
     </div>
    )
  }
  
  export default LaunchToken
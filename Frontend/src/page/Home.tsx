import React from "react";
import { Rocket, Coins, Users } from "lucide-react";
import { RiGamepadLine } from "react-icons/ri";

const TokenPlay: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Header */}
   

      {/* Banner */}
      <div className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-800 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjkyNTI0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzZjNmNDYiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-pulse">
            Welcome to TokenPlay
          </h2>
          <p className="text-xl mb-8">Launch your in-game currency and NFTs with ease</p>
          <a
            href="#token-launch"
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-yellow-600 transition-all transform hover:scale-105 inline-block"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Hero Section */}
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
              Why Choose TokenPlay?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<RiGamepadLine className="w-12 h-12 text-cyan-400" />}
                title="For Gamers"
                description="Enhance your gaming experience with custom tokens and NFTs"
              />
              <FeatureCard
                icon={<Rocket className="w-12 h-12 text-pink-400" />}
                title="For Developers"
                description="Easily integrate blockchain technology into your games"
              />
              <FeatureCard
                icon={<Coins className="w-12 h-12 text-yellow-400" />}
                title="For Collectors"
                description="Discover and own unique in-game assets"
              />
              <FeatureCard
                icon={<Users className="w-12 h-12 text-green-400" />}
                title="For Players"
                description="Trade and use tokens across multiple games"
              />
            </div>
          </div>
        </section>
</main>

    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
    icon,
    title,
    description,
  }) => {
    return (
      <div className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg border border-gray-700 text-center transform transition-all hover:scale-105">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-cyan-300">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    );
}

export default TokenPlay;

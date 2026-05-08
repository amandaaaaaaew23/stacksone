import React, { useState, useEffect } from 'react';
import { tupleCV, standardPrincipalCV, stringAsciiCV, cvToHex, hexToCV, cvToValue } from '@stacks/transactions';
import { StacksMainnet } from '@stacks/network';
import { userSession } from '../supabaseClient'; 

const CONTRACT_ADDRESS = 'SP3GHKMV4GSYNA8WGBX83DACG80K1RRVQZAZMB9J3'; 
const CONTRACT_NAME = 'genesis-core-v10';

const BadgeCard = ({ id, title, subtitle, reqText, isLocked, isMinted, onMint, icon, isLoading }) => {
  return (
    <div className={`relative group flex flex-col justify-between p-6 rounded-xl border bg-app-card transition-all duration-300 animate-slide-up hover:-translate-y-1 ${
      isLocked ? "border-app-border opacity-60" : isMinted ? "border-green-500/30" : "border-app-border hover:border-app-accent hover:shadow-lg hover:shadow-app-accent/5"
    }`}>
      
      <div>
        <div className="flex justify-between items-start mb-5">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg border ${
            isMinted ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-zinc-800 border-zinc-700 text-zinc-300"
          }`}>
            {isMinted ? "✓" : icon}
          </div>
          {isMinted && <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Owned</span>}
          {isLocked && <span className="bg-zinc-800 text-zinc-500 border border-zinc-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Locked</span>}
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-[11px] font-medium tracking-widest uppercase mb-4 text-app-accent">{subtitle}</p>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">{reqText}</p>
      </div>

      <button
        onClick={() => onMint(id)}
        disabled={isLocked || isMinted || isLoading}
        className={`w-full py-2.5 rounded-md text-sm font-medium transition-all ${
          isMinted 
            ? "bg-zinc-800/50 text-zinc-500 cursor-default" 
            : isLocked 
            ? "bg-zinc-800/50 text-zinc-600 cursor-not-allowed" 
            : "bg-white text-black hover:bg-zinc-200 active:scale-95"
        } ${isLoading && !isMinted ? "opacity-50 cursor-wait" : ""}`}
      >
        {isMinted ? "Badge Secured" : isLoading ? "Syncing..." : isLocked ? "Requirements Not Met" : "Mint Badge"}
      </button>
    </div>
  );
};

const Home = ({ userData, userXP, userLevel, handleMint }) => {
  const [loadingBadges, setLoadingBadges] = useState(false);
  const network = new StacksMainnet();

  const [badges, setBadges] = useState([
    { id: 'genesis', title: "Genesis Pioneer", subtitle: "Phase 1 Access", reqText: "Awarded to early protocol adopters. Requires Level 1.", icon: "✧", minLevel: 1, minXP: 0, isMinted: false },
    { id: 'node', title: "Node Operator", subtitle: "Consistency Tier", reqText: "Requires Level 2 and 500 XP. Validate your commitment via protocol synchronization.", icon: "⎈", minLevel: 2, minXP: 500, isMinted: false },
    { id: 'guardian', title: "Protocol Guardian", subtitle: "Elite Status", reqText: "Requires Level 5 and 2000 XP. The highest honor for users who have secured the genesis protocol.", icon: "⛨", minLevel: 5, minXP: 2000, isMinted: false }
  ]);

  useEffect(() => {
    if (userSession.isUserSignedIn() && userData) {
      syncBadgeStatusFromBlockchain();
    }
  }, [userData]);

  const syncBadgeStatusFromBlockchain = async () => {
    setLoadingBadges(true);
    const userAddress = userData.profile.stxAddress.mainnet;

    try {
      const updatedBadges = await Promise.all(
        badges.map(async (badge) => {
          try {
            const keyCV = tupleCV({
              'user': standardPrincipalCV(userAddress),
              'badge-name': stringAsciiCV(badge.id)
            });

            const url = `${network.coreApiUrl}/v2/map_entry/${CONTRACT_ADDRESS}/${CONTRACT_NAME}/wallet-has-badge`;
            const response = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(cvToHex(keyCV)), 
            });

            if (!response.ok) return { ...badge, isMinted: false };

            const data = await response.json();
            const resultCV = hexToCV(data.data);
            const val = cvToValue(resultCV); 

            const isCompleted = val !== null && (val === true || val.value === true);
            return { ...badge, isMinted: isCompleted };
          } catch (err) {
            return badge; 
          }
        })
      );
      setBadges(updatedBadges);
    } catch (error) {
      console.error("Error syncing badges:", error);
    } finally {
      setLoadingBadges(false);
    }
  };

  const onMintClick = async (badgeId) => {
    const txSucceeded = await handleMint(badgeId);
    if (txSucceeded !== false) {
      setBadges(prevBadges => prevBadges.map(b => b.id === badgeId ? { ...b, isMinted: true } : b));
      setTimeout(() => syncBadgeStatusFromBlockchain(), 10000);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in relative">
      {loadingBadges && (
        <div className="absolute -top-6 right-0 flex items-center text-xs text-app-muted animate-pulse-subtle">
          Syncing records...
        </div>
      )}

      {userData && (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 bg-app-card border border-app-border p-5 rounded-xl">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-1">Accumulated XP</p>
            <p className="text-3xl font-medium text-white tracking-tight">{userXP.toLocaleString()}</p>
          </div>
          <div className="flex-1 bg-app-card border border-app-border p-5 rounded-xl">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-1">Current Level</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-medium text-white tracking-tight">{userLevel}</p>
            </div>
          </div>
        </div>
      )}
      
      <div>
        <h2 className="text-xl font-semibold mb-4 text-white">Identity Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {badges.map((badge, index) => {
            const isLocked = !userData || userLevel < badge.minLevel || userXP < badge.minXP;
            return (
              <div key={badge.id} style={{ animationDelay: `${index * 100}ms` }}>
                <BadgeCard {...badge} isLocked={isLocked} isLoading={loadingBadges} onMint={onMintClick} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

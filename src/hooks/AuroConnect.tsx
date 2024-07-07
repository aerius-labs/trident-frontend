'use client';
import { useEffect, useState } from 'react';

function AuroConnect() {
  const [account, setAccount] = useState('');
  const [network, setNetwork] = useState('');

  useEffect(() => {
    if ((window as any).mina) {
      (window as any).mina.on('accountsChanged', handleNewAccounts);
      (window as any).mina.on('chainChanged', handleChainChange);
    }
  }, []);

  const handleChainChange = (newChain: any) => {
    setNetwork(newChain);
  };

  const handleNewAccounts = (newAccounts: any) => {
    if (Array.isArray(newAccounts) && newAccounts.length > 0) {
      setAccount(newAccounts[0]);
    }
  };

  const initAccount = async () => {
    if ((window as any).mina) {
      const data = await (window as any).mina
        .requestAccounts()
        .catch((err: any) => err);
      if (!data.message && Array.isArray(data) && data.length > 0) {
        setAccount(data[0]);
      }
    }
  };

  const connectAuroWallet = async () => {
    if (!(window as any).mina) {
      alert('No provider was found. Please install Auro Wallet.');
    } else {
      await initAccount();
    }
  };

  return (
    <div className='mr-6'>
      <button
        onClick={connectAuroWallet}
        className='border-custom-purple font-good-times rounded-3xl border p-2 text-xs text-gray-200'
      >
        {account
          ? account.slice(0, 6) + '...' + account.slice(-6)
          : 'CONNECT WALLET'}
      </button>
    </div>
  );
}

export default AuroConnect;

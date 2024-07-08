'use client';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

import { useAuth } from './useAuth';

function AuroConnect() {
  const { setIsAuthenticated, setAccount } = useAuth();
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
      setIsAuthenticated(true);
    }
  };

  const initAccount = async () => {
    if ((window as any).mina) {
      const data = await (window as any).mina
        .requestAccounts()
        .catch((err: any) => err);
      if (!data.message && Array.isArray(data) && data.length > 0) {
        setAccount(data[0]);
        setIsAuthenticated(true);
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
    <div>
      <Button
        onClick={connectAuroWallet}
        variant={'default'}
        className='text-lg font-bold tracking-wide'
      >
        Connect Wallet
      </Button>
    </div>
  );
}

export default AuroConnect;

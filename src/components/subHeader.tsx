'use client';
import Image from 'next/image';
import { useState } from 'react';

import { coins } from '@/lib/assetsData';

import { Separator } from './ui/separator';

const SubHeader = () => {
  const [selectedCoin, setSelectedCoin] = useState('BTC');
  const coin = coins[selectedCoin];

  const selectedCoinInfo = [
    {
      title: 'Mark Price',
      value: '$' + coin.markPrice,
      separator: true,
    },
    {
      title: 'Oracle Price',
      value: '$' + coin.oraclePrice,
      separator: false,
    },
    {
      title: '24h change',
      value: coin.dayChange + '%',
      separator: true,
      success: true,
    },
    {
      title: '24h volume',
      value: '$' + coin.dayVolume,
      separator: false,
    },
    {
      title: 'Open Interest',
      value: '$' + coin.openInterest,
      separator: false,
    },
    {
      title: 'Funding',
      value: coin.funding + '%',
      separator: true,
      success: true,
    },
    {
      title: 'Countdown',
      value: coin.countdown,
      separator: false,
    },
    {
      title: 'Borrowing Rate',
      value: coin.borrowingRate + '%',
      separator: false,
    },
  ];

  return (
    <div className='flex justify-center gap-3.5 text-white'>
      <div className='flex min-w-[310px] items-center gap-2.5'>
        <Image src={coin.image} alt='coin' width={30} height={30} />
        <span className='text-lg font-extrabold'>{coin.name}</span>
      </div>
      <Separator orientation='vertical' />
      {selectedCoinInfo.map((info) => {
        return (
          <div key={info.title} className='flex gap-3.5'>
            {info.separator ? (
              <Separator orientation='vertical' className='bg-accent' />
            ) : null}
            <div className='flex flex-col'>
              <p className='text-xs text-accent'>{info.title}</p>
              <p className={`text-sm ${info.success ? 'text-btnGreen' : ''}`}>
                {info.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubHeader;

export type CoinData = {
  image: string;
  name: string;
  markPrice: string;
  oraclePrice: string;
  dayChange: string;
  dayVolume: string;
  openInterest: string;
  funding: string;
  countdown: string;
  borrowingRate: string;
};

export const coins: Record<string, CoinData> = {
  BTC: {
    image: '/minaLogo.svg',
    name: 'MINA_USDT',
    markPrice: '60,391.00',
    oraclePrice: '57,472.65',
    dayChange: '0.01',
    dayVolume: '17,615.12',
    openInterest: '18,499.00',
    funding: '5.602',
    countdown: '40:38',
    borrowingRate: '0.56',
  },
  NTC: {
    image: '/minaLogo.svg',
    name: 'MINA_USDT',
    markPrice: '60,391.00',
    oraclePrice: '57,472.65',
    dayChange: '0.01',
    dayVolume: '17,615.12',
    openInterest: '18,499.00',
    funding: '5.602',
    countdown: '40:38',
    borrowingRate: '0.56',
  },
};

'use client';
import Image from 'next/image';

import BidAskSection from '@/components/bidAskSection';
import TradingViewWidget from '@/components/charts';
import Container from '@/components/container';
import PageContainer from '@/components/pageContainer';
import PlaceOrderSection from '@/components/placeOrderSection';
import SubHeader from '@/components/subHeader';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { WalletStats } from '@/components/walletStats';
import AuroConnect from '@/hooks/AuroConnect';
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const { isAuthenticated, account } = useAuth();
  return (
    <PageContainer>
      <Container>
        <div className='col-span-12 flex items-center gap-5'>
          <Image src={'/logo.svg'} width={130} height={35} alt='Trident Logo' />
          <Separator orientation='vertical' className='bg-accent' />
          <p className={`font-semibold text-white`}>Trade</p>
          <p className={`font-semibold text-accent`}>Pool</p>
          <div className='ml-auto'>
            {isAuthenticated ? (
              <div className='flex h-16 flex-row items-center gap-7 text-white'>
                <div>
                  <p className='text-accent'>Points</p>
                  <p>0</p>
                </div>
                <Separator
                  orientation='vertical'
                  className='h-full bg-accent'
                />
                <div>
                  <p className='text-accent'>Available Amount</p>
                  <p>$0.00</p>
                </div>
                <Separator
                  orientation='vertical'
                  className='h-full bg-accent'
                />
                <div>
                  <p className='text-accent'>Linked Wallet</p>
                  <p>{account.slice(0, 10) + '...' + account.slice(-5)}</p>
                </div>
                <Button variant={'default'}>Deposit</Button>
                <Button variant={'secondary'}>
                  Trident{' '}
                  <Image
                    src={'/externalIcon.svg'}
                    width={14}
                    height={23}
                    alt='External Link'
                  />
                </Button>
              </div>
            ) : (
              <AuroConnect />
            )}
          </div>
        </div>
      </Container>
      <main className='flex flex-col gap-4'>
        <Container className='col-span-12 flex h-[74px] items-center rounded-2xl bg-secondary px-4'>
          <SubHeader />
        </Container>
        <Container>
          <div className='col-span-3 flex min-h-[770px] flex-col items-center justify-center rounded-2xl bg-secondary'>
            <PlaceOrderSection />
          </div>
          <div className='col-span-3 flex h-auto min-h-[770px] flex-col items-center justify-center rounded-2xl bg-secondary'>
            <BidAskSection />
          </div>
          <div className='col-span-6 flex max-h-screen min-h-[770px] flex-col rounded-2xl bg-secondary'>
            <div className='min-h-[404px]'>
              <TradingViewWidget />
            </div>
            <WalletStats />
          </div>
        </Container>
      </main>
    </PageContainer>
  );
}

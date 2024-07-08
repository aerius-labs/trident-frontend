import Image from 'next/image';

import TradingViewWidget from '@/components/charts';
import Container from '@/components/container';
import PageContainer from '@/components/pageContainer';
import PlaceOrderSection from '@/components/placeOrderSection';
import SubHeader from '@/components/subHeader';
import { Separator } from '@/components/ui/separator';
import { WalletStats } from '@/components/walletStats';
import AuroConnect from '@/hooks/AuroConnect';
export default function Home() {
  return (
    <PageContainer>
      <Container>
        <div className='col-span-12 flex items-center gap-7'>
          <Image src={'/logo.svg'} width={130} height={35} alt='Trident Logo' />
          <Separator orientation='vertical' />
          <p className={`font-semibold text-white`}>Trade</p>
          <p className={`font-semibold text-accent`}>Pool</p>
        </div>
        <AuroConnect />
      </Container>
      <main className='flex flex-col gap-4'>
        <Container className='col-span-12 flex h-[74px] items-center rounded-2xl bg-secondary px-4'>
          <SubHeader />
        </Container>
        <Container>
          <div className='col-span-3 flex min-h-[770px] flex-col items-center justify-center rounded-2xl bg-secondary'>
            <PlaceOrderSection />
          </div>
          <div className='col-span-3 min-h-[770px] rounded-2xl bg-secondary'></div>
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

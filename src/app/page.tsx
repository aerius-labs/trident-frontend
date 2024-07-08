import TradingViewWidget from '@/components/charts';
import Container from '@/components/container';
import PageContainer from '@/components/pageContainer';
import AuroConnect from '@/hooks/AuroConnect';

import PlaceOrderSection from '@/components/placeOrderSection';
export default function Home() {
  return (
    <PageContainer>
      <Container>
        <AuroConnect />
      </Container>
      <main className='flex flex-col gap-4'>
        <Container className='col-span-12 h-[74px] rounded-2xl bg-secondary'></Container>
        <Container>
          <div className='col-span-3 flex h-auto min-h-[770px] flex-col items-center justify-center rounded-2xl bg-secondary'>
            <PlaceOrderSection />
          </div>
          <div className='col-span-3 h-auto min-h-[770px] rounded-2xl bg-secondary'></div>
          <div className='col-span-6 flex h-auto min-h-[770px] flex-col rounded-2xl bg-secondary'>
            <div className='h-[404px]'>
              <TradingViewWidget />
            </div>
            <div></div>
          </div>
        </Container>
      </main>
    </PageContainer>
  );
}

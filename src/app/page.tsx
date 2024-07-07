import Container from '@/components/container';
import PageContainer from '@/components/pageContainer';

export default function Home() {
  return (
    <PageContainer>
      <Container>
        <div className='col-span-12 h-12 bg-black'></div>
      </Container>
      <main className='flex flex-col gap-4'>
        <Container className='col-span-12 h-[74px] rounded-2xl bg-secondary'></Container>
        <Container>
          <div className='col-span-3 h-auto min-h-[770px] rounded-2xl bg-secondary'></div>
          <div className='col-span-3 h-auto min-h-[770px] rounded-2xl bg-secondary'></div>
          <div className='col-span-6 h-auto min-h-[770px] rounded-2xl bg-secondary'></div>
        </Container>
      </main>
    </PageContainer>
  );
}

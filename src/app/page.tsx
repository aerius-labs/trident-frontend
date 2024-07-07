import Container from '@/components/container';

export default function Home() {
  return (
    <div className='flex flex-col gap-4 bg-primary pb-10 pt-4'>
      <Container>
        <div className='h-12 bg-black'></div>
      </Container>
      <main className='flex flex-col gap-4'>
        <Container>
          <div className='h-[74px] rounded-2xl bg-secondary'></div>
        </Container>
        <Container>
          <div>
            <div className='col-span-3 h-auto min-h-[770px] rounded-2xl bg-secondary'></div>
            <div className='col-span-3 h-auto min-h-[770px] rounded-2xl bg-secondary'></div>
            <div className='col-span-6 h-auto min-h-[770px] rounded-2xl bg-secondary'></div>
          </div>
        </Container>
      </main>
    </div>
  );
}

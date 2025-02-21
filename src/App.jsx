
import './App.css'

function App() {
  const hover = 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102'
  const bgImg = 'bg-[url(./assets/bg.svg)] bg-cover bg-center'
  return (
    <>
      <header>
        <div className={`w-full h-64 ${bgImg}`}>
        </div>
      </header>
      <main>
        <section className='flex flex-col gap-0.5 mt-4'>
          <h1 className='font-medium antialiased text-8xl text-center'>Rodolfo Rizzo</h1>
          <div className='flex items-center gap-4'>
            <div className='h-1 bg-black w-full'></div>
            <h2 className='font-normal antialiased text-2xl text-center'>Photographer</h2>
            <div className='h-1 bg-black w-full'></div>
          </div>
        </section>
        <section className='grid grid-cols-3 grid-rows-9 gap-4 m-8'>
          <div className={`row-span-2 w-full h-full ${bgImg} ${hover} rounded-md`}>
          </div>
          <div className={`w-full h-64 ${bgImg} ${hover} rounded-md`}>
          </div>
          <div className={`w-full h-64 ${bgImg} ${hover} rounded-md`}>
          </div>
          <div className={`row-span-2 w-full h-full ${bgImg} ${hover} rounded-md`}>
          </div>
          <div className={`row-span-2 w-full h-full ${bgImg} ${hover} rounded-md`}>
          </div>
          <div className={`w-full h-64 ${bgImg} ${hover} rounded-md`}>
          </div>
        </section>
        
      </main>
    </>
  )
}

export default App

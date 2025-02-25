
import './App.css'
import { Envelope, Phone, InstagramLogo} from '@phosphor-icons/react'
import Principal from './components/Galerias/Principal.jsx'
import Social from './components/Galerias/Social.jsx'
import Empresas from './components/Galerias/Empresas.jsx'
import TitleSection from './components/TitleSection/TitleSection.jsx'
import Festas from './components/Galerias/Festas.jsx'

function App() {
  const hover = 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102'
  return (
    <>
      <main>
        <section className='flex flex-col gap-0.5 mt-4'>
          <h1 className='font-medium antialiased text-8xl text-center'>Rodolfo Rizzo</h1>
          <div className='flex items-center gap-4'>
            <div className='h-1 bg-black dark:bg-white w-full'></div>
            <h2 className='font-normal antialiased text-4xl text-center'>Photographer</h2>
            <div className='h-1 bg-black dark:bg-white w-full'></div>
          </div>
          <nav className='flex justify-center gap-8 mt-4 pb-4 font-normal antialiased text-2xl text-center border-b-4 border-black dark:border-white'>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`} href='#social'>Casamento</a>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`} href='#empresas'>Empresarial</a>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`} href='#festas'>Festas</a>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`}>Sobre</a>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`} href='#contato'>Contato</a>
          </nav>
        </section>
        <Principal id='galeria1' />

        <TitleSection title='Fotografia de Casamentos e Noivados'/>
        <Social id='social' />

        <TitleSection title='Fotografia de Eventos Empresariais '/>
        <Empresas id='empresas' />

        <TitleSection title='Fotografia de Festas e Aniversários'/>
        <Festas id='festas' />
      </main>
      <footer id='contato'>
        <TitleSection title='Contato'/>
        <div className='grid grid-cols-3 gap-4 m-8'>
          <div className={`w-full h-full rounded-md border-2 border-solid p-4 ${hover}`}>
            <div className='flex justify-between items-center'>
              <h3 className='font-normal antialiased text-3xl '>Email</h3>
              <Envelope size={48}/>
            </div>
            <p className='font-normal antialiased text-1xl'>rodolfo@email.com</p>
          </div>

          <div className={`w-full h-full rounded-md border-2 border-solid p-4 ${hover}`}>
            <div className='flex justify-between items-center'>
              <h3 className='font-normal antialiased text-3xl '>Phone</h3>
              <Phone size={48}/>
            </div>
            <p className='font-normal antialiased text-1xl'>rodolfo@email.com</p>
          </div>

          <div className={`w-full h-full rounded-md border-2 border-solid p-4 ${hover}`}>
            <div className='flex justify-between items-center'>
              <h3 className='font-normal antialiased text-3xl '>Instagram</h3>
              <InstagramLogo size={48}/>
            </div>
            <p className='font-normal antialiased text-1xl'>rodolfo@email.com</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

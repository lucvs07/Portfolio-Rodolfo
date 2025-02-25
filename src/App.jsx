
import './App.css'
import { Envelope, WhatsappLogo} from '@phosphor-icons/react'
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
          <TitleSection title='Photographer'/>
          <nav className='flex justify-center gap-8 mt-4 pb-4 font-normal antialiased text-2xl text-center border-b-2 border-black dark:border-white'>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`} href='#social'>Casamento</a>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`} href='#empresas'>Empresarial</a>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`} href='#festas'>Festas</a>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`} href='#sobre'>Sobre</a>
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

        <TitleSection title='Sobre Mim'/>
        <section id='sobre' className='flex flex-col gap-4 my-4 mx-56' >
          <p className='font-normal antialiased text-2xl text-justify '>
          Registrando momentos desde 2011, atuo com fotografia empresarial e cobertura fotográfica de eventos sociais, incluindo festas, casamentos intimistas e noivados
          </p>
          <p className='font-normal antialiased text-2xl text-justify '>
          Nesses quase 15 anos de profissão tenho me dedicado a capturar detalhes e registrar momentos únicos para que cada cliente tenha uma recordação especial dos seus eventos.
          </p>
          <p className='font-normal antialiased text-2xl text-justify '>
          Sou fotógrafo em São Paulo e atendo regiões próximas, garantindo fotos de alta qualidade que valorizam cada momento com naturalidade e profissionalismo.
          </p>

        </section>
      </main>
      <footer id='contato'>
        <TitleSection title='Contato'/>
        <div className='grid grid-cols-2 gap-4 m-8'>
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
              <WhatsappLogo size={48}/>
            </div>
            <p className='font-normal antialiased text-1xl'>rodolfo@email.com</p>
          </div>

        </div>
      </footer>
    </>
  )
}

export default App

import './App.css'

import Principal from './components/Galerias/Principal.jsx'
import Social from './components/Galerias/Social.jsx'
import Empresas from './components/Galerias/Empresas.jsx'
import TitleSection from './components/TitleSection/TitleSection.jsx'
import Festas from './components/Galerias/Festas.jsx'
import Footer from './components/Footer/Footer.jsx'

import {useState} from 'react'


function App() {
  const [result, SetResult] = useState('');

  const apiKey= import.meta.env.VITE_API_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    SetResult('Enviando...')
    const formData = new FormData(event.target);
    formData.append('access_key', apiKey);
    formData.append('subject', 'Contato do Site');

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success){
      SetResult('Formulário enviado com sucesso!')
      console.log(FormData);
      event.target.reset();
    } else {
      console.log("Error", data);
      SetResult(data.message);
    }
  }



  const hover = 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102'

  return (
    <>
      <main>
        <section className='flex flex-col gap-0.5 mt-4'>
          <h1 className='font-medium antialiased text-8xl text-center' >Rodolfo Rizzo</h1>
          <TitleSection title='Photographer' idName='home'/>
          <nav className='flex justify-center gap-8 mt-4 pb-4 font-normal antialiased text-2xl text-center border-b-2 border-black dark:border-white'>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`} href='#social'>Casamento</a>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`} href='#empresas'>Empresarial</a>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`} href='#festas'>Festas</a>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`} href='#sobre'>Sobre</a>
            <a className={`${hover} hover:text-gray-300 cursor-pointer`} href='#contato'>Contato</a>
          </nav>
        </section>
        <Principal />

        <TitleSection title='Fotografia de Casamentos e Noivados' idName='social'/>
        <Social />

        <TitleSection title='Fotografia de Eventos Empresariais ' idName='empresas'/>
        <Empresas/>

        <TitleSection title='Fotografia de Festas e Aniversários' idName='festas'/>
        <Festas />

        <TitleSection title='Sobre Mim' idName='sobre'/>
        <section className='grid grid-cols-2 grid-rows-3 gap-12 my-16 mx-56 ' >
        
          <p className='font-normal antialiased text-2xl text-justify w-full'>
          Registrando momentos desde 2011, atuo com fotografia empresarial e cobertura fotográfica de eventos sociais, incluindo festas, casamentos intimistas e noivados
          </p>
          <div className='w-full h-full bg-[url(/images/rodolfo.jpg)] bg-cover bg-center row-span-3 rounded-md'></div>

          <p className='font-normal antialiased text-2xl text-justify w-full'>
          Nesses quase 15 anos de profissão tenho me dedicado a capturar detalhes e registrar momentos únicos para que cada cliente tenha uma recordação especial dos seus eventos.
          </p>
          
          <p className='font-normal antialiased text-2xl text-justify w-full'>
          Sou fotógrafo em São Paulo e atendo regiões próximas, garantindo fotos de alta qualidade que valorizam cada momento com naturalidade e profissionalismo.
          </p>
          

        </section>

        <TitleSection title='Contato' idName='contato'/>
        <section className='flex flex-col gap-4 my-16 mx-56 items-center'>
          <h3 className='font-normal antialiased text-3xl'>Gostou do meu trabalho? Solicite um orçamento</h3>
          <div>
            <form onSubmit={onSubmit} className='grid grid-cols-2 gap-8 border-1 p-4 rounded-md'>
              <input type='text' name='Nome' placeholder='Nome' className='w-96 h-12 p-4 border-1 border-solid border-black dark:border-white rounded-md'/>
              <input type='tel' name='Telefone' placeholder='Telefone' className='w-96 h-12 p-4 border-1 border-solid border-black dark:border-white rounded-md'/>
              <input type='email' name='Email' placeholder='Email' className='w-full h-12 p-4 border-1 border-solid border-black dark:border-white col-span-2 rounded-md'/>
              <input type='text' name= 'Evento' placeholder='Tipo do Evento' className='w-full h-12 p-4 border-1 border-solid border-black dark:border-white col-span-2 rounded-md'/>
              <textarea name='Informações' placeholder='Informações Complementares  (escreva sobre a data do evento, local, quantidade de convidados, entre outros detalhes)'
              className='w-full h-32 p-4 border-1 border-solid border-black dark:border-white col-span-2 rounded-md'>
              </textarea>
              <button type='submit' className={`w-full  py-4 border-1 border-solid border-black dark:border-white rounded-md 
              col-span-2
              text-center font-normal text-2xl
              cursor-pointer ${hover}`}>Enviar</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App

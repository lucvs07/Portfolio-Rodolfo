import { Envelope, WhatsappLogo, LinkedinLogo} from '@phosphor-icons/react'
export default function Footer(){
// Número do Telefone
  const phone = '5511971113726';
  const redirectToWhatsapp = () => {
    const whatsappURL = `https://wa.me/${phone}`;
    window.open(whatsappURL, '_blank');
  };

  const email = 'rodolfo@macaverdefilmes.com';
  const redirectToEmail = () => {
    const emailURL = `mailto:${email}`;
    window.location.href = emailURL;
  };

  const linkedin = 'https://www.linkedin.com/in/fotografo-rodolfo-rizzo/';
  const redirectToLinkedin = () => {
    window.open(linkedin, '_blank');
  };

  const hover = 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102'
  const hoverText = 'transition delay-150 duration-300 ease-in-out hover:underline hover:decoration-solid hover:text-gray-300 cursor-pointer'

    return (
        <footer id='contato' className='border-t-1 border-solid border-black dark:border-white'>
          <div className={`w-full h-full p-4  flex gap-8 items-start justify-center
            sm:my-8 
            xl:my-12
            max-sm:flex-col`}>
          <div className='flex flex-col gap-4 items-start'>
                <nav className='flex flex-col justify-center gap-4  font-normal antialiased text-1xl '>
                    <a className={`${hoverText} hover:text-gray-300 cursor-pointer`} href='#home'>Home</a>
                    <a className={`${hoverText} hover:text-gray-300 cursor-pointer`} href='#social'>Casamento</a>
                    <a className={`${hoverText} hover:text-gray-300 cursor-pointer`} href='#empresas'>Empresarial</a>
                    <a className={`${hoverText} hover:text-gray-300 cursor-pointer`} href='#festas'>Festas</a>
                    <a className={`${hoverText} hover:text-gray-300 cursor-pointer`} href='#galeria'>Galeria</a>
                </nav>
            </div>
            <div className='flex flex-col gap-4 items-start'>
                <div className='flex items-center gap-4'>
                    <Envelope weight='fill' size={40} onClick={redirectToEmail}
                    className={`cursor-pointer ${hover}`}/>
                    <p className={`font-normal antialiased text-1xl ${hoverText}`} onClick={redirectToEmail}>rodolfo@macaverdefilmes.com</p>
                </div>
    
                <div className='flex items-center gap-4'>
                    <WhatsappLogo weight='fill' size={40} onClick={redirectToWhatsapp}
                    className={`cursor-pointer ${hover}`}/>
                    <p className={`font-normal antialiased text-1xl ${hoverText}`} onClick={redirectToWhatsapp}>11. 97111-3726</p>
                </div>

                <div className='flex items-center gap-4'>
                    <LinkedinLogo weight='fill' size={40} onClick={redirectToLinkedin}
                    className={`cursor-pointer ${hover}`}/>
                    <p className={`font-normal antialiased text-1xl ${hoverText}`} onClick={redirectToLinkedin}>Rodolfo Rizzo</p>
                </div>
            </div>
            
                
        </div>
        </footer>
    )
}
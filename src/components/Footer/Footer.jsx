import { Envelope, WhatsappLogo} from '@phosphor-icons/react'
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

  const hover = 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102'

    return (
        <footer id='contato' className='border-t-1 border-solid border-black dark:border-white'>
        <div className='grid grid-cols-2 gap-4 m-8'>
          <div className={`w-full h-full rounded-md border-2 border-solid p-4 ${hover}`}>
            <div className='flex justify-between items-center'>
              <h3 className='font-normal antialiased text-3xl '>Email</h3>
              <Envelope weight='light' size={48} onClick={redirectToEmail}
              className={`cursor-pointer ${hover}`}/>
            </div>
            <p className='font-normal antialiased text-1xl'>rodolfo@macaverdefilmes.com</p>
          </div>

          <div className={`w-full h-full rounded-md border-2 border-solid p-4 ${hover}`}>
            <div className='flex justify-between items-center'>
              <h3 className='font-normal antialiased text-3xl '>Phone</h3>
              <WhatsappLogo weight='light' size={48} onClick={redirectToWhatsapp}
              className={`cursor-pointer ${hover}`}/>
            </div>
            <p className='font-normal antialiased text-1xl'>11. 97111-3726</p>
          </div>
        </div>
      </footer>
    )
}
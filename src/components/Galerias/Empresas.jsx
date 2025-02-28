import '../../App.css'
import images from '../../assets/data/images.json'

export default function Empresas(){
    const hover = 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102'
    const bgImg = 'bg-cover bg-center'
    const img = images.galeria.empresas
    
    return (
        <section className='grid grid-cols-3 grid-rows-3 gap-8 
        max-sm:grid-cols-1
        max-sm:grid-rows-6
        max-sm:my-16
        max-sm:mx-8
        sm:my-8 sm:mx-8
        xl:my-16 xl:mx-56'>
          <div className={
            `w-full h-full
            max-sm:row-span-1
            ${bgImg} 
            ${hover}
            rounded-md`}
            style={{
              backgroundImage: `url(${img[0]})`,
            }}>
          </div>

          <div className={
            `w-full h-full
            row-span-2
            col-span-2
            max-sm:row-span-1
            max-sm:col-span-1
            ${bgImg}
            ${hover} 
            rounded-md`}
            style={{
              backgroundImage: `url(${img[1]})`,
            }}>
          </div>

          <div className={
            `w-full h-full
            ${bgImg} 
            ${hover}
            rounded-md`}
            style={{
              backgroundImage: `url(${img[2]})`,
            }}
            >
          </div>
          <div className={
            `w-full h-full
            ${bgImg} 
            ${hover}
            rounded-md`}
            style={{
              backgroundImage: `url(${img[3]})`,
            }}
            >
          </div>
          <div className={
            `w-full h-full
            ${bgImg} 
            ${hover}
            rounded-md`}
            style={{
              backgroundImage: `url(${img[4]})`,
            }}
            >
          </div>
          <div className={
            `w-full h-64
            ${bgImg} 
            ${hover}
            rounded-md`}
            style={{
              backgroundImage: `url(${img[5]})`,
            }}
            >
          </div>
        </section>
    );
}
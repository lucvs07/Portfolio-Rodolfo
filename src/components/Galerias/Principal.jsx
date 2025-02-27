import '../../App.css'
import images from '../../assets/data/images.json'

export default function Principal(){
    const hover = 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102'
    const bgImg = 'bg-cover bg-center'
    const img = images.galeria.principais
    
    return (
        <section className='grid grid-cols-3 grid-rows-6 gap-8 
        max-sm:grid-cols-1
        max-sm:grid-rows-30
        max-sm:my-16
        max-sm:mx-8
        max-xl:grid-rows-8
        sm:my-8 sm:mx-8
        xl:my-16 xl:mx-56'>
          <div className={
            `w-full h-full
            row-span-2
            max-xl:col-span-3
            max-sm:col-span-1
            max-sm:row-span-3
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
            max-xl:col-span-3
            max-sm:col-span-1
            max-sm:row-span-3
            ${bgImg}
            ${hover} 
            rounded-md`}
            style={{
              backgroundImage: `url(${img[1]})`,
            }}>
          </div>

          <div className={
            `w-full h-88
            max-xl:h-156
            max-lg:h-120
            max-xl:col-span-3
            max-sm:col-span-1
            max-sm:row-span-2
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
            row-span-2
            max-xl:row-span-1
            max-xl:col-span-3
            max-sm:col-span-1
            max-sm:row-span-3
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
            row-span-2
            max-xl:row-span-1
            max-sm:col-span-1
            max-sm:row-span-6
            ${bgImg} 
            ${hover}
            rounded-md`}
            style={{
              backgroundImage: `url(${img[4]})`,
            }}
            >
          </div>
          <div className={
            `w-full h-full
            row-span-2
            max-xl:row-span-1
            max-sm:col-span-1
            max-sm:row-span-5
            ${bgImg} 
            ${hover}
            rounded-md`}
            style={{
              backgroundImage: `url(${img[5]})`,
            }}
            >
          </div>
          <div className={
            `w-full h-full
            row-span-3
            max-xl:row-span-1
            max-sm:col-span-1
            max-sm:row-span-6
            ${bgImg} 
            ${hover}
            rounded-md`}
            style={{
              backgroundImage: `url(${img[6]})`,
            }}
            >
          </div>
          <div className={
            `w-full h-full
            col-span-2
            row-span-2
            max-xl:row-span-1
            max-xl:col-span-3
            max-sm:row-span-5
            max-sm:col-span-1
            ${bgImg} 
            ${hover}
            rounded-md`}
            style={{
              backgroundImage: `url(${img[7]})`,
            }}
            >
          </div>
        </section>
    );
}
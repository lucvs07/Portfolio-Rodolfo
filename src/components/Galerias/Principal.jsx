import '../../App.css'
import images from '../../assets/data/images.json'

export default function Principal() {
  const hover = 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102'
  const img = images.galeria.principais
  const bgImg = 'bg-cover bg-center'
  
  return (
    <section className='grid md:grid-cols-3 gap-4 my-8 mx-8 xl:my-16 xl:mx-26
    max-sm:auto-rows-[250px]
    max-md:auto-rows-[200px]
    max-2xl:auto-rows-[300px]
    2xl:auto-rows-[550px]'>
      {img.map((img, index) => (
        <div
          key={index}
          className={`${hover} ${bgImg} rounded-md h-full w-full
            ${index === 4 || index === 5 || index === 6 ? 'row-span-2' : ''}
            ${index === 7 ? 'md:col-span-2' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
    </section>
  )
}
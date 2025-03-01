import '../../App.css'
import images from '../../assets/data/images.json'

export default function Social(){
    const hover = 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102'
    const img = images.galeria.sociais
    
    return (
      <section className='masonry my-8 mx-8 xl:my-16 xl:mx-56'>
      {img.map((src, index) => (
        <div key={index} className={`masonry-item ${hover}`}>
          <img src={src} alt={`Image ${index + 1}`} className='w-full h-full object-cover rounded-md' />
        </div>
      ))}
    </section>
    );
}
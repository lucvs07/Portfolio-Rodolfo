import '../../App.css'

export default function TitleSection({title, idName}) {
    return(
        <div className='flex items-center gap-4' id={idName}>
          <div className='h-0.5 bg-black dark:bg-white w-full'></div>
          <h2 className='font-normal antialiased text-4xl text-center sm:text-nowrap'>{title}</h2>
          <div className='h-0.5 bg-black dark:bg-white w-full'></div>
        </div>
    )
}
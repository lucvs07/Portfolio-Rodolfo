import '../../App.css'

export default function TitleSection({title}) {
    return(
        <div className='flex items-center gap-4'>
          <div className='h-1 bg-black dark:bg-white w-full'></div>
          <h2 className='font-normal antialiased text-4xl text-center'>{title}</h2>
          <div className='h-1 bg-black dark:bg-white w-full'></div>
        </div>
    )
}
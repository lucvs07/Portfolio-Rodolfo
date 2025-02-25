export default function Header() {
    const bgImg = 'bg-[url(./assets/bg.svg)] bg-cover bg-center'
    return(
        <header>
            <div className={`w-full h-64 ${bgImg}`}>
            </div>
        </header>
    )
}
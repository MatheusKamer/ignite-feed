import IgnateLogo from '../assets/Ignite simbol.svg'

export function Header() {
  return (
    <header className='bg-gray-800 text-white flex justify-center p-5 gap-4'>
      <img src={IgnateLogo} alt="Logotipo do ignite" className='h-8'/>
      <p>Ignite Feed</p>
    </header>
  )
}

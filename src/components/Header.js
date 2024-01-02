import logo from '../assets/logo.png'

export const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img 
      className='w-44' 
      src={logo} />
    </div>
  )
}

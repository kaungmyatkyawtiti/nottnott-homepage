import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="sticky w-full backdrop-blur-md z-50 bg-white/20 dark:bg-background/60 top-0">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-4 py-2">
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}

export default Header; 

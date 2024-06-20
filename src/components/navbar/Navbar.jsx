
import { Link } from 'react-router-dom';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '../theme/mode-toggle';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed top-0 left-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-1 border-gray-200 dark:border-white/20'
    >
      <div className='container flex h-16 items-center justify-between px-4 md:px-6'>
        <Link to='/' className='flex items-center gap-2 text-lg font-semibold'>
          <img src={logo} className='h-5 sm:h-6 w-auto dark:invert' alt='logo' />
          <p className='sm:text-[18px] text-[15px]'>FnPersona</p>
        </Link>
        <nav className='hidden gap-6 text-sm font-medium md:flex items-center'>
          <Link to='/' className='hover:underline hover:underline-offset-4 '>
            Home
          </Link>
          <Link
            to='/about'
            className='hover:underline hover:underline-offset-4'
          >
            About
          </Link>
          <Link
            to='/services'
            className='hover:underline hover:underline-offset-4'
          >
            Services
          </Link>
          <ModeToggle />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className='md:hidden'>
              <MenuIcon className='h-6 w-6 dark:text-white' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side='right'
            className='w-full max-w-xs bg-white p-6 dark:text-white'
          >
            <div className='flex flex-col gap-6 text-sm font-medium dark:text-white'>
              <Link to='/' className='hover:underline hover:underline-offset-4'>
                Home
              </Link>
              <Link
                to='/about'
                className='hover:underline hover:underline-offset-4'
              >
                About
              </Link>
              <Link
                to='/services'
                className='hover:underline hover:underline-offset-4'
              >
                Services
              </Link>
              <Link
                to='/contact'
                className='hover:underline hover:underline-offset-4'
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

const MenuIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
};

export default Navbar;

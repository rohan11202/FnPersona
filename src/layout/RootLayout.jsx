import Navbar from '@/components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
export default function RootLayout() {
  return (
    <div className='dark:text-white'>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </div>
  );
}

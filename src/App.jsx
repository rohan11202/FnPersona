import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ThemeProvider } from './components/theme/theme-provider';
import Home from './routes/Home';
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='dark:bg-black'>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
};
export default App;

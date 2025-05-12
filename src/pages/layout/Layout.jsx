import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className="min-h-[70vh] flex-1 flex justify-center items-center p-4">
      <Outlet />
    </main>
  );
};

export default Layout;


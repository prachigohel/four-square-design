import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingAction from '../ui/FloatingAction';
import CustomCursor from '../ui/CustomCursor';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingAction />
    </div>
  );
};

export default Layout;

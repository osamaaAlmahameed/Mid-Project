import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#09091f] text-white border border-blue-600 text-center rounded  py-6 ">
      <p className="mb-1">&copy; {new Date().getFullYear()} All rights reserved</p>
      <p><span className="text-indigo-400 font-semibold">Zestory</span> | Web Store</p>
    </footer>
  );
};

export default Footer;

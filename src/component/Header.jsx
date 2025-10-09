 import React from 'react';
import { User } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#002366] px-6 py-4 shadow">
      <div className='flex items-center '>
      <img src="./botlogo.png" alt="logo" className='h-12' />
      <h1 className="text-xl font-semibold text-[#f2f2f2] items-start">ContractIQ Assistant</h1></div>
      <div className="flex items-center gap-3">
        {/* <button className="bg-[#c08081] text-white px-4 py-2 rounded hover:bg-[#c08081]">Database</button> */}
        <div className="w-8 h-8 rounded-full bg-[#f2f2f2] text-white flex items-center justify-center">
          <User color='black'/>
        </div>
      </div>
    </header>
  );
}

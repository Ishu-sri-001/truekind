import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ isScrolled = false }) => {

  const navLinks= ["SHOP", "PHILOSOPHY", "GALLARY","JOURNAL"];

  return (
    <header>
      <div className={`fixed z-50 w-full overflow-x-hidden overflow-y-hidden top-0 flex items-center justify-between h-16 px-5  ${
        isScrolled ? 'bg-white' : ''
      }`}>
        <div className='w-17 h-17 flex items-center'>
            <Image src='/assets/logo.svg' height={800} width={800} alt='logo'/>
        </div>
        <div className={`flex items-center justify-around space-x-16 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}>
          
          {navLinks.map((links) => (
              <Link key={links} className='font-heading text-[1.5vh] link' href='./'>{links} </Link>
          ))}

        </div>
        <div className='pr-5'>
          <div className={`w-fit rounded-full  flex items-center px-5 py-3 ${isScrolled ? 'bg-neutral-800 text-white' : 'bg-white text-black'}`}>
            <button className={`border cursor-pointer border-r-1 border-t-0 border-l-0 border-b-0 pr-4 ${isScrolled ? 'border-neutral-300' : 'border-neutral-700'}`} type='icon'>
              
                  <Image src={`${isScrolled ? '/assets/svg/white-cart.svg' : '/assets/cart.svg'}`} width={14} height={14} alt='cart-icon'/>
          
              
              </button>

              <button className='pl-4 cursor-pointer'>
                    <Image src={`${isScrolled ? '/assets/white-user.svg' : '/assets/user.svg'}`} width={14} height={14} alt='cart-icon'/>
              </button>
              </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
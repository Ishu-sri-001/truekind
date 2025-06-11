import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ isScrolled = false }) => {

  const navLinks= ["SHOP", "PHILOSOPHY", "GALLERY","JOURNAL"];

  return (
    <header>
      <div className={`fixed z-50 w-full overflow-x-hidden overflow-y-hidden top-0 flex items-center justify-between h-[10vh] px-[4vw]  ${
        isScrolled ? 'bg-white' : ''
      }`}>
        <div className='w-[7.5vw] h-auto flex items-center'>
            <Image src='/assets/logo.svg' height={800} width={800} alt='logo' className='w-full h-full object-contain'/>
        </div>
        <div className={`flex items-center justify-around space-x-8 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}>
          
          {navLinks.map((links) => (
              <Link key={links} className='font-heading font-medium text-[0.7vw] link' href='./'>{links} </Link>
          ))}

        </div>
        <div className='pr-5'>
          <div className={`w-fit rounded-full  flex items-center px-5 py-3 ${isScrolled ? 'bg-neutral-800 text-white' : 'bg-white text-black'}`}>
            <button className={`border cursor-pointer border-r-1 border-t-0 border-l-0 border-b-0 pr-4 ${isScrolled ? 'border-neutral-300' : 'border-neutral-700'}`} type='icon'>

                <div className='w-[2vw] h-[1.5vw]'>

                  <Image src={`${isScrolled ? '/assets/svg/white-cart.svg' : '/assets/cart.svg'}`} width={500} height={500} alt='cart-icon' className='w-full h-full object-fill'/>
                </div>
          
              
              </button>

              <button className='pl-4 cursor-pointer'>

                <div className='w-[2vw] h-[1.5vw]'>

                    <Image src={`${isScrolled ? '/assets/white-user.svg' : '/assets/user.svg'}`} width={500} height={500} alt='cart-icon' className='w-full h-full'/>
                </div>
              </button>
              </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
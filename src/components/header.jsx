import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className='fixed z-50 w-full top-0 flex items-center justify-between h-16 px-4'>
        <div>
            <Image src='/assets/logo.svg' height={10} width={10} alt='logo'/>
        </div>
        <div className='flex items-center justify-around space-x-16 text-white'>
        <Link className='font-heading text-[1.5vh] hover:underline' href='./'>SHOP</Link>
        <Link className='font-heading text-[1.5vh] hover:underline' href='./'>PHILOSOPHY</Link>
        <Link className='font-heading text-[1.5vh] hover:underline' href='./'>GALLARY</Link>
        <Link className='font-heading text-[1.5vh] hover:underline' href='./'>JOURNAL</Link>
        </div>
        <div className='pr-5'>
          <div className='w-fit rounded-full bg-white flex items-center px-5 py-3 '>
            <button className='border border-neutral-700 border-r-1 border-t-0 border-l-0 border-b-0 pr-4' type='icon'>
              
                  <Image src='/assets/cart.svg' width={14} height={14} alt='cart-icon'/>
              
          
              
              </button>

              <button className='pl-4'>
                    <Image src='/assets/user.svg' width={14} height={14} alt='cart-icon'/>
              </button>
              </div>
        </div>
      </div>
    </header>
  )
}

export default Header;

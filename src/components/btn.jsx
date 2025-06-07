import React from 'react';
import { MoveUpRight } from 'lucide-react';

const Button = () => {
  return (
    <div>
        <p className='rounded-full w-fit ml-2 p-3 bg-neutral-700 cursor-pointer'>
            <MoveUpRight className='text-white'/>
        </p>
    </div>
  )
}

export default Button;
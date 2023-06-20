'use client';

import Image from 'next/image';
import {MouseEventHandler} from 'react';
import {twMerge} from 'tailwind-merge';

interface CustomButtonProps {
  className?: string;
  title: string;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  icon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<CustomButtonProps> = ({className, title, disabled, type, handleClick, icon}) => {

  return (
    <button
      disabled={disabled}
      type={type}
      className={twMerge(`text-white flex flex-row relative justify-center items-center py-3 px-6 rounded-full outline-none bg-primary-blue min-w-[130px] hover:bg-blue-500 transition`, className)}
      onClick={handleClick}>
      <span className='flex-1'>{title}</span>
      {icon &&
        <div className='relative w-6 h-6'>
          <Image
            src={icon}
            alt='right icon'
            fill
            className='object-contain'
          />
        </div>
      }
    </button>
  );
};

export default CustomButton;

'use client';

import {MouseEventHandler} from 'react';
import {twMerge} from 'tailwind-merge';

interface CustomButtonProps {
  className?: string;
  title: string;
  disabled: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<CustomButtonProps> = ({className, title, disabled, type, handleClick}) => {
  return (
    <button disabled={disabled} type={type} className={twMerge(`text-white flex flex-row relative justify-center items-center py-3 px-6 rounded-full outline-none bg-primary-blue min-w-[130px] hover:bg-blue-500 transition`, className)} onClick={handleClick}>
      <span className='flex-1'>{title}
      </span>
    </button>
  );
};

export default CustomButton;

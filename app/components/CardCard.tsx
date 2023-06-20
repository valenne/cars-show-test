/* eslint-disable @typescript-eslint/naming-convention */

'use client';

import Image from 'next/image';
import {useState} from 'react';

import {rentalPrice} from '../../utils';

import CardDetails from './CardDetails';
import CustomButton from './CustomButton';

export interface CardCarsProps {
  carData: {
    'city_mpg': number;
    'class': string;
    'combination_mpg': number;
    'cylinders': number;
    'displacement': number;
    'drive': string;
    'fuel_type': string;
    'highway_mpg': number;
    'make': string;
    'model': string;
    'transmission': string;
    'year': number;
  };

}

function CardCard({carData}: CardCarsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const {city_mpg, year, make, model, transmission, drive} = carData;

  const carRent = rentalPrice(year, city_mpg);

  return (
    <div className='flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group transition ease-in-out'>
      <div className='w-full flex justify-between items-start gap-2'>
        <h2 className='text-[22px] leading-[26px] font-bold capitalize'>{make} {model}</h2>
      </div>
      <p className='flex mt-6 text-[32px]'>
        <span className='self-start text-[14px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>/day</span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={'/hero.png'} alt='Car Model' fill priority/>
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray transition ease-in-out'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={'/steering-wheel.svg'} alt='Steering Wheel' width={20} height={20}/>
            <p className='text-[14px]'>
              {transmission === 'a'
                ? 'Automatic'
                : 'Manual'
              }
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={'/tire.svg'} alt='Tire' width={20} height={20}/>
            <p className='text-[14px]'>
              {drive.toUpperCase()}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={'/gas.svg'} alt='Gas' width={20} height={20}/>
            <p className='text-[14px]'>
              {city_mpg}MPG
            </p>
          </div>
        </div>
        <div className='hidden group-hover:flex absolute bottom-0 w-full z-10 transition ease-in-out'>
          <CustomButton
            title='View More'
            className='w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold'
            type='button'
            icon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CardDetails isOpen closeModal={() => setIsOpen(false)} car={carData}/>
    </div>
  );
}

export default CardCard;

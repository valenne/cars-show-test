'use client';

import {Combobox, Transition} from '@headlessui/react';
import Image from 'next/image';
import {Fragment, useState} from 'react';

import {manufacturers} from '../../constants/pageData';

interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

const SearchManufacturer: React.FC<SearchManufacturerProps> = ({manufacturer, setManufacturer}) => {
  const [query, setQuery] = useState('');

  const filteredManufacturer: string[] = query === ''
    ? manufacturers
    : manufacturers.filter((marca) =>
      marca.toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, '')));

  console.log({Largo: filteredManufacturer.length, query, manufacturer});

  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Button className={'absolute top-[14px]'}>
            <Image
              src={'/car-logo.svg'}
              width={20}
              height={20}
              className='ml-4'
              alt='Car Logo'
            />
          </Combobox.Button>
          <Combobox.Input
            className={'search-manufacturer__input'}
            placeholder='Volkswagen'
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}>
            <Combobox.Options>
              {filteredManufacturer.length === 0 && query !== ''
                ? <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                  Nothing found.
                </div>
                : filteredManufacturer.map((item) =>
                  <Combobox.Option
                    key={item}
                    className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                    value={item}
                  >
                    {({selected, active}) =>
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected
                          ? <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                          : null}
                      </>
                    }
                  </Combobox.Option>)}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;

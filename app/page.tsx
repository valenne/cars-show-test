/* eslint-disable @shopify/binary-assignment-parens */
import {fetchCars} from '../utils';

import CardCard from './components/CardCard';
import CustomFilter from './components/CustomFilter';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';

export default async function Home() {
// fetching data
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-semibold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel'/>
            <CustomFilter title='year'/>
          </div>
        </div>
        {isDataEmpty
          ? <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Opps, no results</h2>
            <p>{allCars?.message}</p>
          </div>
          : <section>
            <div className='home__cars-wrapper'>
              {allCars.map((car) =>
                <CardCard carData={car}/>)}
            </div>
          </section>
        }
      </div>
    </main>
  );
}

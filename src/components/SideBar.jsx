import React from 'react';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { getWeather } from '../helpers/getWeather';
import { InputSearch } from './InputSearch';

export const SideBar = ({ setWeather, weather }) => {
  const { humidity, temp_min, temp_max } = weather;

  const handleSelect = (e) => {
    e.preventDefault;
    const btn = e.target;
    const ciudad = btn.innerText;
    getWeather(ciudad).then((wh) => setWeather(wh));
  };
  return (
    <div className='w-full pr-8 pt-12 '>
      <InputSearch setWeather={setWeather} />
      <div className='mt-14 border-b-2 border-white/40'>
        <ul className='mb-14'>
          <li className='text-xl my-8 p-2 font-light'>
            <button onClick={handleSelect}>Montevideo</button>
          </li>
          <li className='text-xl my-8 p-2 font-light'>
            <button onClick={handleSelect}>Buenos Aires</button>
          </li>
          <li className='text-xl my-8 p-2 font-light'>
            <button onClick={handleSelect}>London</button>
          </li>
          <li className='text-xl my-8 p-2 font-light'>
            <button onClick={handleSelect}>New York</button>
          </li>
        </ul>
      </div>
      <div className='wheaterDetails'>
        <h2 className='text-2xl my-8'>Weather Details</h2>
        <div className='max-w-[90%]'>
          <h4 className='text-lg flex justify-between items-center my-10 font-light'>
            Temperatura Min{' '}
            <span className='flex '>
              {temp_min}
              <TbTemperatureCelsius />
            </span>
          </h4>
          <h4 className='text-lg flex justify-between items-center my-10 font-light'>
            Temperatura Max{' '}
            <span className='flex '>
              {temp_max}
              <TbTemperatureCelsius />
            </span>
          </h4>
          <h4 className='text-lg flex justify-between items-center my-10 font-light'>
            Humedad <span>{humidity}%</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

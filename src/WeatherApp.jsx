import { useState } from 'react';
import { CityInfo } from './components/CityInfo';
import { ErrorCity } from './components/ErrorCity';
import { SideBar } from './components/SideBar';

export const WeatherApp = () => {
  const [weather, setWeather] = useState({
    city: '',
    country: '',
    temp: 0,
    description: '',
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
    iconURL: '',
    estado: false,
  });

  return (
    <div className='lg:bg-transparent/40 bg-transparent/50 opacidad lg:grid lg:grid-cols-3 lg:relative'>
      <div className='clima col-span-2 ml-8'>
        <h1 className='text-2xl lg:text-2xl lg:py-14  py-8 '>WeatherApp</h1>
        <div className='mx-auto my-8 lg:absolute lg:left-0 lg:bottom-0 lg:mb-12 lg:ml-12'>
          {weather.estado ? <CityInfo weather={weather} /> : <ErrorCity />}
        </div>
      </div>

      <div className='input'>
        <div className=' min-h-full sidebar'>
          <SideBar setWeather={setWeather} weather={weather} />
        </div>
      </div>
    </div>
  );
};

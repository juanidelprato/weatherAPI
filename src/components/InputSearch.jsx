import { BiSearch } from 'react-icons/bi';
import { getWeather } from '../helpers/getWeather';
import { useForm } from '../hooks/useForm';

export const InputSearch = ({ setWeather, weather }) => {
  const { search, onInputChange } = useForm({
    search: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(search).then((wh) => setWeather(wh));
    console.log(weather);
  };

  return (
    <form
      className='w-[80%] flex items-center relative'
      onSubmit={handleSubmit}
    >
      <input
        name='search'
        type='text'
        className='bg-transparent text-lg p-2 w-full focus:outline-none border-b-2 border-white/40  '
        placeholder='Ingrese una ciudad...'
        autoComplete='off'
        onChange={onInputChange}
        value={search}
      />
      <BiSearch
        size={30}
        className='absolute right-4 text-gray-200 cursor-pointer hover:text-gray-400'
        onClick={handleSubmit}
      />
    </form>
  );
};

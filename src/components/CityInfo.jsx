import { TbTemperatureCelsius } from 'react-icons/tb';

export const CityInfo = ({ weather }) => {
  const { name, country, dt, temp, description, iconURL } = weather;

  const date = Date(dt * 1000);
  console.log(date);
  const infoDate = date.split(' ');
  const [diaSemana, mes, dia, año] = infoDate;
  const infoHora = infoDate[4].split(':');
  const [hora, minuto] = infoHora;

  return (
    <div className='flex justify-center items-center py-16'>
      <div className='temperature flex'>
        <h2 className='text-9xl '>{temp}</h2>
        <TbTemperatureCelsius size={70} />
      </div>
      <div className='city flex flex-col justify-center items-center '>
        <div className='text-5xl font-light mx-10'>
          <div>
            {name} <span className='text-2xl'>{country}</span>
          </div>
          <div className='text-lg ml-1'>{`${dia} ${mes} ${año} - ${hora}:${minuto}`}</div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='icon'>
          <img src={iconURL} alt='' />
        </div>
        <div className='clouuds'>{description}</div>
      </div>
    </div>
  );
};

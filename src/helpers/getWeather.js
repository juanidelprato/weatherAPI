export const getWeather = async (city) => {
  const apikey = '9703e2d094f4fa044e60922cab07839d';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=sp&appid=${apikey}&units=metric`;
  let estado = false;

  const resp = await fetch(url);
  const result = await resp.json();

  if (result.message) return (estado = false);
  console.log(result);
  const { main, weather, dt, name } = result;
  const { country } = result.sys;
  const { temp, temp_min, temp_max, humidity } = main;
  const { description, icon, main: mainWeather } = weather[0];
  const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  estado = true;

  return {
    name,
    country,
    temp: Math.floor(temp),
    temp_min: Math.floor(temp_min),
    temp_max: Math.floor(temp_max),
    humidity,
    description,
    iconURL,
    dt,
    estado,
    mainWeather,
  };
};

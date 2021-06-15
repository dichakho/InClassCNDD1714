import { get } from '@utils/api';

export const fetchDogs = () => get(
  'https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json?fbclid=IwAR1V9BVnl7c8SNzLgKU9aKqKtS3abqdlSIPxej8yjm9xDyDavFHDUD4Dsw4',
);

export const fetchProductById = (id: number) => get(`/properties/${id}`);

import { API_KEY } from "../utils/constants";

//Funzione asincrona chiamata fetchData, che esegue richieste HTTP a un endpoint specifico. 
export const fetchData = async (url, params) => {
  const fullUrl = `${url}?${params}&appid=${API_KEY}`
  const rawResponse = await fetch(fullUrl);
  const response = await rawResponse.json();

  if (rawResponse.status === 200) { // OK
    return response
  }

  throw response;
};
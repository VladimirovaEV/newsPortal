const API_KEY = 'f78dd330294947dfa1953731ca53cf00';

const getDataNews = async (url) => {
  try {
        const response = await fetch(url, {
        headers: {
          'X-Api-Key': API_KEY,
        },
    });
    // const response = await fetch(url)
  if (response.ok) {
    const data = await response.json();
      return data;
  }
  throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
     } catch (error) {
        console.log(error);
     }
}


export default {
    getDataNews,
};
import fetchRequest from "./fetchRequest.js";
const {
    getDataNews,
    getDataBySearch,
} = fetchRequest;
import getElements from "./getElements.js";
const {
    input,
    searchBtn,
    choicesElem,
    newsList,
} = getElements;
//const data = getDataNews('https://newsapi.org/v2/top-headlines?country=ru');
const initNews = async () => {
    const dataNews = await getDataNews('../headlines.json');
    dataNews.forEach(data => {
        console.log(data);
    })
}

initNews();
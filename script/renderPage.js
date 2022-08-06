import fetchRequest from "./fetchRequest.js";
import renderCard from "./renderCard.js";
const {
    renderNewsCard,
    clearList
} = renderCard;
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
    titleRequest,
    titleNews,
    titleFresh,
    freshList
} = getElements;
import preload from "./preload.js";

const country = choicesElem.value;

const loadNews = async (country) => {
    preload.show();
    // const dataNews = await getDataNews('../headlines.json');
    if (choicesElem.value === '') {
    country = "ru";
    };
    const dataNews = await getDataNews(`https://newsapi.org/v2/top-headlines?country=${country}`);
    (dataNews.articles).forEach((article, index) => {
        if (index <= 7) {
            return renderNewsCard(article, newsList);
        }
    })
}
const loadSearchNews = async () => {
    const dataSearchNews = await getDataNews(`https://newsapi.org/v2/everything?q=${input.value}`);
    titleRequest.textContent = `По вашему запросу “${input.value}” найдено ${dataSearchNews.articles.length} результатов`;
    (dataSearchNews.articles).forEach((article, index) => {
        if (index <= 7) {
            return renderNewsCard(article, newsList);
        }
    })
};
const loadFreshNews = async (country) => {
    // const freshNews = await getDataNews('../headlines.json');
    if (choicesElem.value === '') {
    country = "ru";
    };
    const freshNews = await getDataNews(`https://newsapi.org/v2/top-headlines?country=${country}`);
    (freshNews.articles).forEach((article, index) => {
        if (index <= 3) {
            return renderNewsCard(article, freshList);
        }
    })
    titleFresh.classList.remove('visually-hidden');
};

// searchBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     clearList();
//     loadSearchNews();
//     loadFreshNews();
// })

// loadNews().then(data => {
//     preload.remove();
// });
Promise.all([
    new Promise(() => {
        loadNews().then(data => {
            preload.remove();
        })
    }),
    new Promise(() => {
    searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            clearList();
            loadSearchNews();
            loadFreshNews();
        });
    })
]);
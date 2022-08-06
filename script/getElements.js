const input = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-submit');
const choicesElem = document.querySelector('.js-choice');
const newsList = document.querySelector('.news-list');
const freshList = document.querySelector('.fresh-list');
const titleRequest = document.querySelector('#titleReq');
const titleNews = document.querySelector('#titleNews');
const titleFresh = document.querySelector('#titleFresh');


titleNews.classList.remove('visually-hidden');
titleFresh.classList.add('visually-hidden');

export default {
    input,
    searchBtn,
    choicesElem,
    newsList,
    titleRequest,
    titleNews,
    titleFresh,
    freshList
}
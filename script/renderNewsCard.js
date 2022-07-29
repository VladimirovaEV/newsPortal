import getElements from "./getElements.js";
const {
    input,
    searchBtn,
    choicesElem,
    newsList,
} = getElements;

const renderNewsCard = (data) => {
    const newsItem = document.createElement('li');
    newsItem.classList.add = 'news-item';
    newsItem.insertAdjacentHTML(
        'beforeend',
        `<img src=${data.urlToImage}
                            alt=${data.title} class="news-image" height="200">
                        <h3 class="news-title">
                            <a href=${data.url} class="news-link" target="_blank">${data.title}</a>
                        </h3>
                        <p class="news-description">${data.description}</p>
                        <div class="news-footer">
                            <time class="news-datetime" datetime="2022-03-16T16:11:06Z">
                                <span class="news-date">16/03/2022</span> 11:06
                            </time>
                            <p class="news-author">${data.author}</p>
                        </div>`
    );
    newsList.append(newsItem);
}
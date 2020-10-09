export const elements = {
    seasonYear: document.querySelector('.seasonDeatils__container--season'),
    teamName: document.querySelector('.team__name--name'),
    card:document.querySelector('.container__score'),
    page:document.querySelector('.pagination'),
    pagination:document.querySelector('.pagination--sign'),
    paginationPrev:document.getElementById('pagination--sign__prev'),
    paginationNext:document.getElementById('pagination--sign__next'),
    button: document.querySelector('.button__number--container'),
    selected: document.querySelectorAll('.pagination__link--number')
}

export const elementSrings = {
    loader: 'loader__container'
}

export const renderLoader = (parent) => {

    const loader = `
    
    <div class="loader__container">
        <img class="loader__img" src="./img/loader.png">
        <span class="loader__circle"></span>
    </div>
    `;

    parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = ()=>{
    const loader = document.querySelector(`.${elementSrings.loader}`);

    if(loader){
        loader.parentElement.removeChild(loader);
    }
}





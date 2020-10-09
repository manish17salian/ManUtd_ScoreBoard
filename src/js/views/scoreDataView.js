import {elements} from '../base';

export const getSeasonYear = () =>  parseInt(elements.seasonYear.textContent);



const formatName = input =>{
    const nameLong = ["AFC Bournemouth", "Arsenal FC", "Aston Villa FC", "Brighton & Hove Albion FC", "Burnley FC", "Chelsea FC", "Crystal Palace FC", "Everton FC", "Leicester City FC", "Liverpool FC", "Manchester City FC", "Manchester United FC", "Newcastle United FC", "Norwich City FC", "Sheffield United FC", "Southampton FC", "Tottenham Hotspur FC", "Watford FC", "West Ham United FC", "Wolverhampton Wanderers FC"];
    const nameShort = ["Bournemouth", "Arsenal", "Aston Villa", "Brighton", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Leicester City", "Liverpool", "Man City", "Man United", "Newcastle", "Norwich", "Sheffield United", "Southampton", "Tottenham", "Watford", "West Ham", "Wolves"];
        const try1 = nameLong.findIndex(el=> el === input);
        const name = nameShort[try1];       
   return name;
}

const formatDate = date =>{
    var newdate = date.slice(0,10);
    return newdate;
}


const formatScore = score =>{
           
    if (score === null ){
        const dash = "-";
        return dash;} else{return score;}

}



export const createScore = (data) =>{
    
       
        const markup =  
    `
    <div class="container__score--scores">
                            
        <div class="team__name">
            <h3 class = "team__name--name">${formatName(data.homeTeam.name)}</h3>
        </div>
        <div class="team">
            <img class="team__logo" src="./img/${data.homeTeam.name}.png">
        </div>
        <div class="scoreBox">
            <div class="date">${formatDate(data.utcDate)}</div>
            <div class="scoreBox__container">
                <div class="score__box score__box--home">${formatScore(data.score.fullTime.homeTeam)}</div>
                <div class="score__box score__box--away">${formatScore(data.score.fullTime.awayTeam)}</div>
            </div>
            <div class="time">${data.status}</div>
        </div> 
        <div class="team">
            <img class="team__logo" src="./img/${data.awayTeam.name}.png">
        </div>
        <div class="team__name">
            <h3 class = "team__name--name">${formatName(data.awayTeam.name)}</h3>
        </div>
    </div>


    `;
            

    elements.card.insertAdjacentHTML('beforeend', markup);
        

    
}

export const clearResults = () =>{
    elements.card.innerHTML = '';
    elements.button.innerHTML = '';
    elements.paginationNext.innerHTML ='';
    elements.paginationPrev.innerHTML = '';
  //  document.querySelector('.button__number--container').firstElementChild.firstElementChild.firstElementChild.classList.remove('pagination__item--number');
}



const createButton = (page, type) =>
    `
    <button class="button button__${type}" data-goto = ${type === 'prev' ? page -1 : page + 1}>
        <li class="pagination__item ">
            
            <a class="pagination__link ">${type === 'prev' ? '&lt;  PREV' : 'NEXT  &gt;'}</a>
            
        </li>
    </button>

    
    `;

const createIndicator = (page) =>
    `
    <button class="button button__number" data-gotonumber=${page}>
    <li class="pag">
    ${page == 1 ?  `<a class="pagination__link--number pagination__item--number" href="#${page}">${page}</a>`:`<a class="pagination__link--number" href="#${page}">${page}</a>`}
    
    </li>
    </button>
    `;

const pages = (page, numResults, resPerPage) =>{
    const pages = Math.ceil(numResults / resPerPage);
    let no; 
    for(page = 1; page <= pages; page++){
      no = createIndicator(page);
      elements.button.insertAdjacentHTML('beforeend',no);

    const hello =  document.querySelector('.button__number--container').firstElementChild.firstElementChild.firstElementChild;
    hello.classList.add('pagination__item--number');
      
    }
    
    
}


const renderButtons = (page, numResults, resPerPage)=>{
    const pages = Math.ceil(numResults / resPerPage);
    let buttonNext, buttonPrev;
    console.log(pages);
    if(page === 1 && pages > 1){
        buttonNext = createButton(page, 'next');
        //indicator = createIndicator(page);
       elements.paginationNext.insertAdjacentHTML('afterbegin', buttonNext);
    }else if(page < pages){
        buttonPrev = createButton(page, 'prev');
        buttonNext = createButton(page, 'next');
        elements.paginationNext.insertAdjacentHTML('afterbegin', buttonNext);
        elements.paginationPrev.insertAdjacentHTML('afterbegin', buttonPrev);
    }else if(page === pages && pages > 1){
        buttonPrev = createButton( page, 'prev');
        //indicator = createIndicator(page);
        elements.paginationPrev.insertAdjacentHTML('afterbegin', buttonPrev);
    }

    
    //elements.button.insertAdjacentHTML('afterbegin',indicator);

}

export const renderResult = (data, page=1, resPerPage = 10) =>{

    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    data.slice(start, end).forEach(createScore);
    pages(page, data.length, resPerPage);
    renderButtons(page, data.length, resPerPage);
    
    
}


export const highlightSelected = (id) =>{
    document.querySelector(`.pagination__link--number[href*="${id}"]`).classList.add('pagination__item--number');
}
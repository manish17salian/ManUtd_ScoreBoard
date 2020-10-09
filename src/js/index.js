import Score, * as data from './models/ScoreData';
import * as dataView from './views/scoreDataView';
//import {elements } from './views/scoreDataView'
import {elements, renderLoader, clearLoader, renderPagination } from './base';


const state = {};
window.state = state;



const getData = async () =>{
    const query = dataView.getSeasonYear();
   
    

    if(query){
        state.data = new Score(query);
        renderLoader(elements.card)

    try{
        await state.data.getResults();

        clearLoader();

        
        state.data.parseName();
        
        dataView.renderResult(state.data.result);
        console.log(state.data.result);


        // const check = state.data.result[37].score.winner;
 
    }catch(error){
        console.log(error);

    }
}}

getData();


elements.paginationNext.addEventListener('click', e =>{
    
    const button = e.target.closest('.button');
    
    if(button){
        const goToPage =parseInt(button.dataset.goto, 10);
        
        dataView.clearResults();
        dataView.renderResult(state.data.result, goToPage);
        dataView.highlightSelected(goToPage);
       
      window.scrollTo({ top: 0, behavior: 'smooth' });
       const hello = document.querySelector('.button__number--container').firstElementChild.firstElementChild.firstElementChild.classList.toggle("pagination__item--number",false);
       console.log(hello);

    }
});

elements.paginationPrev.addEventListener('click', e =>{
    
    const button = e.target.closest('.button');
    
    if(button){
        const goToPage =parseInt(button.dataset.goto, 10);
        dataView.clearResults();
        dataView.renderResult(state.data.result, goToPage);
        dataView.highlightSelected(goToPage);
       
       window.scrollTo({ top: 0, behavior: 'smooth' });
       if(goToPage !== 1){
        const hello = document.querySelector('.button__number--container').firstElementChild.firstElementChild.firstElementChild.classList.toggle("pagination__item--number",false);
       console.log(hello);
       }else{
        const hello =  document.querySelector('.button__number--container').firstElementChild.firstElementChild.firstElementChild;
        hello.classList.add('pagination__item--number');

       }
       

    }
});

elements.button.addEventListener('click', el =>{
    const number = el.target.closest('.button__number');
    
    
    if(number){
        
        const goToPage =parseInt(number.dataset.gotonumber, 10);
        dataView.clearResults();
        dataView.renderResult(state.data.result, goToPage);
        dataView.highlightSelected(goToPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // const hello = document.querySelector('.button__number--container').firstElementChild.firstElementChild.firstElementChild.classList.toggle("pagination__item--number",false);
        // console.log(hello);
    }
});




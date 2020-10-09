import axios from 'axios';
import { elements } from '../base';


export default class Score{
    constructor(query){
      this.query = query;
      
    };

    async getResults(){
        const res = await axios({
            method: 'get',
            url: `https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/teams/66/matches?season=${this.query}`,
            responseType: 'json',
            headers: {'X-Auth-Token': '3118540e32f344c89e7c68d4156eb75c'},
          })
            .then(function (response) {
              return{
                result: response.data.matches
              }  
            });

        this.result = res.result;
        //console.log(this.result);
        // this.result.forEach(element => {
        // this.awayTeam = element.awayTeam.name;
        // this.homeTeam = element.homeTeam.name;




      //   this.array = [];
      //   this.result.forEach(el =>{
      //    this.array.push(el.awayTeam.name);
      //  });

      //  this.arrayHome = [];
      //   this.result.forEach(el =>{
      //    this.array.push(el.homeTeam.name);
      //  });


         

        
        
      // });
    };


    parseName(){

      this.array = [];
        this.result.forEach(el =>{
         this.array.push(el.awayTeam.name);
       });

       this.arrayHome = [];
        this.result.forEach(el =>{
         this.arrayHome.push(el.homeTeam.name);
       });



      const nameLong = ["afc bournemouth", "arsenal fc", "aston villa fc", "brighton & hove albion fc", "burnley fc", "chelsea fc", "crystal palace fc", "everton fc", "leicester city fc", "liverpool fc", "manchester city fc", "manchester united fc", "newcastle united fc", "norwich fc", "sheffield united fc", "southampton fc", "tottenham hotspur fc", "watford fc", "west ham united fc", "wolverhampton wanderers fc"];
      const nameShort = ["Bournemouth", "Arsenal", "Aston Villa", "Brighton", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Leicester City", "Liverpool", "Man City", "Man United", "Newcastle", "Norwich", "Sheffield United", "Southampton", "Tottenham", "Watford", "West Ham", "Wolves"];


      
      const arrayname =this.array.map((element) =>{
        let name = element.toLowerCase();

        nameLong.forEach((el,i)=>{
        
          name = name.replace(el, nameShort[i]);
        });

        let objname = {
          name
        }
        return objname;
      });

     
      const arraynameHome =this.arrayHome.map((element) =>{
        let nameHome = element.toLowerCase();

        nameLong.forEach((el,i)=>{
        
          nameHome = nameHome.replace(el, nameShort[i]);
        });

        let objnameHome = {
          nameHome
        }
        return objnameHome;
      });
      

      
      this.awayTeam = arrayname;
      //console.log(this.awayTeam);

      this.homeTeam = arraynameHome;
      //console.log(this.homeTeam);
      this.finalTeam = [[this.awayTeam], [this.homeTeam]]
    };

   // console.log(this.homeTeam);

    

    // renderTeam(){
    //   // this.result.forEach(el => {

    //   //   this.awayTeam = el.awayTeam;
        
    //   // });
    //   console.log(res)
    // }

    
}

    

// // };

// export default class Score {
//   constructor(query) {
//       this.query = query;
//   }

//   async getResults() {
//       try {
//           const res = await axios(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?q='pizza'`);
//           this.result = res.data.recipes;
//           console.log(this.result);
//       } catch (error) {
//           console.log(error);
//       }
//   }
// }


// let data = response.data.matches[0] ;
            // console.log(data.awayTeam);
            // console.log(data.homeTeam);
            // console.log(data.score.fullTime);
            // console.log(data.lastUpdated);
            // console.log(data.status);
            
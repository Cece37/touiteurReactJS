import React from 'react';
import {httpGetTrending} from '../api/TouitAPI';

class Trending extends React.Component{

    constructor(props){
             super(props);
             this.state = {
                 trend: [] //je crée un tableau vide 
         };
        }
    
        componentDidMount() {
            this.interval = setInterval(() => {
                httpGetTrending(blah =>  
                    // console.log(blah)
                this.setState({
                    trend: Object.entries(blah).sort((a, b) => { //entries prends tous les éléments du tableau
                        if (a[1] === b[1]) { //j'ai des tableau dans un tableau, a = le tableau, 1 est l'indice
                            return 0; //
                        } else {
                            return (a[1] < b[1]) ? 1 : -1; //si l'indice du tableau a est inférieur au b tu met le plus grand en &er
                        }
                })
                })
                )
            }, 3000);
        }  
    

        componentWillUnmount() {
            clearInterval(this.interval);
            }
        
         
    render(){
        //console.log(this.state.trend)
            return (
                <div className="mot">
                    {this.state.trend.map((mot, i) => 
                        <div className='word'key={i} >{mot[0]}</div>
                    )}
                </div>
                );




//        console.log(this.state.trend)
//         return (
//             <div className="trend">
//                 {
//                 this.state.trend.map((Object.entries(blah), index) =>  <Touit key = {...index}/>) 
//                 }
//             </div>
//         )
//     } 
  }
}

export default Trending;


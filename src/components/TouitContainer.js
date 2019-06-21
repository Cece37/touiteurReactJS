import React from 'react';
import Touit from './Touit';
import {httpGetMessages} from '../api/TouitAPI';


class TouitContainer extends React.Component{

    constructor(props){
             super(props);
             this.state = {
                 tweets: [] //je crée un tableau vide 
         };
        }
    
        
            componentDidMount() {
        
                this.interval = setInterval(() => {
                    httpGetMessages( 0,  (touit) =>  // j'appel mon callbacke touit et je replis le tableau
                    this.setState({
                        tweets: touit //ici pas .messages car déjà dans la callback json
                    })
                    )
                }, 3000);
            }  
    
            componentWillUnmount() {
                clearInterval(this.interval);
                }
            
        
        
    render(){
    //    console.log(this.state.tweets)
        return (
            <div className="touit">
                {
                this.state.tweets.map((messages, index) =>  <Touit key = {index} {...messages}/>) 
                }
            </div>
     
        )
    } 
}

export default TouitContainer;
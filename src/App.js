import React from 'react';
import Header from './components/Header';
import SendMessageForm from './components/SendMessageForm';
import './App.css';
import TouitContainer from './components/TouitContainer';
import Trending from './components/Trending';



class App extends React.Component{
  render(){
      return (
        <div className="page">
          <div className="head">
            <Header/>

            <div className="formulaire">
              <SendMessageForm/>
            </div>
          </div>
        
          <div className="container">
            
              <Trending/>

            <div className="tweet">
              <TouitContainer/>
            </div>
          </div>

        </div>


         
       
      
      
      )
  }
}

export default App;

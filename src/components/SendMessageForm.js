import React from 'react';
import {httpPostMessages} from '../api/TouitAPI';


class SendMessageForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {name: '', message: ''};
        
        
        this.handleChangename = this.handleChangename.bind(this);
        this.handleChangemessage = this.handleChangemessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


      handleChangename(event) {
        this.setState({name: event.target.value});
        }
      handleChangemessage(event) {
        this.setState({message: event.target.value});
        }

        handleSubmit(event) {
            //alert('Votre essage a bien été envoyé : ' + this.state.name + this.state.message);
            event.preventDefault();
            httpPostMessages(this.state.name, this.state.message, (resp) => {
                if (resp.success === true) {
                    //alert('Votre essage a bien été envoyé : ');
                    alert('Votre message a bien été envoyé');
                } else {
                    alert("Une erreur est servenu!")
                }            
            })
            this.setState({name:'', message: ''});
                
            }

    
    render() {
        return (
            
                <form onSubmit={this.handleSubmit}>
                <label>
                    <input id="name" type="text" placeholder="pseudo" value={this.state.name} onChange={this.handleChangename} />
                    <input id="message" type="text" placeholder="votre message" value={this.state.message} onChange={this.handleChangemessage} />
                    <input id="submit" type="submit" value="Envoyer" />
                 </label>     
                </form>
            
        );
    }
}



export default SendMessageForm;



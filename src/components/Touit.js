import React from 'react';

class Touit extends React.Component{
     render(){
            const{name, message} = this.props;

            return (
             <div className="bloc">
                 <p>{name}</p>
                 <p>{message}</p>
             </div>
            );
        }
 }

export default Touit;





    
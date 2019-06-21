// class TouitAPI extends React.Component{

//     constructor(props) {
//         super(props);
//         this.state = {
//           error: null,
//           isLoaded: false,
//           tweets: []
//         };
//       }
// }

//     componentDidMount() {
//     fetch("http://touiteur.cefim-formation.org/")
//         .then(res => res.json())
//         .then(
//         (result) => {
//             this.setState({
//             isLoaded: true,
//             tweets: result.tweets
//             });
//         },

//         (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }

//     render() {
//         const { error, isLoaded, tweets } = this.state;
//         if (error) {
//           return <div>Error: {error.message}</div>;
//         } else if (!isLoaded) {
//           return <div>Loading...</div>;
//         } else {
//           return (
//             <ul>
//               {tweets.map(tweet => (
//                 <li key={tweet.name}>
//                   {tweet.name} {tweet.message}
//                 </li>
//               ))}
//             </ul>
//           );
//         }
//       }

    
// export default TouitAPI;
      

// OU 

// soit on fait une classe  ou que des fnction et les exporter en export nomé

// 3 fonctions:
// http liste
// message et récupérer



const URL = "touiteur.cefim-formation.org";

    //let pseudo = "name=" + document.getElementById('name').value;
    //let msn = "message=" + document.getElementById('message').value;

function httpGetMessages(timestamp, callback){ // on crée l'objet   //on passe par un callback et non return car on est en insacrhone
    const request = new XMLHttpRequest();
    request.open('GET', 'http://' + URL + '/list?ts=' + encodeURIComponent(timestamp), true); // on ouvre le message
    request.addEventListener("readystatechange", function () { // on lit le message

        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            callback(JSON.parse(request.responseText).messages); // c'est le paramètre de calback, donc le 2èe paramètre de GetMessage
        }
    });
request.send(); // on le récupère
}


// ?const respJson = JSON.parse(request.responseText).messages;

 function httpPostMessages(name, message, callback){
     const request1 = new XMLHttpRequest(); 
     request1.open('POST', 'http://' + URL + '/send' , true);
         request1.addEventListener("readystatechange", function () {
             if (request1.readyState === XMLHttpRequest.DONE && request1.status === 200) {
                 callback(JSON.parse(request1.responseText));
                
             }
         });
    request1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 request1.send("name="+ encodeURIComponent(name) + "&message=" + encodeURIComponent(message));

 //console.log (callback);
 }

 function httpGetTrending(callback){ // on crée l'objet   //on passe par un callback et non return car on est en insacrhone
    const request = new XMLHttpRequest();
    request.open('GET', 'http://' + URL + '/trending', true); // on ouvre le message
    request.addEventListener("readystatechange", function () { // on lit le message

        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            callback(JSON.parse(request.responseText)); // c'est le paramètre de calback, donc le 2èe paramètre de GetMessage
        }
    });

request.send(); // on le récupère
}


export {httpGetMessages, httpPostMessages, httpGetTrending};







// timestamp on récupère la liste des message
// callback est appelé quand la requete est terminée





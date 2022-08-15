
//React uses Reusability Concept that means CODE REUSE IN REACT
// Components with props
//Children each component you create also can be use cta /cta y todo lo que este aderntro e sun hijo añadiendo (props) en parametros 
//High-Order components
//Render props
import React from 'react';
import './App.css';

// A function that takes a component as its first argument and returns a new component that wraps the given component, 
//providing extra capabilities to it.
import Menu from "./HOCS/Menu"
import Favorite from "./HOCS/Favorite"

function App() {
    return (
        <div>
            <Menu  someThing="whatever"/>
            <hr />
            <Favorite />
        </div>
    )
}

export default App
/*
import CTA from './CTA';

function App() {
    return (
        <div>
          <CTA>
            <h1>This is an important CTA</h1>
            <button>Click me now or you'll miss out!</button>
          </CTA>
          <CTA>
            <form>
            <input type="email" placeholder="Enter email address here"/>
            <br></br>
              <button>Submit</button>
              </form>
          </CTA>
      
        </div>
    )
}

export default App
*/

//import InfoCallout from "./InfoCallout"
//import ImageCallout from "./ImageCallout"
//import EmailCallout from "./EmailCallout"
//import Callout from "./Callout";
//import   Card  from "./Card";

//import {withPointlessHOC} from "./HOCS/withPointlessHOC"
//import {withExtraPropAdded} from "./withExtraPropAdded"
/*
function App(props) {

    console.log(props)

    return (
        <h1>{props.favoriteNumber}</h1>
    )
}

//const PointlessHOC = withPointlessHOC(App)
export default withPointlessHOC(App)
*/
    /*
    return (
        <main>
            <h1>Hola!</h1>
            <div>
            <Card cardColor="red" height={100} width={100} />
            <Card cardColor="blue" height={100} width={100} />
            <Card cardColor="green"height={100} width={100} />
        </div>

            <Callout>
                <h2>"Don't miss out!"</h2>
                <p>"Unless you don't suffer from FOMO, you better make sure you fill out the email form below!"</p>
                
            </Callout>  

            <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>

            <Callout>
                <img src="https://picsum.photos/id/102/4320/3240" width="100%" /> 
                <figcaption>Just look at those sparkling raspberries!</figcaption>
            </Callout> 
            
           
            <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>

           <Callout>
                <h2>Give us your email. We definitely won't sell it to anyone</h2>
                <input type="email" placeholder="Enter Email"/>
                <button>Sign me up!</button>
            </Callout> 
            

            
        </main>
                    */
    

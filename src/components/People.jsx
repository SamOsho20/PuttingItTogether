import { useState } from "react"
// IMPORTING USE STATE BY DESTRUCTURING IT OUT OF REACT 

const Person = (props) => {
    // GLOBAL VARIABLES THAT CAN BE USED ANYWHERE IN DOC 
    const {name, age, hairColor} = props
    const  [personAge, setPersonAge]= useState(age)
    // SINCE AGE IS A GLOBAL VARIABLE WE CAN JUST CALL IT BY ITS NAME WITH USE STATE 
    // CURRENT AGE IS OUR GETTER FUNCTION WITH THE INITIAL VALUE 
    // SET AGE IS OUR SETTER FUNCTION 


    // CREATING A ANONYMOUS FUNCTION CALLED addToAge
    const addToAge = () =>{
        // DONT NEED TO PASS IN setPersonAge oR personAge BC THEY ARE GLOBAL VARIABLES 
        setPersonAge(personAge => personAge +1)
        // ALWAYS GOOD TO GIVE SETTERS ANONYMOUS FUNCTIONS WITH =>  SO THAT WE 
        // CAN SPECIFY WHAT THE FUNCTION DOES WHEN WE CALL IT 
        // WHEN addToAge FUNCTION IS INVOKED IT WILL COMPLETE THIS FUNCTIONS LINES ABOVE 

    }
    return (
    
        <div className="Person">
    
            {/* WE PASS IN TEH VALUES FOR THESE PROPS IN OUR APP FILE HARD CODED  */}
            <p>Name:{name}</p>
            <p>Age: {personAge}</p>
            <p>HairColor: {hairColor}</p>

    
            <button onClick={() =>addToAge()}>Add 1 More Year</button>
            {/* USING {} BC IT IS JAVASCRIPT  */}
            {/* NEED TO USE () AT TEH END OF addToAgeSO IT KNOWS TO CALL TEH FUNCTION*/}
            {/* BY PUTTING () => THIS FUNCTION WILL ONLY BE ACTIVATED WHEN CLICKED  IF NOT IT CONTINIOUSLY RUN WHICH IS BAD  */}
            {/* WHEN CLICKED BUTTON CALLS TEH addToAge FUNCTION */}

    

        </div>
    )
}

export default Person

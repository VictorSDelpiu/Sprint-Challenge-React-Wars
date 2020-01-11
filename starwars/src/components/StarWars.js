import React, { useState, useEffect} from "react";
import axios from "axios";
import StarWarsList from "./StarWarsList";



    function StarWars() {
      const [Comp1, Comp2] = useState([]);

      useEffect(()=>{
        axios
          .get(
            "https://swapi.co/documentation#people"
          )
            .then(response => {
              Comp2(response.data);
              console.log(response.data);
            })
            .catch(error => {
              console.log(error);
              });
        }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch peoples from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return(
    <div className = "names">
        {Comp1.map((people)=>{
            return(
                <StarWarsList
                    charName = {people.name}
                    gender= {people.gender}
                    height = {people.height}
                    key = {people.id}
                    hair_color = {people.hair_color}
                />
            )}
        )}
    </div>
);
};

export default StarWars;

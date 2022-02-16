/* eslint-disable */ 
import React from 'react'
import '../App.css'
const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <img className="image" src={image} alt="" />
            <p> calories: {calories}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            
        </div>
    )
}

export default Recipe

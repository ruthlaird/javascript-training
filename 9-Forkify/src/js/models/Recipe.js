import axios from 'axios';
import { key, proxy } from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }
    
    async getRecipe() {
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;  
            console.log(this.ingredients);
        } catch (error) {
            console.log(error);
            alert('Something went wrong getting the recipe :(');
        }
    }

    calcTime() {
        //Assuming that we need 15 min for each 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngredients() {
        //need to put the plurals in the array first otherwise will find match on the singular and return with the 's' suffix 
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        const units = [...unitsShort, 'kg', 'g', 'ml'];

        const newIngredients = this.ingredients.map(el => {
            // 1) Uniform units
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });

            // 2) Remove parentheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            // 3) Insert space between count and unit if not already there
            units.forEach(u => {
                const re = new RegExp(`([0-9\.]+)${u}`);
                ingredient = ingredient.replace(re, `$1 ${u}`);
            });
            
            // 4) Remove any preceeding space before comma
            ingredient = ingredient.replace(' ,', ',');

            // 5) Parse ingredients into count, unit and ingredient
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el2 => units.includes(el2));

            let objIng;
            if (unitIndex > -1) {
                // There is a unit
                // Example: 4 1/2 cups; arrCount is [4, 1/2] --> eval("4+1/2") --> 4.5
                // Example: 4 cups; arrCount is [4]
                const arrCount = arrIng.slice(0, unitIndex);
                
                let count;
                if (arrCount.length === 1) {
                    count = eval(arrIng[0].replace('-', '+')); //replace any '-'s with a '+' to allow eval to work
                } else {
                    count = eval(arrIng.slice(0, unitIndex).join('+')); //join multiples with a '+' which eval can then convert to a decimal
                }

                objIng = {
                    count,  //same as saying count: count
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                }

            } else if (parseInt(arrIng[0], 10)) {
                // There is NO unit, but 1st element is a number
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')   //take off 1st element which is a number and then join all array elements back together space separated
                } 
            } else if (unitIndex === -1) {
                    // There is NO unit and NO number in 1st position

                    const c = (arrIng[0].charAt(0) === 'a') ? 'doNotDisplay' : 1;

                    objIng = {
                        count: c,
                        unit: '',
                        ingredient
                    }
            }

            return objIng;
        });
        this.ingredients = newIngredients;
    }
}
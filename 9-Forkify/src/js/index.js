// Global app controller
/*
//Default imports
import str from './models/Search';

//Named imports - can either do this:
import { add, multiply as m, ID } from './views/searchView';
console.log(`Using named imported functions (method 1)! add: ${add(ID, 2)} and multiply: ${m(3, 5)}. str: ${str}`);

//or another way of doing named imports
import * as searchView from './views/searchView';
console.log(`Using named imported functions (method 2)! add: ${searchView.add(searchView.ID, 2)} and multiply: ${searchView.multiply(3, 5)}. str: ${str}`);
*/

import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, renderLoader, clearLoader } from './views/base';

/** Global state of the app
| * - Search object
| * - Current recipe object
| * - Shopping list object
| * - Liked recipes
*/
const state = {};

/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();
    
    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);
        
        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        
        try {
            // 4) Search for recipes
            await state.search.getResults();
            
            // 5) render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (err) {
            alert('Something went wrong with the search...');
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
//   prevent auto reload of the page
    e.preventDefault(); 
    controlSearch();
});

//event delegation - add event to something that will always be there
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/**
 * RECIPE CONTROLLER
 */

 const controlRecipe = async () => {
    // Get ID from url
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected search item
        if (state.search) searchView.highlightSelected(id);

        // Create new recipe object
        state.recipe = new Recipe(id);

        try{
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
            console.log(state.recipe);

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
    
            // Render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);

        } catch (err) {
            alert('An error occurred processing the recipe!');
        }
    }
 }

 // if want to call same code on multiple events instead of:
// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);

// can put each event in an array and loop through with a for each
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
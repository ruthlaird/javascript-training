// Global app controller
//Default imports
import str from './models/Search';

//Named imports - can either do this:
import { add, multiply as m, ID } from './views/searchView';
console.log(`Using named imported functions (method 1)! add: ${add(ID, 2)} and multiply: ${m(3, 5)}. str: ${str}`);

//or another way of doing named imports
import * as searchView from './views/searchView';
console.log(`Using named imported functions (method 2)! add: ${searchView.add(searchView.ID, 2)} and multiply: ${searchView.multiply(3, 5)}. str: ${str}`);

class Element {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor (name, buildYear, numOfTrees, area) {
        super(name, buildYear);
        this.numOfTrees = numOfTrees;
        this.area = area;
    } 
    
    treeDensity() {
        return this.numOfTrees / this.area;
    }
    
    calculateAge() {
        var age = new Date().getFullYear() - this.buildYear;
        return age;
    }
}

class Street extends Element {
    constructor (name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet() {
        const streetSize = new Map();
            streetSize.set(1, 'tiny');
            streetSize.set(2, 'small');
            streetSize.set(3, 'normal');
            streetSize.set(4, 'big');
            streetSize.set(5, 'huge');
        
        console.log(`${this.name}, built in ${this.buildYear}, is a ${streetSize.get(this.size)} street.`);
    }
}



const greenPark = new Park('Green Park', 1987, 215, 0.2);
const nationalPark = new Park('National Park', 1894, 3541, 2.9);
const oakPark = new Park('Oak Park', 1953, 949, 0.4);

const allParks = [greenPark, nationalPark, oakPark];


const oceanAvenue = new Street('Ocean Avenue', 1999, 1.1, 4);
const evergreenStreet = new Street('Evergreen Street', 2008, 2.7, 2);
const fourthStreet = new Street('4th Street', 2015, 0.8);
const sunsetBoulevard = new Street('Sunset Boulevard', 1982, 2.5, 5);

const allStreets = [oceanAvenue, evergreenStreet, fourthStreet, sunsetBoulevard];

function reportParks(p) {
    console.log('----PARKS REPORT----'); 
    let totalAge = 0;
    for (const park of p) {
        totalAge += park.calculateAge();
    }    
    const numOfParks = p.length;
    const averageAge = (numOfParks > 0) ? totalAge / numOfParks : 'n/a';
    console.log(`Our ${numOfParks} parks have an average age of ${averageAge} years.`);

    for (const park of p) {
        console.log(`${park.name} has a tree density of ${park.treeDensity()} trees per square km.`);
    }
    
    p.forEach(park => {
        if (park.numOfTrees > 1000) {
            console.log(`${park.name} has more than 1000 trees.`);
        }
    });
}

function reportStreets(s) {
    console.log('----STREETS REPORT----'); 
    
    let totalLength = 0;
    for (const street of s) {
        totalLength += street.length;
    }
    const numOfStreets = s.length;
    const averageLength = (numOfStreets > 0) ? totalLength / numOfStreets : 'n/a';
    console.log(`Our ${numOfStreets} streets have a total length of ${totalLength} km, with an average of ${averageLength} km.`)
    
    for (const street of s) {
        street.classifyStreet();
    }    
}

reportParks(allParks);
reportStreets(allStreets);


//Array of objects include actor names and movies
const actors = [
    {name: "Mohanlal",movies: ["Twelthman","Janatha Garage"]},
    {name: "RajniKanth",movies: ["Robot","Padayappa"]},
    {name: "Shahrukh Khan",movies: ["Don","Pathan"]},
    {name: "Junior NTR",movies: ["Janatha Garage","RRR"]},
];
//method to find actor by movie name
function findActorByMoviesName(movieName) {

    if(!movieName || typeof movieName !== "string"){
        return "Enter a valid movie name"
    }
    const actorsInMovie = [];
    actors.forEach(actor => {
        if(actor.movies.includes(movieName)){
            actorsInMovie.push(actor.name);
        }
    })

    if(actorsInMovie.length === 0){
        return "No actors found"
    }
    return actorsInMovie;

    //method to find movies by actors name
    function findMoviesByActorName(actorName) {
        if(!actorName || typeof actorName !=="string"){
            return "provide a valid actor name"
        }
    const moviesByActor = [];
    actors.forEach(actor=>{
        if(actor.name ===actorName){
            moviesByActor.push(...actor.movies);
        }
    });
    if(moviesByActor.length === 0){
        return "no movies found in entered actors name"
    }
    return moviesByActor;
    }
}
console.log(findActorByMoviesName("Janatha Garage"));
console.log(findMoviesByActorName())
    
    

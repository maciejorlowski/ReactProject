

export function compareServerDataWithLocalStorage(movies) {

    console.log("compareServerDataWithLocalStorage");
    console.log(" ");
    if (localStorage.getItem("removedMovies") === null) {
        let tmp = [];
        localStorage.setItem("removedMovies", JSON.stringify(tmp));
    }
    if (localStorage.getItem("addedMovies") === null) {
        let tmp = [];
        localStorage.setItem("addedMovies", JSON.stringify(tmp));
    }

    let tmp = movies;
    let len = movies.length;
    movies = [];
    for (let i = 0; i < len; i++) {
        if (moveExist(tmp[i], getItemFromLocalStorageByKey("removedMovies"))) {
        } else {
            movies.push(tmp[i]);
        }
    }

    let addedMoves = JSON.parse(localStorage.getItem("addedMovies"));
    for (let i = 0; i < movies.length; i++) {
        let index = movieIndex(movies[i], addedMoves);
        if (index !== (-1)) {
            movies[i] = addedMoves[index];
        }
    }
    let newMoves = [];
    for (let i = 0; i < addedMoves.length; i++) {
        if (!moveExist(addedMoves[i], movies)) {
            newMoves.push(addedMoves[i]);
        }
    }
    movies = movies.concat(newMoves);

    // if (localStorage.getItem("movies") === null) {
    localStorage.setItem("movies", JSON.stringify(movies));
    // }

    // this.setState({movies: movies});


    if (localStorage.getItem("lastID") === null) {
        localStorage.setItem("lastID", JSON.stringify([]));
    }
    let maxId = 0;
    for (let i = 0; i < movies.length; i++) {
        if (maxId < movies[i].id) {
            maxId = movies[i].id;
        }
    }
    maxId++;

    localStorage.setItem("lastID", JSON.stringify(maxId));
    return movies;
}

export function moveExist(task, array) {
    if (array === null) {
        return false;
    }
    let movies = array;

    for (let i = 0; i < movies.length; i++) {
        if (task.id === movies[i].id) {
            return true;
        }
    }
    return false;
}

export  function getItemFromLocalStorageByKey(key) {
    return JSON.parse(localStorage.getItem(key));
}


export function movieIndex(task, array) {
    let tasks = array;

    for (let i = 0; i < tasks.length; i++) {
        if (task.id === tasks[i].id) {
            return i;
        }
    }
    return -1;
}

export function showLocalStorage(){
    console.log(allStorage());
}

export function allStorage() {
    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push(key + '=' + localStorage.getItem(key));
    }

    return archive;
}

export function clearLocalStorage(){
    localStorage.clear();
    showLocalStorage();
}

export function add(obj) {
    let id = localStorage.getItem("lastID");
    //TODO set id value to object

    let addedMovies = JSON.parse(localStorage.getItem("addedMovies"));
    addedMovies.push(obj);
    localStorage.setItem("addedMovies", JSON.stringify(addedMovies));

};


export function remove(obj) {



};
let movies = [

    'Movie1',
    'Movie2',
    'Movie3',
    'Movie4',
    'Movie5',
    'Movie6'

]

let movieURL = [
    '<img src=\"https://images-na.ssl-images-amazon.com/images/I/A1inGqJJHXL._AC_SL1500_.jpg\" >',
    '<img src=\"https://images-na.ssl-images-amazon.com/images/I/A1inGqJJHXL._AC_SL1500_.jpg\" >',
    '<img src=\"https://images-na.ssl-images-amazon.com/images/I/A1inGqJJHXL._AC_SL1500_.jpg\" >',
    '<img src=\"https://images-na.ssl-images-amazon.com/images/I/A1inGqJJHXL._AC_SL1500_.jpg\" >',
    '<img src=\"https://images-na.ssl-images-amazon.com/images/I/A1inGqJJHXL._AC_SL1500_.jpg\" >',
    '<img src=\"https://images-na.ssl-images-amazon.com/images/I/A1inGqJJHXL._AC_SL1500_.jpg\" >'

]

var i
var j

for ( i = 0; i < 6; i++) {
    document.querySelector(".info"+i).innerHTML = movies[i]
}

for (j = 0; j < 6; j++) {
    document.querySelector("#mov"+j).innerHTML = "<img src=\"https://images-na.ssl-images-amazon.com/images/I/A1inGqJJHXL._AC_SL1500_.jpg\" >";

}

function add() {

    let newMovName = document.querySelector(".movieTitle").value
    let newMov = document.querySelector(".movieAddress").value


    movies.unshift(newMovName)
    movieURL.unshift("<img src=" + newMov + " >")

    for (j = 0; j < 6; j++) {
        document.querySelector("#mov"+j).innerHTML = movieURL[j];
    }

    for ( i = 0; i < 6; i++) {
        document.querySelector(".info"+i).innerHTML = movies[i]
    }


console.log(movies)



}
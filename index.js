'use strict';

function getLyrics(artist, title) {
    fetch('https://api.lyrics.ovh/v1/' + artist + '/' + title)
        //other way to write function below without arrow function-- turns Json into an object
        // .then (function(response){
        //     return response.json();
        // })
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something is wrong.  Please try again later.'));

}

function displayResults(responseJson) {
    //console.log(responseJson.lyrics);
    $("#results").html(`<p> ${responseJson.lyrics} </p> `);
    $("#results").removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const artist = $('.js-query-artist').val();
        const title = $('.js-query-title').val();
        const responseJson = getLyrics(artist, title);

    })
}

$(watchForm);


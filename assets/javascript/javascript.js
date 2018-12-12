var cars = ["BMW", "Audi", "Mercedes", "Lamborghini", "Honda", "Toyota", "Volkswagen", "Subaru", "Nissan", "Lexus", "Infiniti",]
function renderButtons() {
    $('#buttons').empty();
    for (var i=0;i<cars.length;i++) {
        var button = $("<button>");
        button.addClass('car-btn');
        button.attr('data-name', cars[i]);
        button.text(cars[i]);
        $('#buttons').append(button);
    }
};
function displayGifs(){
    var car = $(this).attr('data-name');
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=uVCLVNVcBBEYH6a1LY4mpc6ZOLUNMlzA&q=" + car + "&limit=10&offset=0&rating=G&lang=en"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var result = response.data
        for (var i=0;i<result.length;i++) {
            var gifDiv = $('<div>')
            var gif = $('<img>');
            gif.attr('src', result[i].images.fixed_width.url)
            gifDiv.append(gif)
            $('#gif-display').prepend(gifDiv)
            console.log('gif')
        }
    });
}


$(document).ready(function() {
renderButtons()
$('.car-btn').css('margin', '5px 5px')
$(document).on("click", ".car-btn", displayGifs)

console.log('done')
});
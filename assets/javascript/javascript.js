var cars = ["BMW", "Audi", "Mercedes", "Lamborghini", "Honda", "Toyota", "Volkswagen", "Subaru", "Nissan", "Lexus", "Infiniti",]
function renderButtons() {
    $('#buttons').empty();
    for (var i=0;i<cars.length;i++) {
        var button = $("<button>");
        button.addClass('car-btn');
        button.attr('data-name', cars[i]);
        button.text(cars[i]);
        $('#buttons').append(button).attr('style', 'text-align:center;display: flex; justify-content: center');
        $('.car-btn').attr('style', 'display: inline-block; margin: 5px 5px; ');
    }
};
function displayGifs(){
    var car = $(this).attr('data-name');
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=uVCLVNVcBBEYH6a1LY4mpc6ZOLUNMlzA&q=" + car + "&limit=15&offset=0&rating=G&lang=en";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var result = response.data;
        for (var i=0;i<result.length;i++) {
            var gif = $('<img>');
            var still = result[i].images.fixed_height_still.url
            var animated = result[i].images.fixed_height.url
            gif.attr('src', still).attr('data-animated', animated).attr('data-still', still).attr('state', 'still').attr('class', car).attr('class', 'gifPic').attr('style', 'margin: 5px 3px').css('border', '3px groove #560000').css('border-radius', '10px').css('display', 'inline-block');
            $('#gif-display').prepend(gif).css('text-align', 'center');
        }
    });
}


$(document).ready(function() {
    renderButtons()
    $(document).on("click", ".car-btn", displayGifs);
    $(document).on('click', '#submitter', function(event) {
        event.preventDefault();
        var newCar = $('#car-input').val().trim();
        cars.push(newCar);
        renderButtons();
        $('#car-input').val('')
    });
    $(document).on('click', '.gifPic', function() {
        if ($(this).attr('state') === "still") {
            $(this).attr("src", $(this).attr("data-animated"));
            $(this).attr("state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("state", "still");
          }
        });
});
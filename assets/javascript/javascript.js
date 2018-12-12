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
$(document).ready(function() {
renderButtons()
$('.car-btn').css('margin', '5px 5px')

console.log('done')
})
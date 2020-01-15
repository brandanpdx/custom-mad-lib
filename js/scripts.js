$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var person = $("input#person").val();
    var place = $("input#place").val();
    var car = $("input#car").val();
    var emotion = $("input#emotion").val();
    var verb = $("input#verb").val();
    var noun = $("input#noun").val();

    $(".person").text(person);
    $(".place").text(place);
    $(".car").text(car);
    $(".emotion").text(emotion);
    $(".verb").text(verb);
    $(".noun").text(noun);

    $("#story").show();
  })
})
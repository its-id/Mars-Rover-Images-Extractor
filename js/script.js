var photosContainer = $(".imagesList");

$("button").click(function (e) {
  e.preventDefault();

  var date = $("#datepicker").val();

  console.log(date);

  if (date === "") {
    alert("Please fill the field");
    return;
  }

  // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&earth_date=2015-6-3

  let url =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" +
    date +
    "&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2";

  $.get(url, function (jsonResponse, status) {
    var photosArr = jsonResponse.photos;
    console.log(photosArr);

    if (jsonResponse.photos.length === 0) {
      alert("No photos available for this date");
      return;
    }

    $(".imagesList div").remove();

    for (let image of photosArr) {
      console.log(image);
      photosContainer.append(
        `<div class = "card"><img class="rounded" src=" ${image.img_src} " alt=${image.id}></div>`
      );
    }
  });
});

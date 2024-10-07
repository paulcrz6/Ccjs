function getDetailsMovie(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  div = div.querySelectorAll('#content_inside > .post_box');
  var listMovies = [];

  div.forEach(element => {
    var a = element.querySelector("a")

    if (a) {
      listMovies.push(a.href)
    }
  });

  return listMovies;
}

fetch("https://www.cinecalidad.ec")
  .then(response => {
    if (response.status === 200) {
      return response.text();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.log('Movies:', getDetailsMovie(response));
    // ...
  }).catch(error => {
    console.error(error);
  });

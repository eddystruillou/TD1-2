const mainEl = document.getElementsByClassName('container')[0]

function init (movie) {
  const newDiv = document.createElement('div')
  const image = document.createElement('img')
  const titreh4 = document.createElement('h4')
  image.src = movie.imagesURL
  titreh4.innerText = movie.title
  mainEl.appendChild(newDiv)
  newDiv.appendChild(image)
  newDiv.appendChild(titreh4)
  newDiv.onclick = afficheInfos.bind(movie)
}

function messErreur (error) {
  const newP = document.createElement('p')
  newP.innerText = error
  mainEl.appendChild(newP)
}

async function callMyPomise() {
  try {
    let response = await fetch('data/movies.json')
    const movies = await response.json();

    movies.films.forEach(movie => { //forEach de les data que l'on récupère
    init(movie)
  })
  } catch (error) {
    messErreur(error)
  }
}

callMyPomise()
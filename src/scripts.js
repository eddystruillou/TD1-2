const mainEl = document.getElementsByClassName('container')[0]

//Request de notre fichier movies.json
fetch('data/movie.json')
  .then(response => {
//    throw  new Error('ko') //Affiche une erreur directement
    return response.json() //Retourne une réponse HTTP que l'on va convertir en json
})
.then(json => {
//  console.log('Request successful', json)
  json.films.forEach(movie => { //forEach de les data que l'on récupère
    const newDiv = document.createElement('div')
    const image = document.createElement('img')
    const titreh4 = document.createElement('h4')
    image.src = movie.imagesURL
    titreh4.innerText = movie.title
    mainEl.appendChild(newDiv)
    newDiv.appendChild(image)
    newDiv.appendChild(titreh4)
    newDiv.onclick = afficheInfos.bind(movie)
  })
})
.catch(error => {
  const newP = document.createElement('p')
  newP.innerText = "Grosse error"
  mainEl.appendChild(newP)
})//Si a Request echoue retourne l'error en console
const mainSynop = document.getElementById('syn')

function afficheInfos() {
//  console.log(`clic sur l'image ${this.title}`)
  
  const backgrou = document.createElement('div')
  backgrou.className = 'backgrou'
  mainSynop.appendChild(backgrou)
  
  const cadre = document.createElement('div')
  cadre.className = 'cadre'
  backgrou.appendChild(cadre)

  const syn = document.createElement('h1')
  syn.innerText = this.title
  cadre.appendChild(syn)
  
  const poster = document.createElement('img')
  poster.src = this.imagesURL
  cadre.appendChild(poster)

  const cadrePara = document.createElement('div')
  cadrePara.className = 'cadrePara'
  cadre.appendChild(cadrePara)

  const conten = document.createElement('p')
  conten.innerText = this.synopsis
  cadrePara.appendChild(conten)

  const bouton = document.createElement('button')
  bouton.innerText = "Close"
  cadre.appendChild(bouton)
  bouton.onclick = closeDetail
  document.addEventListener('keydown', closeWhitEchap)
}

function closeDetail() {
  const backgrou = document.getElementsByClassName('backgrou')[0]
  mainSynop.removeChild(backgrou)
  document.removeEventListener('keydown', closeWhitEchap)
}

function closeWhitEchap(e) {
    if(e.keyCode === 27)
    closeDetail()
}
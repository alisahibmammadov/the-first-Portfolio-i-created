const qamburger = document.getElementById('qamburger')
const body = document.querySelector('body')
const geriQayit = document.querySelector('button')
geriQayit.addEventListener('click', geriMenular)
function geriMenular(e){
   const kiliklenenElement = e.target
   if(kiliklenenElement.classList.contains('geri-don')){
    kiliklenenElement.parentElement.classList.toggle('delete')
   }
}

qamburger.addEventListener('click', addToMenu)
function addToMenu(e){
    // <div class="qamburger-div">
    //   <a href="#">About</a>
    //   <a href="#">Services</a>
    //   <a href="#">Project</a>
    //   <a href="#">Blog</a>
    //   <a href="#">Book a call</a>
    // </div>
e.preventDefault()
    const div = document.createElement('div')
    div.classList.add('qamburger-div')
    const a1 = document.createElement('a')
    a1.setAttribute('href', '#')
    a1.innerText = 'About'
    div.appendChild(a1)
    const a2 = document.createElement('a')
    a2.setAttribute('href', '#')
    a2.innerText = 'Services'
    div.appendChild(a2)
    const a3 = document.createElement('a')
    a3.setAttribute('href', '#')
    a3.innerText = 'Project'
    div.appendChild(a3)
    const a4 = document.createElement('a')
    a4.setAttribute('href', '#')
    a4.innerText = 'Blog'
    div.appendChild(a4)
    const a5 = document.createElement('a')
    a5.setAttribute('href', '#')
    a5.innerText = 'Book a call'
    
    div.appendChild(a5)
    body.appendChild(div)
    const geri = document.createElement('button')
    geri.classList.add('geri-don')
    geri.innerText = 'Geri don'
    div.appendChild(geri)
    
}

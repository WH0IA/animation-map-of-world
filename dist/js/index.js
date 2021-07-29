let dot1 = document.querySelector('#dot1')
let dot2 = document.querySelector('#dot22')
let dot3 = document.querySelector('#dot23')
let dot4 = document.querySelector('#dot28')
let dot5 = document.querySelector('#dot30')


setInterval(()=>{
  if(dot1.style.animationName === 'runmat2'){
    dot1.style.animationName = 'runmat'
    dot2.style.animationName = 'runmat'
    dot3.style.animationName = 'runmat'
    dot4.style.animationName = 'runmat'
    dot5.style.animationName = 'runmat'
  }else{
  dot1.style.animationName = 'runmat2'
  dot2.style.animationName = 'runmat2'
  dot3.style.animationName = 'runmat2'
  dot4.style.animationName = 'runmat2'
  dot5.style.animationName = 'runmat2'
}
},20000)

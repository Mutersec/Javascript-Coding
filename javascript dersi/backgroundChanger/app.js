
const btn = document.getElementById('renk değiştir')

const colors = ['red', 'blue', 'yellow', 'gray', 'orange']
let currentPosition

btn.addEventListener('click', changeColor)

function changeColor() {
  if (currentPosition === undefined) {
    currentPosition = 0
  } else if (currentPosition < colors.length - 1) {
    currentPosition = currentPosition + 1
  } else {
    currentPosition = 0
  }
  document.body.style.backgroundColor = colors[currentPosition]
}

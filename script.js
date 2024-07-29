const button = document.getElementById("but")
button.onclick = click

const text = document.getElementById("text")
text.onmousemove = mousehover
text.onmouseout = mousegone

let count = 0


function click() {
  count += 1
  console.log(count)
  text.style.color = "blue"
  text.textContent = count
}

function mousehover() {
  text.style.color = "red"
}
function mousegone() {
  text.style.color = "black"
} 
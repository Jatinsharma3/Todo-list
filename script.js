// TODO LIST

function newElement() {
  let b = document.getElementById("myInput").value
  localStorage.setItem("note", JSON.stringify(b))
  document.getElementById("note").innerHTML += `<div id="note1">${b}<button 
onclick="beta(this)" class="del">X</button></div>`
 
}
function beta(e) {

  e.parentNode.remove()
}

function finish() {
  localStorage.removeItem("note")
  document.getElementById("note").innerHTML = ``
  
}



// function item(){
// let n = localStorage.getItem("note")
//   let v = document.getElementById("demo2").innerHTML = n
// }

// c.preventDefault()

// console.log("gETT")

//   let c = document.querySelectorAll(".del")
//   Array.from(c).forEach((e)=>{
//     console.log(e)
//   })
// console.log(c)



const btntoggle = document.getElementById("btntoggle")
const b2 = document.getElementById("b2")
const fon = document.getElementById("fon")


    btntoggle.addEventListener("click", ()=>{
      fon.classList.toggle("active")
      b2.classList.toggle("active")

      if(b2.classList.contains("active")){
        btntoggle.textContent ="✗"
      } else{
        btntoggle.textContent ="☰"
      }
    })

    fon.addEventListener("click", ()=>{
       fon.classList.remove("active")
      b2.classList.remove("active")
    })
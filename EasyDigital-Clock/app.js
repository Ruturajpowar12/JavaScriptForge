const hour =document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")
 

  const clock = setInterval(
    function time(){
        const date = new Date()
   let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    hour.innerText = hours.toString().padStart(2, "0");
    min.innerText = minutes.toString().padStart(2, "0");
    sec.innerText = seconds.toString().padStart(2, "0");

  },1000
     
  )
  clock()



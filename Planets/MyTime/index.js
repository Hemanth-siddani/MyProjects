const Time = () => {
   
    let date = new Date();
    let Hour = date.getHours();
    let Minute = date.getMinutes();
    let Second = date.getSeconds();
  
    
    if(Hour>12) {

        Hour -= 12;
        Hour<10? Hour="0" + Hour : Hour;
        Minute<10? Minute="0" + Minute : Minute;
        Second<10? Second="0" + Second : Second;
        document.getElementById("Heading1").textContent =` ${Hour} : ${Minute} : ${Second} ` + `${Hour>=12 && Minute>=0 && Second>0?"AM":"PM"}`;
        

    }
    else if(Hour<=12) {

        Hour<10? Hour="0" + Hour : Hour;
        Minute<10? Minute="0" + Minute : Minute;
        Second<10? Second="0" + Second : Second;
        document.getElementById("Heading1").textContent =` ${Hour} : ${Minute} : ${Second} `+`${Hour>=12 && Minute>=0 && Second>0?"PM":"AM"}`;
     
    }
    
}
setInterval(() => {
    
   Time();

},1000);
 



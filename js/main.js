const slider1 = document.getElementById("btn__prev");
const slider2 = document.getElementById("btn__next");

let text = document.getElementById("slider__text");

let numText = 1;
slider2.onclick = () => {
    numText+=1;

    if(numText <= 3){
        text.innerHTML = `${numText} из 3`;
    }
    else{
        numText =3;
        text.innerHTML = `${numText} из 3`;
    }
    
    console.log(numText);
   
}   

slider1.onclick = () => {
    numText-=1;

    if(numText >= 1){
        text.innerHTML = `${numText} из 3`;
    }
    else{
        numText =1;
        text.innerHTML = `${numText} из 3`;
    }
    
   
   
}  


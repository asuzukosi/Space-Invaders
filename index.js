
document.addEventListener("DOMContentLoaded",()=>{
  //alert("Hello");
  let direction = 0
  let position = 84
  let width = 10;
  let aliensDown = [];
  let alienInvaders = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,28,29]
  for(let i = 0; i<100;i++){
    let block = document.createElement("div");
    block.setAttribute("class","box");
    block.setAttribute("id", i);
    document.getElementById("grid").append(block);
  }

  for(let j of alienInvaders){
    document.getElementById(j).setAttribute("class","invaders");
  }

function renderInvaders(){
  for(let j of alienInvaders){
    document.getElementById(j).setAttribute("class","box");
  }
  alienInvaders = alienInvaders.map((elem)=> elem+10);
  if(alienInvaders[0]==80){
  alienInvaders = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,28,29];
  }
  for(let j of alienInvaders){
    document.getElementById(j).setAttribute("class","invaders");
  }
  if(alienInvaders.indexOf(position)>-1){
    position = null;
    alert("GAME OVER");
  }
}

setInterval(()=>{
  renderInvaders();

},3000)

document.getElementById(position).setAttribute("class","spaceShip");

function movement(e){
  if(e.keyCode == 39){
    document.getElementById(position).setAttribute("class","box");
    position++;
    if(position!== 79 && position!== 90){

      document.getElementById(position).setAttribute("class","spaceShip");
    }
    else{
      position--;
      document.getElementById(position).setAttribute("class","spaceShip");
    }

  }

  else if(e.keyCode == 37){
    document.getElementById(position).setAttribute("class","box");
    position--;
    if(position!== 79 && position!== 90){
      document.getElementById(position).setAttribute("class","spaceShip");
    }
    else{
      position++;
      document.getElementById(position).setAttribute("class","spaceShip");
    }
  }
  else if(e.keyCode == 32){
    let laserPosition = position;

    document.getElementById(laserPosition).setAttribute("class","bullet");
    setTimeout(()=>{
     document.getElementById(laserPosition).setAttribute("class","spaceShip");
   },10)
    setInterval(()=>{
     document.getElementById(laserPosition).setAttribute("class","box");
      laserPosition-=10;
      if(laserPosition>0){

        document.getElementById(laserPosition).setAttribute("class","bullet");
      }
      else{
        laserPosition = 0;
      }
      if(alienInvaders.indexOf(laserPosition)>-1){
        console.log(laserPosition)
        alienInvaders.splice(alienInvaders.indexOf(laserPosition),1);
        laserPosition = 0;
        //console.log(alienInvaders.length);
        for(let j of alienInvaders){
          document.getElementById(j).setAttribute("class","invaders");
        }

      }

    },300)

  }
}

document.addEventListener("keyup",movement)
})

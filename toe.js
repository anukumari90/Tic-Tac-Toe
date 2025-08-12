const game=document.querySelector(".game");
const btn=document.querySelector(".btn");
const box=document.querySelectorAll(".box");
const msg=document.querySelector(".msg")
let turnO=true;
let found=false;
const matchptrn=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("btn was clicked");
        if (turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
      checkptrn();
  })
})

const checkptrn=()=>{
    for(let ptrn of matchptrn){
        let pos1=box[ptrn[0]].innerText;
        let pos2=box[ptrn[1]].innerText;
        let pos3=box[ptrn[2]].innerText;
        if(pos1!==""&& pos2!==""&&pos3!==""){
           if(pos1===pos2&&pos2===pos3){
             console.log("winner",pos1)
             msg.innerText=`winner is ${pos1}`
             for(let boxes of box){
                  boxes.disabled=true;
                }
               found=true;
            }
        
            if(!found){
                let allfilled=[...box].every(boxes=>boxes.innerText!=="");
                if(allfilled){
                    msg.innerText="draw";
                }
            }   
        }       
    }
}





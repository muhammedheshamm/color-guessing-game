let squares=document.querySelectorAll('.square');
let easy = document.getElementById('easy');
let hard = document.getElementById('hard');
let isHard=false;
let correctColor="";
let spanaya=document.getElementById('win-or-lose');
let h1=document.querySelector('h1');
let o1=document.getElementById("o1");


addOrDelete('none');
colorUp();
easy.onclick=()=>{
    if(!easy.classList.contains('active')){
        easy.classList.add('active');
    }
    if(hard.classList.contains('active')){
        hard.classList.remove('active');
    }
    addOrDelete('none');
    isHard=false;
    colorUp()
}

hard.onclick=()=>{
    if(!hard.classList.contains('active')){
        hard.classList.add('active');
    }
    if(easy.classList.contains('active')){
        easy.classList.remove('active');
    }
    addOrDelete("block");
    isHard=true;
    colorUp()
}

o1.onclick=()=>{
    if(o1.innerText==="NEW COLORS"){
        colorUp();
    }
    else{
        reset();
    }
}

function reset(){
    o1.innerText="NEW COLORS"
    spanaya.innerText="";
    h1.style.backgroundColor='#2c8e99';
    colorUp();
}

function addOrDelete(value){
    for(let i =squares.length-1;i>=squares.length/2;i--){
        squares[i].style.display=value; 
    }
}

function colorUp(){
    let r
    if(!isHard){
        for(let i =0;i<squares.length/2;i++){
            squares[i].style.backgroundColor=genereteColor();
        }   
        r = Math.floor(Math.random() * 3);
    }
    else{
        for(let i =0;i<squares.length;i++){
            squares[i].style.backgroundColor=genereteColor();
        }
        r = Math.floor(Math.random() * 6);
    }
    correctColor=squares[r].style.backgroundColor
    document.getElementById('rgb').innerText=correctColor
    squares.forEach((square)=> square.style.opacity=1);
    o1.innerText="NEW COLORS"
    spanaya.innerText="";
    h1.style.backgroundColor='#2c8e99';
}

function check(){
    squares.forEach((square)=>{
        square.addEventListener('click' , (e)=>{
            if(e.target.style.backgroundColor==correctColor){
                spanaya.innerText="CORRECT!";
                squares.forEach((square)=> {
                    square.style.backgroundColor=correctColor
                    square.style.opacity=1;
                    });
                h1.style.backgroundColor=correctColor;
                o1.innerText="PLAY AGAIN";
            }
            else{
                spanaya.innerText="TRY AGAIN!";
                e.target.style.opacity=0;
            }

        })
    })
}
check();


function genereteColor(){
    let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}


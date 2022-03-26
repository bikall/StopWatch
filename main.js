var milli=0;
var min=0;
var sec=0;
var secWord=0;
var minWord=0;
var milliWord=0;
Pause.disabled=true;
Reset.disabled=true;
start.addEventListener('click', function (){

Time=setInterval(()=>{
  milli+=1
  if(milli===100){
    milli=0;
    sec+=1;
  }
  if(sec===60){
    sec=0;
    min+=1;
  }
if(milli<10){
  milliWord="0"+milli;
}else{
  milliWord=milli;
}
  if(sec<10){
    secWord="0"+sec;
  }else{
    secWord=sec;
  }
  if(min<10){
   minWord="0"+min;
  }else{
    minWord=min;
  }
  if(milli<10){
    milliWord='0'+min;
  }
  else{
    milliWord=milli;
  }
  screenw.innerText=minWord+':'+secWord+':'+milliWord;
},10)
  start.disabled=true;
  Pause.disabled=false;
  Reset.disabled=false;
  if(start.innerText=='Resume'){
    start.innerText='Start'
}})

Pause.addEventListener('click',()=>{
  clearInterval(Time);
  start.disabled=false;
  if(start.innerText=='Start'){
    start.innerText='Resume'
  }
})
Reset.addEventListener('click',()=>{
  start.disabled=false;
  milli = 0;
  min = 0;
  sec = 0;
  start.innerText='Start'
  screenw.innerText='00'+':'+'00'+':'+'00'
  clearInterval(Time)
})


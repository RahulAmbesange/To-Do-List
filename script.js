const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');
function addTask(){
 if(inputBox.value === ''){
  alert('You must write something');
 }
 else{
  let li=document.createElement('li');
  li.innerHTML=inputBox.value;
  listContainer.appendChild(li);
  let span=document.createElement('span');
  span.innerHTML='\u00d7'; /* "X" THIS SIGN  */
 li.appendChild(span) 
 }
 inputBox.value='';//this is for new value added
 saveData()//below function call`

}
listContainer.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData()
  }
},false);


function saveData(){
  localStorage.setItem("data", listContainer.innerHTML); /*This is for when we load webpage the previous data never refresh or never gone anywhere 
  this is setItem the data */
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");/*and this is getItem data */
}
showTask();
const logDiv = document.getElementById('log');
const statsDiv = document.getElementById('stats');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');


startBtn.addEventListener('click',()=>{
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    startBtn.disabled = true;
    stopBtn.disabled = false;
})
stopBtn.addEventListener('click',()=>{
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleUp);
    logDiv.textContent = "";
    statsDiv.textContent =" ";
    stopBtn.disabled = true;
    startBtn.disabled = false;
})


function handleDown(e){
    logDiv.textContent = `Key ${e.key} Pressed Down`;
    statsDiv.textContent = 'Key is Down';

}
function handleUp(e){
    logDiv.textContent = `Key ${e.key} Pressed Up`;
    statsDiv.textContent = 'Key is Up';

}
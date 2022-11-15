const nextBtnEl = document.querySelector("#next");
const prevBtnEl = document.querySelector("#prev");
const stepsEl = document.querySelectorAll(".step");
const progressBarFrontEl = document.querySelector(".progressBarFront");


let currentChecked = 1;

nextBtnEl.addEventListener("click", ()=>{
    currentChecked++;
    if(currentChecked > stepsEl.length){
        currentChecked = stepsEl.length;
    }
    updateStepProgress();
})

prevBtnEl.addEventListener("click", ()=>{
    currentChecked--;
    if(currentChecked < 1){
        currentChecked = 1;
    }
    updateStepProgress();
})

function updateStepProgress(){
    stepsEl.forEach((stepEl, idx)=>{
        if(idx<currentChecked){
            stepEl.classList.add("checked");
            stepEl.innerHTML = `<i class="fas fa-check"></i> <small>${idx === 0 ? "Start" : idx === stepsEl.length - 1 ? "Final" : "Step " + idx}</small>`;
        }else{
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `<i class="fas fa-times"></i>`
        }
    });

    const checkedNumber = document.querySelectorAll(".checked");

    progressBarFrontEl.style.width = ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";
    
    if(currentChecked === 1){
        prevBtnEl.disabled = true;
    }else if(currentChecked === stepsEl.length){
        nextBtnEl.disabled = true;
    }else{
        prevBtnEl.disabled = false;
        nextBtnEl.disabled = false;
    }
}
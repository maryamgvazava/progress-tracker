

// // Use myArray.map(...).join('') instead of myArray.forEach(...).

// // In a template literal, the results of code within a placeholder, i.e. within ${...}, are coerced to a string before insertion. A forEach(...) loop only returns undefined by definition. In contrast, map(...) returns a use-able value, i.e. an array. However, when the array is co-erced to a string, by default commas are inserted between elements. This results in unwanted text nodes, each containing a comma, appearing between the intended insertions. However, this default can be changed by explicitly joining the array elements with an empty string using .join(''):
// // ......If you want to store HTML code as template literals in an array and then iterate over that array while keeping the HTML elements intact (instead of getting them as strings), you can achieve this by using the innerHTML property of a container element like a <div>.

  


  let progressbar = document.querySelector('.progressbar');
  let doneActivities = document.querySelector('.doneActivities');
  let submittedActivitySection = document.querySelector('.submittedActivitySection');
  let progress = 0;

  let totalActivity = [];


window.onload = function() {
  let activityInput = document.querySelector('#activityInput');
  let selectRepeatnumber = document.querySelector('#selectRepeatnumber');
  let qty = document.querySelector('#qty');
  let submit = document.querySelector('#submit');
 
  let WarningDiv = document.querySelector('.WarningDiv');
  

  submit.addEventListener('click', function(event) {
    event.preventDefault();

    let addedItems = `
      <div class="mainSubmition item">
        <div class="checkDiv">
          <form action="" id="formactivity">
            <input type="checkbox">
          </form>
          <span class="activityName">${activityInput.value}</span>
        </div>
      
     
      </div>
    
    `;




    let addHeader = `<div class="submittedHeader">
    <span class="Headername">⚪${activityInput.value}</span> 
    <div class="add_remove_icons">
      <p class="remove"> <img src = "./images/minus.png" >  </p>
      <p class="addtasks"> <img src = "./images/plus.png" >  </p>
      <br/>
      </div>
      </div>`;


let container;
let newActivitySection = document.querySelector('.newActivitySection')
    if (selectRepeatnumber.value == "" && qty.value == "" && activityInput.value !== ""){
      container = document.createElement('div');
      submittedActivitySection.appendChild(container);

      container.classList.add('newActivitySection')

      container.innerHTML += addHeader;

      WarningDiv.style.display = "none";

    } 
    // else if (selectRepeatnumber.value !== "" && qty.value !== "" && activityInput.value !== "") {

    //   submittedActivitySection.innerHTML += addedItems;

    //   totalActivity.push(addedItems);

    //   WarningDiv.style.display = "none";

    // } else {

    //   WarningDiv.style.display = "flex";

    // }





    // const container = document.createElement('div');
    // totalActivity.forEach(htmlCode => {
    //   container.innerHTML += htmlCode;
    // })
    logArray();
  });














  
  submittedActivitySection.addEventListener('change', function(event) {
    if (event.target.matches('.mainSubmition.item input[type="checkbox"]')) {
      const checkedCheckbox = event.target;
      const item = checkedCheckbox.closest('.mainSubmition.item');
      if (checkedCheckbox.checked) {
        doneActivities.appendChild(item);
       } 
    }
    logArray()
  });



  doneActivities.addEventListener('change', function(event){
    if(event.target.matches('.mainSubmition.item input[type="checkbox"]')){
      const checkedCheckbox = event.target;
      const item = checkedCheckbox.closest('.mainSubmition.item');
      if (!checkedCheckbox.checked) {
        submittedActivitySection.appendChild(item);
      } 
    }
    logArray()
  })








};


function logArray() {
  console.clear();

  const mainSubmitionDivs = submittedActivitySection.querySelectorAll('.mainSubmition');
  let countMainSubmition = mainSubmitionDivs.length;
  const doneActivitiesCount = doneActivities.children.length;
  progress =  Math.round(doneActivitiesCount * 100 / (Number(countMainSubmition) + Number(doneActivitiesCount)))



  if(isNaN(progress)){
    progress = 0
  } else{
    simulateUpload()
  }
    

function enableProgessBar() {
  progressbar.setAttribute("role", "progressbar");
  progressbar.setAttribute("aria-valuenow", progress);
  progressbar.setAttribute("aria-live", "polite");
}

enableProgessBar();

function updateProgress(progress) {
  progressbar.setAttribute("aria-valuenow", progress);
  progressbar.style.setProperty("--progress", progress + "%");
}

function simulateUpload() {

  progressbar.setAttribute("aria-busy", "true");
  updateProgress(progress);
  intervalTimer = setInterval(() => {
    updateProgress(progress);
    if (progress >= 100) {
      progressbar.setAttribute("aria-busy", "false");
      clearInterval(intervalTimer);
    }
  }, 500);
}













}

document.addEventListener('DOMContentLoaded', function() {
  let plusbtn = document.querySelector('.addtasks')
  let minusbtn = document.querySelector('.minus')
  console.log(plusbtn)
  plusbtn.addEventListener('click', function(e){
    e.preventDefault();


    // let addActivities = `
    // <div class="reps">
    // <div class="minDiv">${selectRepeatnumber.value}</div>
    // <div class="qtyDiv">${qty.value}</div>
    // </div>`;
  
    
  console.log('hello')
    // newActivitySection.innerHTML+=addActivities
  })
});
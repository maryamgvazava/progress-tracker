

// // Use myArray.map(...).join('') instead of myArray.forEach(...).

// // In a template literal, the results of code within a placeholder, i.e. within ${...}, are coerced to a string before insertion. A forEach(...) loop only returns undefined by definition. In contrast, map(...) returns a use-able value, i.e. an array. However, when the array is co-erced to a string, by default commas are inserted between elements. This results in unwanted text nodes, each containing a comma, appearing between the intended insertions. However, this default can be changed by explicitly joining the array elements with an empty string using .join(''):
// // ......If you want to store HTML code as template literals in an array and then iterate over that array while keeping the HTML elements intact (instead of getting them as strings), you can achieve this by using the innerHTML property of a container element like a <div>.

  


let progressinPerCent = document.querySelector('.progressinPerCent');
  let doneActivities = document.querySelector('.doneActivities');
  let submittedActivitySection = document.querySelector('.submittedActivitySection');
const progressbar = document.querySelector('.progressbar')


  let countCheckeditems = 0;
  let addedActivityItems = 0;


    let totalActivity = [];
    let totalPerformed = [];

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
        <div class="reps">
          <div class="minDiv">${selectRepeatnumber.value}</div>
          <div class="qtyDiv">${qty.value}</div>
        </div>
     
      </div>
    
    `;

    let addHeader = `<span class="Headername">⚪${activityInput.value}</span> <br/>`;

    if (selectRepeatnumber.value == "" && qty.value == "" && activityInput.value !== "") {
      submittedActivitySection.innerHTML += addHeader;
      WarningDiv.style.display = "none";
    } else if (selectRepeatnumber.value !== "" && qty.value !== "" && activityInput.value !== "") {
      submittedActivitySection.innerHTML += addedItems;
    
      totalActivity.push(addedItems);
      WarningDiv.style.display = "none";
    } else {
      WarningDiv.style.display = "flex";
    }
    const container = document.createElement('div');
    totalActivity.forEach(htmlCode => {
      container.innerHTML += htmlCode;
    })
    logArray();
  });

  // Event delegation for checkbox changes within the added items
  submittedActivitySection.addEventListener('change', function(event) {
    if (event.target.matches('.mainSubmition.item input[type="checkbox"]')) {
      const checkedCheckbox = event.target;
      const item = checkedCheckbox.closest('.mainSubmition.item');
      // console.log('Checkbox state:', checkedCheckbox.checked);
      if (checkedCheckbox.checked) {
        // console.log('success');
        doneActivities.appendChild(item);
        // console.log(doneActivities.childNodes.length)

        totalPerformed.push(item)      } 
    }
    logArray()
  });



  doneActivities.addEventListener('change', function(event){
    if(event.target.matches('.mainSubmition.item input[type="checkbox"]')){
      const checkedCheckbox = event.target;
      const item = checkedCheckbox.closest('.mainSubmition.item');
      if (!checkedCheckbox.checked) {
        // console.log('success!!');
        submittedActivitySection.appendChild(item);
      } 
    }
    logArray()
  })


};


function logArray() {
  console.clear();
  // addedActivityItems = totalActivity.length;
 


    const submittedActivityCount = submittedActivitySection.children.length;
  const doneActivitiesCount = doneActivities.children.length;
let perCent = doneActivitiesCount * 100 / (Number(submittedActivityCount) + Number(doneActivitiesCount))

console.log("Submitted Activities Count:", submittedActivityCount);
  console.log("Done Activities Count:", doneActivitiesCount);


  if(isNaN(perCent)){
    progressinPerCent.innerHTML = `${0}%` ;
  } else{
    progressinPerCent.innerHTML = `${perCent.toPrecision(3)} %`;
  }
    

}


function enableprogressbar(){
  progressbar.setAttribute('role', 'progressbar')
  progressbar.setAttribute('aria-valuenow', 30)
  progressbar.setAttribute('aria-live', 'polite')
}


enableprogressbar()




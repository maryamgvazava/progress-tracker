

// // Use myArray.map(...).join('') instead of myArray.forEach(...).

// // In a template literal, the results of code within a placeholder, i.e. within ${...}, are coerced to a string before insertion. A forEach(...) loop only returns undefined by definition. In contrast, map(...) returns a use-able value, i.e. an array. However, when the array is co-erced to a string, by default commas are inserted between elements. This results in unwanted text nodes, each containing a comma, appearing between the intended insertions. However, this default can be changed by explicitly joining the array elements with an empty string using .join(''):
// // ......If you want to store HTML code as template literals in an array and then iterate over that array while keeping the HTML elements intact (instead of getting them as strings), you can achieve this by using the innerHTML property of a container element like a <div>.

  


document.addEventListener('DOMContentLoaded', function() {
  const progressbar = document.querySelector('.progressbar');
  const doneActivities = document.querySelector('.doneActivities');
  const submittedActivitySection = document.querySelector('.submittedActivitySection');
  let progress = 0;

  const newActivitySection = document.querySelector('.newActivitySection')
  const totalActivity = [];

  const activityInput = document.querySelector('#activityInput');
  const submit = document.querySelector('#submit');
  const WarningDiv = document.querySelector('.WarningDiv');

  submit.addEventListener('click', function(event) {
    event.preventDefault();

  

    const addHeader = `
      <div class="submittedHeader">
        <span class="Headername">⚪${activityInput.value}</span> 
        <div class="add_remove_icons">
          <p class="remove"> <img src="./images/minus.png">  </p>
          <img src="./images/plus.png" class="addtasks" width="30" height="30"> 
        </div>
      </div>
    `;

    if (activityInput.value !== "") {
      const container = document.createElement('div');
      submittedActivitySection.appendChild(container);
      container.classList.add('newActivitySection')
      container.innerHTML += addHeader;
      WarningDiv.style.display = "none";
    }

    if (activityInput.value === "") {
      WarningDiv.style.display = "flex";
    }
  });

  document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('addtasks')) {
      const container1 = document.createElement('div');
      submittedActivitySection.appendChild(container1);
      container1.classList.add('newActivitySection1')
      container1.innerHTML += `
        <select name="" id="selectRepeatnumber">
          <option value="" selected disabled>amount of reps</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="130">130</option>
          <option value="104">104</option>
        </select>
        <select name="" id="qty"> 
          <option value="" selected disabled>duration of reps</option>
          <option value="min">min</option>
          <option value="qty">qty</option>
        </select> 
        <button type="submit" class="btn btn-danger add">add</button>
      `;
    }
  });





  let addActivities = document.querySelector('.add')
  addActivities.addEventListener('click', function(){
    const addedItems = `
    <div class="mainSubmition item">
      <div class="checkDiv">
        <form action="" id="formactivity">
          <input type="checkbox">
        </form>
        <span class="activityName">${selectRepeatnumber.value}</span>
        <span class="activityName">${qty.value}</span>
      </div>
    </div>
  `;

  let newActivitySection = document.querySelector('.newActivitySection')
  const container1 = document.createElement('div');
  newActivitySection.appendChild(container1);
  container1.classList.add('newActivitySection1')
  container1.innerHTML += addedItems;
    totalActivity.push(addedItems);
    WarningDiv.style.display = "none";
    totalActivity.forEach(htmlCode => {
      container.innerHTML += htmlCode;
    })
  })
 
});




    // let remove = document.querySelector('.remove')
    // remove.addEventListener('click', function(){
    //   //უნდა წაიშალოს ბოლოს დამატებული
    // })


   

 


    // const container = document.createElement('div');

    // logArray();
 









  
  // submittedActivitySection.addEventListener('change', function(event) {
  //   if (event.target.matches('.mainSubmition.item input[type="checkbox"]')) {
  //     const checkedCheckbox = event.target;
  //     const item = checkedCheckbox.closest('.mainSubmition.item');
  //     if (checkedCheckbox.checked) {
  //       doneActivities.appendChild(item);
  //      } 
  //   }
  //   // logArray()
  // });




//   doneActivities.addEventListener('change', function(event){
//     if(event.target.matches('.mainSubmition.item input[type="checkbox"]')){
//       const checkedCheckbox = event.target;
//       const item = checkedCheckbox.closest('.mainSubmition.item');
//       if (!checkedCheckbox.checked) {
//         submittedActivitySection.appendChild(item);
//       } 
//     }
//     logArray()
//   })




// function logArray() {
//   // console.clear();

//   const mainSubmitionDivs = submittedActivitySection.querySelectorAll('.mainSubmition');
//   let countMainSubmition = mainSubmitionDivs.length;
//   const doneActivitiesCount = doneActivities.children.length;
//   progress =  Math.round(doneActivitiesCount * 100 / (Number(countMainSubmition) + Number(doneActivitiesCount)))



//   if(isNaN(progress)){
//     progress = 0
//   } else{
//     simulateUpload()
//   }
    

// function enableProgessBar() {
//   progressbar.setAttribute("role", "progressbar");
//   progressbar.setAttribute("aria-valuenow", progress);
//   progressbar.setAttribute("aria-live", "polite");
// }

// enableProgessBar();

// function updateProgress(progress) {
//   progressbar.setAttribute("aria-valuenow", progress);
//   progressbar.style.setProperty("--progress", progress + "%");
// }

// function simulateUpload() {

//   progressbar.setAttribute("aria-busy", "true");
//   updateProgress(progress);
//   intervalTimer = setInterval(() => {
//     updateProgress(progress);
//     if (progress >= 100) {
//       progressbar.setAttribute("aria-busy", "false");
//       clearInterval(intervalTimer);
//     }
//   }, 500);
// }



// }

// document.addEventListener('DOMContentLoaded', function() {
//   let plusbtn = document.querySelector('.addtasks')
//   let minusbtn = document.querySelector('.minus')
//   console.log(plusbtn)
//   plusbtn.addEventListener('click', function(e){
//     e.preventDefault();


//     // let addActivities = `
//     // <div class="reps">
//     // <div class="minDiv">${selectRepeatnumber.value}</div>
//     // <div class="qtyDiv">${qty.value}</div>
//     // </div>`;
  
    
//   console.log('hello')
//     // newActivitySection.innerHTML+=addActivities
//   })
// });

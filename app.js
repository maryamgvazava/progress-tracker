

window.onload = function() {
    let activityInput = document.querySelector('#activityInput');
    let selectRepeatnumber = document.querySelector('#selectRepeatnumber');
    let qty = document.querySelector('#qty');
    let submit = document.querySelector('#submit');
    let submittedActivitySection = document.querySelector('.submittedActivitySection')
    let WarningDiv = document.querySelector('.WarningDiv');
    let progressinPerCent  = document.querySelector('.progressinPerCent')

    
    let totalActivity=[]
    let countCheckeditems = 0
    
    submit.addEventListener('click', function(event) {
      
        event.preventDefault();
   
   let addedItems = 
   `  
<div class="mainSubmition">
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
<hr/>
` 
let addHeader = `<span class="Headername">⚪${activityInput.value}</span> <br/>`

if(selectRepeatnumber.value == "" &&  qty.value == "" &&  activityInput.value !== ""){
     submittedActivitySection.innerHTML+=addHeader;
     WarningDiv.style.display = "none"
} else if(selectRepeatnumber.value !== "" &&  qty.value !== "")  { 
    submittedActivitySection.innerHTML+=addedItems
    totalActivity.push(addedItems)
    WarningDiv.style.display = "none"
} 
if(selectRepeatnumber.value !== "" &&  qty.value == "" ||selectRepeatnumber.value == "" &&  qty.value !== "" || activityInput.value == "" && selectRepeatnumber.value == "" &&  qty.value == ""){
    WarningDiv.style.display = "flex"
    
}

updateProgress()

activityInput.value = '';
qty.value = '';
selectRepeatnumber.value = '';
  
    });



    function updateProgress() {
        progressinPerCent.innerHTML = totalActivity.length
      }



      totalActivity.forEach(function countEntry(entry) {
console.log(entry)
      })
 console.log(totalActivity)
 
}





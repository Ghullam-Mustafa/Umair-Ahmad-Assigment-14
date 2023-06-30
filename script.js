
let user = {
    firstName : "Ghullam",
    lastName : "Mustafa",
    city : "Faisalabad",
    country : "Pakistan",
    dateCreated : new Date(),
    status : "active",
    id : "123456789",
    dob : "2000-06-30",
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(user.fullName);


// ------------------------------------------------------------------------------------------------------------------

var users = [];

function User(firstName,lastName,email,dob)



// ============================================================table=====================================

// function showTable() {
    
// }
// Clear Output / Result  
// document.getElementById('clearOutputHtml').onclick = function(){
//     console.log("hi");
// }


        // document.getElementById("clearOutputHtml").onclick = function () {
//     let outputBoxHtml = document.getElementById("output").innerHTML;

//     if (!outputBoxHtml.length) {
//         showNotification("It's already empty. " , "error")
//         // toastifySuccess("It's already empty")
//     }
//     else{
//         // clearOutput();
//         showNotification("Output / Result box has been cleared.", "success")
//         // toastifySuccess("Output / Result box has been cleared.")
//     }
// }
// Toastify Custom function

    function showNotification(msg,type){
        let bgColor;

        switch (type) {
            case "success":
                bgColor = "linear-gradient(to right, #1D976C, #93F99)"
                break;
            case "error":
                bgColor = "linear-gradient(to right, #93291e, #ed213a)"
                break;    
            default:
                bgColor = "#000"
                break;
        }
    


    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: bgColor,
        },
      }).showToast();
    }


    //----------------------------------------------------------------------------------- 
    var users = [];

    function user() {
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.email = email ;
        this.dob = dob ;
    }
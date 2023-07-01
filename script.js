
// let user = {
//     firstName : "Ghullam",
//     lastName : "Mustafa",
//     city : "Faisalabad",
//     country : "Pakistan",
//     dateCreated : new Date(),
//     status : "active",
//     id : "123456789",
//     dob : "2000-06-30",
//     fullName : function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// console.log(user.fullName);


// // ------------------------------------------------------------------------------------------------------------------

// var users = [];

// function User(firstName,lastName,email,dob)



// // ============================================================table=====================================

// // function showTable() {
    
// // }
// // Clear Output / Result  
// ===========================================================================================================
function handleSubmit() {
    event.preventDefault();

    let firstName = getFieldValue("firstName");
    let lastName = getFieldValue("lastName");
    let email = getFieldValue("email");
    let dob = getFieldValue("dob");

    firstName = firstName.trim()
    lastName = lastName.trim()
    email = email.trim()

    if (firstName.length < 3) {
        showNotification("Please enter your first name correctly .", "error")
        return
    }
    if (!emailFormat.test(email)) {
        showNotification("Please enter your email correctly.", "error")
    }
    if (!dob) {
        showNotification("Please enter your date of birth " , "error")
    }

    let user = {
        firstName,
        lastName,
        email,
        dob,
    }

    // let user = new User(firstName, lastName , email , dob)
    user.id = getRandomId();
    user.dateCreated = new Date().getTime();
    user.push(user)
    showNotification("A new user been successfully added.", "success")
}
// =============================================================================================


        document.getElementById("clearOutput").onclick = function () {
    let outputBoxHtml = document.getElementById("output").innerHTML;

    if (!outputBoxHtml.length) {
        showNotification("It's already empty. " , "error")
        // toastifySuccess("It's already empty")
    }
    else{
        // clearOutput();
        showNotification("Output / Result box has been cleared.", "success")
        // toastifySuccess("Output / Result box has been cleared.")
    }
}
// // Toastify Custom function

    function showNotification(msg,type){
        let bgColor;
        let textColor;

        switch (type) {
            case "success":
                bgColor = "linear-gradient(to right, #1D976C, #93F99)"
                textColor = "red"
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
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: bgColor,
          color : textColor
        },
      }).showToast();
    }

    const toastifySuccess = (msg) => {
        
    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:"linear-gradient(to right, #1D976C, #93F99)",
        },
      }).showToast();
    }

    const toastifyError = (msg) => {
        
        Toastify({
            text: msg,
            duration: 3000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background:"linear-gradient(to right, #1D976C, #93F99)",
            },
          }).showToast();
        }


//     //----------------------------------------------------------------------------------- 
    var users = [];

    function User(firstName,lastName,email,dob) {
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.email = email ;
        this.dob = dob ;
    }



    // ===================field value==========================================

    


function  getFieldValue (fielId) {
       return document.getElementById(fielId).value
      }  


// ================================output clear ======================================

function clearOutput () {
    output.innerHTML = " ";
}

// ================================email format ======================================
var emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// console.log(emailFormat.test(email));
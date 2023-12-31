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
// =================================showoutput====================================


// ================================output clear ======================================

function clearOutput() {
    document.getElementById('output').innerHTML = " ";
}

// ================================email format ======================================
var emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// console.log(emailFormat.test(email));


// ========get rendom id============================================================

function getRandomId(){
    return Math.random().toString(36).slice(2)
}


// =================================================================rendom===================
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

// console.log(user.fullName);


// // ------------------------------------------------------------------------------------------------------------------




// // ============================================================table=====================================

function showTable() {
    if (!users.length) {
       showNotification("There is not a single user available.","error") 
       return;
    }

    let tableStartingCode = '<div class="table-responsive"><table class="table">';
    let tableEndingCode = '</table></div>';

    let tableHead = '<thead><tr><th scope = "col">#</th><th scope = "col">First Name</th><th  scope = "col">Last Name</th><th  scope = "col">Email</th></thead>';
    let tableBody = '';

    for (let i = 0; i < users.length; i++) {
        tableBody += '<tr><th  scope = "row">'+ (i + 1)+'</th><td>' + users[i].firstName +'</td><td>'+users[i].lastName + '</td><td>' +users[i].email+ '</td></tr>';
    }

    let table = tableStartingCode + tableHead+"<tbody>" + tableBody + "</tbody>" + tableEndingCode;
    document.getElementById('output').innerHTML = table;
    showOutput(table);
    // console.log(table);
    
}
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
    user.status = "active"
    user.role = "student"

    users.push(user)
    showNotification("A new user been successfully added.", "success")
    // console.log(users);
    showTable(user)
}
// =============================================================================================


        document.getElementById("clearOutput").onclick = function () {
    let outputBoxHtml = document.getElementById("output").innerHTML;

    if (!outputBoxHtml.length) {
        showNotification("It's already empty. " , "error")
        // toastifySuccess("It's already empty")
    }
    else{
        clearOutput();
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


function HostingPlan(monthly,diskSpace, dataTransfer){
    this.monthly = monthly;
    this.diskSpace = diskSpace;
    this.dataTransfer = dataTransfer
}

let basicPlan = new HostingPlan(3.99,100+"GB" ,1000)

function showOutput(element) {
    document.getElementById('output').innerHTML = element
}




function butons3() {
    if (!users.length) {
        showNotification("There is  not a single user available.","error")
    }
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
    // console.log(users)
}

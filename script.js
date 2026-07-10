// =====================================
// Revamp Technologies Website Script
// =====================================


// Website loaded successfully

document.addEventListener("DOMContentLoaded", function(){

    console.log(
        "Revamp Technologies website loaded successfully."
    );


});





// =====================================
// Basic Form Validation
// =====================================


function validateForm(form){

    let inputs = form.querySelectorAll(
        "input, textarea, select"
    );


    let valid = true;


    inputs.forEach(function(input){


        if(
            input.value.trim()==="" &&
            input.hasAttribute("required")
        ){

            input.style.border =
            "1px solid red";

            valid=false;

        }


    });



    if(valid){

        alert(
        "Thank you for contacting Revamp Technologies. Our team will get back to you soon."
        );

    }


    return valid;

}






// =====================================
// WhatsApp Enquiry Helper
// =====================================


function openWhatsApp(message){


    let phone =
    "91XXXXXXXXXX";


    let url =
    "https://wa.me/"
    + phone
    +"?text="
    +encodeURIComponent(message);



    window.open(
        url,
        "_blank"
    );


}

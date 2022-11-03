// ->->->->->->->->->-> JAVASCRIPT <-<-<-<-<-<-<-<-<-<-


// CODE FOR CONTACT FORM
btnSubmit = () => {
    var userName = document.getElementById("name").value
    var userEmail = document.getElementById("email").value
    var errorMsgName = document.getElementById("hiddenErrorMsgName")
    var errorMsgEmail = document.getElementById("hiddenErrorMsgEmail")
    var form_Submission_Msg = document.getElementById("form_Submission_Msg")

    if (userName == "") {
        errorMsgName.style.display = "block"
    } else if (userName == parseInt(userName)) {
        errorMsgName.style.display = "block"
    } else if (userName != "") {
        // console.log("WORKING")
        errorMsgName.style.display = "none"
    } else {
        errorMsgName.style.display = "none"

    }

    if (userEmail == "") {
        errorMsgEmail.style.display = "block"
    } else if (userEmail == "@") {
        errorMsgEmail.style.display = "block"
    } else if (userEmail == parseInt(userEmail)) {
        errorMsgEmail.style.display = "block"
    } else {
        errorMsgEmail.style.display = "none"

    }

    if (userName && userEmail) {
        form_Submission_Msg.style.display = "block"
    }


}


//CODE FOR PRODUCT SELECTION
function btn_Active_And_Inactive_Func(buttonId) {

    if (buttonId == "button1") {

        var ikeaButton = document.getElementById("button1").classList.contains("Inactive")
        if (ikeaButton) {
            document.getElementById("IKEA1").style.display = "block"
            document.getElementById("IKEA2").style.display = "block"
            document.getElementById("IKEA3").style.display = "block"
            document.getElementById("IKEA3").style.marginBottom = "50px"
            document.getElementById("IKEA3").style.marginBottom = "50px"
            document.getElementById("IKEA3").style.marginBottom = "50px"

            document.getElementById("ASHLEY1").style.display = "none"
            document.getElementById("ASHLEY2").style.display = "none"
            document.getElementById("KARTELL1").style.display = "none"
            document.getElementById("KARTELL2").style.display = "none"
            document.getElementById("LA_Z_BOY1").style.display = "none"
            document.getElementById("LA_Z_BOY2").style.display = "none"
            document.getElementById("RESTORATION_HARDWARE_RH1").style.display = "none"
            document.getElementById("RESTORATION_HARDWARE_RH2").style.display = "none"
            document.getElementById("WILLIAMS_SONOMA1").style.display = "none"

        }

    } else if (buttonId == "button2") {
        var ashleyButton = document.getElementById("button2").classList.contains("Inactive")
        if (ashleyButton) {
            document.getElementById("ASHLEY1").style.display = "block"
            document.getElementById("ASHLEY2").style.display = "block"
            document.getElementById("ASHLEY2").style.marginBottom = "50px"
            document.getElementById("ASHLEY2").style.marginBottom = "50px"

            document.getElementById("IKEA1").style.display = "none"
            document.getElementById("IKEA2").style.display = "none"
            document.getElementById("IKEA3").style.display = "none"
            document.getElementById("KARTELL1").style.display = "none"
            document.getElementById("KARTELL2").style.display = "none"
            document.getElementById("LA_Z_BOY1").style.display = "none"
            document.getElementById("LA_Z_BOY2").style.display = "none"
            document.getElementById("RESTORATION_HARDWARE_RH1").style.display = "none"
            document.getElementById("RESTORATION_HARDWARE_RH2").style.display = "none"
            document.getElementById("WILLIAMS_SONOMA1").style.display = "none"

        }
    } else if (buttonId == "button3") {
        var restorationHardwareRHButton = document.getElementById("button3").classList.contains("Inactive")
        if (restorationHardwareRHButton) {
            document.getElementById("RESTORATION_HARDWARE_RH1").style.display = "block"
            document.getElementById("RESTORATION_HARDWARE_RH2").style.display = "block"
            document.getElementById("RESTORATION_HARDWARE_RH2").style.marginBottom = "50px"
            document.getElementById("RESTORATION_HARDWARE_RH2").style.marginBottom = "50px"

            document.getElementById("IKEA1").style.display = "none"
            document.getElementById("IKEA2").style.display = "none"
            document.getElementById("IKEA3").style.display = "none"
            document.getElementById("KARTELL1").style.display = "none"
            document.getElementById("KARTELL2").style.display = "none"
            document.getElementById("LA_Z_BOY1").style.display = "none"
            document.getElementById("LA_Z_BOY2").style.display = "none"
            document.getElementById("ASHLEY1").style.display = "none"
            document.getElementById("ASHLEY2").style.display = "none"
            document.getElementById("WILLIAMS_SONOMA1").style.display = "none"

        }

    } else if (buttonId == "button4") {

        var kartellButton = document.getElementById("button4").classList.contains("Inactive")
        if (kartellButton) {
            document.getElementById("KARTELL1").style.display = "block"
            document.getElementById("KARTELL2").style.display = "block"
            document.getElementById("KARTELL2").style.marginBottom = "50px"
            document.getElementById("KARTELL2").style.marginBottom = "50px"

            document.getElementById("RESTORATION_HARDWARE_RH1").style.display = "none"
            document.getElementById("RESTORATION_HARDWARE_RH2").style.display = "none"
            document.getElementById("IKEA1").style.display = "none"
            document.getElementById("IKEA2").style.display = "none"
            document.getElementById("IKEA3").style.display = "none"

            document.getElementById("LA_Z_BOY1").style.display = "none"
            document.getElementById("LA_Z_BOY2").style.display = "none"
            document.getElementById("ASHLEY1").style.display = "none"
            document.getElementById("ASHLEY2").style.display = "none"
            document.getElementById("WILLIAMS_SONOMA1").style.display = "none"

        }

    } else if (buttonId == "button5") {
        var williamsSonomaButton = document.getElementById("button5").classList.contains("Inactive")
        if (williamsSonomaButton) {
            document.getElementById("WILLIAMS_SONOMA1").style.display = "block"
            document.getElementById("WILLIAMS_SONOMA1").style.marginBottom = "50px"
            


            document.getElementById("RESTORATION_HARDWARE_RH1").style.display = "none"
            document.getElementById("RESTORATION_HARDWARE_RH2").style.display = "none"
            document.getElementById("IKEA1").style.display = "none"
            document.getElementById("IKEA2").style.display = "none"
            document.getElementById("IKEA3").style.display = "none"
            document.getElementById("KARTELL1").style.display = "none"
            document.getElementById("KARTELL2").style.display = "none"
            document.getElementById("LA_Z_BOY1").style.display = "none"
            document.getElementById("LA_Z_BOY2").style.display = "none"
            document.getElementById("ASHLEY1").style.display = "none"
            document.getElementById("ASHLEY2").style.display = "none"


        }


    } else if (buttonId == "button6") {

        var la_Z_BoyButton = document.getElementById("button6").classList.contains("Inactive")
        if (la_Z_BoyButton) {
            document.getElementById("LA_Z_BOY1").style.display = "block"
            document.getElementById("LA_Z_BOY2").style.display = "block"
            document.getElementById("LA_Z_BOY1").style.marginBottom = "50px"
            document.getElementById("LA_Z_BOY2").style.marginBottom = "50px"

            document.getElementById("RESTORATION_HARDWARE_RH1").style.display = "none"
            document.getElementById("RESTORATION_HARDWARE_RH2").style.display = "none"
            document.getElementById("IKEA1").style.display = "none"
            document.getElementById("IKEA2").style.display = "none"
            document.getElementById("IKEA3").style.display = "none"
            document.getElementById("KARTELL1").style.display = "none"
            document.getElementById("KARTELL2").style.display = "none"
            document.getElementById("ASHLEY1").style.display = "none"
            document.getElementById("ASHLEY2").style.display = "none"
            document.getElementById("WILLIAMS_SONOMA1").style.display = "none"

        }
    }



}



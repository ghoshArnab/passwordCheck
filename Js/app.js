$(document).ready(function() {
    $("#pass").keyup(function() {
        passwordStrength();
    });
});

function passwordStrength() {
    var val = document.getElementById("pass").value;
    var meter = document.getElementById("strength");
    var swidth = document.getElementById("strength_wrap").clientWidth;
    var no = 0;
    if (val != "") {

        if (val.length <= 6) no = 1;

        if (val.length > 6 && (val.match(/[a-z]/) || val.match(/\d+/) || val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))) no = 2;

        if (val.length > 6 && ((val.match(/[a-z]/) && val.match(/\d+/)) || (val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) || (val.match(/[a-z]/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))) no = 3;

        if (val.length > 6 && val.match(/[a-z]/) && val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) no = 4;

        if (no == 1) {
            $("#strength").animate({
                width: swidth/4
            }, 300);
            meter.style.backgroundColor = "red";
            document.getElementById("password").innerHTML = "Very Weak";
        }

        if (no == 2) {
            $("#strength").animate({
                width: swidth/2
            }, 300);
            meter.style.backgroundColor = "#F5BCA9";
            document.getElementById("password").innerHTML = "Weak";
        }

        if (no == 3) {
            $("#strength").animate({
                width: swidth*.75
            }, 300);
            meter.style.backgroundColor = "#FF8000";
            document.getElementById("password").innerHTML = "Good";
        }

        if (no == 4) {
            $("#strength").animate({
                width: swidth
            }, 300);
            meter.style.backgroundColor = "#00FF40";
            document.getElementById("password").innerHTML = "Strong";
        }
    } else {
        meter.style.backgroundColor = "white";
        document.getElementById("password").innerHTML = "";
    }
}

var smile = setInterval(successSmile, 0.5)
var donor = setInterval(happyDonor, 1)
var recipient = setInterval(happyRecipient, 1)
var award = setInterval(totalAward, 1)
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;

function successSmile() {
        count1++
        document.querySelector("#number1").innerHTML = count1
        if (count1 == 1278) {
                clearInterval(smile)
        }
}

function happyDonor() {
        count2++
        document.querySelector("#number2").innerHTML = count2
        if (count2 == 335) {
                clearInterval(donor)
        }
}

function happyRecipient() {
        count3++
        document.querySelector("#number3").innerHTML = count3
        if (count3 == 12) {
                clearInterval(recipient)
        }
}
function totalAward() {
        count4++
        document.querySelector("#number4").innerHTML = count4
        if (count4 == 34) {
                clearInterval(award)
        }
}
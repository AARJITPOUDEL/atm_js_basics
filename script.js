let firstq = prompt("Enter your name");
alert("Wlecome" + firstq);
let balance = 2000
alert ("Your balance is Rs." + balance + "in your account");
let decision = prompt("How much do you want to withdraw?");
calcu = (balance - decision);
if (calcu <= balance ){
    alert("You have successfully withdrawn Rs." + decision + "You have now Rs.   "+ calcu + "  Balance left");

}
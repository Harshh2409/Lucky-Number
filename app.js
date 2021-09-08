var DOB=document.querySelector("#dob");
var luckynumber=document.querySelector("#lucky-number");
var checkbutton=document.querySelector("#check-button");
var messageDisplay=document.querySelector("#message-display");

checkbutton.addEventListener("click",function lucky(){
    var temp=DOB.value;let sum=0;
    var date=temp.replaceAll('-','');
    for(let i=0;i<date.length;i++)
    {
        sum=sum+Number(date.charAt(i));
    }
   
   compare(sum);
});
 function compare(sum){
    if(sum%luckynumber.value===0)
    {
        messageDisplay.value="WooHoo You Are Lucky 🎈🎈";
    }
    else{
        messageDisplay.value="Sorry your birthday isn't lucky 😥😥";
    } 
}
function showmessage(msg) {
    messageDisplay.innerText(msg);
  }




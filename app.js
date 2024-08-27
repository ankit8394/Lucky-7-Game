let jackpot_number=0;
let click_check=0;
let win="0";

function btn()
{
    document.getElementById("overlay").style.display="none";
    document.getElementById("imgk-one").src="assets/img2.jpg";
    document.getElementById("imgk-two").src="assets/img2.jpg";
    document.getElementById("imgk-three").src="assets/img2.jpg";
    document.getElementById("imgk-four").src="assets/img2.jpg";
    document.getElementById("imgk-five").src="assets/img2.jpg";
    document.getElementById("imgk-six").src="assets/img2.jpg";
    document.getElementById("imgk-seven").src="assets/img2.jpg";
    document.getElementById("imgk-eight").src="assets/img2.jpg";
    document.getElementById("imgk-nine").src="assets/img2.jpg";
    document.getElementById("btn1").disabled="disabled";

    jackpot_number=Math.floor((Math.random()*9)+1);
    
    if (jackpot_number==1)
    {
        document.getElementById("text-one").innerHTML="7";
    }
    else if(jackpot_number==2){
        document.getElementById("text-two").innerHTML="7";
    }
    else if(jackpot_number==3){
        document.getElementById("text-three").innerHTML="7";
    }
    else if(jackpot_number==4){
        document.getElementById("text-four").innerHTML="7";
    }
    else if(jackpot_number==5){
        document.getElementById("text-five").innerHTML="7";
    }
    else if(jackpot_number==6){
        document.getElementById("text-six").innerHTML="7";
    }
    else if(jackpot_number==7){
        document.getElementById("text-seven").innerHTML="7";
    }
    else if(jackpot_number==8){
        document.getElementById("text-eight").innerHTML="7";
    }
    else if(jackpot_number==9){
        document.getElementById("text-nine").innerHTML="7";
    }
};
function hh1()
    {
        if(click_check==1){
            
        }
        else {
            click_check=click_check+1;
            document.getElementById("imgk-one").style.display="none";
            disableImgClick();
            document.getElementById("btn-res").style.display="block";
        }
        if (document.getElementById("text-one").innerHTML!="0"){
        document.getElementById("ppp").innerHTML="<span style='color:green'>You win</span>";
        }
        else{
        document.getElementById("ppp").innerHTML="<span style='color:red'>You loss</span>";
        }
    };
    function hh2()
    {
        if(click_check==1){
            
        }
        else {
            click_check=click_check+1;
            document.getElementById("imgk-two").style.display="none";
            disableImgClick();
            document.getElementById("btn-res").style.display="block";
        }
        if (document.getElementById("text-two").innerHTML!="0"){
        document.getElementById("ppp").innerHTML="<span style='color:green'>You win</span>";
        }
        else{
        document.getElementById("ppp").innerHTML="<span style='color:red'>You loss</span>";
        }
    };
    function hh3()
    {
        if(click_check==1){
            
        }
        else {
            click_check=click_check+1;
            document.getElementById("imgk-three").style.display="none";
            disableImgClick();
            document.getElementById("btn-res").style.display="block";
        }
        if (document.getElementById("text-three").innerHTML!="0"){
        document.getElementById("ppp").innerHTML="<span style='color:green'>You win</span>";
        }
        else{
        document.getElementById("ppp").innerHTML="<span style='color:red'>You loss</span>";
        }
    };
    function hh4()
    {
        if(click_check==1){
    
        }
        else {
            click_check=click_check+1;
            document.getElementById("imgk-four").style.display="none";
            disableImgClick();
            document.getElementById("btn-res").style.display="block";
        }
        if (document.getElementById("text-four").innerHTML!="0"){
        document.getElementById("ppp").innerHTML="<span style='color:green'>You win</span>";
        }
        else{
        document.getElementById("ppp").innerHTML="<span style='color:red'>You loss</span>";
        }
    };
    function hh5()
    {
        if(click_check==1){
        
        }
        else {
            click_check=click_check+1;
            document.getElementById("imgk-five").style.display="none";
            disableImgClick();
            document.getElementById("btn-res").style.display="block";
        }
        if (document.getElementById("text-five").innerHTML!="0"){
        document.getElementById("ppp").innerHTML="<span style='color:green'>You win</span>";
        }
        else{
        document.getElementById("ppp").innerHTML="<span style='color:red'>You loss</span>";
        }
    };
    function hh6()
    {
        if(click_check==1){

        }
        else {
            click_check=click_check+1;
            document.getElementById("imgk-six").style.display="none";
            disableImgClick();
            document.getElementById("btn-res").style.display="block";
        }
        if (document.getElementById("text-six").innerHTML!="0"){
        document.getElementById("ppp").innerHTML="<span style='color:green'>You win</span>";
        }
        else{
        document.getElementById("ppp").innerHTML="<span style='color:red'>You loss</span>";
        }
    };
    function hh7()
    {
        if(click_check==1){

        }
        else {
            click_check=click_check+1;
            document.getElementById("imgk-seven").style.display="none";
            disableImgClick();
            document.getElementById("btn-res").style.display="block";
        }
        if (document.getElementById("text-seven").innerHTML!="0"){
        document.getElementById("ppp").innerHTML="<span style='color:green'>You win</span>";
        }
        else{
        document.getElementById("ppp").innerHTML="<span style='color:red'>You loss</span>";
        }
    };
    function hh8()
    {
        if(click_check==1){

        }
        else {
            click_check=click_check+1;
            document.getElementById("imgk-eight").style.display="none";
            disableImgClick();
            document.getElementById("btn-res").style.display="block";
        }
        if (document.getElementById("text-eight").innerHTML!="0"){
        document.getElementById("ppp").innerHTML="<span style='color:green'>You win</span>";
        }
        else{
        document.getElementById("ppp").innerHTML="<span style='color:red'>You loss</span>";
        }
    };
    function hh9()
    {
        if(click_check==1){

        }
        else {
            click_check=click_check+1;
            document.getElementById("imgk-nine").style.display="none";
            disableImgClick();
            document.getElementById("btn-res").style.display="block";
        }
        if (document.getElementById("text-nine").innerHTML!="0"){
        document.getElementById("ppp").innerHTML="<span style='color:green'>You win</span>";
        }
        else{
        document.getElementById("ppp").innerHTML="<span style='color:red'>You loss</span>";
        }
    };
    function reset()
    {
        location.reload();
    };
    function disableImgClick() 
    {
        document.getElementById("imgk-one").onclick = null; 
        document.getElementById("imgk-two").onclick = null; 
        document.getElementById("imgk-three").onclick = null;
        document.getElementById("imgk-four").onclick = null; 
        document.getElementById("imgk-five").onclick = null; 
        document.getElementById("imgk-six").onclick = null; 
        document.getElementById("imgk-seven").onclick = null; 
        document.getElementById("imgk-eight").onclick = null;  
        document.getElementById("imgk-nine").onclick = null; 
    };
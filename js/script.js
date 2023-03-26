let user =document.getElementById("user");
let pass =document.getElementById("pass");
let errorus = document.getElementById("errorus");
let errorps =document.getElementById("errorps");
let res=1;
let rese=1;


function fun(){
     if(user.value.length < 1){
       errorus.innerHTML="Username is empty";
       res=0;
     }
     else if(user.value.length <8){
        errorus.innerHTML="Username required min 8 cha";
       res =0;
     }
     else{
        errorus.innerHTML="";
        res=1;
     }

     if(pass.value.length < 1){
        errorps.innerHTML="Password is empty";
        rese=0;
     }
     else if(pass.value.length <8){
        errorps.innerHTML="Password required min 8 char";
        rese=0;
     }

     else{
        errorps.innerHTML="";
      rese=1;
     }


     if (res==1 && rese==1){
        return true;
     }else{
        return false;
     }
  
}




const generate = document.getElementById("generate");
generate.onclick=function(){
    const num = document.getElementById("num");
    const upper = document.getElementById("upper");
    const lower = document.getElementById("lower");
    const special = document.getElementById("special");
    const pass = document.getElementById("pass");
    const maxlen = document.getElementById("max");

    const uppercaseletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseletter = "abcdefghijklmnopqrstuvwxyz";
    const numeric = "0123456789";
    const special_char = "@#$%^&*";
    let lenght = maxlen.value;
    lenght = Number(lenght);

    if(lenght<0){
        pass.textContent=`Maximum Length should be a positive number`;
    }
    else if(lenght>15){
        pass.textContent=` Maximum Length should not exceed 15 characters`;
    }
    else if(lenght==0){
        pass.textContent=`Please enter the maximum length of your password`;
    }
    else{
        let allowedchar = "";
        let password = "";
        
        allowedchar+= num.checked ? numeric : "";
        allowedchar+= upper.checked ? uppercaseletter : "";
        allowedchar+= lower.checked ? lowercaseletter : "";
        allowedchar+= special.checked ? special_char : "";
    
        for(let i=0; i<lenght; i++){
            let random = Math.floor(Math.random()*allowedchar.length)+1;
            password+=allowedchar.charAt(random);
        }
        if(allowedchar === ""){
            pass.textContent=`Please select atleast one option`;
        }
        else{
            pass.textContent=`Generated Password: ${password}`;
        }
    }    
}
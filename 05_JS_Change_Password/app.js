let passBox = document.querySelector(selector = "#password");

let checkBox =document.querySelector(selector= '#checkbox');

checkBox.addEventListener('change', function(){
   let typeAttribute = passBox.getAttribute(qualifiedName= 'type');
   
   if(typeAttribute === 'password'){
      passBox.setAttribute('type','text');//(qualified : 'type' , value: 'text')
   }else{
      passBox.setAttribute('type','password');
   }
  
});
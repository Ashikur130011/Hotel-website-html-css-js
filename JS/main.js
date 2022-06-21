let register= document.querySelector(".register");
		 
register.addEventListener("click",function(){
   console.log("checking...");
   window.open("register.html","","width=500px,height=650px,top=100, left=400");

})
function submitOnHand(e){
    e.preventDefault();
    
    alert("Submitted successful");
    document.getElementById('form').reset();
}


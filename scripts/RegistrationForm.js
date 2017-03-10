function validate(){

    if(document.calc.Name.value == "" )
    {
        alert("Please fill the name !");
        return false;
    } 
	var x = document.calc.Email.value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
	
	if(document.calc.dob.value.length != 10)
	{
	      alert("Please fill the valid dob !");
         return false;
	}
        alert('Your form has been submitted!');
   
}

function clearForm() {
	document.getElementById("ROW").reset();
}
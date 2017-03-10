var allCourses =  [ {StudentName: "RK", CourseName: "HTML", Duration: 15, CourseType:"WEB",  IsCompelted: "Yes"},
	{StudentName:"Lasya", CourseName: "JavaScript", Duration:10, CourseType:"WEB", IsCompelted:"No"},
	{StudentName: "Neel", CourseName: "Java", Duration: 25, CourseType:"LANGUAGE",  IsCompelted: "No"},
	{StudentName: "Kranthi", CourseName: "Hadoop", Duration: 10, CourseType:"TOOL",  IsCompelted: "Yes"}];
	
	function validate(){
		
		if ( ( document.calc.radioEmployed[0].checked == false ) && ( document.calc.radioEmployed[1].checked == false ) && ( document.calc.radioEmployed[2].checked == false ) && ( document.calc.radioEmployed[3].checked == false ) ) 
{
alert ( "Please choose your Name" ); 
return false;
}
document.details.Name.value="Lasya";
document.details.Email.value="lasya.reddy2001@gmail.com";
document.details.dob.value="03/21/1994";
document.details.tel.value="8326900168";
	}
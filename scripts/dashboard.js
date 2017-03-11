var allCourses =  [ {StudentName: "RK", CourseName: "HTML", Duration: 15, CourseType:"WEB",  IsCompelted: "Yes"},
	{StudentName:"Lasya", CourseName: "JavaScript", Duration:10, CourseType:"WEB", IsCompelted:"No"},
	{StudentName: "Neel", CourseName: "Java", Duration: 25, CourseType:"LANGUAGE",  IsCompelted: "No"},
	{StudentName: "Kranthi", CourseName: "Hadoop", Duration: 10, CourseType:"TOOL",  IsCompelted: "Yes"}];
	
var allResults =  [ {StudentName: "RK", Person:"Person1", CourseName: "HTML", Score: 5, Result:"Fail"},
	{StudentName: "Lasya", Person:"Person2", CourseName: "JavaScript", Score: 65, Result:"Pass"},
	{StudentName: "Kranthi", Person:"Person3", CourseName: "Java", Score: 15, Result:"Fail"},
	{StudentName: "Neel", Person:"Person4", CourseName: "Hadoop", Score: 50, Result:"Pass"}
];
	
	function validate(){
		
		if ( ( document.calc.radioEmployed[0].checked == false ) && ( document.calc.radioEmployed[1].checked == false ) && ( document.calc.radioEmployed[2].checked == false ) && ( document.calc.radioEmployed[3].checked == false ) ) 
{
alert ( "Please choose your Name" ); 
return false;
}
if(document.calc.radioEmployed[0].checked == true)
{
document.details.Name.value="RK";
document.details.Email.value="ram@gmail.com";
document.details.dob.value="07/03/1994";
document.details.tel.value="8165419670";
document.courses.cname.value="HTML";
document.courses.typec.value="WEB";
document.courses.duration.value=15;
document.courses.comp.value="Yes";
document.assess.cname.value="HTML";
document.assess.score.value=60;
document.assess.res.value="Pass";
return false;
}
else if(document.calc.radioEmployed[1].checked == true)
{
document.details.Name.value="Lasya";
document.details.Email.value="lasya.reddy2001@gmail.com";
document.details.dob.value="06/21/1994";
document.details.tel.value="8326900168";
document.courses.cname.value="JavaScript";
document.courses.typec.value="WEB";
document.courses.duration.value=10;
document.courses.comp.value="No";
document.assess.cname.value="JavaScript";
document.assess.score.value=65;
document.assess.res.value="Pass";
return false;
}
else if(document.calc.radioEmployed[2].checked == true)
{
document.details.Name.value="Neel";
document.details.Email.value="neel@gmail.com";
document.details.dob.value="07/28/1994";
document.details.tel.value="8165419838";
document.courses.cname.value="Java";
document.courses.typec.value="LANGUAGE";
document.courses.duration.value=25;
document.courses.comp.value="No";
document.assess.cname.value="Java";
document.assess.score.value=75;
document.assess.res.value="Pass";
return false;
}

else if(document.calc.radioEmployed[3].checked == true)
{
document.details.Name.value="Kranthi";
document.details.Email.value="Kranthi@gmail.com";
document.details.dob.value="05/05/1994";
document.details.tel.value="8165419642";
document.courses.cname.value="Hadoop";
document.courses.typec.value="LANGUAGE";
document.courses.duration.value=58;
document.courses.comp.value="Yes";
document.assess.cname.value="Java";
document.assess.score.value=7;
document.assess.res.value="Pass";
return false;
}

	}

function clearForm() {
	document.getElementById("ROW").reset();
	document.getElementById("ROW1").reset();
	document.getElementById("ROW2").reset();
	document.getElementById("ROW3").reset();
}
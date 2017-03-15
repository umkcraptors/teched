var allCourses =  [ {StudentName: "RK", 
						CourseName: "HTML", Duration: 15, CourseType:"WEB",  IsCompelted: "Yes"						
					},
	{StudentName:"Lasya", CourseName: "JavaScript", Duration:10, CourseType:"WEB", IsCompelted:"No"},
	{StudentName: "Neel", CourseName: "Java", Duration: 25, CourseType:"LANGUAGE",  IsCompelted: "No"},
	{StudentName: "Kranthi", CourseName: "Hadoop", Duration: 10, CourseType:"TOOL",  IsCompelted: "Yes"}];
	
var allResults =  [ {StudentName: "RK", Person:"Person1", CourseName: "HTML", Score: 5, Result:"Fail"},
	{StudentName: "Lasya", Person:"Person2", CourseName: "JavaScript", Score: 65, Result:"Pass"},
	{StudentName: "Kranthi", Person:"Person3", CourseName: "Java7", Score: 15, Result:"Fail"},
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
index=0;
}
else if(document.calc.radioEmployed[1].checked == true)
{
index=1;
}
else if(document.calc.radioEmployed[2].checked == true)
{
index=2;
}

else if(document.calc.radioEmployed[3].checked == true)
{
index=3;
}

document.getElementById('tblDataDetails').rows[1].outerHTML = 
"<tr class='row'> <td><label for='Name'>Name:</label></td><td>" + allCourses[index].StudentName + "</td></tr>";
document.getElementById('tblDataDetails').rows[2].outerHTML = 
"<tr><td>Course</td><td>" + allCourses[index].CourseName + "</td></tr>";

	}

function clearForm() {
	document.getElementById("ROW").reset();
	document.getElementById("ROW2").reset();

}
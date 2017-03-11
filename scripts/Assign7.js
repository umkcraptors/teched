var allResults =  [ {StudentName: "RK", Person:"Person1", CourseName: "HTML", Score: 55, Result:"Pass"},
	{StudentName: "Lasya", Person:"Person2", CourseName: "JavaScript", Score: 5, Result:"Fail"},
	{StudentName: "Kranthi", Person:"Person3", CourseName: "Java", Score: 65, Result:"Pass"},
	{StudentName: "Neel", Person:"Person4", CourseName: "Hadoop", Score: 50, Result:"Pass"}
];

function saveData()
{
	var studentName = document.assess.name.value;
	var person = document.assess.person.value;
	var courseName = document.assess.course.value;
	var score =document.assess.score.value;
	var result =document.assess.result.value;
	
	
	allResults[allResults.length] = {StudentName ,person, courseName, score, result};
	var courseLength=allResults.length;
	
	for(var loop=0; loop < courseLength; loop++)  
		alert(allResults[loop].StudentName + '  ' + allResults[loop].CourseName + '  ' + allResults[loop].score + ' ' + allResults[loop].result, "Course details");
}

function clear() {
	document.getElementById("reg").reset();
}


var allCourses =  [ {StudentName: "RK", CourseName: "HTML", Duration: 15, CourseType:"WEB",  IsCompelted: "Yes"},
	{StudentName:"Lasya", CourseName: "JavaScript", Duration:10, CourseType:"WEB", IsCompelted:"No"},
	{StudentName: "Neel", CourseName: "Java", Duration: 25, CourseType:"LANGUAGE",  IsCompelted: "No"},
	{StudentName: "Kranthi", CourseName: "Hadoop", Duration: 10, CourseType:"TOOL",  IsCompelted: "Yes"}];


function saveCourse()
{
	var StudentName = document.calc.name.value;
	var CourseName = document.calc.course.value;
	var Duration =document.calc.day.value;
	var courseType =document.calc.tc.options[1].selected;
	var isCompleted =document.calc.radioCompleted[0].checked;
	
	allCourses[allCourses.length] = {StudentName, CourseName, Duration, courseType, isCompleted};
	var courseLength=allCourses.length;
	
	for(var loop=0; loop < courseLength; loop++)  
		alert(allCourses[loop].StudentName + '  ' + allCourses[loop].CourseName + '  ' + allCourses[loop].Duration, "Course details");
}

function clearForm() {
	document.getElementById("ROW").reset();
}
function homePage(){
	 window.open("courses.html",'_self');
}
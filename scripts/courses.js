var allCourses =  [ {StudentName: "RK", CourseName: "HTML", Duration: 15, CourseType:"WEB",  IsCompelted: "Yes"},
	{StudentName:"Lasya", CourseName: "JavaScript", Duration:10, CourseType:"WEB", IsCompelted:"No"},
	{StudentName: "Neel", CourseName: "Java", Duration: 25, CourseType:"LANGUAGE",  IsCompelted: "No"},
	{StudentName: "Kranthi", CourseName: "Hadoop", Duration: 10, CourseType:"TOOL",  IsCompelted: "Yes"}];


function saveCourse(){

if(document.calc.name.value == "" )
    {
        alert("Please fill the name !");
        return false;
    } 
	
	if(document.calc.course.value == "" )
    {
        alert("Please fill the name of course !");
        return false;
    } 

	var studentName = document.calc.name.value;
	var courseName = document.calc.course.value;
	var duration =document.calc.day.value;
	var courseType =document.calc.tc.options[1].selected;
	var isCompleted =document.calc.radioCompleted[0].checked;
	
allCourses.push({StudentName: studentName, CourseName: courseName, Duration: duration, CourseType:courseType,  IsCompelted: isCompleted});	
	
	var courseLength=allCourses.length;
	
	for(var loop=0; loop < courseLength; loop++)  
		alert(allCourses[loop].StudentName + '  ' + allCourses[loop].CourseName + '  ' + allCourses[loop].Duration, "Course details");
}

function clearForm() {
	document.getElementById("ROW").reset();
}
function homePage(){
	 window.open("home.html",'_self');
}
var allResults =  [ {StudentName: "RK", Person:"Person1", CourseName: "HTML", Score: 55, Result:"Pass"},
	{StudentName: "Lasya", Person:"Person2", CourseName: "JavaScript", Score: 5, Result:"Fail"},
	{StudentName: "Kranthi", Person:"Person3", CourseName: "Java", Score: 65, Result:"Pass"},
	{StudentName: "Neel", Person:"Person4", CourseName: "Hadoop", Score: 50, Result:"Pass"}
];

function saveData()
{
	var studentName = document.assess.name.value;
    var courseName = document.assess.course.value;
    var score =document.assess.score.value;
    var result =document.assess.result.value;

   

	var courseLength=allResults.length;
	
	var t=false;
	for(var i=0; i < courseLength; i++) 
	{ 
		if(studentName==allResults[i].StudentName)
		{
           t=true;
		}  
    }

     if(t==false)
       {
       alert("Please be sure you are registered");
       }

      if(t==true && courseName== ''){
      alert("Enter course");
      t=false;
       }
     if(t==true && score== ''){
      alert("Enter score");
      t=false;
       }
      if(t==true)
       {
       document.getElementById("reg").innerHTML= studentName + " " + " score is successfully submitted";
       }

   
}

function clearForm() {
	document.getElementById("reg").reset();
}

function homePage(){
window.open("Assign.html",'_self')
}









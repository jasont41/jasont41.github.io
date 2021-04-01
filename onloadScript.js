var repoNames = [];
var nHTML = '';
var count = 0;
window.onload = function(){


	fetch('https://api.github.com/users/jasont41/repos')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    data.forEach(function(data){
		console.log(data.name)
		repoNames.push(data.name)
	});
  })
  .catch((err) => {
    // Do something for an error here
  })

	doWork();
}

function doWork(){
	setTimeout(testing,60);
}
function testing(){
	document.getElementById("left1").innerHTML += repoNames[0]+"<br> <img src="+"https://raw.githubusercontent.com/jasont41/"+repoNames[0]+
"/master/thumbnail.PNG"+" width='80%' height='80%' style='object-fit:contain;margin-left:10%;margin-right:10%;'>";
	document.getElementById("left2").innerHTML += repoNames[1];
	document.getElementById("left3").innerHTML += repoNames[2];
	//for(var i = 0; i< count; i++)
	//	document.getElementById("demo").innerHTML += repoNames[i] + "<br>";
}

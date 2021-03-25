var repoNames = [];
var nHTML = '';
var count = 0; 
window.onload = function(){
	
	var request = new XMLHttpRequest(); 
	request.open('GET', 'https://api.github.com/users/jasont41/repos', true) ;
	request.onload = function(){
		var data = JSON.parse(this.response)	
		if (request.status >= 200 && request.status < 400) 
			{
				data.forEach((repo) => { 
				repoNames.push((repo.name)); 
				console.log(repo.name);
				count++; 
				});
		}
		else{ console.log('error');}
	}
	request.send();
	doWork(); 
}

function doWork(){
	setTimeout(testing,60);
}
function testing(){
	document.getElementById("left1").innerHTML += repoNames[0]+"<br> <img src="+"https://raw.githubusercontent.com/jasont41/"+repoNames[0]+
"/master/thumbnail.PNG"+" width='80%' height='80%' style='margin-left:10%;margin-right:10%;'>"; 
	document.getElementById("left2").innerHTML += repoNames[1]; 
	document.getElementById("left3").innerHTML += repoNames[2]; 
	//for(var i = 0; i< count; i++)
	//	document.getElementById("demo").innerHTML += repoNames[i] + "<br>"; 
}
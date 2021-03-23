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
	//need to find a way to wait 

	console.log(repoNames[5]);
	var i = 0; 
	
	request.send();
}

function testing(){
	for(var i = 0; i< count; i++)
		document.getElementById("demo").innerHTML += repoNames[i] + "<br>"; 
}
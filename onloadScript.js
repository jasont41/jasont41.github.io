var repoNames = [];
var nHTML = "";
window.onload = function(){
	
	var request = new XMLHttpRequest(); 
 
	request.open('GET', 'https://api.github.com/users/jasont41/repos', true) ;
 
	
	request.onload = function(){
		var data = JSON.parse(this.response)
 
		if (request.status >= 200 && request.status < 400) 
			{
				data.forEach((repo) => { 
				repoNames.push(repo.name); 
				console.log(repo.name);
				//document.getElementById("demo").innerHTML += repo.name+"<br>"; 
				});
		}
		else{ console.log('error');}
	}
	console.log(repoNames.length);
	
	var i = 0; 
	for(i; i < 17; i++){
	document.getElementById("demo").innerHTML +=repoNames[i]; 
	}
	 nHTML; 
	request.send();
	

}

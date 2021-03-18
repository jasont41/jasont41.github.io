var repoNames = [];

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
				nHTML += repo.name+"<br>"; 
				});
		}
		else{ console.log('error');}
	}
	var nHTML = "";
	var i; 
	for(i = 0; i < repoNames.length; i++){
		 nHTML += repoNames[i] + "<br>"; 
	}
	
	request.send();
	document.getElementById("demo").innerHTML = nHTML; 
}



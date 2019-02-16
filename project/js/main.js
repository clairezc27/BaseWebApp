
function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#doge-image").append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
}

function calculation() {
	if(document.getElementById('date_Walk').checked) {
  		console.log("date walk is checked");
  		if(document.getElementById('dress_Red').checked) {
  			if(document.getElementById('whisper').checked) {
  				if(document.getElementById('accent').checked) {
  					
  				} else if(document.getElementById('sloth').checked) {

  				}
  			} else if(document.getElementById('story').checked) {
  				if(document.getElementById('accent').checked) {

  				} else if(document.getElementById('sloth').checked) {

  				}
  			}
  		} else if(document.getElementById('dress_Glitter').checked) {
  			if(document.getElementById('dress_Red').checked) {
  				if(document.getElementById('accent').checked) {

  				} else if(document.getElementById('sloth').checked) {

  				}
  			} else if(document.getElementById('dress_Glitter').checked) {
  				if(document.getElementById('accent').checked) {

  				} else if(document.getElementById('sloth').checked) {

  				}
  			}
  		}
	}else if(document.getElementById('date_Movie').checked) {
		console.log("date movie is checked");
		if(document.getElementById('dress_Red').checked) {
  			if(document.getElementById('whisper').checked) {
  				if(document.getElementById('whisper').checked) {

  				} else if(document.getElementById('story').checked) {

  				}
  			} else if(document.getElementById('story').checked) {
  				if(document.getElementById('whisper').checked) {

  				} else if(document.getElementById('story').checked) {

  				}
  			}
  		} else if(document.getElementById('dress_Glitter').checked) {
  			if(document.getElementById('whisper').checked) {
  				if(document.getElementById('whisper').checked) {

  				} else if(document.getElementById('story').checked) {

  				}
  			} else if(document.getElementById('story').checked) {
  				if(document.getElementById('whisper').checked) {

  				} else if(document.getElementById('story').checked) {

  				}
  			}
  		}
	}
}


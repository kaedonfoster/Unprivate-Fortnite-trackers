function Find(){
  var username = "";
  username = document.getElementById('username').value;
  
  if(username != "")
  {
    var link = "https://fortnitetracker.com/profile/all/";
    link = link.concat('', username);
    link = link.concat('', "/events");
     window.open(link, '_blank').focus();
  }else
  {
    console.log("Enter a username");
  }
}



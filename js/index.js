let xmlhttp = new XMLHttpRequest();
let url = "./json/Careere.json";
let xmlhttp1 = new XMLHttpRequest();
let url1 = "./json/User.json";
let users =[];
let careers =[];

xmlhttp.onload = function() {
  if (this.readyState == 4 && this.status == 200) {
    careers = JSON.parse(this.responseText);
    
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


xmlhttp1.onload = function() {
  if (this.readyState == 4 && this.status == 200) {
      users = JSON.parse(this.responseText);
      users.forEach(item => {
          document.write('Name: ' + item.name + '<br>');
          let careetTitle = careers.find(function(career) {
              return career.id == item.career_id
          });

          document.write('Career: ' + careetTitle.title + '<br>');
          document.write('------------------------------------------<br>');
      });
  }
};
xmlhttp1.open("GET", url1, true);
xmlhttp1.send();

function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 1;
    } else {
        return 0;
    }



}

var date = new Date();

var currentDay = date.getDate();

var currentMonth = (date.getMonth()) + 1;

var currentYear = date.getFullYear();

var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (isLeap(currentYear) === 1) {
    daysOfMonth[1] = 29;
}


var displayDay;

var displayMonth;

var displayYear;

var userDay;

var userMonth;

var userYear;

var previuosMonth;





document.querySelector(".card-1").addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        userMonth = +document.querySelector("input#month").value;

    }else if(event.key === 'Enter' && +document.querySelector("input#month").value>12){
        document.querySelectorAll(".card-1 span")[0].style.display ="block";
    }
    previuosMonth = currentMonth - 1;
    if(currentMonth<userMonth){
        displayMonth = 12- (userMonth - currentMonth);
        displayMonth-=1;
    }else {
        displayMonth = currentMonth - userMonth;
    }
document.querySelectorAll("span")[4].textContent = displayMonth;
    



    

});

document.querySelector(".card-1").addEventListener("keydown", function (event) {
    if (event.key === 'Enter'&&+document.querySelector("input#day").value<=31 ) {
        userDay = +document.querySelector("input#day").value;

    }else if(event.key === 'Enter'&&+document.querySelector("input#day").value>31){
document.querySelectorAll(".card-1 span")[1].style.color = "block";
    }
    if(currentDay<userDay){
        displayDay =daysOfMonth[previuosMonth-1] -  (userDay-currentDay);
        displayDay +=1;
    } else{
        displayDay = currentDay - userDay;
    }
    document.querySelectorAll("span")[5].textContent = displayDay;



});

document.querySelector(".card-1").addEventListener("keydown", function (event) {
    if (event.key === 'Enter' && +document.querySelector("input#year").value<currentYear) {
        userYear = +document.querySelector("input#year").value;

    }else if(event.key === 'Enter' && +document.querySelector("input#year").value>currentYear){
        document.querySelectorAll(".card-1 span")[2].style.color = "block";

    }
    displayYear = currentYear - userYear;
    if(currentMonth<userMonth /*||(currentMonth === userMonth && currentDay<userDay)*/){
    displayYear -=1; 
    } 
    
    document.querySelectorAll("span")[3].textContent = displayYear;

});

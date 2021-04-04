var PERIODs_30_MIN = 10;


function intiateTodaysDate(){
    var currentDay = document.getElementById("currentDay");

var todays_date= moment().format('LLLL');
currentDay.textContent = todays_date;
}

function createConatainer(){
    var container = document.getElementById("schedule_container");
    var start_time = moment(" 12/31/1992 6:00");
    var new_minutes= 0;


    for (var i=0; i<PERIODs_30_MIN;i++){

        var current_time = start_time.add(30, 'minutes');
        var current_storage_value = localstorage.getItem(current_time.foramt('HH:mm'));
container.append(createElement(current_time.format('HH:mm'),current_storage_value));

    }
}

function createElement(time,current_value){
    var container = document.createElement("div");
    container.classList.add("jumbotron");
    container.classList.add("row");


    var time_label = document.createElement("p");
    time_label.classList.add("col");
    time_label.textContent = time;

    var textarea = document.createElement("textarea");
    textarea.classList.add("col");
    textarea.classList.add("my_sibling");
    textarea.innerHTML = current_value;

    var save_button =  document.createElement("button");
    save_button.classList.add("col");
    save_button.addEventListener("click",setLocalStorage);

    container.append(time_label);
    container.append(textarea);
    container.append(save_button);
    return container;

    function setLocalStorage(event){

        var target = $(event.target);
        var









    }











}
























intiateTodaysDate();
createConatainer();

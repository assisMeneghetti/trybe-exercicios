let title = document.getElementById("header-container");
title.style.backgroundColor = "green";
let emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = "pink";
let noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyTasks.style.backgroundColor = "orange";
let urgentAndImportant = document.querySelectorAll(".emergency-tasks h3")[0];
urgentAndImportant.style.backgroundColor = "purple";
let urgentAndNoImportant = document.querySelectorAll(".emergency-tasks h3")[1];
urgentAndNoImportant.style.backgroundColor = "purple";
let noUrgentAndImportant = document.querySelectorAll(".no-emergency-tasks h3")[0];
noUrgentAndImportant.style.backgroundColor = "black";
let noUrgentAndNoImportant = document.querySelectorAll(".no-emergency-tasks h3")[1];
noUrgentAndNoImportant.style.backgroundColor = "black";
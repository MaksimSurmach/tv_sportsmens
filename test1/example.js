$(document).ready(function() {
//  $("#retrieve-resources").click(function() {
  //  var displayResources = $("#display-resources");

  //  displayResources.text("Loading data from JSON source...");

    $.ajax({
      type: "GET",
      url: "example.json", // Using our resources.json file to serve results
      success: function(result) {
        console.log();
        obj = JSON.parse(result);
        document.getElementById("demo").innerHTML =
        obj.employees[0].firstName + " " + obj.employees[0].lastName;
      }
    });
  //});
});

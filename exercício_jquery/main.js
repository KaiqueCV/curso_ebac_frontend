$(document).ready(function() {
    var taskList = $("#taskList");

    $("#addTask").click(function() {
        var newTaskText = $("#newTask").val();
        if (newTaskText) {
        taskList.append("<li>" + newTaskText + "</li>");
        $("#newTask").val("").focus();
    }
    });

    taskList.on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});
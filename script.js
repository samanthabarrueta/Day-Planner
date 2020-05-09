$(document).ready(function () {
    var a = moment().format('dddd, MMMM Do');
    $('#currentDay').html(a);
    var x = moment().format('h : mm a');
    // $('.hour').html(x);
    hourBlocks();
    $(document).on('click', '.saveBtn', function (event) {
        var previousElements = $(this).prevAll();
        console.log(previousElements);
        var userInput = $(previousElements[0]).children().first().val();
        var timeSlot = $(previousElements[1]).html();
        localStorage.setItem(timeSlot, userInput);
        console.log(time)
        console.log(userInput)
    });
    function hourBlocks() {
        var workHour = 9;
        var colorClass = '';
        while (workHour < 18) {
            var currentHour = moment().hour();
            var colorClass = '';
            if ((workHour - currentHour) < 0) {
                colorClass = 'past';
            } else if (workHour === currentHour) {
                colorClass = 'present';
            } else {
                colorClass = 'future';
            }
            var existingPlanInStorage = localStorage.getItem(workHour);
            var existingPlan = '';
            if (existingPlanInStorage != null)
                existingPlan = existingPlanInStorage;
            $('#timeblocks').append(`<div class='row time-block' id='hour-${workHour}'>
            <div class='col-md-1 hour'>${workHour}</div>
            <div class='col-md-10 divider ${colorClass}'>
                <textarea class='description' cols='100%' id='planner-${workHour}'>${existingPlan}</textarea>
            </div>
            <div class='col-md-1 saveBtn btn btn-primary'>
                SAVE
            </div>
            `)
            workHour++;
        }
    }
});

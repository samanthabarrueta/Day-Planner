$(document).ready(function () {

    //add date to header
    var currentDay = moment().format('dddd, MMMM Do');
    $('#currentDay').html(currentDay);
        
    //save item to local storage on click of save button
    $(document).on('click', '.saveBtn', function (event) {
        var newSchedItem = $(this).prevAll();
        var schedItem = $(newSchedItem[0]).children().first().val();
        var schedHour = $(newSchedItem[1]).html();
        localStorage.setItem(schedHour, schedItem);
    });
    
    //create timeblocks 
    function hourBlocks() {
        var workHour = 9;
        var colorClass = '';

        while (workHour < 18) {

            var currentHour = moment().hour();
            //change color for future, past and present hours
            if ((workHour - currentHour) < 0) {
                colorClass = 'past';
            } else if (workHour === currentHour) {
                colorClass = 'present';
            } else {
                colorClass = 'future';
            }
            //gets any existing items from local storage
            var localSchedule = localStorage.getItem(workHour);
            var scheduleItem = '';

            if (localSchedule !== null)
                scheduleItem = localSchedule;

            //append timeblocks to html
            $('#timeblocks').append(`<div class='row time-block'>
            <div class='col-md-1 hour'>${moment().hour(workHour).format('h a')}</div>
            <div class='col-md-10 divider ${colorClass}'>
                <textarea class='description' cols='100%'>${scheduleItem}</textarea>
            </div>
            <div class='col-md-1 saveBtn btn btn-primary'>
                SAVE
            </div>
            `)
            workHour++;
        }
    }
    hourBlocks();
});

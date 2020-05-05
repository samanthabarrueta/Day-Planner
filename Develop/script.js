$(document).ready(function() {
    var currentDay = moment().format('dddd, MMMM Do');
    $('#currentDay').html(currentDay);

    var createPlanner = function () {
        var workHours = 9;
        for (var i = 0; i < workHours; i++) {
            $('#timeblocks').append(`<div class='row time-block'>
            <div class='col-md-1 hour description'>
            </div>
            <div class='col-md-10 present divider'>
              <textarea cols='100%'></textarea>
            </div>
            <div class='col-md-1 saveBtn'>
                SAVE
            </div>
        `)
        }
            
    }

    createPlanner();
});

    

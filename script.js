const hourBlocks = () => {
    const currentDay = moment().format('dddd, MMMM Do');
    $('#currentDay').append(currentDay);

    let workHour = 9;
    let colorClass = '';

    while (workHour < 18) {
        let currentHour = moment().hour();
        
        if ((workHour - currentHour) < 0) {
            colorClass = 'past';
        } else if (workHour === currentHour) {
            colorClass = 'present';
        } else {
            colorClass = 'future';
        }

        let localSchedule = localStorage.getItem(workHour);
        let scheduleItem = '';

        if (localSchedule !== null)
            scheduleItem = localSchedule;

        $('#timeblocks').append(`
        <div class='row time-block'>
        <div class='col-md-1 hour'>${workHour}</div>
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

$(document).on('click', '.saveBtn', function (event) {
    let newSchedItem = $(this).prevAll();
    let schedItem = $(newSchedItem[0]).children().first().val();
    let schedHour = $(newSchedItem[1]).html();
    localStorage.setItem(schedHour, schedItem);
});


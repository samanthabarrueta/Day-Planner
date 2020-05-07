$(document).ready(function() {

    var currentDay = moment().format('dddd, MMMM Do');
    $('#currentDay').html(currentDay);


    function hourBlocks(){
        
        var workHour = 9;        

        while(workHour < 18){
            
            var currentHour = moment().hour();
            var colorClass = '';
            

            if ((workHour - currentHour) < 0){
                colorClass = 'past';
            } else if (workHour === currentHour){
                colorClass = 'present';
            } else {
                colorClass = 'future';
            }           


            $('#timeblocks').append(`<div class='row time-block'>
            <div class='col-md-1 hour description' id='${workHour}'> ${workHour}
            </div>
            <div class='col-md-10 divider ${colorClass}'>
                <textarea cols='100%' value=''></textarea>
            </div>
            <div class='col-md-1 saveBtn btn btn-primary id='save'>
                SAVE
            </div>
            `)
            workHour++;

        }
    } 

    hourBlocks();
  
});
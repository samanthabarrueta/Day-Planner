$(document).ready(function() {

    var currentDay = moment().format('dddd, MMMM Do');
    $('#currentDay').html(currentDay);


    function hourBlocks(){
        
        var startWork = moment('9:00 am', 'h:mm a'); 
        var endWork = moment('6:00 pm', 'h:mm a');
        var currentHour = moment().hour('h:mm a');
        console.log(currentHour);
        
        var calendar = {};

        for (var m = moment(startWork); m.isBefore(endWork); m.add(1, 'hour')){
            var time = m.format('h:mm a');

        /*while(workHour < 18){
             ${colorClass}
            var currentHour = moment().hour();
            var colorClass = '';
            

            if ((workHour - currentHour) < 0){
                colorClass = 'past';
            } else if (workHour === currentHour){
                colorClass = 'present';
            } else {
                colorClass = 'future';
            }    */       


            $('#timeblocks').append(`<div class='row time-block'>
            <div class='col-md-1 hour description' id='${time}'> ${time}
            </div>
            <div class='col-md-10 divider'>
                <textarea cols='100%' name='task' id='task' value='task'></textarea>
            </div>
            <div class='col-md-1 saveBtn btn btn-primary id='save'>
                SAVE
            </div>
            `)
            

        }
    } 

    hourBlocks();

    
  
});
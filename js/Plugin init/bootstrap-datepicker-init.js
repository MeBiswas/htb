// Datepicker Initialization
$(document).ready(function(){
    $(function () {
        var dateToday = new Date();
        $('#datepicker').datepicker({
            changeMonth: true,
            changeYear: true,
            format: "dd/mm/yyyy",
            language: "en",
            autoclose: true,
            todayHighlight: true,
            endDate: 'today'
        });        
    });
});
$(document).ready(function(){
    $(function () {
        var dateToday = new Date();
        $('#editDatePicker').datepicker({
            changeMonth: true,
            changeYear: true,
            format: "dd/mm/yyyy",
            language: "en",
            autoclose: true,
            todayHighlight: true,
            endDate: 'today'
        });        
    });
});
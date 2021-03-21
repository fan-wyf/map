//开始时间
$('#start-time-date ').datepicker({
    todayBtn : "linked",
    autoclose : true,
    format: "yyyy-mm-dd",
    language: "zh-CN",
    todayHighlight : true,
    startDate : new Date()
}).on('changeDate',function(e){
    var startTime = e.date;
    $('#end-time-date').datepicker('setStartDate',startTime);
});
//结束时间：
$('#end-time-date').datepicker({
    todayBtn : "linked",
    autoclose : true,
    format: "yyyy-mm-dd",
    language: "zh-CN",
    todayHighlight : true,
    startDate : new Date()
}).on('changeDate',function(e){
    var endTime = e.date;
    $('#start-time-date').datepicker('setEndDate',endTime);
});

const baseUrlPath = "src/";
var timerID = null;
window.onbeforeunload = (e)=>{
    e = e || window.event;

    if(e)
        e.returnValue = "Are you sure to leave this site?";
    
    return "Are you sure to leave this site?";

}
var goToURL = (url) => {
    $.ajax({
        url : baseUrlPath+url,
        async : true,
        type : "get",
        success : (res)=>{
            $("#main_div").html(res);
        },
        error : (res, err)=>{
            $("#main_div").html(`<h3 style='color:red' class='h-100 d-flex align-items-center'>${res.statusText} : ${res.status}</h3>`);
        }
    })
}
var startTimer = ()=>{
    let timer = new Date().getTime();
    timerID = setInterval(()=>{countDown(timer);}, 1000);
}
var countDown = (startime) => {
    let current = new Date().getTime();
    let total_time = 3600;
    let now = total_time-parseInt((current-startime)/1000);;
    if(now<0){
        // checking if solved the puzzle
        clearInterval(timerID);
        return;
    }
    let hour = Math.floor(now/3600);
    hour = hour.toString().length==1?'0'+hour:hour;
    let minute = Math.floor((now%3600)/60);
    minute = minute.toString().length==1?'0'+minute:minute;
    let seconds = Math.floor(now%60);
    seconds = seconds.toString().length==1?'0'+seconds:seconds;
    let string_time = hour+':'+minute+':'+seconds;
    $("#timer_div").text(string_time);
}
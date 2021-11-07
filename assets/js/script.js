
const taskKey = document.getElementById("taskKey");
const btnSave = document.getElementById("btnSave");

let currentTime = moment();

let timeStamp = currentTime.format("LL");

$(".time-stamp").html(timeStamp);

// pull from local storage
$("button[my-hour|='0']").siblings(".taskKey").val(localStorage.getItem(0));
$("button[my-hour|='1']").siblings(".taskKey").val(localStorage.getItem(1));
$("button[my-hour|='2']").siblings(".taskKey").val(localStorage.getItem(2));
$("button[my-hour|='3']").siblings(".taskKey").val(localStorage.getItem(3));
$("button[my-hour|='4']").siblings(".taskKey").val(localStorage.getItem(4));
$("button[my-hour|='5']").siblings(".taskKey").val(localStorage.getItem(5));
$("button[my-hour|='6']").siblings(".taskKey").val(localStorage.getItem(6));
$("button[my-hour|='7']").siblings(".taskKey").val(localStorage.getItem(7));
$("button[my-hour|='8']").siblings(".taskKey").val(localStorage.getItem(8));

// convert moment

let auditTime = function() {
let children = $(".container").children();
// console.log(children)
children.each(function() {
let input = $(this).children(".taskKey");    
let saveBtn = $(this).children(".saveBtn");
let hour = Number(saveBtn.attr("my-hour")) + 9;

input.addClass("past")
    // console.log(hour);
    // console.log(currentTime.hour());

    if (currentTime.hour() < hour ) {
        $(input).addClass("future")
    } else if (currentTime.hour() === hour) {
        $(input).addClass("present")
    };
})
}

auditTime();

// save to local storage
$(".time-block").on("keydown", ".taskKey", function (e) {
    console.log(e.originalEvent.code)
    if ("Enter" === e.originalEvent.code) {
        let key = $(this).siblings(".saveBtn").attr("my-hour");
        let value = $(this).val();
        // console.log(key);
        // console.log(value);

        localStorage.setItem(key, value);
    }
});

$(".time-block").on("click", ".saveBtn", function () {

    let key = $(this).attr("my-hour");
    let value = $(this).siblings(".taskKey").val();
    
    localStorage.setItem(key, value);

    // console.log(".saveBtn");
    // console.log($(this).attr("my-hour"));
    // console.log(value);
});

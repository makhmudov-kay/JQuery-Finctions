
// console.log($("div"));
let x = $("div")
.on("click", function () {
    $(this).toggleClass("active")
})
.html("Проверка метода HTML!")
.css({
    fontSize: "50px",
    color: "white",
    background: "#00ff50"
}).addClass("firstClass").addClass("secondClass").removeClass("firstClass").on("click", function () {
    $(this).width("50%")
}).height(150)
console.log(x);
// $("div")
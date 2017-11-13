/*头部移入事件*/
$("#community").mouseout(function(){
    $("div.drop-content").css("display","none");
});
$("#community").mousemove(function(){
    $("div.drop-content").css("display","block");
});
$("#reserve").mouseout(function () {
    $(".drop-reserve").css("display","none");
});
$("#reserve").mousemove(function () {
    $(".drop-reserve").css("display","block");
});
$("#search").focus(function () {
    $("#search-box").css("display","block");
});
$("#seek").focus(function () {
    $(".search-list").css("display","block");
});
$("#seek").blur(function () {
    $(".search-list").css("display","none");
});
/**穷游商城***/
// var i=0;
// $(document).ready(function () {
//    $(".mall-1").eq(0).show().siblings(".mall-1").hide();
//    $(".bt1").mouseenter(function(){
//       i=$(this).index();
//        showMall();
//    });
// });
//  function showMall(){
//     $(".mall-1").eq(i).fadeIn(1000).siblings(".mall-1").fadeOut(1000);
// }
$(".mall-1").eq(0).show().siblings(".mall-1").hide();
$(".slide-btn").on("mouseover","a",function (e) {
    // $(".mall-1").eq(0).show().siblings(".mall-1").hide();
    var _this=$(e.target);
    var index=$(this).index();
    _this.addClass("active").siblings().removeClass("active");
    $(".mall-1").eq(index).fadeIn(500).siblings(".mall-1").fadeOut(500);
});
/******热门话题与游记*******/
// var n=0;
// $(document).ready(function () {
//    $(".hot-tip").eq(0).show().siblings(".hot-tip").hide();
//    $(".bt0").mouseenter(function () {
//        n=$(this).index();
//        showHot();
//    })
// });
// function showHot(){
//     $(".hot-tip").eq(n).fadeIn(1000).siblings(".hot-tip").fadeOut(1000);
// }
$(".hot-tip").eq(0).show().siblings(".hot-tip").hide();
$(".slide-btn0").on("mouseover","a",function (e) {
    var _this=$(e.target);
    var index=$(this).index();
    _this.addClass("active").siblings().removeClass("active");
    $(".hot-tip").eq(index).fadeIn(500).siblings(".hot-tip").fadeOut(500);
});






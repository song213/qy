/*头部移入事件*/
$("#community").mouseout(function(e){
    $(".drop-content").css("display","none");
});
$("#community").mousemove(function(e){
    $(".drop-content").css("display","block");
});
$("#reserve").mouseout(function (e) {
    $(".drop-reserve").css("display","none");
});
$("#reserve").mousemove(function (e) {
    $(".drop-reserve").css("display","block");
});
$("#search").mouseenter(function (e) {
    $("#search-box").css("display","block");
});

/*热门城市推荐*/
$(".hot-place .tabs").on("mouseover","li",function (e) {
    var _this = $(e.target);
    var index = $(this).index();
     if(e.target.nodeName == "SPAN") {
         _this.parent().addClass("on").siblings().removeClass("on");
     } else {
         _this.addClass("on").siblings().removeClass("on");
     }

     // $(".place-content ul").each(function(indexUl,doEle){
     //    if(indexUl == index){
     //        $(this).addClass("on").siblings().removeClass("on");
     //    }
     // })
    $(".place-content ul").eq(index).show().siblings(".place-content ul").hide();
});

/***主题目的地***/
$(".theme-tab .tabs").on("mouseover","li",function(e){
    var _this=$(e.target);
    var index=$(this).index();
    if(e.target.nodeName=="SPAN"){
        _this.parent().addClass("on").siblings().removeClass("on");
    }else{
        _this.addClass("on").siblings().removeClass("on");
    }
    $(".content").eq(index).show().siblings(".content").hide();
});

/*月度推荐*/
$(".holiday-date ul.year").on("mouseover","li",function (e) {
    var _this=$(e.target);
    var index=$(this).index();
    if(e.target.nodeName=="SPAN"){
        _this.parent().addClass("active").siblings().removeClass("active");
    }else {
        _this.addClass("active").siblings().removeClass("active");
    }
    $(".cards").eq(index).show().siblings().hide();
});

/*国家列表*/
$(".city-inner").eq(0).show().siblings().hide();
$(".country-tabs ul.tabs").on("mouseover","li",function (e) {
    var _this=$(e.target);
    var index=$(this).index();
    if(e.target.nodeName=="SPAN"){
        _this.parent().addClass("on").siblings().removeClass("on");
    }else{
        _this.addClass("on").siblings().removeClass("on");
    }
    $(".city-inner").eq(index).show().siblings().hide();
});




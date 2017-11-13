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

// 图片
// $(".g-pic").on("mouseover",function(){
//     $(".mark").show();
// }).on("mouseout",function(){
//     $(".mark").hide();
// });

//轮播旁边
$(".nav-left .nav-box").on("mouseover","li",function(e){
    var _this=$(e.target);
    var index=$(this).index();
    // console.log(index);
    _this.addClass("item-current").siblings().removeClass("item-current");
    $(".nav-item-inner").eq(index).show().siblings(".nav-item-inner").hide();
}).mouseout(function (e) {
   $(" .nav-item-inner").css("display","none");
});
/*轮播*/
var banner_jsq=1;
//手动轮播器
$(".pagination li ").hover(function(){
    clearInterval(banner_timer);
    banner(this);
},function(){
    banner_jsq=$(this).index()+1;
    banner_timer=setInterval(banner_fn,2000);
});

console.log($(".slide_control .banner img").length);
//自动轮播器
var banner_timer=setInterval(banner_fn,2000);

//手动轮播器函数
function banner(obj){
    $(obj).addClass("page-current").siblings().removeClass("page-current");
    //var index=banner_jsq;
    var index=$(obj).index();
    var i=(-755*index)+"px";
    $(".banner").animate({
        marginLeft:`${i}`
    })
}
//自动轮播器函数
function banner_fn(){
    if(banner_jsq>=$(".slide_control .banner img").length) banner_jsq=0;
    banner($(".pagination li ").eq(banner_jsq).first());
    banner_jsq++;
}

/*分页*/
function loadpage(pno=1){
    $.ajax({
        type:"GET",
        url:"data/guide.php",
        data:{pno:pno},
        success:function(data){
            // var data = JSON.parse(data)
            console.log(data);
            var html = "";
            var flag = 0;
                for(var g of data.data){
                    if(flag%5 == 0) {
                        html += `<ul class="guide-inner">`;
                        var x = flag/5;
                        console.log(x)
                    }
                    html +=`<li class="guide-item">
                            <div class="g-pic" >
                                <a href="#">
                                    <img src="${g.img}" alt="" title="${g.title}穷游锦囊">
                                </a>
                                <span class="new"></span>
                                <a href="#" class="mark" style="display: none"></a>
                            </div>
                            <p class="g-title" title="${g.title}">
                                <a href="#">${g.title}</a>
                            </p>
                            <p class="g-date">
                                ${g.subtitle}
                                <br>
                                ${g.up_date}
                            </p>
                        </li>`;
                    if(flag == 5*(x+1)-1) {
                        html += `</ul> <div class="line"></div>`;
                    }
                    flag++;
            }

            $(".content").html(html);

            var htmls="";
            htmls+=`<a href="javascript:;">上一页</a>`;
            for(var i=1;i<=data.pageCount;i++ ){
                htmls+=`<a href="javascript:;">${i}</a>`;
            }
            htmls+=`<a href="javascript:;">下一页</a>`;
            $(".page-1>.page-btn").html(htmls).children(":eq("+pno+")").addClass("current");
            if(pno==1){
                $(".page-1>.page-btn>a:first-child").hide();
            }
            if(pno==data.pageCount){
                $(".page-1>.page-btn>a:last-child").hide();
            }
            if(pno!=1&&pno!=data.pageCount){
                $(".page-1>.page-btn>a:first-child,.page-1>.page-btn>a:last-child").show();
            }
        },
        error:function(){
            alert("网络出现故障，请检查");
        }
    });
}
loadpage();
$(".page-1>.page-btn").on("click","a",function(e){
    e.preventDefault();
    $a=$(this);
    var pno=parseInt($(".page-1>.page-btn>a.current").html());
    if($a.is(":first-child")){
        loadpage(pno-1);
    }else if($a.is(":last-child")){
        loadpage(pno+1);
    }else {
        loadpage($a.html());
    }

});



















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

/*创建行程*/
$(".slide-btn").mouseenter(function () {
    $(".btn-inner").fadeIn(300);
});
$(".btn").mouseleave(function () {
    $(".btn-inner").fadeOut(300);
});

/*目的地*/
$(".more").click(function () {
    $(".guide-inner ").css("height","124px");
    $(".more").css("display","none");
    $(".less").css("display","block");
});
$(".less").click(function () {
    $(".guide-inner").css("height","36px");
    $(".more").css("display","block");
    $(".less").css("display","none");
});
/*出行时间*/
$(".more1").click(function () {
    $(".guide-inner1 ").css("height","80px");
    $(".more1").css("display","none");
    $(".less1").css("display","block");
});
$(".less1").click(function () {
    $(".guide-inner1").css("height","36px");
    $(".more1").css("display","block");
    $(".less1").css("display","none");
});
/*多选*/
$(".guide-more3 a").click(function () {
    $(".guide-inner3").css("display","none");
    $(".guide-more3 a").css("display","none");
    $(".choose").css("display","block");
});
$(".cancel").click(function () {
   $(".guide-inner3").css("display","block");
    $(".guide-more3 a").css("display","block");
    $(".choose").css("display","none");
});

/*导入分页*/
function loadpage(pno=1){
    $.ajax({
        type:"GET",
        url:"data/plan.php",
        data:{pno:pno},
        success:function(data){
            // var data = JSON.parse(data)
            console.log(data);
            var html = "";
            for(var p of data.data){
                html+=`
                    <div class="item">
                        <div class="img">
                            <img src="${p.img}" alt="">
                        <div class="title">
                            <div class="day">
                                <strong>${p.days}</strong>天
                            </div>
                            <dl class="date">
                                <dt>${p.dates}</dt>
                                <dd>${p.destinate}</dd>
                            </dl>
                         </div>
                        </div>
                         <div class="content">
                            <div class="place">
                                <span>${p.place}</span>
                            </div>
                            <div class="person">
                               <div>${p.person_name}</div>
                                <div>
                                 <span>${p.browse}</span>
                                 |
                                 <span>${p.note}</span>
                                </div>
                            </div>
                        </div>
                    </div>
				`;
            }
            $(".guide-pic .pic-list").html(html);

            var htmls="";
            htmls+=`<a href="javascript:;">上一页</a>`;
            for(var i=1;i<=data.pageCount;i++ ){
                htmls+=`<a href="javascript:;">${i}</a>`;
            }
            htmls+=`<a href="javascript:;">下一页</a>`;
            $(".page>.page-btn").html(htmls).children(":eq("+pno+")").addClass("current");
            if(pno==1){
                $(".page>.page-btn>a:first-child").hide();
            }
            if(pno==data.pageCount){
                $(".page>.page-btn>a:last-child").hide();
            }
            if(pno!=1&&pno!=data.pageCount){
                $(".page>.page-btn>a:first-child,.page>.page-btn>a:last-child").show();
            }
        },
        error:function(){
            alert("网络出现故障，请检查");
        }
    });
}
loadpage();
$(".page>.page-btn").on("click","a",function(e){
    e.preventDefault();
    $a=$(this);
    var pno=parseInt($(".page>.page-btn>a.current").html());
    if($a.is(":first-child")){
        loadpage(pno-1);
    }else if($a.is(":last-child")){
        loadpage(pno+1);
    }else {
        loadpage($a.html());
    }

});

















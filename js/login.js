/*登录*/
$(".account").click(function () {
    $(".form-1").css("display","block");
    $(".account").addClass("current").siblings(".message").removeClass("current");
   $(".form-2").css("display","none");
    $(".tel_login").css("display","block");
});
$(".message").click(function () {
    $(".form-2").css("display","block");
    $(".message").addClass("current").siblings(".account").removeClass("current");
    $(".form-1").css("display","none");
    $(".tel_login").css("display","none");
});
/*表单*/
var $txtName=$("#uname");
var $txtpwd=$("#upwd");
$("#uname").blur(function(check){
    var $uName=$txtName.val();
    var vali=/^[A-Za-z0-9_\-\u4e00-\u9fa5]{3,15}$/;
    if(!vali.test($uName)){
        $txtName.next().css("visibility","visible");
        $("#uname").css("background","none");
        check.preventDefault();
    }else{
        $("#uname").css("background","url('img/login/ok.png') 305px 6px no-repeat");
        $txtName.next().css("visibility","hidden");
    }
});
$("#upwd").blur(function(check){
    var $uPwd=$txtpwd.val();
    var vali=/^[A-Za-z0-9]{3,15}$/;
    if(!vali.test($uPwd)){
        $txtpwd.next().css("visibility","visible");
        $("#upwd").css("background","none");
        check.preventDefault();
    }else{
        $txtpwd.css("background","url('img/login/ok.png') 305px 6px no-repeat");
        $txtpwd.next().css("visibility","hidden");
    }
});
var $tel=$("#tel");
var $code=$("#code");
var $message=$("#message");

$("#tel").blur(function(check){
    var $uTel=$tel.val();
    var vali=/^1[3,5,7,8]\d{9}$/;
    if(!vali.test($uTel)){
        $tel.parent().next().css("visibility","visible");
        check.preventDefault();
    }else{
        $tel.css("background","url('img/login/ok.png') 222px 8px no-repeat");
        $tel.parent().next().css("visibility","hidden");
    }
});
$("#code").blur(function(check){
    var $uCode=$code.val();
    var vali=/^[Bb][Mm][6][8]$/;
    if(!vali.test($uCode)){
        $code.parent().next().css("visibility","visible");
        check.preventDefault();
    }else{
        $code.css("background","url('img/login/ok.png') 185px 9px no-repeat");
        $code.parent().next().css("visibility","hidden");
    }
});
$("#message").blur(function(check){
    var $uMessage=$message.val();
    var vali=/^[0-9]{4-6}$/;
    if(!vali.test($uMessage)){
        $message.parent().next().css("visibility","visible");
        check.preventDefault();
    }else{
        $message.css("background","url('img/login/ok.png') 222px 8px no-repeat");
        $message.parent().next().css("visibility","hidden");
    }
});

/*登录-1*/
$("#btn").click(function(e){
    e.preventDefault();
    //3:获取用户输入用户名和密码
    var n = $("#uname").val();
    var p = $("#upwd").val();
    //4:发送ajax请求
    $.ajax({
        type:"GET",
        url:"data/login.php",
        data:{uname:n,upwd:p},
        success:function(data){
            if(data.code>0){
               sessionStorage.setItem("uname",n);
               sessionStorage.setItem("uid",data.uid);
                alert("登录成功,1秒后跳回首页");
                setTimeout(function () {
                    location.href="index.html"
                },1000);
            }else{
                alert("用户名或密码错误");
            }
        },
        error:function(){
            alert("您的网络出现故障，请检查");
        }
    });
});

/*登录-2*/
$("#btn-1").click(function(e){
    e.preventDefault();
    //3:获取用户输入用户名和密码
    var p = $("#tel").val();
    var m= $("#message").val();
    //4:发送ajax请求
    $.ajax({
        type:"GET",
        url:"data/login-1.php",
        data:{phone:p,mcode:m},
        success:function(data){
            if(data.code>0){
                sessionStorage.setItem("phone",p);
                sessionStorage.setItem("uid",data.uid);
                alert("登录成功,1秒后跳回首页");
                setTimeout(function () {
                    location.href="index.html"
                },1000);
            }else{
                alert("用户名或密码错误");
            }
        },
        error:function(){
            alert("您的网络出现故障，请检查");
        }
    });
});














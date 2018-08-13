$(function(){
  /*图片轮播*/
  var _index=0;
	  var timePlay=null;
	  $("#roll .imgList ").eq(0).show().siblings("li").hide();//只显示第一张
	  
	  $("ul.roll_button li").click(function(){
	      clearInterval(timePlay);
	      _index=$(this).index();
	      $("ul.roll_button li .hover").removeClass('hover');
	      $(this).find('a').addClass("hover");
	     $("#roll .imgList ").eq(_index).fadeIn().siblings("li").fadeOut();//淡出
	     autoPlay();
	 });
	 
	 //自动轮播
	 function autoPlay(){
	     timePlay=setInterval(function(){
	         _index++;
	         if(_index<5){
	             if(_index==4){_index=-1; }
	             $("ul.roll_button li .hover").removeClass('hover');
	             $("ul.roll_button li").eq(_index).find('a').addClass("hover");
	 
	             $("#roll .imgList ").eq(_index).fadeIn().siblings("li").fadeOut();
	         }else{_index=-1;}
	     },2000);
	 };
	 autoPlay();//调用和执行
  /*登录文本框js*/
  var $account = $("input#account");
  var $pwd = $("input#password");
  $account.focus(function(){
    if($(this).val() == "账号"){
      $(this).val("");
    }
  }).blur(function(){
    if($(this).val() == ""){
      $(this).val("账号");
    }
  });
  $pwd.focus(function(){
    if($(this).val() == "密码"){
      $(this).val("");
    }
  }).blur(function(){
    if($(this).val() == ""){
      $(this).val("密码");
    }
  });
 /*为登录按钮添加事件处理函数*/
 $login = $("div#login button");
 $login.click(function(){
   if($account.text() == "" || $pwd.text() == ""){
     alert($account.text());
     alert($pwd.text());
    $("div#login span.warning").text("账号或密码不能为空！"); 
   }else{
     $("div#login span.warning").text(""); 
   }
 });
  /*为上传，展示，分享模块添加鼠标滑过后的效果*/
  /*当鼠标滑过时，将图标和字体的透明度设置为1,*/
  var $div = $("div.content .item");
  $div.mouseenter(function(){
    $(this).find('span,h2,.info').css("opacity","1");                    
  }).mouseleave(function(){
    $(this).find('span,h2,.info').css("opacity","0.7");
  });
  //将黑白图标变为彩色图标
  var $upload = $("div#upload");
  $upload.mouseenter(function(){
    $(this).find(".icons").css("background-position","-35px -100px");
  }).mouseleave(function(){
    $(this).find(".icons").css("background-position","-35px -60px");
  });
  var $show = $("div#show");
  $show.mouseenter(function(){
    $(this).find(".icons").css("background-position","-35px -180px");
  }).mouseleave(function(){
    $(this).find(".icons").css("background-position","-35px -140px");
  });
  var $share = $("div#share");
  $share.mouseenter(function(){
    $(this).find(".icons").css("background-position","-25px -262px");
  }).mouseleave(function(){
    $(this).find(".icons").css("background-position","-25px -220px");
  });
})


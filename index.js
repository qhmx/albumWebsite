$(function(){
  /*ͼƬ�ֲ�*/
  var _index=0;
	  var timePlay=null;
	  $("#roll .imgList ").eq(0).show().siblings("li").hide();//ֻ��ʾ��һ��
	  
	  $("ul.roll_button li").click(function(){
	      clearInterval(timePlay);
	      _index=$(this).index();
	      $("ul.roll_button li .hover").removeClass('hover');
	      $(this).find('a').addClass("hover");
	     $("#roll .imgList ").eq(_index).fadeIn().siblings("li").fadeOut();//����
	     autoPlay();
	 });
	 
	 //�Զ��ֲ�
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
	 autoPlay();//���ú�ִ��
  /*��¼�ı���js*/
  var $account = $("input#account");
  var $pwd = $("input#password");
  $account.focus(function(){
    if($(this).val() == "�˺�"){
      $(this).val("");
    }
  }).blur(function(){
    if($(this).val() == ""){
      $(this).val("�˺�");
    }
  });
  $pwd.focus(function(){
    if($(this).val() == "����"){
      $(this).val("");
    }
  }).blur(function(){
    if($(this).val() == ""){
      $(this).val("����");
    }
  });
 /*Ϊ��¼��ť����¼�������*/
 $login = $("div#login button");
 $login.click(function(){
   if($account.text() == "" || $pwd.text() == ""){
     alert($account.text());
     alert($pwd.text());
    $("div#login span.warning").text("�˺Ż����벻��Ϊ�գ�"); 
   }else{
     $("div#login span.warning").text(""); 
   }
 });
  /*Ϊ�ϴ���չʾ������ģ�������껬�����Ч��*/
  /*����껬��ʱ����ͼ��������͸��������Ϊ1,*/
  var $div = $("div.content .item");
  $div.mouseenter(function(){
    $(this).find('span,h2,.info').css("opacity","1");                    
  }).mouseleave(function(){
    $(this).find('span,h2,.info').css("opacity","0.7");
  });
  //���ڰ�ͼ���Ϊ��ɫͼ��
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


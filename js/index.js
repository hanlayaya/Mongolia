window.onload=function () {
    // alert(document.documentElement.scrollTop);


    // index页面
    window.onscroll=function () {
        var top=document.documentElement.scrollTop;
        // alert(top);
        if (top>200 && top<700){
            $("#cloud").css("bottom","70px");
            $("#wz").css("bottom","0px").css("opacity","1").css("transition-delay",".4s");
            $("#woman").css("bottom","-60px");
        }
        else {
            $("#cloud").css("bottom","-50px");
            $("#wz").css("opacity","0").css("transition-delay",".1s");
            $("#woman").css("bottom","-100px");
        }
    }

    var imgs = $(".music_pics img");
    var audio = $(".music1 audio");
    for(var i = 0;i<imgs.length;i++){
        imgs[i].index=i;
        imgs[i].onclick=function () {
            audio[0].src="./videos/"+this.index+".mp3";
            audio[0].autoplay="autoplay";
        }
    }

    //    language页面

    var tabs = document.getElementsByTagName("button");
    var tab_box = $("#language_show > div");

    //    custom页面

    var triangles=$(".famous_yylc_triangle img");
    // alert(triangles.length);
    for(var i = 0;i<triangles.length;i++){
        triangles[i].index=i;
        // alert();
        triangles[i].onmouseover=function () {
            // alert();
            $(".famous_yylc_zz"+this.index).fadeIn();
            $(".custom_blackBox"+this.index).fadeIn();
        };
        triangles[i].onmouseout=function () {
            $(".famous_yylc_zz"+this.index).fadeOut();
            $(".custom_blackBox"+this.index).fadeOut();
        };

    }

    //clothes页面
    
    var clothes_tabs1=$(".clothes_tab1 li");
    var clothes_tabBoxs1=$(".clothes_tab1 div");

    for (var i = 0; i < clothes_tabs1.length; i++) {
        clothes_tabs1[i].index=i;
        clothes_tabs1[i].onclick=function(){
            for (var i = 0; i < clothes_tabs1.length; i++) {
                clothes_tabs1[i].className="";
                clothes_tabBoxs1[i].className="clothes_imgBox"+i;
            }
            this.className="purple";
            clothes_tabBoxs1[this.index].className="clothes_imgBox"+this.index+" "+"show";
        }
        
    }

    var clothes_tabs2=$(".clothes_tab2 li");
    var clothes_tabBoxs2=$(".clothes_tab2 div");

    for (var i = 0; i < clothes_tabs2.length; i++) {
        clothes_tabs2[i].index=i;
        clothes_tabs2[i].onclick=function(){
            for (var i = 0; i < clothes_tabs2.length; i++) {
                clothes_tabs2[i].className="";
                clothes_tabBoxs2[i].className="clothes_imgBox1"+i;
            }
            this.className="purple";
            clothes_tabBoxs2[this.index].className="clothes_imgBox1"+this.index+" "+"show";
        }
    }




    // login界面
    var login_username=$("#uasername");
    var login_password=$("#password");
    login_username.focus(function () {
        if (login_username.attr("placeholder")=="请输入用户名"){
            login_username.attr("placeholder","");
        }
    });
    login_username.blur(function () {
        if (login_username.attr("placeholder")==""){
            login_username.attr("placeholder","请输入用户名");
        }
    });

    login_password.focus(function () {
        if (login_password.attr("placeholder")=="密码"){
            login_password.attr("placeholder","");
        }
    });
    login_password.blur(function () {
        if (login_password.attr("placeholder")==""){
            login_password.attr("placeholder","密码");
        }
    });



    //register页面
    var register_user=$("#uasername1")
    var register_email=$("#email");
    var login_password1=$("#password1");
    var login_password2=$("#password2");
    var login_test=$("#test");


    register_user.focus(function () {
        if (register_user.attr("placeholder")=="请输入用户名 (第一位必须是数字)"){
            register_user.attr("placeholder","");
        }
    });
    register_user.blur(function () {
        if (register_user.attr("placeholder")==""){
            register_user.attr("placeholder","请输入用户名 (第一位必须是数字)");
        }
    });

    register_email.focus(function () {
        if (register_email.attr("placeholder")=="请输入你的邮箱"){
            register_email.attr("placeholder","");
        }
    });
    register_email.blur(function () {
        if (register_email.attr("placeholder")==""){
            register_email.attr("placeholder","请输入你的邮箱");
        }
    });

    login_password1.focus(function () {
        if (login_password1.attr("placeholder")=="密码"){
            login_password1.attr("placeholder","");
        }
    });
    login_password1.blur(function () {
        if (login_password1.attr("placeholder")==""){
            login_password1.attr("placeholder","密码");
        }
    });

    login_password2.focus(function () {
        if (login_password2.attr("placeholder")=="请再次输入密码"){
            login_password2.attr("placeholder","");
        }
    });
    login_password2.blur(function () {
        if (login_password2.attr("placeholder")==""){
            login_password2.attr("placeholder","请再次输入密码");
        }
    });

    login_test.focus(function () {
        if (login_test.attr("placeholder")=="验证码"){
            login_test.attr("placeholder","");
        }
    });
    login_test.blur(function () {
        if (login_test.attr("placeholder")==""){
            login_test.attr("placeholder","验证码");
        }
    });



    //注册提交
    $("#submit1").click(function () {
        // alert();
        // var  validate1Flag=validate1();
        // var validateUsername1Flag=validateUsername1();
        //
        // // validate1();
        // validateUsername1();
        // if (validate1Flag==true && validateUsername1Flag==true){
        //     return true;
        // }else {
        //     alert("信息填写错误");
        //     return false;
        // }
        validateUsername();
        validateEmail();
        validatePassword();
        validate1();


    });

    //密码
    function validatePassword() {
        if(!login_password1.val()||!login_password2.val()){
            alert("密码不能为空");
            login_password1[0].focus();
            return false;
        }else if(login_password1.val()!=login_password2.val()){
            alert("两次密码不一致！");
            login_password1[0].focus();
            return false;
        }
    }

    //用户名
    function validateUsername() {
        var str_temp =register_user[0].value.substr(0,1);
        if(!((str_temp>="a"&&str_temp<="w")||(str_temp>="A"&&str_temp<="W"))){
            alert("用户名第一个字符需为字母!");
            register_user[0].focus();
            return false;
        }
    }


    //邮箱
    function validateEmail() {
         // var temp = document.getElementById("text1");
         var email=$("#email");
        //对电子邮件的验证
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if(!myreg.test(email.val())) {
            alert('请输入有效的E_mail！');
            // myreg.focus();
            return false;
        }
    }



    //验证码
    $("form span").click(function () {
        createCode();
    });

    function createCode(){
        code = "";
        var codeLength = 4;//验证码的长度
        var checkCode = document.getElementById("code");
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
            'S','T','U','V','W','X','Y','Z');//随机数
        for(var i = 0; i < codeLength; i++) {//循环操作
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
            code += random[index];//根据索引取得随机数加到code上
        }
        checkCode.innerHTML = code;//把code值赋给验证码
        // input则是value
    }


    function validate1() {
        var inputCode=document.getElementById("test").value.toUpperCase();
        if(inputCode.length <= 0) { //若输入的验证码长度为0
            alert("验证码不能为空"); //则弹出请输入验证码
            return false;
        }
        else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时
            alert("验证码输入错误！@_@"); //则弹出验证码输入错误
            createCode();//刷新验证码

            return false;
            document.getElementById("test").value = "";//清空文本框
        }
    }

    // function validateUsername1() {
    //     var userName=$("#uasername1");
    //     // var userNameId=$("userNameId");
    //     var reg=/^[0-9a-zA-Z][0-9a-zA-Z_]{2,16}[0-9a-zA-Z]$/;
    //     if(userName.value==""){
    //         // userNameId.className="error_prompt";
    //         // userNameId.innerHTML="通行证用户名不能为空，请输入通行证用户名";
    //         alert("用户名不能为空");
    //         return false;
    //     }
    //     if(reg.test(userName.value)==false){
    //         // userNameId.innerHTML="1、由字母、数字、下划线<br/>2、只能以数字、字母开头或结尾，且长度为4-18";
    //         alert("用户名由字母、数字、下划线组成");
    //         return false;
    //     }
    //     // userNameId.className="ok_prompt";
    //     // userNameId.innerHTML="通行证用户名输入正确";
    //     return true;
    // }






    //language补充
    $(".language_select button").click(function(){
    	if($(".purple").attr("alt") != this.getAttribute("alt")){
    		$(".purple").removeClass("purple");
    		this.className="purple";
    		$("#currentTypeId").attr("alt1",this.getAttribute("alt"));
    		$.ajax({
 		       url:"languageAction",
 		       type:"POST",
 		       data:{pageNow:1,typeId:$("#currentTypeId").attr("alt1")},
 		       datatype:'json',
 		       success: function(data,status){
 		    	   $(".language_show0_0 img:first").attr("src",data[0].picture_location);
 		    	   $(".language_show0_0 img:last").attr("src",data[0].flash_location); 
 		    	   if(data[1]){
 		    		   $(".language_show0_1 img:first").attr("src",data[1].picture_location);
 			    	   $(".language_show0_1 img:last").attr("src",data[1].flash_location);
 		    	   }else{
 		    		   $(".language_show0_1 img:first").attr("src","");
 			    	   $(".language_show0_1 img:last").attr("src","");
 		    	   }
 		    	   if(data[2]){
 		    		   $(".language_show0_2 img:first").attr("src",data[2].picture_location);
 			    	   $(".language_show0_2 img:last").attr("src",data[2].flash_location);
 		    	   }else{
 		    		   $(".language_show0_2 img:first").attr("src","");
 			    	   $(".language_show0_2 img:last").attr("src","");
 		    	   }   
 		    	   
 		       }
 		    });
    	}else{
    		$.ajax({
    		       url:"languageAction",
    		       type:"POST",
    		       data:{pageNow:1,typeId:$("#currentTypeId").attr("alt1")},
    		       datatype:'json',
    		       success: function(data,status){
    		    	   $(".language_show0_0 img:first").attr("src",data[0].picture_location);
    		    	   $(".language_show0_0 img:last").attr("src",data[0].flash_location); 
    		    	   if(data[1]){
    		    		   $(".language_show0_1 img:first").attr("src",data[1].picture_location);
    			    	   $(".language_show0_1 img:last").attr("src",data[1].flash_location);
    		    	   }else{
    		    		   $(".language_show0_1 img:first").attr("src","");
    			    	   $(".language_show0_1 img:last").attr("src","");
    		    	   }
    		    	   if(data[2]){
    		    		   $(".language_show0_2 img:first").attr("src",data[2].picture_location);
    			    	   $(".language_show0_2 img:last").attr("src",data[2].flash_location);
    		    	   }else{
    		    		   $(".language_show0_2 img:first").attr("src","");
    			    	   $(".language_show0_2 img:last").attr("src","");
    		    	   }   
    		    	   
    		       }
    		    });
    	}
    });
    
   $(".language_arrowLeft img , .language_arrowRight img").click(function(){
	   var page = this.getAttribute("alt");
	   var typeId = $("#currentTypeId").attr("alt1");
	   $.ajax({
	       url:"languageAction",
	       type:"POST",
	       data:{pageNow:page,typeId:typeId},
	       datatype:'json',
	       success: function(data,status){
	    	   $(".language_show0_0 img:first").attr("src",data[0].picture_location);
	    	   $(".language_show0_0 img:last").attr("src",data[0].flash_location); 
	    	   if(data[1]){
	    		   $(".language_show0_1 img:first").attr("src",data[1].picture_location);
		    	   $(".language_show0_1 img:last").attr("src",data[1].flash_location);
	    	   }else{
	    		   $(".language_show0_1 img:first").attr("src","");
		    	   $(".language_show0_1 img:last").attr("src","");
	    	   }
	    	   if(data[2]){
	    		   $(".language_show0_2 img:first").attr("src",data[2].picture_location);
		    	   $(".language_show0_2 img:last").attr("src",data[2].flash_location);
	    	   }else{
	    		   $(".language_show0_2 img:first").attr("src","");
		    	   $(".language_show0_2 img:last").attr("src","");
	    	   }   
	    	   
	       }
	     });
	   
	   $("#currentTypeId").hide();
   });


    //my(个人中心)界面切换iframe
    var iframe=$(".my_tabs_con iframe");
    var my_tabs=$(".my_tabs ul li");
    var my_style=$(".my_tabs_con div");
    // alert(my_tabs.length);
    for(var i=0;i<my_tabs.length;i++){
        // alert();
        my_tabs[i].index=i;
        my_tabs[i].onclick=function () {
            // alert();
            for(var i=0;i<my_tabs.length;i++) {
                iframe.attr("src", "" );
                my_style.attr("class","tabItem");
            }
            // alert(my_style.attr("class"));
            iframe.attr("src", "my_child"+this.index+".html");
            my_style.attr("class","tabItem"+" "+"tabItem"+this.index);
        }
    }




//    收藏部分
    $("#detail_sc").click(function(){
        // alert();
        $(this).attr("src","images/sc1.png");
        $(this).click(function () {
            if ($(this).attr("src")=="images/sc.png"){
                $(this).attr("src","images/sc1.png");
            }else{
                $(this).attr("src","images/sc.png");
            }
        });
    });






    var options =
        {
            thumbBox: '.thumbBox',
            spinner: '.spinner',
            imgSrc: 'images/avatar.png'
        }
    var cropper = $('.imageBox').cropbox(options);
    $('#upload-file').on('change', function(){
        var reader = new FileReader();
        reader.onload = function(e) {
            options.imgSrc = e.target.result;
            cropper = $('.imageBox').cropbox(options);
        }
        reader.readAsDataURL(this.files[0]);
        this.files = [];
    })
    $('#btnCrop').on('click', function(){
        var img = cropper.getDataURL();
        $('.cropped').html('');
        // $('.cropped').append('<img src="'+img+'" align="absmiddle" style="width:64px;margin-top:4px;border-radius:64px;box-shadow:0px 0px 12px #7E7E7E;" ><p>64px*64px</p>');
        $('.cropped').append('<img src="'+img+'" align="absmiddle" style="width:128px;margin-top:4px;border-radius:128px;">');
        // $('.cropped').append('<img src="'+img+'" align="absmiddle" style="width:180px;margin-top:4px;border-radius:180px;box-shadow:0px 0px 12px #7E7E7E;"><p>180px*180px</p>');
    })
    $('#btnZoomIn').on('click', function(){
        cropper.zoomIn();
    })
    $('#btnZoomOut').on('click', function(){
        cropper.zoomOut();
    })






    //个人信息设置页面
    // alert();
    $("#my_shezhi_btn").click(function () {
        // alert();
        $("#my_shezhi_username").change(function () {
            var my_username=$(this).val();
            // alert(my_username);
        })
        $("#my_shezhi_email").change(function () {
            var my_email=$(this).val();
            // alert(my_email);
        })
        $("#my_shezhi_password").change(function () {
            var my_password=$(this).val();
        });
        $(".my_shezhi_sex sex").change(function () {
            var my_sex=$(this).val();
        });
        $(".my_shezhi_say my_shezhi_say").change(function () {
            var my_say=$(this).val();
        });
    });

    
    
}

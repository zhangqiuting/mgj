$(function(){
	
	var url = document.location.href;
		url = url.split(".")[0];
		url = url.split('//')[1];
	switch(url){
		case "taijiline" : case "lsp" : case "diagnosis" : $('.wrapnav li:eq(1) a').addClass('cur');break;
		case "liveroom" : $('.wrapnav li:eq(2) a').addClass('cur');break;
		case "quote" : $('.wrapnav li:eq(3) a').addClass('cur');break;
		case "services" : $('.wrapnav li:eq(4) a').addClass('cur');break;
		case "guide" : $('.wrapnav li:eq(5) a').addClass('cur');break;
		case "aboutytx" : $('.wrapnav li:eq(6) a').addClass('cur');break;
		default : $('.wrapnav li:eq(0) a').addClass('cur');break;
	}
	
	if($('.indexrightsider-ceo').length){
		UTIL.getNewFrag("253", null, "frag_253");
	}
	
	$(".goldPrice-tab").slide({effect:"left",autoPlay:true,easing:"easeOutCirc"});
	//直播老师简介
	$(".teacher-list dl").hover(function(){

	
		$(this).find(".teacher-listinfo").show();
	}, function() {

		$(this).find(".teacher-listinfo").hide();

	})
//向老师提问功能	
/* $(".liveroom-pose ").click(function(){
	$(".p-textwin").show()
	 return false;  

}) 
	   $(document).click(function(event){
            if( $(event.target).attr("class") != "inset-top" ){   
                $(".p-textwin").hide();   
            }   
        }); */
//	首页banner
//$(".index-banner").slide({mainCell:".bd ul", effect:"fade", autoPlay:true, delayTime:1000});
$(".index-banner .bd li").first().before( jQuery(".index-banner .bd li").last() );
$(".index-banner").hover(function(){ jQuery(this).find(".arrow").stop(true,true).fadeIn(300) },function(){ jQuery(this).find(".arrow").fadeOut(300) });
$(".index-banner").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop",autoPlay:true, vis:3,autoPage:true, trigger:"click"});
//贵金属产品
//$(".data-productTab").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",vis:6,pnLoop:true});
$(".data-productTab").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",scroll:1,vis:6,pnLoop:false,trigger:"click"});
$(".data-productTab").hover(function(){
	$(".data-productTab .hd").show()
},function(){
	$(".data-productTab .hd").hide()
})
//首页底部ceo

})

//下载弹层
$(function(){


  $(".liveroom-down .downlinks span" ).click(function(){	
    $('.room-downwin').lightbox_me({
        centered: true
        }); 
  }) ;
    $( " .ImmediatelyDownload-downwin").click(function(){	
    $('.room-downwin').lightbox_me({
        centered: true
        }); 
  }) ;
//lsp
$(".tool-pcMobile").slide({mainCell:".bd ul",autoPlay:true});
	//短信下发 提示
	var defaultText = '输入手机号，发送下载链接到手机'
	$('#phoneBox').focus(function(){
		if(this.value == defaultText){
			this.value = ''
			}
		})
	$('#phoneBox').blur(function(){
		if(this.value.length == 0){
			this.value = defaultText
			}
		})
  })

// gotop
$(function(){ 
	$(window).scroll(function(){ //只要窗口滚动,就触发下面代码 
	var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度 
	if( scrollt >300 ){ //判断滚动后高度超过200px,就显示 
	$(".gotop").fadeIn(400); //淡出 
	}else{ 
	$(".gotop").stop().fadeOut(400); //如果返回或者没有超过,就淡入.必须加上stop()停止之前动画,否则会出现闪动 
	} 
	}); 
	$(".gotop").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部 
	$("html,body").animate({scrollTop:"0px"},200); 
	});
	
	//20150319headopenbox
	$(".jygjsbox" ).hover(function(){	
		$('.jygjsbox .jytopcompanyopen').stop().slideToggle(); 
		});
	$(".jyoilbox" ).hover(function(){	
		$('.jyoilbox .jytopcompanyopen').stop().slideToggle(); 
		});
});


//piaochuang20150414
$(function(){
	$(".jypiaoboxsmall").hover(function(e){	
		$('.jypiaoboxsmall').toggleClass("hover");
	});
	$(".jypiaoboxsmall").click(function(e){
		stopPropagation(e);
		//$('.jypiaoboxsmall').toggleClass("hover");
		//window.open("https://jinshuju.net/f/fDzAiH");
		$(".jypiaoboxbig").fadeIn("slow");
		$(".jypiaoboxsmall").hide("slow");
	});
	$(".jypiaoboxsmall .openbtn").click(function(e){
		$(".jypiaoboxbig").fadeIn("slow");
		$(".jypiaoboxsmall").hide("slow");
		stopPropagation(e)
		
	});
	$(".jypiaoboxbig .closebtn,.jypiaoboxbig .closebtntop").click(function(){
		$(".jypiaoboxbig").fadeOut("slow");
		$(".jypiaoboxsmall").show("slow");
	});
})

function stopPropagation(e) {  
    e = e || window.event;  
    if(e.stopPropagation) { //W3C阻止冒泡方法  
        e.stopPropagation();  
    } else {  
        e.cancelBubble = true; //IE阻止冒泡方法  
    }  
}
















/*	create by yuming 20140121
*	首页滚动行情
*/
;(function(win,doc){
	var html=[],HQ = function(obj){
		//this.obj = obj ? obj : [['XAGUSD',1],['NI',7],['CU',8],['AL',9],['PD',5],['PT',6]]
		this.obj = obj ? obj : [['XAGUSD',1,'现货白银'],['NI',7,'现货镍'],['CU',8,'现货铜'],['AL',9,'现货铝'],['PD',5,'现货钯金'],['PT',6,'现货铂金'],['mnXAGUSD',1,'现货白银1000'],['mnNI',7,'现货镍100'],['mnCU',8,'现货铜1T'],['mnAL',9,'现货铝1T'],['mnPD',5,'现货钯金100'],['mnPT',6,'现货铂金100'],['dbXAGUSD',1,'现货白银30kg']];
		if(this instanceof HQ){
			this.init.apply(this,arguments)
			}else{
			return new HQ(obj)
			}
		}
	
	HQ.prototype = {
		init : function(){
			this.getData()
			var self = this;
			setInterval(function(){self.getData()},30000)
			},
		Url : function(num){
			return 'http://api.baidao.com/api/hq/npdata.do?ids='+num+'&JSONP=?&ran='+ new Date().getTime()
			},
		getData : function(){
			var url,self=this;
			for(var i = 0;i<this.obj.length;i++){
				url = self.Url(this.obj[i][1])
				$.getJSON(url,(
					function(arg){
						return function(data){
							Html(arg,data)
							}
						}(i))
					)
				}
			}
		}
	win.HQ = HQ
	})(window,document)
	
function Html(ele,data){
	var data = data[0],ptb,name,$ele,pnum,pRose,plus,add;
	$ele = $('.'+this.obj[ele][0]+'');
	pnum = (data.updrop > 0) ? 'p-num' : 'p-green';
	pRose = (data.updrop > 0) ? 'p-Rose' : 'p-greenRose';
	add = (data.id == 1) ? '<span class="spantext-bg">80% 银天下投资者选择</span>' : '';
	ptb = (data.id == 7) ? '12.5倍杠杆' : '20倍杠杆';
	plus = (data.updrop > 0) ? '+' : '';
	$ele.html('<a href="http://web.98.cn/plus/list.php?tid=260"><p class="p-name">'+ this.obj[ele][2] +'</p><p class="'+pnum+'">'+data.now+'</p><p class="'+pRose+'">'+plus+data.updrop+' <span> '+plus+data.percent+'</span></p><p class="pt-25">'+ptb+'</p>' + add +'</a>');
	}
(function($){
	//首页资源收集
	//$(".head-login .login-right").slide({trigger:"click",titCell:".fan0508-hdnav li" ,mainCell:".fan0508-bdnav"})
	$('.fan0508-hdnav ul li').click(function(){
		//console.log($(this).index())
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		var index = $(this).index();
		//$('.fan0508-bdnav > div').siblings().css('display','none')
		$('.fan0508-bdnav > div').siblings().css('display', 'none');
		//var _num = $('.fan0508-bdnav > div').eq(index).fadeOut('display','block');
		$('.fan0508-bdnav > div').eq(index).css('display', 'block');
		//console.log(_num)
	})


	HQ();
	$(".data-productTab").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",vis:6,scroll:1,trigger:"click"});
	$(".head-login .login-right").slide({trigger:"click",titCell:".fan0508-hdnav li" ,mainCell:".fan0508-bdnav"});
})(jQuery)
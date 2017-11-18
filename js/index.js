

////1.登录框的显示与隐藏
////2.第3部分:网站地图导航#map--商品列表
$(document).ready(function(){
	//1.登录框的显示与隐藏
	$('#main .signupin').on('click',function(){
		//将登陆注册框显示
		$('#signbg').show();
		//在显示的情况下点击关闭按钮,隐藏登录框
		$('#signbg .close').on('click',function(){
			//将登陆注册框隐藏
			$('#signbg').hide();
		})
	})



	//2.  第3部分:网站地图导航#map--商品列表--显示隐藏
	$('#map .head ul li').each(function(index,ele){
		$(ele).hover(function(){
			$('#map').css({
				'width':'732'
			})
			//将对应的列表内容显示
			$('#map .content').eq(index).css({
				'display':'block',
			})
			console.log(index)
		},function(){
			$('#map').css({
				'width':'170'
			},1000)
			$('#map .content').eq(index).css({
				'display':'none',
			},1000)
		})

		// $(ele).on('mouseenter',function(){
		// 	$('#map').css({
		// 		'width':'732'
		// 	})
		// 	//将对应的列表内容显示
		// 	$('#map .content').eq(index).css({
		// 		'display':'block',
		// 	})
		// 	console.log(index)
		// })
		// $(ele).on('mouseleave',function(){
		// 	$('#map').css({
		// 		'width':'170'
		// 	})
		// 	$('#map .content').eq(index).css({
		// 		'display':'none',
		// 	})
		// })

	})
	// $("#map .content").

	
	
	//3.  轮播图


	
})
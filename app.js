$(function(){

	$('.ollist li').hover(function(){
			//获取父类元素
			$parent = $(this).parent();
			//
			var pos;
			//console.log($parent);
			pos = $(this).index('.ollist li');
			$parent.find(' li').eq(pos).addClass('listlichecked')
			.siblings().removeClass('listlichecked');
		
			var urll = 'url(\"./img/img'+(pos+1)+'.jpg\") no-repeat';
			$('.pic_place').css({'background':urll});

		},function(){
			//console.log("out");
	});

});	
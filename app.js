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
		

			var urll = './img/img'+(pos+1)+'.jpg';
			console.log(urll);
			$('.pic_place_inner').attr('src',urll);
			// $('.pic_place').css({'background':urll});

		},function(){
			//console.log("out");
	});

});	

	






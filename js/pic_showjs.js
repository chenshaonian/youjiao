$(function(){
 window.App = {
 	models:{},
 	views:{},
 	collections:{}
 }

window.template = function(id){
		var $id = $('#'+id);
	return _.template($id).html();
}


App.models.picture = Backbone.Model.extend({
	default:{
		title:'',
		url:'',
		content:''
	}


});
App.views.picture = Backbone.View.extend({

	tagName:$('.picshowdiv'),
	template: _.template($('#litemplate').html()),

	// template: $('#litemplate'),

	
	

	initialize: function(){
		$('.listli').on('mouseover',function(){
			console.log(">>mouseoverli");
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
			});


		
		this.render();
	},
	render:function(){
		// $li = $()
		var $template = this.template(this.model.toJSON());
		console.log($template);
		// $('.ollist').append($template.html());
		$('.ollist').append($template);


	}
});

var picturemodel = new App.models.picture(
	{'title':'hello'},
	{'url':'./img/img1.jpg'},
	{'content':'this is hello'});
var pictureview = new App.views.picture({ model: picturemodel});














$.ajax({
	url: './json/pic_show_json.json',
	dataType: 'json',
	success: function(data){
		$.each(data, function(index, value){
			console.log(value);



		});
	},

});







});
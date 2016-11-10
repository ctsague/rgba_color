(function(){

var app ={

	r :0,
	g : 0,
	b : 0,
	a : 0,

	init : function(){
	
			$('input').on('change', function(){
				this.r = $('#red').val();
				this.g = $('#green').val();
				this.b = $('#blue').val();
				this.a = $('#alpha').val()/100;
				$('span').html(this.r+ ", "+ this.g + ", " +this.b+ ", " +this.a);
        		$('.container').css('background-color','rgba('+this.r+','+this.g+','+this.b+','+this.a+')');
        		
			});
			
 

	},
};

$(document).ready(function(){

	console.log('hello word');
	app.init();
});


})();



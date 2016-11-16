(function(){

var app = {

	r : 0,
	g : 0,
	b : 0,
	a : 0,

	init : function(){
	
		$('input').on('change', function(){
			this.r = $('#red').val();
			this.g = $('#green').val();
			this.b = $('#blue').val();
			this.a = $('#alpha').val()/100;
			$('#valrgba').html("(" + this.r+ ", "+ this.g + ", " +this.b+ ", " +this.a + ")");
        	$('body').css('background-color','rgba('+this.r+','+this.g+','+this.b+','+this.a+')');
        	app.rgbTohexadecimal(this.r, this.g, this.b,this.a);	
		});
	},

	rgbTohexadecimal : function(r,g,b,a){
		var rhexa = parseInt(r, 10).toString(16);
		var ghexa = parseInt(g, 10).toString(16);
		var bhexa = parseInt(b, 10).toString(16);
		var ahexa = parseInt(a, 10).toString(16);
		var valhexa = ('#' + rhexa + ghexa + bhexa + ahexa).toUpperCase();
		$('#hexa').html(valhexa);
	},
};

	$(document).ready(function(){
		app.init();
	});

})();



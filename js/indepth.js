var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="animated-football-league";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;

var numeroImages2=8;
 var slider_on2=false;
 var intervalID2;
var posicion_slider2=0;
var share;

console.log("test");
console.log($("#indepth_intro .indepth_left").outerHeight());

$("#indepth_corona").css({
	height: $("#indepth_gyvu").height()+"px"
});

$(document).on("click",".indepth_mosaico_item",function(){
	var mu = $(this).attr("id");
	var time = $("#indepth_"+mu).attr("num")*500;
	//console.log(time);
	var position = $("#indepth_"+mu).position();
	$('html, body').animate({
		scrollTop: position.top
	}, 0);
});

$(document).on("click",".indepth_tatuaje_item",function(){
	var parent = $(this).parent().parent();
	parent.parent().css("z-index",100);
	var num_t=$(this).attr("num");
	var th = parent.find(".indepth_i").eq(num_t-1);
	th.css("display","table-cell");
	parent.find(".indepth_tatuajes_cuadros").fadeIn();
	parent.find(".indepth_tatuajes_cuadros").css("display","table");
	document.getElementsByTagName("html")[0].style.overflow = "hidden";
});

$(document).on("click",".indepth_tatuajes_cuadros",function(){
	$(".indepth_page_image").css("z-index","1");
	$(".indepth_i").hide();
	$(".indepth_tatuajes_cuadros").fadeOut();
	document.getElementsByTagName("html")[0].style.overflow = "auto";
});

$(document).on("click", "#indepth_button_ver" ,function(){
		var position = $(".indepth_content_top").position();
		$('html, body').animate({
			scrollTop: position.top
		}, 2000);
	});

	
	$(document).on("click",".indepth_menu_item",function(){
		 var num_menu=$(this).attr("num");
		 var position = $("#indepth_page"+num_menu).position();
		 
		 if(detect_mobile()){
			 f_top=position.top+60;
		 }else{
			 f_top=position.top+60;
		 }
		$('html, body').animate({
			scrollTop: f_top
		}, 000);
		$(".indepth_menu_item").removeClass("active");
		 $("#indepth_menu_"+num_menu).addClass("active");	
	 });

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}



var indepth_menu=function(){
	$('.indepth_cover').waypoint(function(direction) {
		$(".indepth_share").fadeOut();
	});
	
	 $('#indepth_page1').waypoint(function(direction) {
		 if(direction=='down'){
			 $(".indepth_share").fadeIn("slow");
		 }else{
			  $("#indepth_menu").fadeOut();
		 }
		 
		  $(".indepth_share").show();
		 
		
	});
	
	 $('#indepth_footer').waypoint(function(direction) {
		 if(direction=='down'){
			 $(".indepth_share").fadeOut("slow");
		 }else{
			  $(".indepth_share").fadeIn("slow");
		 }
		 
		
	},{offset: 'bottom-in-view'});
	
	
	
	
	$(".indepth_page_content").waypoint(function(direction){
		 $(".indepth_share").show();
	},{offset: '70px'});
	
	$(".indepth_page_content").waypoint(function(direction){
		 $(".indepth_share").show();
		 
	},{offset: 'bottom-in-view'});
	
	$("#indepth_page_content").waypoint(function(direction){
	},{offset: 'bottom-in-view'});
	
	 
	 

}



var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

  var detect_mobile=function(){
	 var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
 };
 
	var mobile=false;
	
	 if (isMobile.Android())
	 {
	 mobile=true;
	 }
	 else if (isMobile.BlackBerry())
	 {
	 mobile=true;
	 }
	 else if (isMobile.iOS())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Opera())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Windows())
	 {
	 mobile=true;
	 }
	 else
	 {
	 mobile=false;
 }
	 return mobile;
 }
 
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	var ventana_alto = $(window).height();
	var ventana_ancho = $(window).width();
	
	
	$("#indepth_carrusel_container").css({
		 width : ventana_ancho + "px",
		 height : ventana_alto + "px"
	});
	
	$('#indepth_cover .indepth_parallax_back').css("height",(ventana_alto-100)+"px");
	//$("#indepth_break_2").css("height",)
	if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    {   	
    
			 $('#indepth_cover_view').css("position","absolute");
    }else{
    	 if(ventana_ancho>600){
		 $('.indepth_container_cover').css("height",(ventana_alto)+"px");
			 $(".indepth_tatuajes_cuadros").css({
				 width : ventana_ancho + "px",
				 height : ventana_alto + "px"
			 });

 	}
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
    
    if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
    }
		loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
		//$('#indepth_cover').css("height",(ventana_alto-60)+"px");
});

$(window).on("resize", function(){
	indepth_sizeAdjust(false);
	var ventana_alto = $(window).height();
	var ventana_ancho = $(window).width();
	
	$(".indepth_carrusel_item").css({
		width : ventana_ancho + "px"
	});
	
	$("#indepth_carrusel_container").css({
		 width : ventana_ancho + "px",
		 height : ventana_alto + "px"
	});
	
    	//$('#indepth_cover').css("height",(ventana_alto-60)+"px");
    	 if(ventana_ancho>600){
	 	
 	}
	 if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
    }
	 if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    { 
    }else{
    	var ventana_alto = $(window).height();
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
})
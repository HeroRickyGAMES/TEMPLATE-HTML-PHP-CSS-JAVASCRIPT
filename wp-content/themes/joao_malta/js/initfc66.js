jQuery(function($){
	AbreMenuMobile = function(){		
		if(!$('#menu-mobile').hasClass("carregado")){
			$('#menu-mobile .overlay-content').append($("#links-topo table").clone());
			$('#menu-mobile .overlay-content').append($("#header .menu").clone());
			
			$("#menu-mobile a[href='#header']").attr("href", "#header-mobile");
			
			$("#menu-mobile a[href*='#'], a.linka[href*='#']").click(function(e){
				if($($(this).attr("href")).length > 0){
					e.preventDefault();
					
					$("html, body").stop().animate({"scrollTop" : $($(this).attr("href")).position().top - 20}, "swing");
					
					$('#menu-mobile').css('left','100%');
				}
			});
			
			$('#menu-mobile').addClass("carregado");
		}
		
		$('#menu-mobile').css('left','0%');
		
		return false;
	}
	
	$("#header a[href*='#'], a.linka[href*='#']").click(function(e){
		if($($(this).attr("href")).length > 0){
			e.preventDefault();
			
			$("html, body").stop().animate({"scrollTop" : $($(this).attr("href")).position().top - $("#header").height()}, "swing");
		}
	});
	
	$('.lista-depoimentos .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		navText: ['<img src="'+template_url+'/img/ico-left.png" />','<img src="'+template_url+'/img/ico-right.png" />'],
		responsive:{
			0:{
				items:1
			}
		}
	});
});
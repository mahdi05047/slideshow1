jQuery(document).ready(function() {
	i = 1;
	jQuery("#left").css({opacity: '0',visibility: 'hidden'});
	jQuery("#right").click(function(event) {
		jQuery("#left").css({opacity: '1',visibility: 'visible'});
		jQuery("li:nth-child("+(i+1)+")").css({opacity: '1','-webkit-clip-path': 'polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)','clip-path': 'polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)'})
		i++;
		if(i == 6){
			jQuery("#right").css({opacity: '0',visibility: 'hidden'});
			// jQuery("li").not('li:first-child').css({opacity: '0','-webkit-clip-path': 'polygon(0 50%, 50% 50%, 50% 0, 50% 0, 50% 50%, 100% 50%, 100% 50%, 50% 50%, 50% 100%, 50% 100%, 50% 50%, 0 50%)','clip-path': 'polygon(0 50%, 50% 50%, 50% 0, 50% 0, 50% 50%, 100% 50%, 100% 50%, 50% 50%, 50% 100%, 50% 100%, 50% 50%, 0 50%)'})
			// i=1;
		}
	});
		jQuery("#left").click(function(event){
		jQuery("#right").css({opacity: '1',visibility: 'visible'});
		jQuery("li:nth-child("+i+")").css({opacity: '0','-webkit-clip-path': 'polygon(0 50%, 50% 50%, 50% 0, 50% 0, 50% 50%, 100% 50%, 100% 50%, 50% 50%, 50% 100%, 50% 100%, 50% 50%, 0 50%)','clip-path': 'polygon(0 50%, 50% 50%, 50% 0, 50% 0, 50% 50%, 100% 50%, 100% 50%, 50% 50%, 50% 100%, 50% 100%, 50% 50%, 0 50%)'})
		i--;
		if(i == 1){
		// jQuery("li").not('li:last-child').css({opacity: '1','-webkit-clip-path': 'polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)','clip-path': 'polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)'})
		// i=6;
			jQuery("#left").css({opacity: '0',visibility: 'hidden'});
		}
	});
});
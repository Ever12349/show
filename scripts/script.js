$(document).ready(function(){
	$(".li1").each(function(){
		$(this).on({
			click:function(event){
                if(event.target == this){
                    $(".div1").not($(this).find(".div1")).slideUp("slow");
                    $(this).find(".div1").slideToggle("slow");
                    }
	            },
	        });
	    });
	$("a").each(function(){
        $(this).on({
        	click:function(){
        		$("#on_01")[0].innerHTML = $(this)[0].innerHTML;
        	},
        });
	});
})
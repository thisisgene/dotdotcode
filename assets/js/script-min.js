function selectionActive(e){$(".about").removeClass("about"),$(".reference").removeClass("reference"),$(".contact").removeClass("contact"),$("#header").addClass("selection-active").addClass(e);var a="./assets/view/"+e+".html";$(".main-wrapper").removeClass("visible"),$(".active").removeClass("active"),$("#"+e).addClass("active"),$.get(a,function(e){$(".main-wrapper").html(e).addClass("visible")})}
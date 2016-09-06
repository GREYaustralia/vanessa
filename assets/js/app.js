function anchorScrollUp(e,t){var o=t[1];topOfPage()&&e.fadeOut(),$(o).offset().top-$navbar.clientHeight<=0&&e.fadeIn()}function anchorScrollDown(e,t){var o=t[0],n=t.slice(-1)[0];topOfPage()&&e.fadeIn().attr("href",o),bottomOfPage()&&e.fadeOut(),$(window).height()<$(n).offset().top&&e.fadeIn()}function topOfPage(){return 0===$("main").scrollTop()}function bottomOfPage(){return $(window).height()-$navbar.clientHeight===Math.floor($("footer").offset().top)}function calculateNavButtons(e){var t=$(".nav-btn--up"),o=$(".nav-btn--down");$(e).each(function(e,n){var a=$(n).fracs();if(1===a.visible){var i=$(n).prev(),l=$(n).next(),s=i.attr("id"),r=l.attr("id");t.attr("href","#"+s),o.attr("href","#"+r)}else topOfPage()&&$(".nav-btn--up").attr("href","#hero")})}$(document).ready(function(){size=350,height=$(window).height(),width=$(window).width(),$(".blog__gallery").slick({infinite:!0,slidesToShow:4,slidesToScroll:4,centerMode:!1,prevArrow:'<button class="blog__navigation blog__navigation--prev" title="Last Entries"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button class="blog__navigation blog__navigation--next" title="Next Entries"><i class="fa fa-angle-right"></i></button>',responsive:[{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]}),$(".blog__entries").slick({infinite:!0,slidesToShow:2,slidesToScroll:2,prevArrow:'<button class="blog__navigation blog__navigation--prev" title="Last Entries"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button class="blog__navigation blog__navigation--next" title="Next Entries"><i class="fa fa-angle-right"></i></button>',responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}),$(document).ready(function(){var e=document.getElementById("crowd");$(".carousel").flexslider({selector:".carousel__slides > li",animation:"slide",animationLoop:!0,controlNav:!1,directionNav:!0,prevText:"",nextText:"",slideshow:!1,slideshowSpeed:3500,smoothHeight:!0,pauseOnHover:!0,useCSS:!1,touch:!0,video:!0,start:function(){e.play()},after:function(e){}}),$(".flex-prev").attr("tabindex","-1"),$(".flex-next").attr("tabindex","-1"),$(".element__toggle").on("click",function(){e.paused===!1?(e.pause(),$(".element__toggle").empty(),$(".element__toggle").html("&#xf04b")):(e.play(),$(".element__toggle").empty(),$(".element__toggle").html("&#xf04c"))})}),$(".contact").on("click",function(){window.location.href="contact-us.html",window.onload=function(){$('select option[value="enquiry"]').attr("selected","selected")}}),$(".book").on("click",function(e){e.preventDefault,window.location.href="contact-us.html",window.onload=function(){console.log("ready"),$('select option[value="fleet"]').attr("selected","selected")}});var $body=$(".main"),$navbar=document.querySelector("nav");$body.scrollTop(sessionStorage.scrollPos||0),$(document).ready(function(){function e(){$(window).width()<800?($(".fleet-main").find("text-box").hide(),$(".fleet-main").find("vehicles").hide(),$(".vehicles__gallery").show(),$(".vehicles__gallery").not(".slick-initialized").slick({dots:!0,infinite:!0,draggable:!0,speed:500,slidesToShow:1,slidesToScroll:1})):($(".fleet-main").find("text-box").show(),$(".fleet-main").find("vehicles").show(),$(".vehicles__gallery").hide())}$(".gallery").slick({infinite:!1,slidesToShow:3,slidesToScroll:3,centerMode:!1,prevArrow:'<button class="gallery__navigation gallery__navigation--prev" title="Last Entries"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button class="gallery__navigation gallery__navigation--next" title="Next Entries"><i class="fa fa-angle-right"></i></button>',responsive:[{breakpoint:1210,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e()}),$(document).ready(function(){var e=$(".main");$("[data-for]").on("click",function(){var e=$(this).data("for");$(e).click()});var t=!1;e.scroll(function(){var o=$("#about").fracs();o&&o.visible>=.9&&setTimeout(function(){1==sessionStorage.getItem("newsletter-modal")?$(".newsletter-modal").removeClass("visible"):null==sessionStorage.getItem("newsletter-modal")&&$(".newsletter-modal").addClass("visible")},500);var n=$("#fleet").fracs();n&&n.visible>=.9&&!t&&($(".van, .bus, .car").delay(500).queue(function(){$(this).addClass("hover").dequeue()}).delay(1500).queue(function(){$(this).removeClass("hover").dequeue()}),t=!0),sessionStorage.scrollPos=e.scrollTop()}),$("#contact-us select").on("change",function(){var e=$(this).val();$(".subject").hide(),$(".subject--"+e).show();var t=$("#contact-us textarea"),o=t.data("placeholder-"+e);t.attr("placeholder",o)}),$(".js-back-history").on("click",function(e){e.preventDefault(),window.history.back()}),$("[data-href]").on("click",function(){var e=$(this).data("href");window.location.href=e})}),$(document).ready(function(){$(".hamburger").on("click",function(){$(this).toggleClass("open"),$("ul.menu").toggleClass("open")}),$("main, ul.menu a").on("click",function(){$(".hamburger").removeClass("open"),$("ul.menu").removeClass("open")}),$("body").focusin(function(e){$(e.target).parent().is("ul.menu li")||($(".hamburger").removeClass("open"),$("ul.menu").removeClass("open"))}),$("ol.sr-hidden").find('a[href="#nav"]').on("click",function(){$(".hamburger").focus()}),$("ol.sr-hidden").find('a[href="#about"]').on("click",function(){$("#about").focus()})}),$(document).ready(function(){$(".newsletter-modal .close, .btn--close-modal").on("click",function(){$(".newsletter-modal").removeClass("visible"),sessionStorage.setItem("newsletter-modal","true"),setTimeout(function(){$(".newsletter-modal").remove()},200)}),$(".news").on("click",function(){sessionStorage.setItem("newsletter-modal","false"),$(".newsletter-modal").addClass("visible")}),$(".newsletter-modal form").on("submit",function(e){e.preventDefault(),sessionStorage.setItem("newsletter-modal","true"),$.post("ajax.php",$(this).serialize()),$(this).valid()&&($(".newsletter-modal--form").hide(),$(".newsletter-modal--confirmation").show())})}),$(document).ready(function(){var e=document.querySelector("nav"),t=$("html, body"),o=$("main"),n=window.matchMedia("only screen and (max-width: 26.6em)");n.matches||t.on("click",'a[href*="#"]:not([href="#"])',function(){var t=$(this).attr("href");return o.stop().animate({scrollTop:$(t).offset().top-e.clientHeight+o.scrollTop()},500),!1});var a=window.matchMedia("only screen and (max-width: 48em)");a.matches&&$("#social a").on("click",function(e){e.preventDefault();var t=$(this).data("clicked");$("#social a").data("clicked",0),$(this).data("clicked",t),t?window.open($(this).attr("href")):$(this).data("clicked",1)});var i=$(".nav-btn--up"),l=$(".nav-btn--down"),s=$("section").map(function(){return"#"+this.id});calculateNavButtons(s);var r=s[1];r&&$(r).offset().top-e.clientHeight<=0&&i.fadeIn(),bottomOfPage()&&l.fadeOut();var c=$(".btn--back-to-top");if(o.scroll(function(){i.length&&anchorScrollUp(i,s),l.length&&anchorScrollDown(l,s),calculateNavButtons(s),topOfPage()&&setTimeout(function(){c.removeClass("visible")},250),bottomOfPage()&&setTimeout(function(){c.addClass("visible")},500)}),window.location.hash){var d=s.slice(-1)[0];window.location.hash!=d&&window.scrollBy(0,-e.clientHeight)}}),$.validator.addMethod("phonenumber",function(e){return/^0[0-9]{9}/.test(e)}),$.validator.methods.email=function(e,t){return this.optional(t)||/[a-z]+@[a-z]+\.[a-z]+/.test(e)},$("body").children().not("nav").find("form").validate({rules:{name:"required",surname:"required",phone_number:{required:!0,phonenumber:!0},email:{required:!0,email:!0},message:"required"},messages:{name:"Please enter your first name",surname:"Please enter your surname",phone_number:"Please enter a valid Phone Number Including Area Code",email:"Please enter a valid email address",message:"You Need to write something!"}});
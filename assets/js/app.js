function anchorScrollUp(e,o){var t=o[1];topOfPage()&&e.fadeOut(),$(t).offset().top-$navbar.clientHeight<=0&&e.fadeIn()}function anchorScrollDown(e,o){var t=o[0],n=o.slice(-1)[0];topOfPage()&&e.fadeIn().attr("href",t),bottomOfPage()&&e.fadeOut(),$(window).height()<$(n).offset().top&&e.fadeIn()}function topOfPage(){return 0===$body.scrollTop()}function bottomOfPage(){return $(window).height()-$navbar.clientHeight===Math.floor($("footer").offset().top)}function calculateNavButtons(e){var o=$(".nav-btn--up"),t=$(".nav-btn--down");$(e).each(function(e,n){var a=$(n).fracs();if(1===a.visible){var i=$(n).prev(),l=$(n).next(),s=i.attr("id"),r=l.attr("id");o.attr("href","#"+s),t.attr("href","#"+r)}})}$(document).ready(function(){height=$(window).height(),width=$(window).width(),$(".blog__gallery").slick({infinite:!0,slidesToShow:4,slidesToScroll:4,centerMode:!1,prevArrow:'<button class="blog__navigation blog__navigation--prev"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button class="blog__navigation blog__navigation--next"><i class="fa fa-angle-right"></i></button>',responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".blog__entries").slick({infinite:!0,slidesToShow:2,slidesToScroll:2,centerMode:!1,prevArrow:'<button class="blog__navigation blog__navigation--prev"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button class="blog__navigation blog__navigation--next"><i class="fa fa-angle-right"></i></button>',responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(window).on("resize",function(){var e=$(window).height(),o=e-height;console.log(o)})}),$(document).ready(function(){var e=document.getElementById("crowd");$(".carousel").flexslider({selector:".carousel__slides > li",animation:"slide",animationLoop:!0,controlNav:!1,directionNav:!0,prevText:"",nextText:"",slideshow:!1,slideshowSpeed:3500,smoothHeight:!0,pauseOnHover:!0,useCSS:!1,touch:!0,video:!0,start:function(){e.play()},after:function(e){}})});var $body=$(".main"),$navbar=document.querySelector("nav");$body.scrollTop(sessionStorage.scrollPos||0),$(document).ready(function(){$(".gallery").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,centerMode:!1,prevArrow:'<button class="gallery__navigation gallery__navigation--prev"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button class="gallery__navigation gallery__navigation--next"><i class="fa fa-angle-right"></i></button>',responsive:[{breakpoint:1210,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".vehicles__gallery").slick({centerMode:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,prevArrow:'<button class="vehicles__gallery__navigation vehicles__gallery__navigation--prev"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button class="vehicles__gallery__navigation vehicles__gallery__navigation--next"><i class="fa fa-angle-right"></i></button>'})}),$(document).ready(function(){var e=$(".main");$("[data-for]").on("click",function(){var e=$(this).data("for");$(e).click()});var o=!1;e.scroll(function(){var t=$("#about").fracs();t&&t.visible>=.9&&setTimeout(function(){1==sessionStorage.getItem("newsletter-modal")?$(".newsletter-modal").removeClass("visible"):null==sessionStorage.getItem("newsletter-modal")&&(console.log("does this work?"),$(".newsletter-modal").addClass("visible"))},500);var n=$("#fleet").fracs();n&&n.visible>=.9&&!o&&($(".van, .bus, .car").delay(500).queue(function(){$(this).addClass("hover").dequeue()}).delay(1500).queue(function(){$(this).removeClass("hover").dequeue()}),o=!0),sessionStorage.scrollPos=e.scrollTop(),console.log(e.scrollTop())}),$("#contact-us select").on("change",function(){var e=$(this).val();$(".subject").hide(),$(".subject--"+e).show();var o=$("#contact-us textarea"),t=o.data("placeholder-"+e);o.attr("placeholder",t)}),$(".js-back-history").on("click",function(e){e.preventDefault(),window.history.back()}),$("[data-href]").on("click",function(){var e=$(this).data("href");window.location.href=e})}),$(document).ready(function(){$(".hamburger").on("click",function(){$(this).toggleClass("open"),$("ul.menu").toggleClass("open")}),$("main, ul.menu a").on("click",function(){$(".hamburger").removeClass("open"),$("ul.menu").removeClass("open")})}),$(document).ready(function(){$(".newsletter-modal .close, .btn--close-modal").on("click",function(){$(".newsletter-modal").removeClass("visible"),sessionStorage.setItem("newsletter-modal","true"),setTimeout(function(){$(".newsletter-modal").remove()},200)}),$(".newsletter-modal form").on("submit",function(e){e.preventDefault(),$.post("ajax.php",$(this).serialize()),$(".newsletter-modal--form").hide(),$(".newsletter-modal--confirmation").show()})}),$(document).ready(function(){var e=document.querySelector("nav"),o=$("html, body"),t=$(".main"),n=window.matchMedia("only screen and (max-width: 26.6em)");n.matches||o.on("click",'a[href*="#"]:not([href="#"])',function(){var o=$(this).attr("href");return t.stop().animate({scrollTop:$(o).offset().top-e.clientHeight+t.scrollTop()},500),!1});var a=window.matchMedia("only screen and (max-width: 48em)");a.matches&&$("#social a").on("click",function(e){e.preventDefault();var o=$(this).data("clicked");$("#social a").data("clicked",0),$(this).data("clicked",o),o?window.open($(this).attr("href")):$(this).data("clicked",1)});var i=$(".nav-btn--up"),l=$(".nav-btn--down"),s=$("section").map(function(){return"#"+this.id});calculateNavButtons(s);var r=s[1];r&&$(r).offset().top-e.clientHeight<=0&&i.fadeIn(),bottomOfPage()&&l.fadeOut();var c=$(".btn--back-to-top");if(t.scroll(function(){i.length&&anchorScrollUp(i,s),l.length&&anchorScrollDown(l,s),calculateNavButtons(s),topOfPage()&&setTimeout(function(){c.removeClass("visible")},250),bottomOfPage()&&setTimeout(function(){c.addClass("visible")},500)}),window.location.hash){var d=s.slice(-1)[0];window.location.hash!=d&&window.scrollBy(0,-e.clientHeight)}});
function ibg(){
let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }
}
ibg();
function setHeight() {
  var top__value = ($('.screen-5__intringle').outerHeight()) * 0.40563380281690140845070422535211;
  $('.screen-5__background').css('top', top__value);
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  document.getElementById("contact__phone-1").innerHTML = '<a href="tel:+ 73517506729">+7 (351) 750-67-29</a>';
	document.getElementById("contact__phone-2").innerHTML = '<a href="tel:+ 73517506729">+7 (351) 750-67-29</a>';
 } else	{
  document.getElementById("contact__phone-1").innerHTML = '+7 (351) 750-67-29';
  document.getElementById("contact__phone-2").innerHTML = '+7 (351) 750-67-29';
}
$('.paralax-list .small:nth-child(4n)').attr('data-depth', '1.8');
$('.paralax-list .small:nth-child(4n + 1)').attr('data-depth', '2.2');
$('.paralax-list .small:nth-child(4n + 2)').attr('data-depth', '1.5');
$('.paralax-list .small:nth-child(4n + 3)').attr('data-depth', '1');
$('.paralax-list .midle:nth-child(3n)').attr('data-depth', '0.8');
$('.paralax-list .midle:nth-child(3n+1)').attr('data-depth', '0.7');
$('.paralax-list .midle:nth-child(3n+2)').attr('data-depth', '0.5');
$('.paralax-list .big:nth-child(2n)').attr('data-depth', '0.3');
$('.paralax-list .big:nth-child(2n+1)').attr('data-depth', '0.5');
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

$(document).ready(function() {
	$('.screen__spoiler__item__title').click(function(event) {
		if ($('.screen__spoiler').hasClass('spoiler-1')) {
			$('.screen__spoiler__item__title').not($(this)).removeClass('spoiler__active');
			$('.screen__spoiler__item__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('spoiler__active').next().slideToggle(300);
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".screen__spoiler__item"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.screen__spoiler__item__text').slideUp(300); // скрываем его
			$('.screen__spoiler__item__title').removeClass('spoiler__active')
		}
	});
	$(window).scroll(function(event) {
		var hight = ($('.main-screen').outerHeight()) / 2
		if ($(window).scrollTop() > hight) {$('.fixed__menu').addClass('fixed__menu__active');}
    else {$('.fixed__menu').removeClass('fixed__menu__active')}
	});
	$('.paralax-list li').addClass('layer');
	// setHeight();
	// $(window).resize(setHeight());
});

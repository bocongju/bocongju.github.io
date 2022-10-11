$(document).ready(function(){

	// 導覽列的變化 偵測視窗滾動事件
	$(window).scroll(function(){
		// 抓取滾動距離
		scrolledPx = $(this).scrollTop(); // 存取距離上方的值
		if (scrolledPx >= 100){ // 條件判斷
			$('.navbar').addClass('active'); // 加上 "active" class
		} else {
			$('.navbar').removeClass('active'); // 移除 "active" class
		}
	})

    $('.owl-carousel').owlCarousel({
		items:1,
		animateOut: 'animate__fadeOut',
    	animateIn: 'animate__fadeIn',
	})

	// ScrollReveal
	ScrollReveal().reveal('.js-fadeInBottom',{
		origin: 'bottom',
		distance: '50px',
		delay: 300,
		duration: 800,
		reset: true
	});
	ScrollReveal().reveal('.js-fadeInLeft',{
		origin: 'left',
		distance: '50px',
		delay: 300,
		duration: 800,
		reset: true
	});
	ScrollReveal().reveal('.js-fadeInRight',{
		origin: 'right',
		distance: '50px',
		delay: 300,
		duration: 800,
		reset: true
	});
	ScrollReveal().reveal('.service-item',{
		origin: 'bottom',
		distance: '50px',
		duration: 800,	
		interval: 500
		// reset: true
	});

	$('.js-onePageNav').onePageNav({
		currentClass: 'active'
	});
})
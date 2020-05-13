// Parallax
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image,{
	scale:2.1,
	orientation:'right,up',
	// orientation:'up',
	overflow:true,
	// delay:1,
});

var image = document.getElementsByClassName('parallax-headimg');
new simpleParallax(image,{
	scale:1.6,
	orientation:'up',
	delay:10,
});

// Text Animation
var textWrapper = document.querySelectorAll('.ml6 .letters');
for (j=0;j<textWrapper.length;j++)
{

	tw=textWrapper[j];
	console.log(tw);
	var observer = new IntersectionObserver(function(entries){ console.log(entries);

		if(entries[0]['isIntersecting'] === true)
		{
			// if(entries[0]['intersectionRatio'] === 1)
			// {
			// 	console.log("1");
			// }
			// else if(entries[0]['intersectionRatio'] > 0.5)
			// {
			// 	console.log(">0.5");
			// }
			// else
			// {
			// 	console.log("<0.5");
			// }

			anime.timeline({loop: true})
			.add({
				targets: '.ml6 .letter',
				translateY: ["10em", 0],
				// translateY: ["1.1em", 0],
				translateZ: 0,
				duration: 5,
				opacity: 1,
				// duration: 750,
				// delay: (el, i) => 50 * i
				delay: (el, i) => 25 * i
			})
		}
		// else
		// {
		// 		console.log("0");
		// }

	}, { threshold: [0, 0.5, 1] });
	
	observer.observe(tw);
	tw.innerHTML = tw.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

}



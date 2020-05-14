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
	scale:1.4,
	orientation:'up',
	delay:10,
});

// Text Animation

var observer = new IntersectionObserver(function(entries)
	{
		var tg="."+entries[0].target.firstElementChild.className;
		console.log(tg);
		console.log(entries[0].intersectionRatio)
		if(entries[0]['isIntersecting'] === true)
		{
			anime.timeline({loop: true})
				.add({
					targets: tg,
					// targets: '.ml6 .letter',
					translateY: ["0em", 0],//to translate above
					translateZ: 0,
					opacity:1,//darken the text
					duration: 750,//duration of effect
					delay: (el, i) => 75 * i
					// delay: (el, i) => 15 * i
				  })
		}
	}, { threshold:[0]});


var textWrapper = document.querySelectorAll('.ml6 .letters');
for (j=0;j<textWrapper.length;j++)
{
	tw=textWrapper[j];
	var s="<span class='letter"+String(j)+"'>$&</span>";
	console.log(s);
	tw.innerHTML = tw.textContent.replace(/\S/g,s);
	observer.observe(tw);
}

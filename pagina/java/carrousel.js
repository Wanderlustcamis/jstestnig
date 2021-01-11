	let planData = {
		"plans":[
		   {
			  "program":"yoga",
			  "shortname":"yoga",
			  "Info":"3 routines of yoga per week, adding more challenge every week"
		   },
		   {
			  "program":"meditation",
			  "shortname":"medita",
			  "Info":"daily guided meditations for stress, axiety and finding yourself"
		   },
		   {
			  "program":"Exercise",
			  "shortname":"exercise",
			  "Info":"2 routines of exercise per week, adding more challenge every week, plus two days of high intensity training (HIT)"
		   },
		   {
			  "program":"Yoga and Exercise",
			  "shortname":"yoga ex",
			  "Info":"Mixing 3 exercise routines with 2 days of yoga for more efitient tonification"
		   },
		   {
			  "program":"Food Plan",
			  "shortname":"salad",
			  "Info":"weekly suggested menus to keep you eating healthy every day!"
		   },
		   {
			  "program":"Food Plan and Exercise",
			  "shortname":"food ex",
			  "Info":"To the daily suggested menus we add 3 weekly routines to complete your helthy habits"
		   }
		]
	  }

	var carousel = document.getElementById('carousel')
	function carousel(){

		$.getJSON(planData, function(){
			var template = $('planbox').html();
			var html = Mustache.to_html(template, data);
			$('#carousel').html(html);


			$('#carousel').cycle({
				fx: 'fade',
				pause: 1,
				next: '#next_btn',
				prev: '#prev_btn',
				speed: 500,
				timeout: 10000,

			});
		}
	
		)}

/* 		 id="planbox" type="text/template">
		{#plans}
			<div class="plans">
				<img src="pix/{shortname}.jpg" alt="Photo of {Info}" />
				<h3>{program}</h3>
				<p>{Info}</p>
			</div>
		{/plans}
	
) */
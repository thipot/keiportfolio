jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Javascript Chart
		if($('#html').length) {

			var doughnutData = [{
	        value: 70,
	        color: "#74cfae"
	      },
	      {
	        value: 30,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);
		};

		// Bootstrap Chart
		if($('#css').length) {
			var doughnutData = [{
					value: 60,
					color: "#74cfae"
				},
				{
					value: 40,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("css").getContext("2d")).Doughnut(doughnutData);
		}

		// WordPress Chart
		if($('#javascript').length) {
			var doughnutData = [{
					value: 55,
					color: "#74cfae"
				},
				{
					value: 45,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);
		}

		// Photoshop Chart
		if($('#php').length) {
			var doughnutData = [{
					value: 65,
					color: "#74cfae"
				},
				{
					value: 35,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("php").getContext("2d")).Doughnut(doughnutData);
		}

    // Python Chart
		if($('#python').length) {
			var doughnutData = [{
					value: 70,
					color: "#74cfae"
				},
				{
					value: 30,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("python").getContext("2d")).Doughnut(doughnutData);
		}
});

(function(global){

	'use strict';

	var displayEl = document.createElement('div');
	
	displayEl.setAttribute('id', 'route-display');
	displayEl.style.color = '#abb';
	displayEl.style.position = 'absolute';
	displayEl.style.left = '2020px';
	displayEl.style.top = '10px';
	displayEl.style.fontFamily = 'Arial';

	global.onload = function() {	
		document.body.appendChild(displayEl);
	};


	var showAverageRouteLength = function(routes, duration) {

		if (Array.isArray(routes)) {

			var totalLength = 0;

			routes.forEach(function(corners) {

				var routeLength = 0,
					i = 1;

				var previousCorner = corners[0];

				while(i < corners.length) {

					var corner = corners[i];

					routeLength += 
						Math.sqrt(
							Math.pow(corner.x - previousCorner.x, 2) + Math.pow(corner.y - previousCorner.y, 2)
						);

					previousCorner = corner;

					i++;
				}

				totalLength += routeLength;

			});

			displayEl.textContent = 'Avg. distance to pod: ' + Math.round(totalLength / routes.length) + 'px in ' + duration + 'ms';

		} else {
			displayEl.textContent = 'Avg. distance to pod: N/A';
		}

	};

	global.displayMap = function(mapFunction, passengers, wall1Doors, wall2Doors) {

		var startTime,
			averageRouteLength,
			routes,
			duration;

		startTime = Date.now();
		routes = mapFunction(passengers, wall1Doors, wall2Doors);
		duration = Date.now() - startTime;

		averageRouteLength = showAverageRouteLength(routes, duration);

		return {
			averageRouteLength: averageRouteLength,
			duration: duration
		};
	};

}(window));

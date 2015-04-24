/*global makeMap*/

(function(global){

	'use strict';

	global.escapeMapTester = function(couuntOfPassangers, colors) {

		var MAP_HEIGHT = 3000,
			PADDING = 12,
			DOOR_WIDTH = 70,
			MIN_DOOR_COUNT = 8,
			MAX_DOOR_COUNT = 12,

			passangers = [],
			passangersSorted,
			availableHeight = MAP_HEIGHT - (couuntOfPassangers + 1) * PADDING,
			doors1 = [],
			doors2 = [],
			count,
			i, l;

		l = colors.length;

		for (i = 0; i < couuntOfPassangers; i++) {
			passangers.push({
				color: colors[Math.floor(Math.random() * l)],
				y: Math.random() * availableHeight
			});
		}

		passangersSorted = passangers.slice();

		passangersSorted.sort(function(a, b) {
			return a.y - b.y;
		});

		for (i = 0; i < passangersSorted.length; i++) {
			passangersSorted[i].y += (i + 1) * PADDING;
		}

		console.log('Passangers:', passangers);

		function willNotInterfereWithOtherDoors(newDoor, doors) {

			var result = true;

			doors.forEach(function(door) {

				if (newDoor < DOOR_WIDTH || 
					newDoor > MAP_HEIGHT - DOOR_WIDTH ||
					newDoor >= door - DOOR_WIDTH && 
					newDoor <= door + DOOR_WIDTH) {
					result = false && result;
				}

			});

			return result;
		}

		function wallGenerator() {

			var doors = [],
				newDoor;

			count = MIN_DOOR_COUNT + Math.floor(Math.random() * (MAX_DOOR_COUNT - MIN_DOOR_COUNT));

			while (count > 0) {

				newDoor = Math.round(Math.random() * ( MAP_HEIGHT - DOOR_WIDTH / 2 ));

				if (willNotInterfereWithOtherDoors(newDoor, doors)) {
					doors.push(newDoor);
					count--;					
				}

			}

			return doors;
		}

		doors1 = wallGenerator();
		doors2 = wallGenerator();		

		console.log( 'Doors:', doors1, doors2);

		global.displayMap(makeMap, passangers, doors1, doors2);
	};

}(window));

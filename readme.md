#Escape Map
This problem leads back to the very distant future. Imagine a scene in a space epic where the passengers of a cruiser attacked by pirates have just received the command to evacuate. They are waiting in the ship's main passenger area for final escape directions. There are two parallel walls separating them and the deck where the escape pods will be launched from. The passengers are species of different alien races and there is a single escape pod for each race. Following the distributed escape route, every passenger should be able to find the suitable pod quickly.

To help the emergency crew in these situations, your job is to write an emergency map genareter and visualizer utility that can be deployed to various space ships with different wall/deck configurations and passenger capacity.

##Considerations for the visual layout:

See [escape-map-example.png](escape-map-example.png) as reference solution.

- The area of focus (size of the map) is 2000px by 3000px.
- All passengers (circles) are standing in a column at 20px on the left side. Their color and vertical position will be provided.
- Escape pods (rounded-rectangles) should be added by the solution as needed based on the list of passengers (one pod for each color-group.) Pods should be distributed evenly and positioned in a vertical column. You can pick the order of the pods. The left edge (with entry hatch) of the pods should be 100px away from the right edge of the map.
- Center of first vertical wall is at 600px from left edge.
- Center of second wall is at 1400px from left edge.
- Walls are 20px wide.
- Doors are 70px wide.
- Passengers should keep 4px clearance from walls and door frames.
- Maximum 30 routes can pass through the same door. Passengers should avoid crossing each other's way while going through doors.
- The color of the routes should match the provided color of the passenger/escape pod.

##Instructions for implementation:

__This problem can be addressed many different ways. We do not anticipate you spending days of effort on implementing a highly sophisticated and robust solution but you should be able to discuss how it could be evolved further.__

You are allowed to use any library if you need to but primarily we will be looking at your core HTML/CSS/JS skills and approach to visualization problems. Focus on simplicity, write readable code.

- The solution should be implemented as a global function named `makeMap`.
- `makeMap` has to to take three arguments:
	- List of passengers. Each passenger is an object with a `color` and `y` property, such as: `{ color: "#00ff11", y: 586.7631993032992 }`
	- List of center of doors for first wall, eg: `[700, 2181, 89, 834, 1471, 1109, 284, 597, 2688, 383]`
	- List of center of doors for second wall
- Your solution should render the map into `<div id="escape-map"></div>`.
- `makeMap` should return with the list of calculated routes. Each route is an array containing its start, corner and end points, eg:
`[ [{x: 0, y: 10}, {x:123, y: 1232}], [{x: 340, y: 10}, {x:1423, y: 1232}] ... ]`
- You can assume 240 passengers and 8 species (colors) maximum. 
- There are at least 8 doors on each wall.
- You can expect valid input.
- Your solution should produce the same result in Chrome and FF.

Use the linked repository as starter kit for your work. See index.html for test arguments. `escapeMap.js` and `escapeMap.css` are provided as placeholders for your work. 

##Instructions for testing:

When called with the arguments you find in index.html, an acceptable solution should generate similar result (should not necessarily mirror it pixel by pixel) to the example image. 

Furthermore, you can use the provided `escapeMapTester.js` library to drive your solution with random-generated dummy input. `escapeMapTester` will call `makeMap` automatically and also display some stats next to the map. 

##Submission guidelines:

- Pack your solution as .zip.
- Share through Dropbox, GoogleDrive or similar.
- If you happen to to use libraries or frameworks please include them in your package.

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:

let writingUtensil = tool || 'marker'
if (tool) {
  tool = 'marker'  // this reassigns the marker
}
console.log(`The ${writingUtensil} is mightier than the sword.`);

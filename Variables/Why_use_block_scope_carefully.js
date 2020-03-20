// be careful how you use variables within a block{}
//
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
    if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves); // this displayed "Northern Lights"
 }
  console.log(lightWaves); // outside the block this displayed "Moonlight"
  
  logVisibleLightWaves();

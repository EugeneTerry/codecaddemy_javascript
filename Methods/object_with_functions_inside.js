let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

  let alienShip = { //creates an object with a function as a property
    retreat () { // no longer have to use the "function" word, just the ()'s
      console.log(retreatMessage)
   },
    takeOff () {
      console.log('Spim... Borp... Glix... Blastoff!')
    }
  };
  alienShip.retreat(); // the comand has a console log in it
  alienShip.takeOff(); // the comand has a console log in it
  //this command will print out: 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.
Spim... Borp... Glix... Blastoff!'

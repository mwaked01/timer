let input = process.argv.slice(2);
for (let time of input) {
  if (time !== '' && time !== ' ') { //skip over empty elements and spaces
    time = Number(time); //convert number strings into Number type
  }
  
  if (typeof (time) === 'number' && time >= 0) { //check for valid input
    setTimeout(() => process.stdout.write('\x07') , time * 1000);
  }
}

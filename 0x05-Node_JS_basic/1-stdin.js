/* eslint-disable */
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.once('data', (data) => {
  process.stdout.write(`Your name is: ${name}\n`);
  if (process.stdin.isTTY) {
    process.on('SIGINT', () => {
      console.log('This important software is now closing');
    });
  } 
  process.exit()
});
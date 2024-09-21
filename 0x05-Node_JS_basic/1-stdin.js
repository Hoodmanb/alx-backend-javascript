/* eslint-disable */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.once('data', (data) => {
  // const name = data.toString().trim();
  console.log(`Your name is: ${data}`);
  process.stdin.destroy();
});

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});

const animStr = "|/-\\|/-\\|";
let timer = 0;
for (let char of (animStr + '\n')) {
  setTimeout(() => {
    process.stdout.write('\r' + char + '   ');
  }, timer += 200);
}
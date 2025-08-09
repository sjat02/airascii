// // const canvas = document.getElementById('gameCanvas');
// // const ctx = canvas.getContext('2d');

// // ctx.textBaseline = 'top';

// // const plane = {
// //   x: canvas.width / 2 - 15,
// //   y: -30,                // Start above canvas (off-screen)
// //   width: 30,
// //   height: 30,
// //   baseSpeed: 4,
// //   speed: 4,
// //   symbol: '✈',
// //   targetY: canvas.height / 2 - 15, // Target y position (center vertically)
// //   slidingDown: true,
// // };

// // const obstacles = [];
// // const asciiChars = [];
// // for(let i=33; i<=126; i++) asciiChars.push(String.fromCharCode(i));

// // let keys = {};
// // let score = 0;
// // let gameOver = false;

// // // Map ASCII chars to names for common symbols
// // const asciiNames = {
// //   '/': 'slash',
// //   '\\': 'backslash',
// //   '*': 'asterisk',
// //   '-': 'dash',
// //   '+': 'plus',
// //   '=': 'equals',
// //   '!': 'exclamation',
// //   '?': 'question',
// //   '#': 'hash',
// //   '@': 'at',
// //   '&': 'ampersand',
// //   '%': 'percent',
// //   '^': 'caret',
// //   '$': 'dollar',
// //   '<': 'less',
// //   '>': 'greater',
// //   '|': 'pipe',
// //   ':': 'colon',
// //   ';': 'semicolon',
// //   '\'': 'apostrophe',
// //   '"': 'quote',
// //   '(': 'paren open',
// //   ')': 'paren close',
// //   '[': 'bracket open',
// //   ']': 'bracket close',
// //   '{': 'brace open',
// //   '}': 'brace close',
// //   ',': 'comma',
// //   '.': 'dot',
// //   '`': 'backtick',
// //   '~': 'tilde',
// //   '_': 'underscore',
// //   // Add more if needed
// // };

// // window.addEventListener('keydown', e => {
// //   keys[e.key] = true;
// //   if(e.key === ' ') {
// //     plane.speed = plane.baseSpeed * 2; // speed boost on spacebar
// //   }
// // });
// // window.addEventListener('keyup', e => {
// //   keys[e.key] = false;
// //   if(e.key === ' ') {
// //     plane.speed = plane.baseSpeed; // normal speed on space release
// //   }
// // });

// // let lastSpawnTime = 0;
// // const spawnInterval = 700;

// // function spawnObstacle() {
// //   const char = asciiChars[Math.floor(Math.random() * asciiChars.length)];
// //   const x = Math.random() * (canvas.width - 80); // leave space for name
// //   obstacles.push({
// //     char,
// //     x,
// //     y: -30,
// //     speed: 2 + Math.random() * 2,
// //   });
// // }

// // function drawAsciiTitle() {
// //   const titleText = "AIR ASCII GAME";
// //   ctx.fillStyle = '#0f0';
// //   ctx.font = '18px monospace';
// //   const textWidth = ctx.measureText(titleText).width;
// //   ctx.fillText(titleText, (canvas.width - textWidth) / 2, 5);
// // }

// // function update() {
// //   if(gameOver) return;

// //   // Slide plane down from top to target position on start
// //   if (plane.slidingDown) {
// //     plane.y += 3;
// //     if (plane.y >= plane.targetY) {
// //       plane.y = plane.targetY;
// //       plane.slidingDown = false;
// //     }
// //   }

// //   // Move plane based on keys (allowed even during sliding)
// //   if(keys['ArrowLeft']) {
// //     plane.x -= plane.speed;
// //     if(plane.x < 0) plane.x = 0;
// //   }
// //   if(keys['ArrowRight']) {
// //     plane.x += plane.speed;
// //     if(plane.x + plane.width > canvas.width) plane.x = canvas.width - plane.width;
// //   }
// //   if(keys['ArrowUp']) {
// //     plane.y -= plane.speed;
// //     if(plane.y < 0) plane.y = 0;
// //   }
// //   if(keys['ArrowDown']) {
// //     plane.y += plane.speed;
// //     if(plane.y + plane.height > canvas.height) plane.y = canvas.height - plane.height;
// //   }

// //   // Spawn obstacles at intervals
// //   if(Date.now() - lastSpawnTime > spawnInterval) {
// //     spawnObstacle();
// //     lastSpawnTime = Date.now();
// //   }

// //   // Move obstacles
// //   for(let i = obstacles.length - 1; i >= 0; i--) {
// //     obstacles[i].y += obstacles[i].speed;
// //     if(obstacles[i].y > canvas.height) {
// //       obstacles.splice(i, 1);
// //       score++;
// //     }
// //   }

// //   // Check collision
// //   for(let obs of obstacles) {
// //     if(
// //       obs.x < plane.x + plane.width &&
// //       obs.x + 20 > plane.x &&
// //       obs.y < plane.y + plane.height &&
// //       obs.y + 24 > plane.y
// //     ) {
// //       gameOver = true;
// //     }
// //   }
// // }

// // function draw() {
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);

// //   // Draw title centered
// //   drawAsciiTitle();

// //   // Draw plane
// //   ctx.fillStyle = '#0f0';
// //   ctx.font = '30px monospace';
// //   ctx.fillText(plane.symbol, plane.x, plane.y);

// //   // Draw obstacles with their names
// //   ctx.fillStyle = '#f00';
// //   ctx.font = '20px monospace';
// //   obstacles.forEach(o => {
// //     ctx.fillText(o.char, o.x, o.y);
// //     const name = asciiNames[o.char] || '';
// //     if(name) {
// //       ctx.font = '12px monospace';
// //       ctx.fillText(name, o.x + 18, o.y + 5);
// //       ctx.font = '20px monospace';
// //     }
// //   });

// //   // Draw score top right
// //   ctx.fillStyle = '#0f0';
// //   ctx.font = '20px monospace';
// //   const scoreText = 'Score: ' + score;
// //   const textWidth = ctx.measureText(scoreText).width;
// //   ctx.fillText(scoreText, canvas.width - textWidth - 10, 5);

// //   if(gameOver) {
// //     ctx.fillStyle = 'rgba(0,0,0,0.7)';
// //     ctx.fillRect(0, 0, canvas.width, canvas.height);
// //     ctx.fillStyle = '#f00';
// //     ctx.font = '50px monospace';
// //     ctx.textAlign = 'center';
// //     ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 30);
// //     ctx.font = '25px monospace';
// //     ctx.fillText('Refresh to restart', canvas.width / 2, canvas.height / 2 + 20);
// //     ctx.textAlign = 'start';
// //   }
// // }

// // function gameLoop() {
// //   update();
// //   draw();
// //   if(!gameOver) requestAnimationFrame(gameLoop);
// // }

// // gameLoop();


// const canvas = document.getElementById('gameCanvas');
// const ctx = canvas.getContext('2d');

// ctx.textBaseline = 'top';

// const plane = {
//   x: canvas.width / 2 - 15,
//   y: -30,
//   width: 30,
//   height: 30,
//   baseSpeed: 4,
//   speed: 4,
//   symbol: '✈',
//   targetY: canvas.height / 2 - 15,
//   slidingDown: true,
// };

// const obstacles = [];
// const asciiChars = [];
// for (let i = 33; i <= 126; i++) asciiChars.push(String.fromCharCode(i));

// let keys = {};
// let score = 0;
// let gameOver = false;

// // Rare character scoring weights (rare = high score, common = low score)
// const charScores = {
//   '@': 10, '#': 8, '$': 9, '%': 8, '&': 7, '*': 7,
//   '/': 5, '\\': 5, '-': 4, '+': 4, '=': 4,
//   'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1 // common letters low score
// };

// // Map ASCII chars to names for display
// const asciiNames = {
//   '/': 'slash', '\\': 'backslash', '*': 'asterisk', '-': 'dash', '+': 'plus',
//   '=': 'equals', '!': 'exclamation', '?': 'question', '#': 'hash', '@': 'at',
//   '&': 'ampersand', '%': 'percent', '^': 'caret', '$': 'dollar', '<': 'less',
//   '>': 'greater', '|': 'pipe', ':': 'colon', ';': 'semicolon', '\'': 'apostrophe',
//   '"': 'quote', '(': 'paren open', ')': 'paren close', '[': 'bracket open',
//   ']': 'bracket close', '{': 'brace open', '}': 'brace close', ',': 'comma',
//   '.': 'dot', '`': 'backtick', '~': 'tilde', '_': 'underscore'
// };

// window.addEventListener('keydown', e => {
//   keys[e.key] = true;
//   if (e.key === ' ') {
//     if (gameOver) location.reload(); // space refresh if game over
//     plane.speed = plane.baseSpeed * 2;
//   }
// });
// window.addEventListener('keyup', e => {
//   keys[e.key] = false;
//   if (e.key === ' ') {
//     plane.speed = plane.baseSpeed;
//   }
// });

// let lastSpawnTime = 0;
// const spawnInterval = 700;

// function spawnObstacle() {
//   const char = asciiChars[Math.floor(Math.random() * asciiChars.length)];
//   const x = Math.random() * (canvas.width - 80);
//   obstacles.push({
//     char,
//     x,
//     y: -30,
//     speed: 2 + Math.random() * 2
//   });
// }

// function drawAsciiTitle() {
//   const titleText = "AIR ASCII GAME";
//   ctx.fillStyle = '#0f0';
//   ctx.font = '18px monospace';
//   const textWidth = ctx.measureText(titleText).width;
//   ctx.fillText(titleText, (canvas.width - textWidth) / 2, 5);
// }

// function update() {
//   if (gameOver) return;

//   if (plane.slidingDown) {
//     plane.y += 3;
//     if (plane.y >= plane.targetY) {
//       plane.y = plane.targetY;
//       plane.slidingDown = false;
//     }
//   }

//   if (keys['ArrowLeft']) plane.x = Math.max(0, plane.x - plane.speed);
//   if (keys['ArrowRight']) plane.x = Math.min(canvas.width - plane.width, plane.x + plane.speed);
//   if (keys['ArrowUp']) plane.y = Math.max(0, plane.y - plane.speed);
//   if (keys['ArrowDown']) plane.y = Math.min(canvas.height - plane.height, plane.y + plane.speed);

//   if (Date.now() - lastSpawnTime > spawnInterval) {
//     spawnObstacle();
//     lastSpawnTime = Date.now();
//   }

//   for (let i = obstacles.length - 1; i >= 0; i--) {
//     obstacles[i].y += obstacles[i].speed;

//     // Collision detection: give score based on char weight
//     if (
//       obstacles[i].x < plane.x + plane.width &&
//       obstacles[i].x + 20 > plane.x &&
//       obstacles[i].y < plane.y + plane.height &&
//       obstacles[i].y + 24 > plane.y
//     ) {
//       score += charScores[obstacles[i].char] || 2; // default score = 2
//       obstacles.splice(i, 1);
//       continue;
//     }

//     if (obstacles[i].y > canvas.height) {
//       obstacles.splice(i, 1);
//     }
//   }
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawAsciiTitle();

//   ctx.fillStyle = '#0f0';
//   ctx.font = '30px monospace';
//   ctx.fillText(plane.symbol, plane.x, plane.y);

//   ctx.fillStyle = '#f00';
//   ctx.font = '20px monospace';
//   obstacles.forEach(o => {
//     ctx.fillText(o.char, o.x, o.y);
//     const name = asciiNames[o.char] || '';
//     if (name) {
//       ctx.font = '12px monospace';
//       ctx.fillText(name, o.x + 18, o.y + 5);
//       ctx.font = '20px monospace';
//     }
//   });

//   ctx.fillStyle = '#0f0';
//   ctx.font = '20px monospace';
//   const scoreText = 'Score: ' + score;
//   ctx.fillText(scoreText, canvas.width - ctx.measureText(scoreText).width - 10, 5);

//   if (gameOver) {
//     ctx.fillStyle = 'rgba(0,0,0,0.7)';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = '#f00';
//     ctx.font = '50px monospace';
//     ctx.textAlign = 'center';
//     ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 30);
//     ctx.font = '25px monospace';
//     ctx.fillText('Press SPACE to restart', canvas.width / 2, canvas.height / 2 + 20);
//     ctx.textAlign = 'start';
//   }
// }

// function gameLoop() {
//   update();
//   draw();
//   requestAnimationFrame(gameLoop);
// }

// gameLoop();



const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

ctx.textBaseline = 'top';

const plane = {
  x: canvas.width / 2 - 15,
  y: -30,
  width: 30,
  height: 30,
  baseSpeed: 4,
  speed: 4,
  symbol: '✈',
  targetY: canvas.height / 2 - 15,
  slidingDown: true,
};

const obstacles = [];
const asciiChars = [];
for (let i = 33; i <= 126; i++) asciiChars.push(String.fromCharCode(i));

let keys = {};
let score = 0;
let gameOver = false;

// Points based on rarity
const charScores = {
  '@': 10, '#': 10, '$': 10, '%': 10, '&': 10, '*': 10, '~': 10, '^': 10, 
  '|': 10, '`': 10, '\\': 8, '/': 8, '?': 8, '!': 8, '=': 8, '+': 8, 
  '-': 6, '_': 6, ':': 6, ';': 6, '.': 4, ',': 4, '<': 4, '>': 4
  // Baaki sab ka default 2
};

const asciiNames = {
  '/': 'slash', '\\': 'backslash', '*': 'asterisk', '-': 'dash', '+': 'plus', '=': 'equals',
  '!': 'exclamation', '?': 'question', '#': 'hash', '@': 'at', '&': 'ampersand', '%': 'percent',
  '^': 'caret', '$': 'dollar', '<': 'less', '>': 'greater', '|': 'pipe', ':': 'colon',
  ';': 'semicolon', '\'': 'apostrophe', '"': 'quote', '(': 'paren open', ')': 'paren close',
  '[': 'bracket open', ']': 'bracket close', '{': 'brace open', '}': 'brace close',
  ',': 'comma', '.': 'dot', '`': 'backtick', '~': 'tilde', '_': 'underscore'
};

window.addEventListener('keydown', e => {
  keys[e.key] = true;
  if (e.key === ' ') {
    if (gameOver) {
      location.reload(); // space se refresh
    } else {
      plane.speed = plane.baseSpeed * 2; // speed boost
    }
  }
});

window.addEventListener('keyup', e => {
  keys[e.key] = false;
  if (e.key === ' ') {
    plane.speed = plane.baseSpeed; // normal speed
  }
});

let lastSpawnTime = 0;
const spawnInterval = 700;

function spawnObstacle() {
  const char = asciiChars[Math.floor(Math.random() * asciiChars.length)];
  const x = Math.random() * (canvas.width - 80);
  obstacles.push({
    char,
    x,
    y: -30,
    speed: 2 + Math.random() * 2,
  });
}

function drawAsciiTitle() {
  const titleText = "AIR ASCII GAME";
  ctx.fillStyle = '#0f0';
  ctx.font = '18px monospace';
  const textWidth = ctx.measureText(titleText).width;
  ctx.fillText(titleText, (canvas.width - textWidth) / 2, 5);
}

function update() {
  if (gameOver) return;

  if (plane.slidingDown) {
    plane.y += 3;
    if (plane.y >= plane.targetY) {
      plane.y = plane.targetY;
      plane.slidingDown = false;
    }
  }

  if (keys['ArrowLeft']) plane.x = Math.max(0, plane.x - plane.speed);
  if (keys['ArrowRight']) plane.x = Math.min(canvas.width - plane.width, plane.x + plane.speed);
  if (keys['ArrowUp']) plane.y = Math.max(0, plane.y - plane.speed);
  if (keys['ArrowDown']) plane.y = Math.min(canvas.height - plane.height, plane.y + plane.speed);

  if (Date.now() - lastSpawnTime > spawnInterval) {
    spawnObstacle();
    lastSpawnTime = Date.now();
  }

  for (let i = 0; i < obstacles.length; i++) {
    let obs = obstacles[i];
    obs.y += obs.speed;

    if (obs.y > canvas.height) {
      obstacles.splice(i, 1);
      i--;
      continue;
    }

    if (
      obs.x < plane.x + plane.width &&
      obs.x + 20 > plane.x &&
      obs.y < plane.y + plane.height &&
      obs.y + 24 > plane.y
    ) {
      // Game Over if alphabet
      if (/^[a-zA-Z]$/.test(obs.char)) {
        gameOver = true;
        break;
      }

      // Score for symbols
      let charScore = charScores[obs.char] || 2;
      score += charScore;

      obstacles.splice(i, 1);
      i--;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAsciiTitle();

  ctx.fillStyle = '#0f0';
  ctx.font = '30px monospace';
  ctx.fillText(plane.symbol, plane.x, plane.y);

  ctx.fillStyle = '#f00';
  ctx.font = '20px monospace';
  obstacles.forEach(o => {
    ctx.fillText(o.char, o.x, o.y);
    const name = asciiNames[o.char] || '';
    if (name) {
      ctx.font = '12px monospace';
      ctx.fillText(name, o.x + 18, o.y + 5);
      ctx.font = '20px monospace';
    }
  });

  ctx.fillStyle = '#0f0';
  ctx.font = '20px monospace';
  const scoreText = 'Score: ' + score;
  const textWidth = ctx.measureText(scoreText).width;
  ctx.fillText(scoreText, canvas.width - textWidth - 10, 5);

  if (gameOver) {
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f00';
    ctx.font = '50px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 30);
    ctx.font = '25px monospace';
    ctx.fillText('Press SPACE to Restart', canvas.width / 2, canvas.height / 2 + 20);
    ctx.textAlign = 'start';
  }
}

function gameLoop() {
  update();
  draw();
  if (!gameOver) requestAnimationFrame(gameLoop);
}

gameLoop();

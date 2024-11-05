let Blocks = [];
let smallBlockSize;
let smallBlockSpeed = 1; // Initial small block movement speed
let smallBlocks = []; // Used to store moving small blocks

function setup() {
  createCanvas(windowWidth, windowHeight); // Drawing canvas as window size
  initializeBlocks(); // Draw different coloured blocks as buildings, roads, pavements, zebra crossings.
  generateRandomSmallBlocks(); // Generate small red or blue blocks to simulate cars
  drawBlocks();
}

function draw() {
  drawBlocks(); 
  moveSmallBlocks();
}

//Adds a random small block when the mouse is clicked
function  mousePressed() {
  //Randomly selects from existing road blocks
  let roadBlocks = Blocks.filter(block => block.isRoad);
  if (roadBlocks.length > 0) {
    let randomRoad = random(roadBlocks);
    let x = randomRoad.x + Math.floor(random(0, randomRoad.w / smallBlockSize)) * smallBlockSize;
    let y = randomRoad.y + Math.floor(random(0, randomRoad.h / smallBlockSize)) * smallBlockSize;
    let colorSmallBlock = random() > 0.5 ? color(160, 55, 45) : color(70, 100, 190);

    //Creates a new small block and adds it to the smallBlocks array
    smallBlocks.push(new smallBlock(x, y, colorSmallBlock, randomRoad));
  }
}

//Increases small block speed with UP arrow, decreases with DOWN arrow
function keyPressed() {
  if (keyCode === UP_ARROW) {
    smallBlockSpeed += 0.5; // Increase small block movement speed
  } else if (keyCode === DOMN_ARROW && smallBlockSpeed>0) {
    smallBlockSpeed -= 0.5; // Decrease small block movement speed
  }
}

// Allow output images to automatically adjust to changes in window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  Blocks = []; // Clear the original Blocks array at each window adjustment 
  smallBlocks = [];
  initializeBlocks();
  generateRandomSmallBlocks();
  drawBlocks();
}

function initializeBlocks() {
  smallBlockSize = 0.02 * min(windowWidth, windowHeight);
  // Simulate roads, buildings and pavements with blocks 
  // Yellow blocks simulate city roads, and set its isRoad to true
  Blocks.push(new Block(0, 2 * smallBlockSize, 48 * smallBlockSize, smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(0, 6 * smallBlockSize, 48 * smallBlockSize, smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(3 * smallBlockSize, 12 * smallBlockSize, 23 * smallBlockSize, smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(0, 17 * smallBlockSize, 48 * smallBlockSize, smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(0, 20 * smallBlockSize, 48 * smallBlockSize, smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(0, 26 * smallBlockSize, 48 * smallBlockSize, smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(0, 30 * smallBlockSize, 48 * smallBlockSize, smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(0, 39 * smallBlockSize, 48 * smallBlockSize, smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(0, 46 * smallBlockSize, 48 * smallBlockSize, smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(3 * smallBlockSize, 0, smallBlockSize, 48 * smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(6 * smallBlockSize, 2 * smallBlockSize, smallBlockSize, 46 * smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(11 * smallBlockSize, 0, smallBlockSize, 48 * smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(26 * smallBlockSize, 0, smallBlockSize, 48 * smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(28 * smallBlockSize, 0, smallBlockSize, 48 * smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(40 * smallBlockSize, 0, smallBlockSize, 48 * smallBlockSize, color(230, 205, 40), true));
  Blocks.push(new Block(46 * smallBlockSize, 0, smallBlockSize, 48 * smallBlockSize, color(230, 205, 40), true));

  // Yellow blocks simulate buildings
  Blocks.push(new Block(7 * smallBlockSize, 7 * smallBlockSize, 4 * smallBlockSize, 4 * smallBlockSize, color(230, 205, 40)));
  Blocks.push(new Block(8 * smallBlockSize, 26 * smallBlockSize, 2 * smallBlockSize, 4 * smallBlockSize, color(230, 205, 40)));
  Blocks.push(new Block(7 * smallBlockSize, 31.8 * smallBlockSize, 5 * smallBlockSize, 3 * smallBlockSize, color(230, 205, 40)));
  Blocks.push(new Block(20 * smallBlockSize, 21 * smallBlockSize, 3 * smallBlockSize, 5 * smallBlockSize, color(230, 205, 40)));
  Blocks.push(new Block(20 * smallBlockSize, 27 * smallBlockSize, 3 * smallBlockSize, 3 * smallBlockSize, color(230, 205, 40)));
  Blocks.push(new Block(41 * smallBlockSize, 9 * smallBlockSize, 5 * smallBlockSize, 4 * smallBlockSize, color(230, 205, 40)));
  Blocks.push(new Block(41 * smallBlockSize, 22 * smallBlockSize, 5 * smallBlockSize, 3 * smallBlockSize, color(230, 205, 40)));

  // blue blocks simulate buildings
  Blocks.push(new Block(4 * smallBlockSize, 13 * smallBlockSize, 3 * smallBlockSize, 3 * smallBlockSize, color(70, 100, 190)));
  Blocks.push(new Block(4 * smallBlockSize, 36 * smallBlockSize, 3 * smallBlockSize, 3 * smallBlockSize, color(70, 100, 190)));
  Blocks.push(new Block(14 * smallBlockSize, 21 * smallBlockSize, 4 * smallBlockSize, 5 * smallBlockSize, color(70, 100, 190)));
  Blocks.push(new Block(31 * smallBlockSize, 31 * smallBlockSize, 5 * smallBlockSize, 8 * smallBlockSize, color(70, 100, 190)));
  Blocks.push(new Block(41 * smallBlockSize, 13 * smallBlockSize, 3 * smallBlockSize, 2.5 * smallBlockSize, color(70, 100, 190)));
  Blocks.push(new Block(43 * smallBlockSize, 42 * smallBlockSize, 3 * smallBlockSize, 2 * smallBlockSize, color(70, 100, 190)));
  Blocks.push(new Block(10 * smallBlockSize, 12 * smallBlockSize, smallBlockSize, smallBlockSize, color(70, 100, 190)));
  Blocks.push(new Block(18 * smallBlockSize, 12 * smallBlockSize, smallBlockSize, smallBlockSize, color(70, 100, 190)));

  // red blocks simulate buildings
  Blocks.push(new Block(7 * smallBlockSize, 21 * smallBlockSize, 4 * smallBlockSize, 3 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(8 * smallBlockSize, 40 * smallBlockSize, 2 * smallBlockSize, 2 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(8 * smallBlockSize, 44 * smallBlockSize, 2 * smallBlockSize, 2 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(22 * smallBlockSize, smallBlockSize, 3 * smallBlockSize, 2 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(34 * smallBlockSize, 19 * smallBlockSize, 4 * smallBlockSize, smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(34 * smallBlockSize, 21 * smallBlockSize, 4 * smallBlockSize, 5 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(31 * smallBlockSize, 33 * smallBlockSize, 5 * smallBlockSize, 4 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(41 * smallBlockSize, 10 * smallBlockSize, 3 * smallBlockSize, 2 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(42 * smallBlockSize, 35 * smallBlockSize, 3 * smallBlockSize, 3 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(12 * smallBlockSize, 42 * smallBlockSize, 4 * smallBlockSize, 4 * smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(3 * smallBlockSize, 12 * smallBlockSize, smallBlockSize, smallBlockSize, color(160, 55, 45)));
  Blocks.push(new Block(6 * smallBlockSize, 12 * smallBlockSize, smallBlockSize, smallBlockSize, color(160, 55, 45)));

  // Grey blocks simulate buildings
  Blocks.push(new Block(8 * smallBlockSize, 9 * smallBlockSize, 2 * smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(8 * smallBlockSize, 42 * smallBlockSize, 2 * smallBlockSize, 2 * smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(13 * smallBlockSize, 43 * smallBlockSize, 2 * smallBlockSize, 2 * smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(20 * smallBlockSize, 23 * smallBlockSize, 3 * smallBlockSize, 2 * smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(20 * smallBlockSize, 26 * smallBlockSize, 3 * smallBlockSize, 1.3 * smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(34 * smallBlockSize, 18 * smallBlockSize, 4 * smallBlockSize, 1.3 * smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(35 * smallBlockSize, 20 * smallBlockSize, 2.5 * smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(35 * smallBlockSize, 23 * smallBlockSize, 2.3 * smallBlockSize, 2 * smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(8 * smallBlockSize, 12 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(13 * smallBlockSize, 12 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));

  // Grey blocks simulate pavements and zebra crossings
  Blocks.push(new Block(2 * smallBlockSize, 2 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(10 * smallBlockSize, 2 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(12 * smallBlockSize, 2 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(26 * smallBlockSize, 2 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(30 * smallBlockSize, 2 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  
  Blocks.push(new Block(smallBlockSize, 6 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(18 * smallBlockSize, 6 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));
  Blocks.push(new Block(32 * smallBlockSize, 6 * smallBlockSize, smallBlockSize, smallBlockSize, color(200, 200, 200)));

  // Add extra blocks
  Blocks.push(new Block(32 * smallBlockSize, 34 * smallBlockSize, 3 * smallBlockSize, 2 * smallBlockSize, color(230, 205, 40)));
  Blocks.push(new Block(15 * smallBlockSize, 22 * smallBlockSize, 2 * smallBlockSize, 2 * smallBlockSize, color(230, 205, 40)));
}

// Create a class with each block (buildings, roads) as a separate object for management and drawing
class Block {
  constructor(x, y, w, h, c, isRoad = false) {
    this.x = x;                
    this.y = y;                
    this.w = w; 
    this.h = h;
    this.c = c;
    this.isRoad = isRoad; // Checks if blocks are road blocks, defaults to false
  }
  
  display() {
    noStroke(); 
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
  }
}

// Clear the canvas background and generate all blocks
function drawBlocks() {
  // Setting the canvas background color
  background(240, 240, 235);
  for (let i = 0; i < Blocks.length; i++) {
    Blocks[i].display();
  }
   // Draw moving small blocks
  for (let smallBlock of smallBlocks) {
    smallBlock.display();
  }
}

// SmallBlock class to simulate cars moving within roads
class SmallBlock {
  constructor(x, y, colorSmallBlock, roadBlock) {
    this.x = x;
    this.y = y;
    this.colorSmallBlock = colorSmallBlock;
    this.roadBlock = roadBlock; // Saves the road block this small block belongs to
    this.directionX = random([1, -1]); // Randomly chooses left or right movement direction
    this.directionY = random([1, -1]); // Randomly chooses up or down movement direction
  }

  // Small block display
  display() {
    fill(this.colorSmallBlock);
    noStroke();
    rect(this.x, this.y, smallBlockSize, smallBlockSize);
  }

  // Small block movement, constrained within the road block
  move() {
    // Updates small block position
    this.x += this.directionX * smallBlockSpeed;
    this.y += this.directionY * smallBlockSpeed;

    // Checks if it goes beyond the road block boundaries, if so, reverses direction
    if (this.x < this.roadBlock.x || this.x > this.roadBlock.x + this.roadBlock.w - smallBlockSize) {
      this.directionX *= -1; // Reverse horizontal movement
      this.x = constrain(this.x, this.roadBlock.x, this.roadBlock.x + this.roadBlock.w - smallBlockSize); // Constrain within boundary
    }
    if (this.y < this.roadBlock.y || this.y > this.roadBlock.y + this.roadBlock.h - smallBlockSize) {
      this.directionY *= -1; // Reverse vertical movement
      this.y = constrain(this.y, this.roadBlock.y, this.roadBlock.y + this.roadBlock.h - smallBlockSize); // Constrain within boundary
    }
  }
}

// Generate random blocks on road blocks to simulate cars
function generateRandomSmallBlocks() {

  // Check each block object in the Blocks array and check if it is road block (isRoad is true)
  for (let i = 0; i < Blocks.length; i++) {
    if  (Blocks[i].isRoad) {
      // Generate small blocks randomly in the road area
      let numSmallBlocks = 5; // Each road generates five blocks
      for (let t = 0; t < numSmallBlocks; t++) {
        // Use Math.floor() to ensure that randomly generated numbers are integers
        // Make the position of the randomly generated small blocks on the road blocks
        let x = Blocks[i].x + Math.floor(random(0, Blocks[i].w / smallBlockSize)) * smallBlockSize;
        let y = Blocks[i].y + Math.floor(random(0, Blocks[i].h / smallBlockSize)) * smallBlockSize;

        // assign blue or red colour randomly to the smallblocks
        let colorSmallBlock = random() > 0.5 ? color(160, 55, 45) : color(70, 100, 190);

        // Add random small blocks to the Blocks array
        Blocks.push(new Block(x, y, smallBlockSize, smallBlockSize, colorSmallBlock));
      }
    }
  }
}
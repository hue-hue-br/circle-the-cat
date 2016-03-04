function Board(ctx) {
  var self = this;
  
  this.numOfBlocks = 11;
  
  this.radius = 20;
  this.horizontalOffset = 20;
  this.verticalOffset = 30;
  this.startAngle = 0;
  this.endAngle = Math.PI*2;
  
  this.ctx = ctx;
  this.grid = 0;
  this.div = document.getElementById("canvas");
  this.height = 36;
  this.width = 48;
  this.x = 0;
  this.y = 0;
  this.cat = 0;
  this.lock = false;
  this.img = 0;
  
  this.create = function() {
    self.setUpGrid();
    self.pickRandomDone();
    self.initCat();
    self.img = new Image();
    self.img.src = 'cat.png';
    self.img.onload = function(){
      self.draw();
    };
  };
  
  this.changeOnWin = function() {
	self.img.src = 'win.png';
    self.img.onload = function(){
      self.draw();
    };
  }
  
  this.changeOnLose = function() {
	self.img.src = 'lose.png';
    self.img.onload = function(){
      self.draw();
    };
  }
  
  this.setUpGrid = function() {
    self.grid = [];
    for (var i = 0; i < self.numOfBlocks; i++) {
      self.grid[i] = [];
      for (var j = 0; j < self.numOfBlocks; j++) {
        if (j % 2) {
          self.x = self.width * i + self.horizontalOffset + (self.width / 2);
        }
        else {
          self.x = self.width * i + self.horizontalOffset;
        }
        self.y = self.height * j + self.horizontalOffset;
        self.grid[i][j] = new Circle(self.x, self.y + self.verticalOffset, self.radius);
      }
    }
  };
  
  this.pickRandomDone = function() {
    // pick random number of dots between 5 and 12
    var now = new Date();
    var seed = now.getSeconds();
    var numOfDotsAtStart = Math.floor(Math.random(seed) * 4 + 5);
  
    for (var k = 0; k < numOfDotsAtStart; k++) {
      var i, j;

      // Make sure that a random dot is not in the center of the board
      do {
        i = Math.floor(Math.random() * self.numOfBlocks);
        j = Math.floor(Math.random() * self.numOfBlocks);
      }
      while (i === Math.floor(self.numOfBlocks / 2) && j === Math.floor(self.numOfBlocks / 2));
      self.grid[i][j].updateColor();
    }
  };
  
  
  // main draw loop
  this.draw = function() {
    self.ctx.clearRect(0,0,550,430);

	var grd = self.ctx.createLinearGradient(0.000, 430.000, 550.000, 430.000);
      
	// Add colors
	grd.addColorStop(0.0000, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.0043, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.0126, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.0209, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.0292, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.0375, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.0458, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.0541, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.0624, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.0707, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.0790, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.0873, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.0960, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.1000, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.1043, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.1126, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.1209, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.1292, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.1375, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.1458, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.1541, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.1624, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.1707, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.1790, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.1873, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.1960, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.2000, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.2043, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.2126, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.2209, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.2292, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.2375, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.2458, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.2541, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.2624, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.2707, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.2790, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.2873, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.2960, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.3000, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.3043, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.3126, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.3209, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.3292, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.3375, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.3458, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.3541, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.3624, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.3707, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.3790, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.3873, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.3960, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.4000, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.4043, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.4126, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.4209, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.4292, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.4375, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.4458, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.4541, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.4624, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.4707, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.4790, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.4873, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.4960, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.5000, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.5043, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.5126, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.5209, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.5292, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.5375, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.5458, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.5541, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.5624, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.5707, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.5790, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.5873, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.5960, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.6000, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.6043, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.6126, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.6209, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.6292, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.6375, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.6458, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.6541, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.6624, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.6707, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.6790, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.6873, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.6960, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.7000, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.7043, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.7126, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.7209, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.7292, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.7375, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.7458, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.7541, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.7624, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.7707, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.7790, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.7873, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.7960, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.8000, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.8043, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.8126, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.8209, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.8292, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.8375, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.8458, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.8541, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.8624, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.8707, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.8790, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.8873, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.8960, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.9000, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.9043, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.9126, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.9209, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.9292, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.9375, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.9458, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.9541, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.9624, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.9707, 'rgba(255, 255, 255, 1.000)');
	grd.addColorStop(0.9790, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.9873, 'rgba(0, 0, 0, 1.000)');
	grd.addColorStop(0.9960, 'rgba(255, 255, 255, 1.000)');
	
    for (var i = 0; i < self.numOfBlocks; i++) {
      for (var j = 0; j < self.numOfBlocks; j++) {
        self.ctx.beginPath();
        if (self.grid[i][j].fill === true) {
		
          self.ctx.fillStyle = grd;
        }
        else {
          self.ctx.fillStyle = 'rgb(120,191,229)';
        }
        self.ctx.arc(self.grid[i][j].getPosition().x, self.grid[i][j].getPosition().y, self.radius, self.startAngle, self.endAngle, self.clockwise);
        self.ctx.fill();
      }
    }
    self.ctx.drawImage(self.img, self.cat.x - 18, self.cat.y - 45);
  };
  
  this.updateCircle = function(position) {
    var circleUpdated = false;
    for (var i = 0; i < self.numOfBlocks; i++) {
      for (var j = 0; j < self.numOfBlocks; j++) {
        if(self.grid[i][j].isInPosition(position) && !self.grid[i][j].fill && !self.grid[i][j].hasCat) {
          self.grid[i][j].updateColor();
          self.draw();
          circleUpdated = true;
        }
      }
    }
    return circleUpdated;
  };
  
  this.initCat = function() {
    var column = Math.floor(self.numOfBlocks / 2);
    var row = Math.floor(self.numOfBlocks / 2);
    self.cat = new Cat(column, row);
    self.updateCat(column, row);
    self.cat.updateCatCoordinate(self.grid[column][row].getPosition());
  };
  
  this.updateCat = function(col, row, previousLoc) {
    self.grid[col][row].addCat();
    self.cat.updateCatPosition(col, row);
    if (previousLoc !== undefined){
      self.grid[previousLoc.col][previousLoc.row].removeCat();
    }
  };
  
  
  // move cat according to available positions
  // handle case if game is won or lost
  this.moveCat = function() {
    self.lock = true;
    var winLoseObject = self.findAvailablePositions();
    if (!(winLoseObject.winGame || winLoseObject.loseGame)) {
      self.determineCatDirection();
    }
    return winLoseObject;
  };
  
  
  // find available positions to determine if game is won or lost
  // if there are no positions, the game is won
  // if cat is at the edge of the board, the game is lost
  this.findAvailablePositions = function() {
    var currentPosition = self.cat.getCurrentCatPosition();
    if (currentPosition.row === 0 || currentPosition.row === self.numOfBlocks - 1 || currentPosition.col === 0 || currentPosition.col === self.numOfBlocks - 1) {
      return {winGame:false, loseGame:true};
    }
      
    if (currentPosition.row % 2) {
      self.availableLocations = [{row:currentPosition.row - 1, col:currentPosition.col, isAvailable: true},
                                {row:currentPosition.row - 1, col:currentPosition.col + 1, isAvailable: true},
                                {row:currentPosition.row, col:currentPosition.col - 1, isAvailable: true},
                                {row:currentPosition.row, col:currentPosition.col + 1, isAvailable: true},
                                {row:currentPosition.row + 1, col:currentPosition.col, isAvailable: true},
                                {row:currentPosition.row + 1, col:currentPosition.col + 1, isAvailable: true}
                               ];
    }
    else {
      self.availableLocations = [{row:currentPosition.row - 1, col:currentPosition.col - 1, isAvailable: true},
                                {row:currentPosition.row - 1, col:currentPosition.col, isAvailable: true},
                                {row:currentPosition.row, col:currentPosition.col - 1, isAvailable: true},
                                {row:currentPosition.row, col:currentPosition.col + 1, isAvailable: true},
                                {row:currentPosition.row + 1, col:currentPosition.col - 1, isAvailable: true},
                                {row:currentPosition.row + 1, col:currentPosition.col, isAvailable: true}
                               ];
    }
    
    var placesLeft = false;
    for (var i = 0; i < self.availableLocations.length; i++) {
      var colLocation = self.availableLocations[i].col;
      var rowLocation = self.availableLocations[i].row;
      
      //alert("available: " + colLocation + ", " + rowLocation);
      
      placesLeft = placesLeft || !self.grid[colLocation][rowLocation].fill;

      if (self.grid[colLocation][rowLocation].fill) {
        self.availableLocations[i].isAvailable = false;
      }
    }
    return {winGame:!placesLeft, loseGame:false};
  };
  
  
  // determine direction of the cat given the current position and the available paths
  // calculate the position of where the cat should go
  this.determineCatDirection = function() {
    var currentPosition = self.cat.getCurrentCatPosition();
    
    var shortestPaths = self.getListOfShortestPaths();
    
    var direction = 0;
    var moveToColumn = 0;
    var moveToRow = 0;
    
    // Get random shortestPath, second block
    if (shortestPaths.length === 0) {
      do {
        direction = Math.floor(Math.random() * 6);
      }
      while (self.availableLocations[direction].isAvailable === false);
      moveToColumn = self.availableLocations[direction].col;
      moveToRow = self.availableLocations[direction].row;
    }
    else {
      var block = shortestPaths[Math.floor(Math.random() * shortestPaths.length)][1];
      moveToColumn = block.x;
      moveToRow = block.y;
      direction = self.getDirection(currentPosition, {col:moveToColumn, row:moveToRow});    
    }

    var positionShift = 0;
    
    switch(direction){
    case 0:
      positionShift = {x:self.width / -2, y:self.height * -1};
      break;
    case 1:
      positionShift = {x:self.width / 2, y:self.height * -1};
      break;
    case 2:
      positionShift = {x:self.width * -1, y:0};
      break;
    case 3:
      positionShift = {x:self.width, y:0};
      break;
    case 4:
      positionShift = {x:self.width / -2, y:self.height};
      break;
    case 5:
      positionShift = {x:self.width / 2, y:self.height};
      break;
    default:
      positionShift = {x:0, y:0};
    }
    
    self.updateCat(moveToColumn, moveToRow, currentPosition);
    self.loopCatMovement(positionShift, self.cat.getCurrentCatCoordinate().x);
  };
  
  this.getListOfShortestPaths = function() {
    var currentPosition = self.cat.getCurrentCatPosition();
    var start = [currentPosition.col, currentPosition.row];
    var destination = [];
    var pathList = [];
    var path = [];
    var currentShortest = 130;

    for (var i = 0; i < self.numOfBlocks; i++) {
      if (self.isLegalDestination(0,i)) {
        destination = [0, i];
        path = a_star(start, destination, self.grid, self.numOfBlocks);
        if (path.length < currentShortest && path.length !== 0) {
          pathList = [];
          pathList.push(path);
          currentShortest = path.length;
        }
        else if (path.length === currentShortest) {
          pathList.push(path);
        }
      }
      if (self.isLegalDestination(self.numOfBlocks - 1,i)) {
        destination = [self.numOfBlocks - 1, i];
        path = a_star(start, destination, self.grid, self.numOfBlocks);
        if (path.length < currentShortest && path.length !== 0) {
          pathList = [];
          pathList.push(path);
          currentShortest = path.length;
        }
        else if (path.length === currentShortest) {
          pathList.push(path);
        }
      }
    }
    for (var j = 1; j < self.numOfBlocks - 1; j++) {
      if (self.isLegalDestination(j,0)) {
        destination = [j, 0];
        path = a_star(start, destination, self.grid, self.numOfBlocks);
        if (path.length < currentShortest && path.length !== 0) {
          pathList = [];
          pathList.push(path);
          currentShortest = path.length;
        }
        else if (path.length === currentShortest) {
          pathList.push(path);
        }
      }
      if (self.isLegalDestination(j,self.numOfBlocks - 1)) {
        destination = [j, self.numOfBlocks - 1];
        path = a_star(start, destination, self.grid, self.numOfBlocks);
        if (path.length < currentShortest && path.length !== 0) {
          pathList = [];
          pathList.push(path);
          currentShortest = path.length;
        }
        else if (path.length === currentShortest) {
          pathList.push(path);
        }
      }
    }
    
    //alert("currentShortest: " + currentShortest + " numberPaths: " + pathList.length);
    //alert(pathList.length);
    return pathList;
  };
  
  this.isLegalDestination = function(col, row) {
    //alert(col + ", " + row + " " + !self.grid[col][row].fill);
    return !self.grid[col][row].fill;
  };
  
  this.getDirection = function(currentSquare, newSquare) {
    var columnDifference = newSquare.col - currentSquare.col;
    var rowDifference = newSquare.row - currentSquare.row;
    //alert (columnDifference + ", " + rowDifference);
    
    if (currentSquare.row % 2) {
      if (rowDifference === -1) {
        if (columnDifference === 0) return 0;
        else if (columnDifference === 1) return 1;
      }
      else if (rowDifference === 0) {
        if (columnDifference === -1)  return 2;
        else if (columnDifference === 1) return 3;
      }
      else if (rowDifference === 1) {
        if (columnDifference === 0) return 4;
        else if (columnDifference === 1) return 5;
      }
    }
    else {
      if (rowDifference === -1) {
        if (columnDifference === -1) return 0;
        else if (columnDifference === 0) return 1;
      }
      else if (rowDifference === 0) {
        if (columnDifference === -1)  return 2;
        else if (columnDifference === 1) return 3;
      }
      else if (rowDifference === 1) {
        if (columnDifference === -1) return 4;
        else if (columnDifference === 0) return 5;
      }

    }
    return "YOU FAIL!";
  };

  
  // loop the cat draw movement until it reaches it's destination
  // hold the lock until movement is complete, to prevent mouse clicks from taking action
  this.loopCatMovement = function(positionShift, currentCatX) {
    if (positionShift.x < 0) {
      if (self.cat.x > positionShift.x + currentCatX) {
        self.cat.updateCatCoordinate({x: positionShift.x / 12, y: positionShift.y / 12});
        self.draw();
        setTimeout(function() {self.loopCatMovement(positionShift, currentCatX);}, 24);
      }
      else {
        self.lock = false;
      }
    }
    else {
      if (self.cat.x < positionShift.x + currentCatX) {
        self.cat.updateCatCoordinate({x: positionShift.x / 12, y: positionShift.y / 12});
        self.draw();
        setTimeout(function() {self.loopCatMovement(positionShift, currentCatX);}, 24);
      }
      else {
        self.lock = false;
      }
    }
  };
}
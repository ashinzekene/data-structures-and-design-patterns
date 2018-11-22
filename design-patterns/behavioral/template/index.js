function Game(team1, team2, name = 'a') {
  this.name = name;
  this.teams = [team1, team2];
}
Game.prototype.initailize = function () {
  return `${this.name} game starting`;
};
Game.prototype.play = function (i = 0) {
  return `${this.name} has started. ${this.teams[i]} played first`;
};
Game.prototype.score = function (i = 0) {
  return `${this.teams[i]} has scored`;
};
Game.prototype.win = function (i = 0) {
  return `${this.teams[i]} has won`;
};
Game.prototype.end = function () {
  return `${this.name} has ended`;
};

function Football(team1, team2) {
  Game.call(this, team1, team2, 'football');
}
Football.prototype = new Game();
Football.prototype.initailize = function () {
  return `A football match between ${this.teams.join(' and ')} is starting now`;
};
Football.prototype.score = function (i = 0) {
  return `${this.teams[i]} has passed, the game has started`;
};
Football.prototype.play = function (i = 0) {
  return `${this.teams[i]} scored a sweet goal`;
};
Football.prototype.win = function (i = 0) {
  return `${this.teams[i]} won the football match. They scored more goals`;
};
Football.prototype.end = function () {
  return 'The refree has blown the final whistle. The match is over';
};
function Cricket(team1, team2) {
  Game.call(this, team1, team2, 'Cricket');
}
Cricket.prototype = new Game();
Cricket.prototype.initailize = function () {
  return 'First ining about to start';
};
Cricket.prototype.score = function (i = 0) {
  return `${this.teams[i]} has scored a run`;
};
Cricket.prototype.play = function (i = 0) {
  return `${this.teams[i]} has batted first. Game has started`;
};
Cricket.prototype.win = function (i = 0) {
  return `${this.teams[i]} has won the game. They scored more runs`;
};
Cricket.prototype.end = function () {
  return `This ${this.name} has ended`;
};

const football = new Football('Barcelona', 'Real Madrid');
const cricket = new Cricket('South Africa', 'England');
console.log(football.initailize());
console.log(football.play(0));
console.log(football.score(0));
console.log(football.score(1));
console.log(football.score());
console.log(football.end());
console.log(cricket.initailize());
console.log(cricket.play(0));
console.log(cricket.score(1));
console.log(cricket.score(1));
console.log(cricket.score());
console.log(cricket.end());

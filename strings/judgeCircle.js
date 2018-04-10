
// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

// Example 1:
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false
var judgeCircle = function(moves) {
   var x = 0, y = 0;
        for (var i = 0; i < moves.length; i++){
          console.log(moves.substr(i, 1) === 'R' );
            if (moves.substr(i, 1) === 'R') x--;
            console.log(x, 'x is');
            if (moves.substr(i, 1) === 'L') x++;
             console.log(x, ' now x is');
            if (moves.substr(i, 1) === 'U') y++;

            if (moves.substr(i, 1) === 'D') y--;
        }
        if (x === 0 && y === 0) return true;
        else return false;
};

judgeCircle('RLL');


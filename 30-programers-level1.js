function solution(board, moves) {
  var answer = 0;
  var goal = [];
  for (let i = 0; i < moves.length; i++) {
      for (let j = 0; j < board.length; j++) {
          if (board[j][i] > 0) {
              goal.push(board[j][i]);
              board[j][i] = 0;
              break;
          }
      }
      if (goal.length > 1 && goal[goal.length - 2] === goal[goal.length - 1]) {
          goal.pop();
          goal.pop();
          answer += 2;
      }
  }
  return answer;
}
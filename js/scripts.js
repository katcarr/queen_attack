var queenAttack = function(queen_position, piece_position){
  if (queen_position[1] === piece_position[1]){
    return true;
  } else if (queen_position[0] === piece_position[0]) {
    return true;
  } else{
    return false;
  }
};

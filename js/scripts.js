var queenAttack = function(queen_position, piece_position){
  if ((queen_position[1] === piece_position[1]) ||
     (queen_position[0] === piece_position[0]) ||
     (Math.abs(queen_position[0]-piece_position[0]) === 1 && Math.abs(queen_position[1] - piece_position[1]) === 1)) {
    return true;
  } else{
    return false;
  }
};

$(function() {
  $("form#positions").submit(function(event) {
    var queenInput = $("input#queen").val();
    var pieceInput = $("input#piece").val();

    var queenPosition = [];
    queenPosition.push(parseInt(queenInput[0]));
    queenPosition.push(parseInt(queenInput[2]));

    var piecePosition = [];
    piecePosition.push(parseInt(pieceInput[0]));
    piecePosition.push(parseInt(pieceInput[2]));

    if(queenAttack(queenPosition, piecePosition)){
      $("#not").hide();
    }else{
      $("#not").text("not");
    }

    $("#queen-position").text(queenInput);
    $("#result").show();
    event.preventDefault();
  });
});

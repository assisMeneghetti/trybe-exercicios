let piece = "king";

switch (piece) {
  case "king":
    console.log("One square in any direction");
    break;
  case "queen":
    console.log("Diagonally, horizontally, or vertically any number of squares");
    break;
  case "rooks":
    console.log("Horizontally or vertically any number of squares");
    break;
  case "bishop":
    console.log("Diagonally any number of squares");
    break;
  case "knights":
    console.log("In an ‘L’ shape’");
    break;
  case "pawns":
    console.log("Vertically forward one square");
    break;
  default: console.log("Invalid piece");
}
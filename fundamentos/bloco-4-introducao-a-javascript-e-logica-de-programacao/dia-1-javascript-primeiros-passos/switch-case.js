let situation = "aprovada";

switch (situation) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  case "lista":
    console.log("PVocê está na nossa lista de espera.");
    break;

  case "reprovado":
    console.log("PVocê foi reprovada(o).");
    break;

  default:
    console.log("Não se aplica.")
}

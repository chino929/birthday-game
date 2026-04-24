function checkAnswer(answer) {
  const result = document.getElementById("result");

  if (answer === "A") {
    result.innerText = "✨你还记得，那天真的很开心✨";
  } else if (answer === "B") {
    result.innerText = "🤔再想想，那天你可是笑得特别开心";
  } else {
    result.innerText = "😏你是不是当时只顾着吃了";
  }
}
var qoutes = [
  `“Be yourself; everyone else is already taken.”― Oscar Wilde`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
   ― Marilyn Monroe`,
  `“So many books, so little time.”
   ― Frank Zappa`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
   ― Albert Einstein`,
  `“A room without books is like a body without a soul.”
   ― Marcus Tullius Cicero`,
  `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
   ― Bernard M. Baruch`,
  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
   ― Dr. Seuss`,
];

var resultNums = [];
function getRandomNum(min, max) {
  var imax = Math.floor(max);
  var imin = Math.ceil(min);
  return Math.floor(Math.random() * (imax - imin) + imin);
}

function displayRandomQuotes() {
  var qoutNumber = getRandomNum(0, qoutes.length - 1);
  for (let i = 0; i < qoutes.length; i++) {
    if (resultNums.length == 6)
      document.getElementById(
        "quote"
      ).innerHTML = `<p>I'am sorry there is no more quotes wait for update :-)</p>`;
    else if (resultNums.includes(qoutNumber))
      qoutNumber = getRandomNum(0, qoutes.length - 1);
    else {
      resultNums.push(qoutNumber);
      document.getElementById(
        "quote"
      ).innerHTML = `<p>${qoutes[qoutNumber]}</p>`;
      break;
    }
  }
}

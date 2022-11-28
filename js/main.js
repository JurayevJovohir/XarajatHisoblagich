var elTitle = document.querySelector(".title");

var forTicket = 500;
var forHotel = 250;
var forTravel = 120;
var ForDollarSum = 11225;
var euroForSum = 11686;
var dollar = (forTicket + forHotel) * ForDollarSum;
var euro = forTravel * euroForSum;
var valuta = dollar + euro;

var money = prompt("Alisher o'zingizda bor summani kiritng");
if (money >= valuta ) {
  elTitle.textContent = "Oq yo'l Alisher ✈️";
} else {
  elTitle.textContent = "Mabla'g yetarli emas Alisher ☹️";
}
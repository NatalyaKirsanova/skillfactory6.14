const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
  // FIXME: надо бы убрать "target" прежде чем искать новый 
  
  $(".col").show();
  $(".col").removeClass("target");
  
  let divSelector = randomDivId();

  $(divSelector).addClass("target");
  // TODO: помечать target текущим номером
  $(divSelector).text(hits+1);
  console.log(divSelector);
  // FIXME: тут надо определять при первом клике firstHitTime  
  if (hits===1){firstHitTime=getTimestamp();}
  // Выводим количество кликов
  if (hits === maxHits) { endGame(); }
  $(".btn-primary").text('Играть заново');
}

function endGame() {
  // FIXME: спрятать игровое поле сначала
  $(".col").hide();

  //$(".target").text('');
  $(".col").removeClass("target");
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  $("#win-message").removeClass("d-none"); 

}

function handleClick(event) {
  // FIXME: убирать текст со старых таргетов. Кажется есть .text?
  $(".col").show();
  $(".target").text('');
  if ($(event.target).hasClass("target")) { 
    hits = hits + 1;  
    round();
  }
  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
}


function init() {
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке 

  $(".btn-primary").text('Играть');
  $(".col").hide();
   //round();
  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {       
    round();
    //location.reload();
  });
}

$(document).ready(init);

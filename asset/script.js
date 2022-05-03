function go() {
  document.body.innerHTML = "<div id='full'></div>";
  t = Math.round((Math.random()+1)*1500);
  timeout = setTimeout(chg, t);
  document.addEventListener("mousedown",chk);
}
function chg() {
  if (document.getElementById("full") != null) {
    document.getElementById("full").style.background = "#000";
  }
  r = new Date().getTime();
}
function chk() {
  if (document.getElementById("full").style.background == "rgb(0, 0, 0)") {
	r = new Date().getTime() - r;
	document.body.innerHTML = "<h1>"+r+" ms</h1><div class='btn' onclick='go()'>START</div>";
  } else {
    document.body.innerHTML = "<h1>Error!</h1><div class='btn' onclick='go()'>START</div>";
  }
  document.removeEventListener("mousedown",chk);
  clearTimeout(timeout);
}
var t;
var r;
var timeout;

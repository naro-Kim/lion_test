var num = 1;
var q = {
  1: { title: "Q1", type: "EI", A: "E", B: "I" },
  2: { title: "Q2", type: "EI", A: "E", B: "I" },
  3: { title: "Q3", type: "EI", A: "E", B: "I" },
  4: { title: "Q4", type: "SN", A: "S", B: "N" },
  5: { title: "Q5", type: "SN", A: "S", B: "N" },
  6: { title: "Q6", type: "SN", A: "S", B: "N" },
  7: { title: "Q7", type: "TF", A: "T", B: "F" },
  8: { title: "Q8", type: "TF", A: "T", B: "F" },
  9: { title: "Q9", type: "TF", A: "T", B: "F" },
  10: { title: "Q10", type: "JP", A: "J", B: "P" },
  11: { title: "Q11", type: "JP", A: "J", B: "P" },
  12: { title: "Q12", type: "JP", A: "J", B: "P" },
};
var result = {
  ESTJ: { animal: "ESTJ", explain: "ESTJ", img: "/testimg/estj.jpg" },
  ESFJ: { animal: "ESFJ", explain: "ESFJ", img: "/testimg/esfj.jpg" },
  ESTP: { animal: "ESTP", explain: "ESTP", img: "/testimg/estp.jpg" },
  ESFJ: { animal: "ESFJ", explain: "ESFJ", img: "/testimg/esfj.jpg" },
  ENTJ: { animal: "ENTJ", explain: "ENTJ", img: "/testimg/entj.jpg" },
  ENFJ: { animal: "ENFJ", explain: "ENFJ", img: "/testimg/enfj.jpg" },
  ENTP: { animal: "ENTP", explain: "ENTP", img: "/testimg/entp.jpg" },
  ENFP: { animal: "ENFP", explain: "ENFP", img: "/testimg/enfp.jpg" },
  ISTJ: { animal: "ISTJ", explain: "ISTJ", img: "/testimg/istj.jpg" },
  ISFJ: { animal: "ISFJ", explain: "ISFJ", img: "/testimg/isfj.jpg" },
  ISTP: { animal: "ISTP", explain: "ISTP", img: "/testimg/istp.jpg" },
  ISFP: { animal: "ISFP", explain: "ISFP", img: "/testimg/isfp.jpg" },
  INTJ: { animal: "INTJ", explain: "INTJ", img: "/testimg/intj.jpg" },
  INFJ: { animal: "INFJ", explain: "INFJ", img: "/testimg/infj.jpg" },
  INFP: { animal: "INFP", explain: "INFP", img: "/testimg/infp.jpg" },
  INTP: { animal: "INTP", explain: "INTP", img: "/testimg/intp.jpg" },
};
function start() {
  $(".start").hide();
  $(".question").show();
  next();
}
$("#A").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  $("#" + type).val(parseInt(preValue) + 1);
  next();
});
$("#B").click(function () {
  next();
});
function next() {
  if (num == 13) {
    $(".question").hide();
    $(".result").show();
    var mbti = "";
    $("#EI").val() < 2 ? (mbti += "I") : (mbti += "E");
    $("#SN").val() < 2 ? (mbti += "N") : (mbti += "S");
    $("#TF").val() < 2 ? (mbti += "F") : (mbti += "T");
    $("#JP").val() < 2 ? (mbti += "P") : (mbti += "J");
    $("#img").attr("src", result[mbti]["img"]);
    $("#animal").html(result[mbti]["animal"]);
    $("#explain").html(result[mbti]["explain"]);
  } else {
    $(".btnBack").show();
    $(".progress-bar").attr("style", "width: calc(100/12*" + num + "%)");
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
  }
}
function loadJQuery() {
  var oScript = document.createElement("script");
  oScript.type = "text/javascript";
  oScript.charset = "utf-8";
  oScript.src = "http://code.jquery.com/jquery-3.5.1.min.js";
  document.getElementsByTagName("head")[0].appendChild(oScript);
}

import colors from "./colors.js";
import randomizeColors from "./randomizeColors.js";
let ls = localStorage;
let firstColor;
let secondColor;
let thirdColor;
ls.setItem("clickedNumber", 0);
ls.setItem("start", false);
let sec = 0;
let min = 0;
let countryFound = 0;
$(".country-name")
  .css({ fontSize: "2rem", fontWeight: "bold", padding: "2rem" })
  .text("France");
$(".level").text(0);
$(".points").text(0);

randomizeColors();
$(window).ready(function () {
  ls.setItem("start", prompt("Click OK when you're ready to play", true));
  // set timer ---------------------------------------
  if (ls.getItem("start")) {
    setInterval(() => {
      sec++;
      if (sec <= 59) {
        $(".score").text("0" + min + ":" + sec);
      } else if (sec >= 59) {
        sec = 0;
        min++;
      }
    }, 1000);

    // add dialog to screen when click give up with exit button
    $(".give-up-btn").click(() => {
      console.log(ls.getItem("clickedNumber"));
      ls.setItem("start", false);
      $(".container").append(
        '<dialog id="dialog">your level : ' +
          $(".level").text() +
          "<br> your time " +
          "0" +
          min +
          " : " +
          sec +
          "<br> number of clicks : " +
          ls.getItem("clickedNumber") +
          '<br> <button id="dialogBtn"  class="btn btn-danger">Exit </button></dialog>'
      );
      $("#dialog").show().css({
        background: "linear-gradient(to right top, #65dfc9, #6cdbeb)",
        position: "absolute",
        top: "30px",
        width: "400px",
        border: "1px white solid",
        borderRadius: "10px",
        fontSize: "1.2rem",
        zIndex: 100,
      });
      $("#dialogBtn").click(function () {
        $("#dialog").hide();
      });
    });
    $(".color").click(function () {
      // display give up button
      $(".give-up-btn").css("visibility", "visible");
      ls.setItem("clickedNumber", parseInt(ls.getItem("clickedNumber")) + 1);
      $(".clickedNumber").text(ls.getItem("clickedNumber"));
      let index = $(".color").index(this);
      var randomIndex = Math.floor(Math.random() * colors.length);
      if (index === 0) {
        $(this).css("background-color", colors[randomIndex]);
        firstColor = $(this).css("background-color");
      }
      if (index === 1) {
        $(this).css("background-color", colors[randomIndex]);
        secondColor = $(this).css("background-color");
      }
      if (index === 2) {
        $(this).css("background-color", colors[randomIndex]);
        thirdColor = $(this).css("background-color");
      }
      //check france flag------------------------------------
      if (
        firstColor === "rgb(0, 80, 164)" &&
        secondColor === "rgb(255, 255, 255)" &&
        thirdColor === "rgb(239, 65, 53)" &&
        countryFound === 0
      ) {
        $(".jocker-btn").css("visibility", "visible");
        $(".country-name").text("find Belgium flag");
        $(".points").text(1);
        $(".level").text(1);
        // find first flag when jocker btn clicked
        $(".jocker-btn").click(function () {
          $(".level").text(1);
          firstColor = "rgb(0, 0, 0)";
          $(this).css("visibility", "hidden");
        });
        countryFound = 1;
        // check bleguim flag------------------------------------
      } else if (
        firstColor === "rgb(0, 0, 0)" &&
        secondColor === "rgb(253, 218, 36)" &&
        thirdColor === "rgb(239, 65, 53)" &&
        countryFound === 1
      ) {
        $(".country-name").text("find Hollad flag ");
        $(".points").text(2);
        countryFound = 2;
        $(".level").text(2);

        $(".color").addClass("col-12").css({
          height: "20vh",
          padding: "5rem",
        });
        // check hollad flag------------------------------------
      } else if (
        firstColor === "rgb(239, 65, 53)" &&
        secondColor === "rgb(255, 255, 255)" &&
        thirdColor === "rgb(0, 80, 164)" &&
        countryFound === 2
      ) {
        $(".country-name").text(" find German flag");
        $(".level").text(3);
        $(".points").text(3);
        countryFound = 3;
        // check german flag------------------------------------
      } else if (
        firstColor === "rgb(0, 0, 0)" &&
        secondColor === "rgb(239, 65, 53)" &&
        thirdColor === "rgb(253, 218, 36)" &&
        countryFound === 3
      ) {
        $(".country-name").text("find Pollad flag");
        $(".level").text(4);
        $(".points").text(4);
        countryFound = 4;
        $(".col-3:nth-child(3)").remove();
        $(".color").addClass("col-12").css({
          height: "30vh",
          padding: "5rem",
        });
        // Check Polland's flag------------------------------
      } else if (
        firstColor === "rgb(255, 255, 255)" &&
        secondColor === "rgb(239, 65, 53)" &&
        countryFound === 4
      ) {
        $(".level").text(5);
        $(".points").text(5);
        $(".country-name").text("Game over");
        $(".color").remove();
        countryFound = 5;

        $(".container").append(
          '<dialog id="game-over">Game over <br> your level : ' +
            $(".level").text() +
            "<br> your time " +
            "0" +
            min +
            " : " +
            sec +
            "<br> number of clicks : " +
            ls.getItem("clickedNumber") +
            '<br> <button id="dialogBtn"  class="btn btn-danger">Exit </button></dialog>'
        );
        $("#game-over").show().css({
          background: "linear-gradient(to right top, #65dfc9, #6cdbeb)",
          position: "absolute",
          top: "30px",
          border: "1px white solid",
          borderRadius: "10px",
          fontSize: "1.2rem",
          zIndex: 100,
        });
        $("#dialogBtn").click(function () {
          $("#game-over").hide();
        });
      }
    });
  }
});

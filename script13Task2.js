let btn1 = document.getElementById("btn`");
let area = document.getElementById("areaText");
let btn11 = document.getElementById("btn11");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnMinus = document.getElementById("btn-");
let btnDorivn = document.getElementById("btn=");
let backSpace = document.getElementById("backspace");
let shiftbtn = document.getElementById("shiftBtn");

let leterQ = document.getElementById("q");
let leterW = document.getElementById("w");
let leterE = document.getElementById("e");
let leterR = document.getElementById("r");
let leterT = document.getElementById("t");
let leterY = document.getElementById("y");
let leterU = document.getElementById("u");
let leterI = document.getElementById("i");
let leterO = document.getElementById("o");
let leterP = document.getElementById("p");
let kvardL = document.getElementById("kvadrLeft");
let kvadrR = document.getElementById("kvadrRight");
let lineUp = document.getElementById("lineUP");

let tab = document.getElementById("tab");
let enter = document.getElementById("enter");

let leterA = document.getElementById("a");
let leterS = document.getElementById("s");
let leterD = document.getElementById("d");
let leterF = document.getElementById("f");
let leterG = document.getElementById("g");
let leterH = document.getElementById("h");
let leterJ = document.getElementById("j");
let leterK = document.getElementById("k");
let leterL = document.getElementById("l");
let krapKom = document.getElementById("krapKom");

let apostr = document.getElementById("apostr");
let leterZ = document.getElementById("z");
let leterX = document.getElementById("x");
let leterC = document.getElementById("c");
let leterV = document.getElementById("v");
let leterB = document.getElementById("b");
let leterN = document.getElementById("n");
let leterM = document.getElementById("m");
let koma = document.getElementById("koma");
let krapka = document.getElementById("krapka");
let rightLine = document.getElementById("rightLine");
let shiftBtn1 = document.getElementById("shiftBtn1");
let space = document.getElementById("space");
let capslock = document.getElementById("capsLock");
window.addEventListener("keydown", function (event) {
  console.log("Event", event);
});

window.addEventListener("keydown", function (event) {
  console.log("Event", event.keyCode);

  if (event.shiftKey === true) {
    shiftbtn.style.backgroundColor = "gray";
    shiftBtn1.style.backgroundColor = "gray";
    if (event.keyCode === 81) {
      console.log("yes down");
      leterQ.style.backgroundColor = "gray";
      area.append("Q");
    } else if (event.keyCode === 87) {
      console.log("yes down");
      leterW.style.backgroundColor = "gray";
      area.append("W");
    } else if (event.keyCode === 69) {
      console.log("yes down");
      leterE.style.backgroundColor = "gray";
      area.append("E");
    } else if (event.keyCode === 82) {
      console.log("yes down");
      leterR.style.backgroundColor = "gray";
      area.append("R");
    } else if (event.keyCode === 84) {
      console.log("yes down");
      leterT.style.backgroundColor = "gray";
      area.append("T");
    } else if (event.keyCode === 89) {
      console.log("yes down");
      leterY.style.backgroundColor = "gray";
      area.append("Y");
    } else if (event.keyCode === 85) {
      console.log("yes down");
      leterU.style.backgroundColor = "gray";
      area.append("U");
    } else if (event.keyCode === 73) {
      console.log("yes down");
      leterI.style.backgroundColor = "gray";
      area.append("I");
    } else if (event.keyCode === 79) {
      console.log("yes down");
      leterO.style.backgroundColor = "gray";
      area.append("O");
    } else if (event.keyCode === 80) {
      console.log("yes down");
      leterP.style.backgroundColor = "gray";
      area.append("P");
    } else if (event.keyCode === 65) {
      console.log("yes down");
      leterA.style.backgroundColor = "gray";
      area.append("A");
    } else if (event.keyCode === 83) {
      console.log("yes down");
      leterS.style.backgroundColor = "gray";
      area.append("S");
    } else if (event.keyCode === 68) {
      console.log("yes down");
      leterD.style.backgroundColor = "gray";
      area.append("D");
    } else if (event.keyCode === 70) {
      console.log("yes down");
      leterF.style.backgroundColor = "gray";
      area.append("F");
    } else if (event.keyCode === 71) {
      console.log("yes down");
      leterG.style.backgroundColor = "gray";
      area.append("G");
    } else if (event.keyCode === 72) {
      console.log("yes down");
      leterH.style.backgroundColor = "gray";
      area.append("H");
    } else if (event.keyCode === 74) {
      console.log("yes down");
      leterJ.style.backgroundColor = "gray";
      area.append("J");
    } else if (event.keyCode === 75) {
      console.log("yes down");
      leterK.style.backgroundColor = "gray";
      area.append("K");
    } else if (event.keyCode === 76) {
      console.log("yes down");
      leterL.style.backgroundColor = "gray";
      area.append("L");
    } else if (event.keyCode === 90) {
      console.log("yes down");
      leterZ.style.backgroundColor = "gray";
      area.append("Z");
    } else if (event.keyCode === 88) {
      console.log("yes down");
      leterX.style.backgroundColor = "gray";
      area.append("X");
    } else if (event.keyCode === 67) {
      console.log("yes down");
      leterC.style.backgroundColor = "gray";
      area.append("C");
    } else if (event.keyCode === 86) {
      console.log("yes down");
      leterV.style.backgroundColor = "gray";
      area.append("V");
    } else if (event.keyCode === 66) {
      console.log("yes down");
      leterB.style.backgroundColor = "gray";
      area.append("B");
    } else if (event.keyCode === 78) {
      console.log("yes down");
      leterN.style.backgroundColor = "gray";
      area.append("N");
    } else if (event.keyCode === 77) {
      console.log("yes down");
      leterM.style.backgroundColor = "gray";
      area.append("M");
    } else if (event.keyCode === 192) {
      console.log("yes down");
      btn1.style.backgroundColor = "gray";
      area.append("`");
    } else if (event.keyCode === 49) {
      console.log("yes down");
      btn11.style.backgroundColor = "gray";
      area.append("1");
    } else if (event.keyCode === 50) {
      console.log("yes down");
      btn2.style.backgroundColor = "gray";
      area.append("2");
    } else if (event.keyCode === 51) {
      console.log("yes down");
      btn3.style.backgroundColor = "gray";
      area.append("3");
    } else if (event.keyCode === 52) {
      console.log("yes down");
      btn4.style.backgroundColor = "gray";
      area.append("4");
    } else if (event.keyCode === 53) {
      console.log("yes down");
      btn5.style.backgroundColor = "gray";
      area.append("5");
    } else if (event.keyCode === 54) {
      console.log("yes down");
      btn6.style.backgroundColor = "gray";
      area.append("6");
    } else if (event.keyCode === 55) {
      console.log("yes down");
      btn7.style.backgroundColor = "gray";
      area.append("7");
    } else if (event.keyCode === 56) {
      console.log("yes down");
      btn8.style.backgroundColor = "gray";
      area.append("8");
    } else if (event.keyCode === 57) {
      console.log("yes down");
      btn9.style.backgroundColor = "gray";
      area.append("9");
    } else if (event.keyCode === 48) {
      console.log("yes down");
      btn0.style.backgroundColor = "gray";
      area.append("0");
    } else if (event.keyCode === 189) {
      console.log("yes down");
      btnMinus.style.backgroundColor = "gray";
      area.append("-");
    } else if (event.keyCode === 187) {
      console.log("yes down");
      btnDorivn.style.backgroundColor = "gray";
      area.append("=");
    } else if (event.keyCode === 219) {
      console.log("yes down");
      kvardL.style.backgroundColor = "gray";
      area.append("[");
    } else if (event.keyCode === 221) {
      console.log("yes down");
      kvadrR.style.backgroundColor = "gray";
      area.append("]");
    } else if (event.keyCode === 220) {
      console.log("yes down");
      lineUp.style.backgroundColor = "gray";
      area.append("\\");
    } else if (event.keyCode === 186) {
      console.log("yes down");
      krapKom.style.backgroundColor = "gray";
      area.append(";");
    } else if (event.keyCode === 222) {
      console.log("yes down");
      apostr.style.backgroundColor = "gray";
      area.append("'");
    } else if (event.keyCode === 188) {
      console.log("yes down");
      koma.style.backgroundColor = "gray";
      area.append(",");
    } else if (event.keyCode === 190) {
      console.log("yes down");
      krapka.style.backgroundColor = "gray";
      area.append(".");
    } else if (event.keyCode === 191) {
      console.log("yes down");
      rightLine.style.backgroundColor = "gray";
      area.append("/");
    } else if (event.keyCode === 32) {
      console.log("yes down");
      space.style.backgroundColor = "gray";
      area.append(" ");
    } else if (event.keyCode === 9) {
      console.log("yes down");
      tab.style.backgroundColor = "gray";
      area.value = "\t";
    } else if (event.keyCode === 13) {
      console.log("yes down");
      enter.style.backgroundColor = "gray";
      this.document.getElementById('areaText').insertAdjacentHTML('beforeend', '\n');
    }
  }

  if (event.keyCode === 8) {
    backSpace.style.backgroundColor = "gray";
    let Deleter = area.lastChild;
    console.log(Deleter);
    Deleter.remove();
  }

  if (event.getModifierState("CapsLock")) {
    console.log("CAPS YES");
    capslock.style.backgroundColor = "gray";
    if (event.keyCode === 81) {
      console.log("yes down");
      leterQ.style.backgroundColor = "gray";
      let s = area.append("Q");
      s.remove();
    } else if (event.keyCode === 87) {
      console.log("yes down");
      leterW.style.backgroundColor = "gray";
      let w = area.append("W");
      w.remove();
    } else if (event.keyCode === 69) {
      console.log("yes down");
      leterE.style.backgroundColor = "gray";
      let w = area.append("E");
      w.remove();
    } else if (event.keyCode === 82) {
      console.log("yes down");
      leterR.style.backgroundColor = "gray";
      let w = area.append("R");
      w.remove();
    } else if (event.keyCode === 84) {
      console.log("yes down");
      leterT.style.backgroundColor = "gray";
      let w = area.append("T");
      w.remove();
    } else if (event.keyCode === 89) {
      console.log("yes down");
      leterY.style.backgroundColor = "gray";
      let w = area.append("Y");
      w.remove();
    } else if (event.keyCode === 85) {
      console.log("yes down");
      leterU.style.backgroundColor = "gray";
      let w = area.append("U");
      w.remove();
    } else if (event.keyCode === 73) {
      console.log("yes down");
      leterI.style.backgroundColor = "gray";
      let w = area.append("I");
      w.remove();
    } else if (event.keyCode === 79) {
      console.log("yes down");
      leterO.style.backgroundColor = "gray";
      let w = area.append("O");
      w.remove();
    } else if (event.keyCode === 80) {
      console.log("yes down");
      leterP.style.backgroundColor = "gray";
      let w = area.append("P");
      w.remove();
    } else if (event.keyCode === 65) {
      console.log("yes down");
      leterA.style.backgroundColor = "gray";
      let w = area.append("A");
      w.remove();
    } else if (event.keyCode === 83) {
      console.log("yes down");
      leterS.style.backgroundColor = "gray";
      let w = area.append("S");
      w.remove();
    } else if (event.keyCode === 68) {
      console.log("yes down");
      leterD.style.backgroundColor = "gray";
      let w = area.append("D");
      w.remove();
    } else if (event.keyCode === 70) {
      console.log("yes down");
      leterF.style.backgroundColor = "gray";
      let w = area.append("F");
      w.remove();
    } else if (event.keyCode === 71) {
      console.log("yes down");
      leterG.style.backgroundColor = "gray";
      let w = area.append("G");
      w.remove();
    } else if (event.keyCode === 72) {
      console.log("yes down");
      leterH.style.backgroundColor = "gray";
      let w = area.append("H");
      w.remove();
    } else if (event.keyCode === 74) {
      console.log("yes down");
      leterJ.style.backgroundColor = "gray";
      let w = area.append("J");
      w.remove();
    } else if (event.keyCode === 75) {
      console.log("yes down");
      leterK.style.backgroundColor = "gray";
      let w = area.append("K");
      w.remove();
    } else if (event.keyCode === 76) {
      console.log("yes down");
      leterL.style.backgroundColor = "gray";
      let w = area.append("L");
      w.remove();
    } else if (event.keyCode === 90) {
      console.log("yes down");
      leterZ.style.backgroundColor = "gray";
      let w = area.append("Z");
      w.remove();
    } else if (event.keyCode === 88) {
      console.log("yes down");
      leterX.style.backgroundColor = "gray";
      let w = area.append("X");
      w.remove();
    } else if (event.keyCode === 67) {
      console.log("yes down");
      leterC.style.backgroundColor = "gray";
      let w = area.append("C");
      w.remove();
    } else if (event.keyCode === 86) {
      console.log("yes down");
      leterV.style.backgroundColor = "gray";
      let w = area.append("V");
      w.remove();
    } else if (event.keyCode === 66) {
      console.log("yes down");
      leterB.style.backgroundColor = "gray";
      let w = area.append("B");
      w.remove();
    } else if (event.keyCode === 78) {
      console.log("yes down");
      leterN.style.backgroundColor = "gray";
      let w = area.append("N");
      w.remove();
    } else if (event.keyCode === 77) {
      console.log("yes down");
      leterM.style.backgroundColor = "gray";
      let w = area.append("M");
      w.remove();
    }
  }
  if (!event.getModifierState("CapsLock")) {
    capslock.style.backgroundColor = "white";
  }

  if (event.shiftKey === false) {
    if (event.keyCode === 192) {
      console.log("yes down");
      btn1.style.backgroundColor = "gray";
      area.append("`");
    } else if (event.keyCode === 49) {
      console.log("yes down");
      btn11.style.backgroundColor = "gray";
      area.append("1");
    } else if (event.keyCode === 50) {
      console.log("yes down");
      btn2.style.backgroundColor = "gray";
      area.append("2");
    } else if (event.keyCode === 51) {
      console.log("yes down");
      btn3.style.backgroundColor = "gray";
      area.append("3");
    } else if (event.keyCode === 52) {
      console.log("yes down");
      btn4.style.backgroundColor = "gray";
      area.append("4");
    } else if (event.keyCode === 53) {
      console.log("yes down");
      btn5.style.backgroundColor = "gray";
      area.append("5");
    } else if (event.keyCode === 54) {
      console.log("yes down");
      btn6.style.backgroundColor = "gray";
      area.append("6");
    } else if (event.keyCode === 55) {
      console.log("yes down");
      btn7.style.backgroundColor = "gray";
      area.append("7");
    } else if (event.keyCode === 56) {
      console.log("yes down");
      btn8.style.backgroundColor = "gray";
      area.append("8");
    } else if (event.keyCode === 57) {
      console.log("yes down");
      btn9.style.backgroundColor = "gray";
      area.append("9");
    } else if (event.keyCode === 48) {
      console.log("yes down");
      btn0.style.backgroundColor = "gray";
      area.append("0");
    } else if (event.keyCode === 189) {
      console.log("yes down");
      btnMinus.style.backgroundColor = "gray";
      area.append("-");
    } else if (event.keyCode === 187) {
      console.log("yes down");
      btnDorivn.style.backgroundColor = "gray";
      area.append("=");
    } else if (event.keyCode === 81) {
      console.log("yes down");
      leterQ.style.backgroundColor = "gray";
      area.append("q");
    } else if (event.keyCode === 87) {
      console.log("yes down");
      leterW.style.backgroundColor = "gray";
      area.append("w");
    } else if (event.keyCode === 69) {
      console.log("yes down");
      leterE.style.backgroundColor = "gray";
      area.append("e");
    } else if (event.keyCode === 82) {
      console.log("yes down");
      leterR.style.backgroundColor = "gray";
      area.append("r");
    } else if (event.keyCode === 84) {
      console.log("yes down");
      leterT.style.backgroundColor = "gray";
      area.append("t");
    } else if (event.keyCode === 89) {
      console.log("yes down");
      leterY.style.backgroundColor = "gray";
      area.append("y");
    } else if (event.keyCode === 85) {
      console.log("yes down");
      leterU.style.backgroundColor = "gray";
      area.append("u");
    } else if (event.keyCode === 73) {
      console.log("yes down");
      leterI.style.backgroundColor = "gray";
      area.append("i");
    } else if (event.keyCode === 79) {
      console.log("yes down");
      leterO.style.backgroundColor = "gray";
      area.append("o");
    } else if (event.keyCode === 80) {
      console.log("yes down");
      leterP.style.backgroundColor = "gray";
      area.append("p");
    } else if (event.keyCode === 219) {
      console.log("yes down");
      kvardL.style.backgroundColor = "gray";
      area.append("[");
    } else if (event.keyCode === 221) {
      console.log("yes down");
      kvadrR.style.backgroundColor = "gray";
      area.append("]");
    } else if (event.keyCode === 220) {
      console.log("yes down");
      lineUp.style.backgroundColor = "gray";
      area.append("\\");
    } else if (event.keyCode === 65) {
      console.log("yes down");
      leterA.style.backgroundColor = "gray";
      area.append("a");
    } else if (event.keyCode === 83) {
      console.log("yes down");
      leterS.style.backgroundColor = "gray";
      area.append("s");
    } else if (event.keyCode === 68) {
      console.log("yes down");
      leterD.style.backgroundColor = "gray";
      area.append("d");
    } else if (event.keyCode === 70) {
      console.log("yes down");
      leterF.style.backgroundColor = "gray";
      area.append("f");
    } else if (event.keyCode === 71) {
      console.log("yes down");
      leterG.style.backgroundColor = "gray";
      area.append("g");
    } else if (event.keyCode === 72) {
      console.log("yes down");
      leterH.style.backgroundColor = "gray";
      area.append("h");
    } else if (event.keyCode === 74) {
      console.log("yes down");
      leterJ.style.backgroundColor = "gray";
      area.append("j");
    } else if (event.keyCode === 75) {
      console.log("yes down");
      leterK.style.backgroundColor = "gray";
      area.append("k");
    } else if (event.keyCode === 76) {
      console.log("yes down");
      leterL.style.backgroundColor = "gray";
      area.append("l");
    } else if (event.keyCode === 186) {
      console.log("yes down");
      krapKom.style.backgroundColor = "gray";
      area.append(";");
    } else if (event.keyCode === 222) {
      console.log("yes down");
      apostr.style.backgroundColor = "gray";
      area.append("'");
    } else if (event.keyCode === 90) {
      console.log("yes down");
      leterZ.style.backgroundColor = "gray";
      area.append("z");
    } else if (event.keyCode === 88) {
      console.log("yes down");
      leterX.style.backgroundColor = "gray";
      area.append("x");
    } else if (event.keyCode === 67) {
      console.log("yes down");
      leterC.style.backgroundColor = "gray";
      area.append("c");
    } else if (event.keyCode === 86) {
      console.log("yes down");
      leterV.style.backgroundColor = "gray";
      area.append("v");
    } else if (event.keyCode === 66) {
      console.log("yes down");
      leterB.style.backgroundColor = "gray";
      area.append("b");
    } else if (event.keyCode === 78) {
      console.log("yes down");
      leterN.style.backgroundColor = "gray";
      area.append("n");
    } else if (event.keyCode === 77) {
      console.log("yes down");
      leterM.style.backgroundColor = "gray";
      area.append("m");
    } else if (event.keyCode === 188) {
      console.log("yes down");
      koma.style.backgroundColor = "gray";
      area.append(",");
    } else if (event.keyCode === 190) {
      console.log("yes down");
      krapka.style.backgroundColor = "gray";
      area.append(".");
    } else if (event.keyCode === 191) {
      console.log("yes down");
      rightLine.style.backgroundColor = "gray";
      area.append("/");
    } else if (event.keyCode === 32) {
      console.log("yes down");
      space.style.backgroundColor = "gray";
      area.append(" ");
    } else if (event.keyCode === 9) {
      console.log("yes down");
      tab.style.backgroundColor = "gray";
      area.value = "\t";
    } else if (event.keyCode === 13) {
      console.log("yes down");
      enter.style.backgroundColor = "gray";
      this.document.getElementById('areaText').insertAdjacentHTML('beforeend', '\n');
    }
  }
});

window.addEventListener("keyup", function (event) {
  console.log("Event", event.keyCode);
  if (event.keyCode === 192) {
    console.log("yes up");
    btn1.style.backgroundColor = "white";
  } else if (event.keyCode === 49) {
    console.log("yes up");
    btn11.style.backgroundColor = "white";
  } else if (event.keyCode === 50) {
    console.log("yes up");
    btn2.style.backgroundColor = "white";
  } else if (event.keyCode === 51) {
    console.log("yes up");
    btn3.style.backgroundColor = "white";
  } else if (event.keyCode === 52) {
    console.log("yes up");
    btn4.style.backgroundColor = "white";
  } else if (event.keyCode === 53) {
    console.log("yes up");
    btn5.style.backgroundColor = "white";
  } else if (event.keyCode === 54) {
    console.log("yes up");
    btn6.style.backgroundColor = "white";
  } else if (event.keyCode === 55) {
    console.log("yes up");
    btn7.style.backgroundColor = "white";
  } else if (event.keyCode === 56) {
    console.log("yes up");
    btn8.style.backgroundColor = "white";
  } else if (event.keyCode === 57) {
    console.log("yes up");
    btn9.style.backgroundColor = "white";
  } else if (event.keyCode === 48) {
    console.log("yes up");
    btn0.style.backgroundColor = "white";
  } else if (event.keyCode === 189) {
    console.log("yes up");
    btnMinus.style.backgroundColor = "white";
  } else if (event.keyCode === 187) {
    console.log("yes up");
    btnDorivn.style.backgroundColor = "white";
  } else if (event.keyCode === 81) {
    console.log("yes up");
    leterQ.style.backgroundColor = "white";
  } else if (event.keyCode === 87) {
    console.log("yes up");
    leterW.style.backgroundColor = "white";
  } else if (event.keyCode === 69) {
    console.log("yes up");
    leterE.style.backgroundColor = "white";
  } else if (event.keyCode === 82) {
    console.log("yes up");
    leterR.style.backgroundColor = "white";
  } else if (event.keyCode === 84) {
    console.log("yes up");
    leterT.style.backgroundColor = "white";
  } else if (event.keyCode === 89) {
    console.log("yes up");
    leterY.style.backgroundColor = "white";
  } else if (event.keyCode === 85) {
    console.log("yes up");
    leterU.style.backgroundColor = "white";
  } else if (event.keyCode === 73) {
    console.log("yes up");
    leterI.style.backgroundColor = "white";
  } else if (event.keyCode === 79) {
    console.log("yes up");
    leterO.style.backgroundColor = "white";
  } else if (event.keyCode === 80) {
    console.log("yes up");
    leterP.style.backgroundColor = "white";
  } else if (event.keyCode === 219) {
    console.log("yes up");
    kvardL.style.backgroundColor = "white";
  } else if (event.keyCode === 221) {
    console.log("yes up");
    kvadrR.style.backgroundColor = "white";
  } else if (event.keyCode === 220) {
    console.log("yes up");
    lineUp.style.backgroundColor = "white";
  } else if (event.keyCode === 65) {
    console.log("yes up");
    leterA.style.backgroundColor = "white";
  } else if (event.keyCode === 83) {
    console.log("yes up");
    leterS.style.backgroundColor = "white";
  } else if (event.keyCode === 68) {
    console.log("yes up");
    leterD.style.backgroundColor = "white";
  } else if (event.keyCode === 70) {
    console.log("yes up");
    leterF.style.backgroundColor = "white";
  } else if (event.keyCode === 71) {
    console.log("yes up");
    leterG.style.backgroundColor = "white";
  } else if (event.keyCode === 72) {
    console.log("yes up");
    leterH.style.backgroundColor = "white";
  } else if (event.keyCode === 74) {
    console.log("yes up");
    leterJ.style.backgroundColor = "white";
  } else if (event.keyCode === 75) {
    console.log("yes up");
    leterK.style.backgroundColor = "white";
  } else if (event.keyCode === 76) {
    console.log("yes up");
    leterL.style.backgroundColor = "white";
  } else if (event.keyCode === 186) {
    console.log("yes up");
    krapKom.style.backgroundColor = "white";
  } else if (event.keyCode === 222) {
    console.log("yes up");
    apostr.style.backgroundColor = "white";
  } else if (event.keyCode === 90) {
    console.log("yes up");
    leterZ.style.backgroundColor = "white";
  } else if (event.keyCode === 88) {
    console.log("yes up");
    leterX.style.backgroundColor = "white";
  } else if (event.keyCode === 67) {
    console.log("yes up");
    leterC.style.backgroundColor = "white";
  } else if (event.keyCode === 86) {
    console.log("yes up");
    leterV.style.backgroundColor = "white";
  } else if (event.keyCode === 66) {
    console.log("yes up");
    leterB.style.backgroundColor = "white";
  } else if (event.keyCode === 78) {
    console.log("yes up");
    leterN.style.backgroundColor = "white";
  } else if (event.keyCode === 77) {
    console.log("yes up");
    leterM.style.backgroundColor = "white";
  } else if (event.keyCode === 188) {
    console.log("yes up");
    koma.style.backgroundColor = "white";
  } else if (event.keyCode === 190) {
    console.log("yes up");
    krapka.style.backgroundColor = "white";
  } else if (event.keyCode === 191) {
    console.log("yes up");
    rightLine.style.backgroundColor = "white";
  } else if (event.keyCode === 32) {
    console.log("yes up");
    space.style.backgroundColor = "white";
  } else if (event.keyCode === 9) {
    console.log("yes up");
    tab.style.backgroundColor = "white";
  } else if (event.keyCode === 13) {
    console.log("yes up");
    enter.style.backgroundColor = "white";
  } else if (event.keyCode === 16) {
    console.log("yes up");
    shiftbtn.style.backgroundColor = "white";
    shiftBtn1.style.backgroundColor = "white";
  } else if (event.keyCode === 8) {
    console.log("yes up");
    backSpace.style.backgroundColor = "white";
  }
});

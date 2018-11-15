function checkradio(disp) {
    document.getElementById('sample').style.display = disp;
}

function setRTF() {
    fOBJ = document.myFORM;
    RadioNum = 3; //　ラジオボタンの数
    for (i = 0; i < RadioNum; i++) {
        if (fOBJ["moto"][i].checked) fOBJ["tf" + i].disabled = false;
        else fOBJ["tf" + i].disabled = true;
    }
}

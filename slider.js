let theNum = "0";

let cats = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6"];

function goToRight() {
    theNum++;
    if (theNum == cats.length) {
        theNum = "0";
    }
    change_image.src = './images/' + cats[theNum] + '.jpg';
}

function goToLeft() {
    theNum--;
    if (theNum == "-1") {
        theNum = cats.length - 1;
    }
    change_image.src = './images/' + cats[theNum] + '.jpg';
}

function iLearnJavaScript() {
    console.log('Я учу JavaScript!');
}

iLearnJavaScript();

const year = +prompt('Введите год');

if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
    alert('Год является високосным');
} else {
    alert('Год не високосный');
}
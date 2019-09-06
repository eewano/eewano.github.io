function fncBMI() {
    var bmi;
    var w;
    var h;

    w = document.getElementsByName('bmiWeight').item(0).value;
    h = document.getElementsByName('bmiHeight').item(0).value / 100;

    bmi = w / (h * h);

    document.getElementsByName('bmiAns').item(0).value = bmi;
}
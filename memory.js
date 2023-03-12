var allElements = [];
var elements = document.getElementsByClassName('card');
var _loop_1 = function (i) {
    allElements.push(elements[i]);
    var id = elements[i].id;
    elements[i].addEventListener('click', function () {
        showPicture(id);
    });
};
for (var i = 0; i < elements.length; i++) {
    _loop_1(i);
}
shuffleArr(allElements);
function shuffleArr(array) {
    var shuffleElems = array.sort(function () { return Math.random() - 0.5; });
    random(shuffleElems);
}
function random(arr) {
    var allCards = document.querySelector('.cards');
    allCards.innerHTML = '';
    arr.forEach(function (element) {
        allCards.append(element);
    });
}
function showPicture(id) {
    var _a;
    deleteEvent();
    (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.classList.add('clicked');
    var clickedCards = document.getElementsByClassName('clicked');
    if (clickedCards.length == 2) {
        var firstID = clickedCards[0].id;
        var secondID = clickedCards[1].id;
        if (firstID - secondID == 8 || secondID - firstID == 8) {
            clickedCards[0].classList.add('show');
            clickedCards[1].classList.add('show');
        }
        setTimeout(function () {
            clickedCards[0].classList.remove('clicked');
            clickedCards[0].classList.remove('clicked');
        }, 500);
    }
}
function reload() {
    location.reload();
}
function deleteEvent() {
    var elements = document.getElementsByClassName('card');
    var _loop_2 = function (i) {
        var id = elements[i].id;
        elements[i].removeEventListener('click', function () {
            showPicture(id);
        });
    };
    for (var i = 0; i < elements.length; i++) {
        _loop_2(i);
    }
}

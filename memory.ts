let allElements: any = []

let elements: any = document.getElementsByClassName('card');
for (let i = 0; i < elements.length; i++) {
    allElements.push(elements[i])
    let id: number = elements[i].id
    elements[i].addEventListener('click', function () {
        showPicture(id)
    })
}

shuffleArr(allElements)

function shuffleArr(array): void {
    let shuffleElems: [] = array.sort(() => Math.random() - 0.5);
    random(shuffleElems)
}

function random(arr): void {
    let allCards:any = document.querySelector('.cards');
    allCards.innerHTML = '';
    arr.forEach(element => {
        allCards.append(element)
    });
}

function showPicture(id): void {
    document.getElementById(id)?.classList.add('clicked');
    let clickedCards: any = document.getElementsByClassName('clicked');
    if (clickedCards.length == 2) {
        let firstID: number = clickedCards[0].id;
        let secondID: number = clickedCards[1].id;
        if (firstID - secondID == 8 || secondID - firstID == 8 ) {
            clickedCards[0].classList.add('show');
            clickedCards[1].classList.add('show');
        }
        setTimeout(function(){
            clickedCards[0].classList.remove('clicked');
            clickedCards[0].classList.remove('clicked');
         }, 500);
    }
}

function reload():void {
    location.reload();
}

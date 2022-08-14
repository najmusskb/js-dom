// option 02


function makeRed() {

    document.body.style.backgroundColor = 'yellow';
}






// option 03

//  make dark with id and function
const makeDark = document.getElementById('make-dark');
// console.log(makeDark);
makeDark.onclick = MakeDark;
function MakeDark() {
    document.body.style.backgroundColor = 'black';
}









//  option 04 
const MakePurple = document.getElementById('make-purple');
MakePurple.onclick = function makepurplecolor() {
    document.body.style.backgroundColor = 'purple';
}





//  option 05 Addeventlistener
const pinkButton = document.getElementById('make-pink');

pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';

}




// option - 06 (vvi)

const tometoButton = document.getElementById('make-tometo')
tometoButton.addEventListener('click', function maketometo() {
    document.body.style.backgroundColor = 'tomato';
})





//  option 7 Final  (eitai amra use korbo )

const GoldenRod = document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})




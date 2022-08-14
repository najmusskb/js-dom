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




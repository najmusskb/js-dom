const sections = document.querySelectorAll('section');
// console.log(allsection);
for (const section of sections) {
    // console.log(section.innerText);
    section.style.border = '1px solid black';
    section.style.padding = '10px';
    section.style.textAlign = 'center';
    section.style.margin = '5px';
    section.style.borderRadius = '15px';
    section.style.backgroundColor = 'gray';
}
const lastSections = document.getElementById('okkk');
lastSections.style.backgroundColor = 'blue';
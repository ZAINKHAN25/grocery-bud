submit = document.getElementById('submt');
txt = document.getElementById('txt');
entervalue = document.getElementsByClassName('entervalue');
messagefather = document.getElementById('messagefather');
clearitem = document.getElementById('clearitem');
added = document.getElementById('added');
empty = document.getElementById('empty');
trash = document.querySelectorAll('.trash1');
let notes = [];


submit.addEventListener('click', () => {
    const note = txt.value;
    if (note.trim() === '') {
        setTimeout(() => {
            entervalue[0].classList.remove('none');
        }, 10);
        setTimeout(() => {
            entervalue[0].classList.add('none');
        }, 1500);

    } else {
        notes.push(note);
        displayNotes();
        clearitem.classList.remove('none');
        
        setTimeout(() => {
            added.classList.remove('none');
        }, 10);
        setTimeout(() => {
            added.classList.add('none');
        }, 1500);
    }
});
  
function displayNotes() {
    messagefather.innerHTML = '';
    notes.forEach((note) => {
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="message">
         <div class="messagename">${note}</div>
         <div class="fonts">
             <i style="color: yellowgreen;" class="pen fa-solid fa-pen-to-square"></i>
             <i style="color: rgb(148, 0, 0)" id="trash" class="trash1 fa-solid fa-trash"></i>
         </div>
        </div>
      `;
    messagefather.appendChild(div);
    });
};

clearitem.addEventListener('click',()=>{
    messagefather.innerHTML = ``;
    clearitem.classList.add('none');
    setTimeout(() => {
        empty.classList.remove('none');
    }, 10);
    setTimeout(() => {
        empty.classList.add('none');
    }, 1500);
    notes = [];
});

trash.addEventListener('click', (e)=>{
    const element = e.currentTarget.parentElement.parentElement;
    element.classList.add('none')
})
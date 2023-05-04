const pen = document.getElementById('pen');
const submit = document.getElementById('submt');
const txt = document.getElementById('txt');
const entervalue = document.getElementsByClassName('entervalue');
const messagefather = document.getElementById('messagefather');
const clearitem = document.getElementById('clearitem');
const added = document.getElementById('added');
const empty = document.getElementById('empty');
edit = document.querySelector('#edit')
edit2 = document.querySelector('#edit2')

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
        // check if submit button value is "Edit Note"
        if (submit.value === 'Edit Note') {
            // replace the original note with the updated one
            const index = notes.indexOf(pen.dataset.note);
            notes[index] = note;
            // reset submit button value to "Add Note"
            submit.value = 'Add Note';
        } else {
            // add new note to array
            notes.push(note);
        }
        displayNotes();
        clearitem.classList.remove('none');
        
        setTimeout(() => {
            added.classList.remove('none');
        }, 10);
        setTimeout(() => {
            added.classList.add('none');
        }, 1500);
        txt.value = '';
    }
});
  
function displayNotes() {
    messagefather.innerHTML = '';

    notes.forEach((note, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="message">
        <div class="messagename">${note}</div>
                <div class="fonts">
                    <i style="color: yellowgreen;" id="pen" class="pen fa-solid fa-pen-to-square" data-note="${note}"></i>
                    <i style="color: rgb(148, 0, 0)" class="trash1 fa-solid fa-trash"></i>
                </div>
                </div>
        `;
        messagefather.appendChild(div);

        
        const trash = div.querySelector('.trash1');
        trash.addEventListener('click', () => {
            notes.splice(index, 1);
            displayremove();
            displayNotes();
            if (notes.length === 0) {
                clearitem.classList.add('none');
            }
        }
        );
        const pen = div.querySelector('.pen');

        pen.addEventListener('click', () => {
            submit.classList.add('none')
            edit.classList.remove('none')
            txt.value = note;
            changeedit(index);
        });
        
    });
}

function displayremove(){
    const remove = document.querySelector('.remove');
    setTimeout(() => {
        remove.classList.remove('none');
    }, 10);
    setTimeout(() => {
        remove.classList.add('none');
    }, 1500);
}

clearitem.addEventListener('click', () => {
    messagefather.innerHTML = '';
    clearitem.classList.add('none');
    setTimeout(() => {
        empty.classList.remove('none');
    }, 10);
    setTimeout(() => {
        empty.classList.add('none');
    }, 1000);
    notes = [];
});``;

function changeedit(index){
    edit.addEventListener('click',()=>{

        const txtvalue = document.getElementById('txt');
        notes[index] = txtvalue.value;

        displayNotes();
        edit.classList.add('none');
        submit.classList.remove('none');
        txtvalue.value = "";

    })
}

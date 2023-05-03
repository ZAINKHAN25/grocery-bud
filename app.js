const pen = document.getElementById('pen');
const submit = document.getElementById('submt');
const txt = document.getElementById('txt');
const entervalue = document.getElementsByClassName('entervalue');
const messagefather = document.getElementById('messagefather');
const clearitem = document.getElementById('clearitem');
const added = document.getElementById('added');
const empty = document.getElementById('empty');
const remove = document.querySelectorAll('.remove');
const removefather = [...remove] 

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
            // set submit button value to "Edit Note"
            submit.value = 'Edit Note';
            // set the text field to the current note text
            txt.value = note;
            // set the data attribute of the pen icon to the current note text
            pen.dataset.note = note;
        });
        
    });
}

function displayremove(){
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
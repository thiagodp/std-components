import { tr, td, button, fragment } from 'https://unpkg.com/std-components';

const toDoList = [
  { id: 1, description: "Buy groceries", done: false },
  { id: 2, description: "Finish project report", done: true },
  { id: 3, description: "Call mom", done: false },
  { id: 4, description: "Exercise for 30 minutes", done: false },
  { id: 5, description: "Read chapter 5", done: true },
  { id: 6, description: "Clean the kitchen", done: false },
  { id: 7, description: "Schedule dentist appointment", done: true },
  { id: 8, description: "Water the plants", done: false },
  { id: 9, description: "Review budget", done: false },
  { id: 10, description: "Walk the dog", done: true }
];

function createRow( { id, description, done } ) {
    const removeButtonTip = 'Remove To-Do ' + id;
    return tr( { 'data-id': String( id ) },
        td( {}, id ),
        td( {}, description ),
        td( { events: { click: toggleDone }, title: 'Click to toggle' }, done ? 'Yes' : 'No' ),
        td( {},
            button( {
                'arial-label': removeButtonTip,
                title: removeButtonTip,
                events: { click: removeToDo },
            }, '🗑️' )
        )
    );
}

function toggleDone( event ) {
    const td = event.target;
    const toDo = toDoList[ td.parentElement.sectionRowIndex ];
    toDo.done = ! toDo.done;
    td.textContent = toDo.done ? 'Yes' : 'No';
}

function removeToDo( event ) {
    const tr = event.target.parentElement.parentElement;
    const id = tr.dataset.id;
    if ( ! confirm( `Remove To-Do #${id} ?` ) ) {
        return;
    }
    const index = toDoList.findIndex( t => t.id == id ); // or tr.sectionRowIndex
    toDoList.splice( index, 1 );
    tr.remove();
}

const tableRows = toDoList.map( createRow );
document.querySelector( 'tbody' ).append( fragment( ...tableRows ) ); // Avoids DOM reflow

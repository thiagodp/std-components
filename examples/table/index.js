import { tr, td, a, button, fragment } from 'https://unpkg.com/std-components/dist/index.js';
import { getUsers, removeUser } from './users.js';

/**
 * Creates a row from a user object.
 *
 * @param {{ id: number, name: string, email: string }} user
 * @returns {HTMLTableRowElement}
 */
function userRow( user ) {
    return tr( {},
        td( {}, user.id ),
        td( {}, user.name ),
        td( {}, a( { href: `mailto:${user.email}` }, user.email ) ),
        td( {},
            button( {
                class: 'btn btn-danger',
                events: { click: askThenRemove },
                'data-id': String( user.id )
            }, 'Remove' )
        )
    );
}

async function askThenRemove( event ) {
    const button = event.target;
    const id = button.dataset.id;
    if ( id === undefined || ! confirm( `Remove the user with id ${id}?` ) ) {
        return;
    }
    const removed = await removeUser( id );
    if ( removed ) {
        button.parentElement.parentElement.remove(); // Removes the table row
    } else {
        alert( 'Id not found.' );
    }
}

const users = await getUsers();
const rows = users.map( userRow );
document.querySelector( 'tbody' ).append( fragment( ...rows ) ); // Fragment avoids DOM reflow

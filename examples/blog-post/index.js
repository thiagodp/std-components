import { article, header, div, h2, p } from 'https://unpkg.com/std-components/dist/index.js';

const firstPost = article( { class: 'post-card' },
    header( { class: 'post-header'}, h2( { class: 'post-title' }, 'First Post' ) ),
    div( { class: 'post-content' },
        p( {}, 'Hello, world!' )
    )
);

const secondPost = firstPost.cloneNode( true );
secondPost.querySelector( '.post-title' ).textContent = 'Second Post';
secondPost.querySelector( 'p' ).textContent = 'Howdy! Today we gonna...';

document.body.append( secondPost, firstPost );
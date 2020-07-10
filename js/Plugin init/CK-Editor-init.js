// CK Editor Initialization
ClassicEditor
.create( document.querySelector( '#editor' ), {
    // toolbar: [ 'heading', '|', 'bold', 'italic', 'link' ]
} )
.then( editor => {
    window.editor = editor;
} )
.catch( err => {
    console.error( err.stack );
} );
// 2nd Initialization
ClassicEditor
.create( document.querySelector( '#editor2' ), {
    // toolbar: [ 'heading', '|', 'bold', 'italic', 'link' ]
} )
.then( editor => {
    window.editor = editor;
} )
.catch( err => {
    console.error( err.stack );
} );
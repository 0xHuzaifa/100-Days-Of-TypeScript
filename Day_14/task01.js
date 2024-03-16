/*
* Question 40: Album: Create objects for music albums.

* Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects,
* and introducing optional function parameters.
*/
function makeAlbum(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(makeAlbum("Artist One", "The First Album"));
console.log(makeAlbum("Artist Two", "The Second Album"));
console.log(makeAlbum("Artist Three", "The Third Album", 12));
export {};

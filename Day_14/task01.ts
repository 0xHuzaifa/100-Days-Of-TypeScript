/*
* Question 40: Album: Create objects for music albums.

* Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects, 
* and introducing optional function parameters.
*/

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    let album: Album = {artist, title};
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(makeAlbum("Artist One", "The First Album"));
console.log(makeAlbum("Artist Two", "The Second Album"));
console.log(makeAlbum("Artist Three", "The Third Album", 12));

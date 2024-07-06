
/*********
 * TUPLE *
*********/

let article: readonly [number, string, boolean] = [66, 'Huzaifa', true];

article = [11, 'Faraz', true];

// Trying to push a new element into a tuple (will result in an error)
// article.push(100);

console.log(article);


const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);


var library=[
    {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];
//a- Write the code to display after each iteration the book title, author-name and reading status
for(let i=0; i<3; i++){
    console.log(`Book title: ${library[i].author}, the author-name is: ${library[i].title} and the reading status is ${library[i].readingStatus}`);
}
//b- Write the code snippet that adds a new book to the collection or array list.
let snippet=[
    {
        author:"New Author",
        title:"New book",
        readingStatus: false
    }
];
library.push(snippet);
//c- Write the last part of the program that edit each book by adding the year it was written. the year is added randomly.
let number=Math.floor(Math.random( )*2010);
if(number>=2000){
    for(let j=0; j<library.length; j++){
        library[j].push({year: number});
    }
}

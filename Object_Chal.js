// Step 1

const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    }
,

{
    title: 'Steve Jobs',
    author: 'Walter Pimpong',
    status: {
        own: true,
        reading: false,
        read: false,
    }
}
,

{
    title: 'Steve is God',
    author: 'Steve Okey',
    status: {
        own: true,
        reading: false,
        read: false,
    }
}
];


// Step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3

let firstBook2;

library[0].title = 'First Book';

const { title: firstBook } = library[0];

console.log(library);

//Step 4

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
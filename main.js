const booksStub = require('./stubs/booksStub.js');
const customersStub = require('./stubs/customersStub.js');
const grpc = require("grpc");
const horusTracer = require('./horus.js');


const book = {
  title: 'ITttttt', 
  author: 'Stephen King',
  numberOfPages: 666,
  publisher: 'Random House',
  id: 200
};

let ht = new horusTracer('main');

function main() {
    ht.start('books');
    booksStub.CreateBook(book, (error, response) => {
        ht.end();
    }).on('metadata', metadata => {
        console.log('receiving meta data ', metadata.get('response'))
        ht.grabTrace(metadata.get('response')[0]);
        ht.displayRequests();
    });
}

main();
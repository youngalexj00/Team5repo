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
let meta = new grpc.Metadata();
meta.add('response', 'null');

function main() {
    ht.start('books');
    booksStub.CreateBook(book, meta, (error, response) => {
        ht.end();
    }).on('metadata', metadata => {
        ht.grabTrace(metadata.get('response')[0]);
        ht.displayRequests
    });
}

main();
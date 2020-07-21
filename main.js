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

//Make a request from main initiator to books using booksStub.
// const bStub = booksStub;
let meta = new grpc.Metadata();
meta.add('la', 'lala');
// meta.add('metadataArr', JSON.stringify({
//         {"books": null, "responseTime": null}
//     })
// );

function main() {
    ht.start('books');
    booksStub.CreateBook(book, meta, (error, response) => {
        ht.end();
        console.log(response);
    }).on('metadata', metadata => {
        console.log('now logging metadata ', metadata._internal_repr.la);
    });
}

main();
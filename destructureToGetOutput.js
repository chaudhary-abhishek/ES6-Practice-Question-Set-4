const book = {
    title: 'JavaScript: The Definitive Guide',
    authors: [
      { name: 'David Flanagan', age: 49 },
      { name: 'Yukihiro Matsumoto', age: 57 },
    ],
    publisher: { name: "O'Reilly Media", location: 'CA' },
  }
  
  // Your ES6 code here

  const {title, authors, publisher} = book;
  const [authorDetail1, authorDetail2] = authors
  const {name: author1} = authorDetail1;
  const {name: author2} = authorDetail2;
  const {name: publisherName} = publisher;
  
  
  console.log(title) // JavaScript: The Definitive Guide
  console.log(author1) // David Flanagan
  console.log(author2) // Yukihiro Matsumoto
  console.log(publisherName) // O'Reilly Media
  
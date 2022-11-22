const generateRandomCover = () => {
  const bookCovers = ['https://i.imgur.com/9wHVhck.jpeg', 'https://i.imgur.com/ZqoEU9o.jpeg', 'https://i.imgur.com/n2JY9jj.jpeg', 'https://i.imgur.com/6Q9rDjW.jpeg', 'https://i.imgur.com/TQA4Rnx.jpeg', 'https://i.imgur.com/2Vizf4g.jpeg', 'https://i.imgur.com/OR2AlPp.jpeg', 'https://i.imgur.com/ziOFAGJ.png', 'https://i.imgur.com/MExnuAy.png', 'https://i.imgur.com/h8EpGvU.jpeg']

  const bookIdCovers = bookCovers[Math.floor(Math.random() * bookCovers.length)];
  return bookIdCovers;
};

module.export = generateRandomCover;

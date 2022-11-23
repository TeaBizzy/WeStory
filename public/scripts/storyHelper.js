const generateRandomCover = function() {
  const bookCovers = ['https://i.imgur.com/9wHVhck.jpeg', 'https://i.imgur.com/ZqoEU9o.jpeg', 'https://i.imgur.com/n2JY9jj.jpeg', 'https://i.imgur.com/6Q9rDjW.jpeg', 'https://i.imgur.com/TQA4Rnx.jpeg', 'https://i.imgur.com/2Vizf4g.jpeg', 'https://i.imgur.com/OR2AlPp.jpeg', 'https://i.imgur.com/ziOFAGJ.png', 'https://i.imgur.com/MExnuAy.png', 'https://i.imgur.com/h8EpGvU.jpeg']

  const bookIdCovers = bookCovers[Math.floor(Math.random() * bookCovers.length)];
  return bookIdCovers;
};

const generateRandomAvatar = function() {
  const avatars = ['https://i.imgur.com/7dUMoA5.png', 'https://i.imgur.com/Cnh3tde.png', 'https://i.imgur.com/nl4kgT4.png', 'https://i.imgur.com/YNVkpBM.png', 'https://i.imgur.com/fScS0tG.png', 'https://i.imgur.com/Igx6E8H.png', 'https://i.imgur.com/vMY7lhj.png', 'https://i.imgur.com/JJCFZEc.png', 'https://i.imgur.com/bVrBJ3i.png', 'https://i.imgur.com/As4IR8l.png', 'https://i.imgur.com/zGVLIiZ.png', 'https://i.imgur.com/GvDavl9.png', 'https://i.imgur.com/itTZcCd.png', 'https://i.imgur.com/1BvXMrv.png', 'https://i.imgur.com/wkToAjt.png', 'https://i.imgur.com/tmy18JB.png', 'https://i.imgur.com/oHajDVW.png', 'https://i.imgur.com/6U9WNtQ.png', 'https://i.imgur.com/avMgDEG.png', 'https://i.imgur.com/xBu564e.png'];

  const userIdAvatars = avatars[Math.floor(Math.random() * avatars.length)];
  return userIdAvatars;
};


module.exports = { generateRandomCover, generateRandomAvatar };



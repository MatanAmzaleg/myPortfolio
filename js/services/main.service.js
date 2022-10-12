
const STORAGE_KEY = 'projectsDB'

var gProjects = [
  {
    id: makeId(),
    projName: 'Mine Sweeper💥',
    projDesc: 'A Project based on HTML, CSS & JS.',
    projImgSrc: 'img/gifs/Mine Sweeper💥.gif',
    moreDetails: 'Mine Sweeper is the game that we have been requested to make during our first sprint🏃‍♂️. We have used HTML , CSS & JS in order to create it. This is also one of my favorite games as a kid. the Purpose of the game is to remove all the mines at the board witout losing all your lives💔💔 ',
    date: 'September 2022',
    link: 'https://underdoggy7.github.io/MineSweeper/',
    client: 'Explore',
    category: 'Games'
  },
  {
    id: makeId(),
    projName: 'Pacman👾',
    projDesc: 'A Game based on HTML, CSS & JS.',
    projImgSrc: 'img/gifs/Pacman👾.gif',
    moreDetails: 'Who doesnt likes to play pacman, the nostalgic game made with HTML, CSS & JS. One of the firsts game we made at the course. Fun making and playing😀! The purpose of the game is to eat all the food from the board. Dont forget to be careful from the ghosts👻',
    date: 'sep 2022',
    link: 'https://underdoggy7.github.io/Pacman/',
    client: 'Explore',
    category: 'Games'
  },
  {
    id: makeId(),
    projName: 'Touch Numbers🔢',
    projDesc: 'A Project based on HTML, CSS & JS.',
    projImgSrc: 'img/gifs/Touch Numbers🔢.gif',
    moreDetails: 'Extremelly challenging game! think you can beat the watch???⏳ The purpose of this game is to touch all the numbers in ascending order at the fastest time. Think its easy? well maby you havent noticed Extreme level below👾',
    date: 'September 2022',
    link: 'https://underdoggy7.github.io/Touch-Nums/',
    client: 'Explore',
    category: 'Games'
  },
  {
    id: makeId(),
    projName: 'Book Store📚',
    projDesc: 'A Project based on HTML, CSS & JS. Using local-storage',
    projImgSrc: 'img/gifs/Book Store📚.gif',
    moreDetails: 'Book Store is an online store which simulates a library📚. There you can check for book ratings, Add or Delete books and also search books by different filtering methods',
    date: 'October 2022',
    link: 'https://underdoggy7.github.io/Book-Store/',
    client: 'Explore',
    category: 'Database'
  },
  {
    id: makeId(),
    projName: 'Chess♟',
    projDesc: 'A Project based on HTML, CSS & JS.',
    projImgSrc: 'img/gifs/Chess♟.gif',
    moreDetails: 'Uncompleted Chess game which implements the movement of all the chess vessles. Go and Check it out♟♟',
    date: 'September 2022',
    link: 'https://underdoggy7.github.io/Chess-game/',
    client: 'Explore',
    category: 'Games'
  }
]

function getProjects() {
  return gProjects
}

function _saveTreeToStorage() {
  saveToStorage(STORAGE_KEY, gQuestsTree)
}

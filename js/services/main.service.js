
const STORAGE_KEY = 'projectsDB'


var gProjects = [
  {
    id: makeId(),
    projName: 'Mine Sweeper💥',
    projDesc: 'A Project based on HTML, CSS & JS.',
    projImgSrc: 'img/minesweeper.gif'
  },
  {
    id: makeId(),
    projName: 'Pacman👾',
    projDesc: 'A Game based on HTML, CSS & JS.',
    projImgSrc: 'img/pacman.gif'
  },
  {
    id: makeId(),
    projName: 'Touch Numbers🔢',
    projDesc: 'A Project based on HTML, CSS & JS.',
    projImgSrc: 'img/touchnums.gif'
  },
  {
    id: makeId(),
    projName: 'Book Store📚',
    projDesc: 'A Project based on HTML, CSS & JS.',
    projImgSrc: 'img/bookstore.gif'
  }
]

function getProjects() {
  return gProjects
}

function _saveTreeToStorage() {
  saveToStorage(STORAGE_KEY, gQuestsTree)
}


// function createQuestsTree() {

//   gQuestsTree = loadFromStorage(STORAGE_KEY)

//   if (!gQuestsTree) {

//     gQuestsTree = createQuest('Male?')
//     gQuestsTree.yes = createQuest('Gandhi')
//     gQuestsTree.no = createQuest('Rita')
//     _saveTreeToStorage()
//   }
//   gPrevQuest = null
//   gCurrQuest = gQuestsTree
//   console.log(gQuestsTree, 'gCurrQuest')
// }

// function createQuest(txt) {
//   return {
//     txt: txt,
//     yes: null,
//     no: null,
//   }
// }

// function isChildless(node) {
//   return node.yes === null && node.no === null
// }

// function moveToNextQuest(res) {
//   // TODO: update the gPrevQuest, gCurrQuest global vars
//   gPrevQuest = gCurrQuest
//   console.log(gCurrQuest);
//   gCurrQuest = gCurrQuest[res]
//   console.log(gCurrQuest[res]);
//   _saveTreeToStorage()
// }

// function addGuess(newQuestTxt, newGuessTxt, lastRes) {
//   // TODO: Create and Connect the 2 Quests to the quetsions tree
//   var newQuest = createQuest(newGuessTxt)
//   newQuest.yes = createQuest(newQuestTxt)
//   newQuest.no = gCurrQuest
//   gPrevQuest[lastRes] = newQuest
//   _saveTreeToStorage()
// }

// function getCurrQuest() {
//   return gCurrQuest
// }


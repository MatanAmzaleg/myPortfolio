'use strict'


$(document).ready(renderCarousele)


function renderCarousele() {
    var projects = getProjects()

    var strHTML = projects.map((project, idx) =>
        `
        <div class="carousel-item ${idx === 0 ? 'active' : ''}">
        <button onclick="onOpenModal(${project.id})">
            <img class="d-block w-100" src="img/gifs/${project.projName}.gif" alt="First slide">
          </button>
        <div class="carousel-caption d-none d-md-block">
          <h5>${project.projName}</h5>
          <p>${project.projDesc}</p>
        </div>
      </div>
        `
    ).join('')

    $('.carousel-inner').html(strHTML)

}

function getProjectById(projectId) {
    var project = getProjects().find(project => project.id === projectId)
    return project
}

function onOpenModal(projId){
    var currProj = getProjectById(projId)
    renderModals(currProj)
}


function createCarouselItem() {
    return {
        projName,
        projDesc,
        projGif
    }
}
'use strict'


$(document).ready(renderCarousele)

$('.submit-btn').on('click', function () {
    var params = getContactDetails()
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${params.email}&su=${params.subject}&body=${params.message}&bcc=someone.else@example.com`, '_blank');
})

function renderCarousele() {
    var projects = getProjects()

    var strHTML = projects.map((project, idx) =>
        `
        <div class="carousel-item ${idx === 0 ? 'active' : ''}">
        <a class="portfolio-link" data-projId="${project.id}" data-toggle="modal" href="#portfolioModal">
        <img class="d-block w-100" src="img/gifs/${project.projName}.gif" alt="First slide">
        </a>
          </button>
        <div class="carousel-caption d-none d-md-block">
          <h5>${project.projName}</h5>
          <p>${project.projDesc}</p>
        </div>
      </div>
        `
    ).join('')

    $('.carousel-inner').html(strHTML)

    $(".carousel-item a").each(function (index, el) {
        $(this).on("click", function () {
            renderModal(el)
        });
    });
}

function getProjectById(projectId) {
    var project = getProjects().find(project => project.id === projectId)
    return project
}


function renderModal(currA) {
    var currProjId = currA.dataset.projid
    var currProj = getProjectById(currProjId)
    var $elModal = $('#portfolioModal')
    $elModal.find('.proj-name').text(currProj.projName)
    $elModal.find('.item-intro').text(currProj.projDesc)
    $elModal.find('.img-fluid').attr("src", `${currProj.projImgSrc}`)
    $elModal.find('.game-link').attr("href", `${currProj.link}`)
    $elModal.find('.more-details').text(currProj.moreDetails)
    $elModal.find('.date').text('Date: ' + currProj.date)
    $elModal.find('.client').text('Client: ' + currProj.client)
    $elModal.find('.category').text('Category: ' + currProj.category)
}


function getContactDetails() {
 return WidthdrawDetails()
}
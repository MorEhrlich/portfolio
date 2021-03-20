'use strict'

$(document).ready(function () {
    renderProjects();
});


function renderProjects() {
    var projects = getProjects();
    var strsHTML = projects.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                <a class="portfolio-link" data-toggle="modal" onclick="onOpenModal('${project.id}')"  href="#portfolioModal">  
                <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
                </div>
                </div>
                <div class="img-cont">
                <img class="img-fluid" src="${project.url}" >
                </div>
                </a>
                <div class="portfolio-caption">
                <h4>${project.title}</h4>
                <p class="text-muted">${project.desc}</p>
                </div>
                </div>`
    })
    $('.project-list').html(strsHTML.join(' '))
}




function renderModal(project) {
    var strsHTML =
        `<h2>${project.title}</h2>
        <p class="item-intro text-muted">${project.desc}</p>
        <img class="img-fluid d-block mx-auto" src="${project.url}">
        <ul class="list-inline">
        <span>Link to the project: <a href="${project.link}" class="project-link">Press Here</a></span>
        <li><a> </a></li>
        </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>Close Project</button> ` 
    $('.modal-body').html(strsHTML);
}


function onOpenModal(projectId) {
    var project = getProjectById(projectId)
    renderModal(project)
}

function onSubmitEmail() {
    var subject = $('input[name=subject]').val()
    var message = $('textarea[name=message]').val()
    var emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=mor.ehrlich@gmail.com&su=${subject}&body=${message}`
    window.open(emailLink, '_blank');
}

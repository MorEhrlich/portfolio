
'use strict'

var gProjects;

_createProjects()

function _createProjects() {

    gProjects = [
        {
            id: 'Mine-Sweeper',
            title: 'Mine-Sweeper',
            desc: 'Be careful of those mines!',
            url: 'img/portfolio/Mine-Sweeper.png',
            link: 'https://morehrlich.github.io/Mine_Sweeper/',
            publishedAt: new Date(2020, 10, 1),
            labels: []
        },
        {
            id: 'In-Picture Game',
            title: 'In-Picture Game',
            desc: 'What is the right answer?',
            url: 'img/portfolio/In-Picture-Game.png',
            link: 'https://morehrlich.github.io/In-picture/',
            publishedAt: new Date(2020, 10, 1),
            labels: []
        },
        {
            id: 'Touch Nums',
            title: 'Touch Nums',
            desc: 'Better touch those numbers!',
            url: 'img/portfolio/Touch-Nums.png',
            link: 'https://morehrlich.github.io/Touch-nums/',
            publishedAt: new Date(2020, 10, 1),
            labels: []
        },
        {
            id: 'Books Shop',
            title: 'Books Shop',
            desc: 'Make your own book-shop list',
            url: 'img/portfolio/Books-Shop.png',
            link: 'https://morehrlich.github.io/book-shop/',
            publishedAt: new Date(2020, 10, 1),
            labels: []
        },
        {
            id: 'Meme Generator',
            title: 'Meme Generator',
            desc: 'Make your own funny memes!',
            url: 'img/portfolio/meme.jpg',
            link: 'https://morehrlich.github.io/Meme-Generator/',
            publishedAt: new Date(2020, 10, 1),
            labels: []
        },
        {
            id: 'Appsus',
            title: 'Appsus Mail',
            desc: 'Mail box',
            url: 'img/portfolio/appsus.jpg',
            link: 'https://morehrlich.github.io/appsus/#/mail',
            publishedAt: new Date(2020, 10, 1),
            labels: []
        }

    ];
}

function getProjects() {
    return gProjects;
}

function getProjectById(projectId) {
    return gProjects.find(function (project) {
        return projectId === project.id
    })
}
const devsRecord = [
    [
        { mail: 'jonatan@mail.it', surname: 'user1' },
        { skill: 'AI and Machine Learning APIs', years: 3, desc: 'jonatan ai'},
        { skill: 'Analytics and Tracking (Google Analytics, Mixpanel)', years: 10, desc: 'jonatan analytics'},
        { skill: 'Angular', years: 5, desc: 'jonatan angular'},

    ],
    [
        { mail: 'pippo@mail.it', surname: 'user2' },
        { skill: 'AI and Machine Learning APIs', years: 9, desc: 'pippo ai'},
        { skill: 'Analytics and Tracking (Google Analytics, Mixpanel)', years: 9, desc: 'pippo analytics'},
        { skill: 'Sass', years: 8, desc: ''},
        { skill: 'Webpack', years: 5, desc: ''},
        { skill: 'Babel', years: 0, desc: ''},
        { skill: 'TypeScript', years: 6, desc: ''},
        { skill: 'WebAssembly', years: 6, desc: ''},

    ],
    [
        { mail: 'pluto@mail.it', surname: 'user3' },
        { skill: 'AI and Machine Learning APIs', years: 1, desc: 'pluto ai'},
        { skill: 'Vue.js', years: 0, desc: ''},
        { skill: 'WebAssembly', years: 0, desc: ''},
        { skill: 'Webpack', years: 0, desc: ''},
        { skill: 'Babel', years: 0, desc: ''},
        { skill: 'TypeScript', years: 0, desc: ''},
        { skill: 'Backbone.js', years: 0, desc: ''},

    ],
    [
        { mail: 'user4@mail.it', surname: 'user4' },
        { skill: 'web', years: 1, desc: 'user4 ai'},
        { skill: 'Vue.js', years: 0, desc: ''},
        { skill: 'WebAssembly', years: 0, desc: ''},
        { skill: 'Webpack', years: 0, desc: ''},
        { skill: 'Babel', years: 0, desc: ''},
        { skill: 'TypeScript', years: 0, desc: ''},
        { skill: 'Backbone.js', years: 0, desc: ''},

    ]
];


//show array total
function showArrayDevs(){
        for(i = 0; i < this.length; i++){ 
            console.log( this );
        }
}

//show single user
function showArrayDev(){      
            console.log( this );
}

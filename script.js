'use strict';

// switch the main page
function swi(arg1, arg2, arg3){

    setTimeout(
        () => {
        document.getElementById('devsMain').style.display = arg1;
        document.getElementById('hrMain').style.display = arg2; 
        document.getElementById('generalMain').style.display = arg3;
        }
    ,100);   
}

// switch menu button
function swiBut(arg1, arg2, arg3){

    setTimeout(
        () => {
        document.getElementById('join').style.display = arg1;
        document.getElementById('devs').style.display = arg2; 
        document.getElementById('hr').style.display = arg3;
        }
    ,100);  
}

//empty array for developer
const devArr = [];



//skills list search results 
function search(){

    let search = document.getElementById('search');
    
    search.addEventListener('input', function(){

        let spValue = search.value;
        let newDiv = document.createElement('div');
        newDiv.className = 'selectSkill';

        if(spValue !== ''){
            
            deleteSelectSkill();
            
            let spValueSplittes = search.value.split('');

            if( spValueSplittes.length > 0 ){
                    spValueSplittes = spValueSplittes.join(''); 
            }
     
            spValueSplittes = spValueSplittes.toLowerCase();

            let res = skills.filter(skills => skills.toLowerCase().includes(spValueSplittes) );


            for(let i = 0; i < res.length; i++){
                res.sort( (a, b) => a.localeCompare(b) );
               

                let a = document.createElement('a');
                a.className = 'selectSkill w-12 flex mt-2 mb-2 text-blue-600';
                let selDiv = document.getElementById('resSkilsFound');
                
                a.innerHTML =  res[i]  ;
                a.addEventListener('click', function (event){ event.preventDefault(); } );
                a.href = "#" ;
                a.onclick = ( ) => { loadDevSkills(res[i]); } ;
                selDiv.appendChild(a);

            }
        }
    });
}


//remove selectSkill div's
function deleteSelectSkill(){
    let delBase = document.querySelectorAll('.selectSkill');

    delBase.forEach( function(div){
        div.remove();
    });

}

//load all the skills available
function loadAllSkills(){
    for(let i = 0; i < skills.length; i++){
        skills.sort( (a, b) => a.localeCompare(b) );

        let a = document.createElement('a');
        a.className = 'selectSkill w-12 flex mt-2 mb-2 text-blue-600';
        let selDiv = document.getElementById('resSkilsFound');
        
        a.innerHTML =  skills[i] ;
        a.addEventListener('click', function (event){ event.preventDefault(); } );
        a.href = "#" ;
        a.onclick = ( ) => { loadDevSkills(skills[i]); } ;
        selDiv.appendChild(a);

    } 
}

//set base skills list
function loadMainSkills(){
        deleteSelectSkill();
        loadAllSkills();
}

//load developer skills on array
function loadDevSkills(x){ 
    const existingData = devArr.find(devArr => devArr.mail !== undefined && devArr.username !== undefined);

    if(existingData && !devArr.includes(x)){
        devArr.push(x);
        addedSkills(x);
    }else{
        alertMessagesBar('You need to add your email and choose a username <br> OR <br> You have already added this skill.');
    }  
}

//add/modify mail and username
function addMailUsername() {

    butAddMail.addEventListener('click', function () {

        let mailValue = document.getElementById('mail').value;
        let usernameValue = document.getElementById('username').value;
        

        if(mailValue === '' || usernameValue === ''){
            alertMessagesBar('empty fields! mail or username');
        }else{
            //const existingData = devArr.find(dev => dev.mail === mailValue && dev.username === usernameValue);
            const existingData = devArr.find(dev => dev.mail && dev.username);

            if (existingData) {
                alertMessagesBar('Mail and username already used');
            } else {
                
                devArr.push({ mail: mailValue, username: usernameValue });
                devsRecord.push([{ mail: devArr[0].mail, username: devArr[0].username }]);

                let devsItemId = devsRecord.length - 1;

                sessionStorage.setItem('mail', devArr[0].mail);
                sessionStorage.setItem('id', devsItemId);
                mailStorage();

                

                //change mail and username from set data to update data
                let cDevsSetData = document.getElementById('cDevsSetData');
                cDevsSetData.className ='';
                cDevsSetData.style.display = 'none';

                let cDevsUpdateData = document.getElementById('cDevsUpdateData');
                cDevsUpdateData.className = 'flex flex-column align-items-center justify-content-center text-center w-12 md:w-12 lg:w-3 xl:w-1 h-18rem m-2 p-2 bg-blue-600 border-round text-white';
                cDevsUpdateData.style.display = 'block';

                alertMessagesBar('Mail and username added');

                let updateMail = document.getElementById('mailUsername').innerHTML = 'Welcome ' + usernameValue ;

                
            }
        }
    });
}



//add personal skill to "YOUR SKILLS LIST"
function addedSkills(arg1){

        let index = devArr.indexOf(arg1);

        for(let i = 0; i < devsRecord.length; i++){

            if(devsRecord[i][0].mail === devArr[0].mail){
                devsRecord[i].push({'skill': arg1, 'years': 0, 'desc': ''});
                
                index = i ;

                alertMessagesBar('Skill added! Fill all details and save it');

            }else{
                //console.log('not found ' + i);
            }
        }

        

        console.log(devsRecord);


        let button = document.createElement('button');
        button.href = "#";
        button.addEventListener('click', function (event){ 
            event.preventDefault();
            skillPanel(index, arg1); 
        } );

        button.innerHTML = arg1 ;
        button.id = arg1 ;
        button.className = 'button w-12 bg-blue-600 shadow-2 zoominleft animation-duration-500 animation-delay-0';
        let addList = document.getElementById('addedSkills');
        addList.appendChild(button);

        skillPanel(index, arg1); 

        return devsRecord;
    
}



//This will create the panel for each single skill - you can insert all details
function skillPanel(id, arg1){


    // console.log(id);
    // console.log(devsRecord[id]);

    let rec = devsRecord[id].find(record => record.skill === arg1);

    let skill = rec.skill;
    let years = rec.years;
    let desc = rec.desc;


    let panelDel = document.querySelectorAll('.pan');
    panelDel.forEach( function(div){
        div.remove();
    });


    let panel = document.createElement('div');
    panel.id = id + arg1 ;
    panel.innerHTML = 
        `
        <div class="flex flex-column w-12">
        <span>${skill}</span>

        <hr>

        
            <label for="years">How many years did you worked with ${skill}?</label>
            <select name="years">
                <option value="${years}" selected>${years}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
            </select>
            <label class="mt-3" for="description">Say something about your experience with ${skill}</label>
            <textarea name="description" placeholder="description">${desc}</textarea>
            
            <button id="save" class="button w-12 shadow-2 zoomin animation-duration-100 animation-delay-0" type="submit" value="Save Skill" style="background-color: red;">SAVE SKILL</button>
            <button id="save" class="button w-12 shadow-2 zoomin animation-duration-100 animation-delay-0" type="submit" value="Save Skill" style="background-color: gray;">REMOVE SKILL</button>
        
        </div>
        `
    ;
    
    panel.className = 'pan card grid align.items.center m-2 p-2 bg-gray-800';
    let addToSkillPanel = document.getElementById('skillPanel');
    addToSkillPanel.appendChild(panel);

    let button = panel.querySelector('button');
    button.addEventListener('click', function (event) {
        event.preventDefault();
        const yearsMod = document.querySelector('[name="years"]').value;
        const descriptionMod = document.querySelector('[name="description"]').value;
        const skillMod = skill;

        if (yearsMod == 0) {
            alertMessagesBar('<h1>You saved with 0 years of experience</h1>');
            return;
        }else{
            addSkillTo_DevsRecord(id, skillMod, yearsMod, descriptionMod);

            const changeButtonColor = document.getElementById('save').style = "background-color: green";
            const changeButtonText = document.getElementById('save').innerHTML = "saved";
        }

        
    });


}


//function to add devArr skill to main devsRecords array list
function addSkillTo_DevsRecord(idx, arg1, arg2, arg3){
    
    for(let i = 0; i < devsRecord.length; i++){

        if(devsRecord[i][0].mail === devArr[0].mail){

            let idFind = devsRecord[i].findIndex(arg => arg.skill === arg1);
            devsRecord[i][idFind] = {'skill': arg1, 'years': Number(arg2), 'desc': arg3};

            alertMessagesBar('Skill saved ' + arg1);

            //  let cal = devsRecord[i].slice(1).map(skill => skill.years);
            //  let red = cal.reduce( (acc, num) => acc + num, 0 );
            //  console.log(red);

            totalSkills(devsRecord[i]);


        }else{
            //console.log('not found skill in devsRecord ' + i);
        }
    }

    console.log(devsRecord);
}

//this function display a message with error notice on messageBar div 
function alertMessagesBar(x){

    //let messageDisplay = document.getElementById('alertInfo');//messageBar
    //messageDisplay.innerHTML = x ;

    let body = document.getElementsByTagName('body')[0];
    let popUp = document.createElement('div');
    popUp.id = 'popAlert';
    popUp.className = `flex align-items-center justify-content-center text-center p-1 text-white w-10`;
    popUp.style.cssText = `height-max: 100px; position: fixed; top: 8%; left: 50%; transform: translate(-50%, -50%); background: rgba(0, 0, 0, 0.9); z-index: 1; text-align: center; border-radius: 20px;`;
    popUp.innerHTML = x ;
    body.appendChild(popUp);

    
        setTimeout(function() {
            // let messageDisplay = document.getElementById('alertInfo');
            // messageDisplay.innerHTML = '' ;

            popUp.remove();

        }, 4000);
    
}



//calculate total skills
function totalSkills(x){
    let cal = x.slice(1).map(skill => skill.years);
    let red = cal.reduce( (acc, num) => acc + num, 0 );

    let messageDisplay = document.getElementById('skillAddedNum');//show total skils years on messageBar
    messageDisplay.innerHTML = `You have ${red} POINTS` ;
    

    return red;
}




//controll mail user 
function mailStorage(){
    let mailStorage = sessionStorage.getItem('mail');
    let idStorage = sessionStorage.getItem('id');
    console.log(mailStorage + ' mail saved');
    console.log(idStorage + ' id saved');
    console.log(devArr);
    console.log(devsRecord);
}
//mailStorage();


//console.log(devsRecord.length);

const resultsSearch = [];

//search developer with same skills
function searchDev() {
    let myId = sessionStorage.getItem('id');//my id
    if(devsRecord[myId]){
        for(let xxi = 1; xxi < devsRecord[myId].length; xxi++){
            //console.log( devsRecord[myId][xxi].skill );
            compare(devsRecord[myId][xxi].skill);
        }
    }
    
        function compare(skillToSearch){
            for (let i = 0; i < devsRecord.length; i++) {
                let dev = devsRecord[i];


                if(devsRecord[i] !== devsRecord[myId]){
                    for(let ix = 1; ix < dev.length; ix++){
                        if(dev[ix].skill === skillToSearch ){
                            console.log(dev[0].mail + ' skill compatibile');

                            let years = dev[ix].years;
                            let desc = dev[ix].desc;


                             let found = resultsSearch.find(result => result[0].mail === dev[0].mail);
                             let skill1 = resultsSearch.find(result1 => result1.skill === skillToSearch);
                            

                                if (!found) {
                                    console.log('Mail included');
                                    resultsSearch.push( [{mail: dev[0].mail}, {skill: skillToSearch, years, desc}] );
                                    
                                } else if(!skill1) {
                                    console.log('Mail not included');

                                    const existingSkill = found.find(skill => skill.skill === skillToSearch);
                                    

                                    if (!existingSkill) {
                                        
                                        found.push({ skill: skillToSearch, years, desc });
                                    }

                                }                        
                        }
                    }
                }
            }
        }


   

    if(resultsSearch.length === 0){
        alert('no result found');
        console.log(resultsSearch.length);
    }else{

        let developers = document.querySelectorAll('.developer');
        for (let i = 0; i < developers.length; i++) {
        developers[i].remove();
        }


        for(let i = 0; i < resultsSearch.length; i++){
            let myId = sessionStorage.getItem('id');
            if(resultsSearch[i] !== myId ){
                let devCard = document.createElement('div');
               devCard.className = 'developer';
                
                devCard.innerHTML = `<div class="developer flex w-12 m-2">`;
                devCard.innerHTML += `<div class="flex">${resultsSearch[i][0].mail}</div>`;

                    for(let ix = 1; ix < resultsSearch[i].length; ix++){
                        devCard.innerHTML += `<div class="flex">${resultsSearch[i][ix].skill} ${resultsSearch[i][ix].years} ${resultsSearch[i][ix].desc}</div>`;
                    }

                devCard.innerHTML += `</div>`;
                document.getElementById('showResultRecruiter').appendChild(devCard);
            }
        }
    }
}
    





//on page loaded, call the function search() and addMailUsername
function initial(){
    search();
    addMailUsername();
    
}
window.onload = initial;




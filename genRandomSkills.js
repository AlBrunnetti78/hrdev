

function getRandomSkill() {
    return skills[Math.floor(Math.random() * skills.length)];
}

function generateRandomUser(id) {

    const final = [];

    const user = {
        mail: `user${id}@mail.com`,
        surname: `user${id}`
    };

    final.push(user);

    for (let i = 1; i <= 5; i++) {
        skill = {
            skill: getRandomSkill(),
            years: Math.floor(Math.random() * 11),
            desc: `Description for ${getRandomSkill()}`
        };
        final.push(skill);
    }

    return final;
}

function generateFakeUsers(numUsers) {
    

    for (let i = 1; i <= numUsers; i++) {
        devsRecord.push(generateRandomUser(i));
    }

    return devsRecord;
}

const numFakeUsers = 500; 

const fakeUsersData = generateFakeUsers(numFakeUsers);
//console.log(fakeUsersData);
//console.log(devsRecord);

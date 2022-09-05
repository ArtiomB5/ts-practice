"use strict";
class User038 {
    constructor() {
        this.skills = [];
    }
    addSkill(newSkillOrNewSkills) {
        if (typeof newSkillOrNewSkills === "string") {
            this.skills = [...this.skills, newSkillOrNewSkills];
        }
        else if (newSkillOrNewSkills instanceof Array) {
            this.skills = [...this.skills, ...newSkillOrNewSkills];
        }
    }
}
const userTest038 = new User038();
console.log('new obj created', userTest038);
userTest038.addSkill('1 string skill');
console.log('1 skill added', userTest038);
userTest038.addSkill(['new arr skill 0', 'new arr skill 1']);
console.log('2 skills array added', userTest038);
function run(distance) {
    if (typeof distance === 'string') {
        return `distance - string, distance = ${distance}`;
    }
    else {
        return distance;
    }
}
console.log(run('777'));
console.log(run(888));
//function overload

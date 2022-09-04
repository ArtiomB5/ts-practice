var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var User038 = /** @class */ (function () {
    function User038() {
        this.skills = [];
    }
    User038.prototype.addSkill = function (newSkillOrNewSkills) {
        if (typeof newSkillOrNewSkills === "string") {
            this.skills = __spreadArrays(this.skills, [newSkillOrNewSkills]);
        }
        else if (newSkillOrNewSkills instanceof Array) {
            this.skills = __spreadArrays(this.skills, newSkillOrNewSkills);
        }
    };
    return User038;
}());
var userTest038 = new User038();
console.log('new obj created', userTest038);
userTest038.addSkill('1 string skill');
console.log('1 skill added', userTest038);
userTest038.addSkill(['new arr skill 0', 'new arr skill 1']);
console.log('2 skills array added', userTest038);
function run(distance) {
    if (typeof distance === 'string') {
        return "distance - string, distance = " + distance;
    }
    else {
        return distance;
    }
}
console.log(run('777'));
console.log(run(888));
//function overload

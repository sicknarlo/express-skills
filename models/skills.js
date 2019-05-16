const skills = [
    {skill: 'CSS'},
    {skill: 'JS'},
    {skill: 'HTML'},
];

module.exports = {
    getAll,
    getOne,
    create,
    remove
};

function create(skill) {
    skills.push(skill);
};

function getOne(id) {
    return skills[id];
};

function getAll() {
    return skills;
};

function remove(id) {
    skills.splice(id - 1 );''
}


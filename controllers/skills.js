const Skill = require('../models/skills');

module.exports = {
    index,
    show,
    new: newSkills,
    create,
    deleteSkill,
};

function deleteSkill(req, res) {
    Skill.remove(req.params.id);
    return res.redirect('/skills');
}

function create(req, res) {
    Skill.create(req.body);
    return res.redirect('/skills');
};

function newSkills(req, res) {
    res.render('skills/new');
};

function show (req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}

function index (req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}
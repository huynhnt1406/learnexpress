const express = require('express')
const router =express.Router()
const members = require('../../Members')
const uuid = require('uuid')
///Get all members
router.get('/',(req,res) => {
    res.json(members);
})

//GET single member

router.get('/:id', (req,res) => {
    //res.send(req.params.id)

    const found = members.some(member => member.id === parseInt(req.params.id))

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({msg:`No member with the ID of ${req.params.id}`})
    }
})
//create Member
router.post('/', (req,res) => {
    const newMember = {
        id:uuid.v4(),
        name:req.body.name,
        email:req.body.name,
        status:'active'
    }
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: 'Please include a name and email'});
    }

    members.push(newMember);

    res.json(members)
});
module.exports = router
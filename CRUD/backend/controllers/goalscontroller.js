const asyncHandler = require('express-async-handler')

const getGoals = syncHandler(async (req,res)=>{
    res.status(200).json({message : 'get from controller'})
})

const setGoals = syncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error ('please enter text field')
    }
    res.status(200).json({message : 'set from controller'})
})

const putGoals = syncHandler(async (req,res)=>{
    res.status(200).json({message : `Put Goals controller ${req.params.id}`});
})

const deleteGoals = syncHandler(async (req,res)=>{
    res.status(200).json({message : `Put Goals controller ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    deleteGoals,
    putGoals
};
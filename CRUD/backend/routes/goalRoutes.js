const express = require ('express')
const router = express.Router()
const {getGoals,setGoals,deleteGoals,putGoals} = require('../controllers/goalscontroller')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(putGoals).delete(deleteGoals)


module.exports = router
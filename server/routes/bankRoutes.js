const express=require('express');
const { getAllBankDetails, getbranchDetails } = require('../controllers/bankController');
const router=express.Router();



router.route('/getBankDetails').get(getAllBankDetails)
router.route('/getBankDetails/:id').get(getbranchDetails)


module.exports=router
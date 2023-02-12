const express=require('express');
const { getAllBankDetails } = require('../controllers/bankController');
const router=express.Router();



router.route('/getBankDetails').get(getAllBankDetails)



module.exports=router
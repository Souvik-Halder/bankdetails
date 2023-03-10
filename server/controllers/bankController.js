const catchAsyncErrors=require('../middlewares/catchAsyncErrors')
const Apifeatures=require('../utils/apiFeature')
const bankBranch=require('../models/bankModels')
exports.getAllBankDetails=catchAsyncErrors(async(req,res,next)=>{

    const resultPerPage=10;
    const dataCount=await bankBranch.countDocuments();
    const apiFeature=new Apifeatures(bankBranch.find(),req.query)
    .search()
    .pagination(resultPerPage)
  const bankBranchDetails=await apiFeature.query;
  res.status(200).json({
    success:true,
    bankBranchDetails
  })
})

exports.getbranchDetails=catchAsyncErrors(async(req,res,next)=>{
    const resultPerPage=10;
    const id=req.params.id;
    const apiFeature=new Apifeatures(bankBranch.find({bank_id:id}),req.query)
    .pagination(resultPerPage)
  const bankBranchDetails=await apiFeature.query;
  res.status(200).json({
    success:true,
    bankBranchDetails
  })
})
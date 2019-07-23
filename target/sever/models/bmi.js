var mongoose=require('mongoose');

//Genre Schema
var bmiSchema=new mongoose.Schema({
data:{
    type: String,
    required: true
  },
  bmi:{
    type: Number,
    required:true
  },
  img:{
    type: String
  },
});

var bmi=module.exports= mongoose.model('bmi', bmiSchema);

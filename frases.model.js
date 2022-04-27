const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const params= {timestamp:true,strict:false,strictPopulate:false}
const schema = {
    frase:{ type:String, default :'',requored:true,length:320},
    autor:{ type:String ,default:'',required:true , lowecase:true},
}

const Esquema= new Schema(schema,params);
const model= mongoose.model('frases',Esquema);

model.export=model;
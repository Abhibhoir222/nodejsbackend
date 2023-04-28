const dbConnect = require('./mongodb');

const updateData = async ()=>{
    let data = await dbConnect();
    const result = await data.updateOne(
        {name:'note 4'},{
            $set:{name:'max pro 5', price:500}
        }
    );
}
updateData();
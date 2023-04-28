const dbConnect = require('./mongodb');

const insert= async ()=>{
    const db = await dbConnect();
    // const result = await db.insertOne(

    const result = await db.insertMany(
        [
        {name:'note 6',brand:'micromax',price:360,category:'mobile'},
        {name:'note 4',brand:'micromax',price:380,category:'mobile'},
        {name:'note 3',brand:'micromax',price:370,category:'mobile'}

        ]
        );
        if(result.acknowledged){
            console.log("data Insertated");
        }
}

insert();
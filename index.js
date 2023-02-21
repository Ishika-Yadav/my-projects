const express= require('express');
const app= express(); //p
const port=8000;

// running the surver[using express]
app.listen(port, function(err){
    if(err)
    {
        console.log(`error in running the surver: ${err}`);
    }
    console.log(`surver is running on port : ${port}`);
});
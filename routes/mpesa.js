
const router = require("express").Router();
const unirest = require('unirest')(process.env.MPESA_KEY);
// let req = unirest('GET', 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
// .headers({ 'Authorization': 'Bearer cFJZcjZ6anEwaThMMXp6d1FETUxwWkIzeVBDa2hNc2M6UmYyMkJmWm9nMHFRR2xWOQ==' })
// .send()
// .end(res => {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.raw_body);
// });

router.post("/payment", (req,res)=>{
    mpesa.charges.create(
        {
            source:req.body.tokenId,
            amount:req.body.amount,
            currency: "ksh",
        },
        (mpesaErr, mpesaRes)=>{
            if(mpesaErr){
                res.status(500).json(mpesaErr);
            }else{
                res.status(200).json(mpesaRes);
            }
        }
    );
});
module.exports = router;
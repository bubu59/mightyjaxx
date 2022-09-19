const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (res, req) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.statusCode(500).json(stripeErr);
            } else {
                res.statusCode(200).json(stripeRes);
            }
        });
});
module.exports = router;
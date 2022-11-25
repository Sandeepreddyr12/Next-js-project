// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {

  const orderTotal = +items[0].price * items[0].quantity
  return orderTotal;
};

export default async function handler(req, res) {
  

  if (req.method === 'POST') {
    const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency

  let paymentIntent;
  try{
  paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });
}catch(err){
  res.status(500).json({ statusCode: 500, message: err.message });
}

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
} else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
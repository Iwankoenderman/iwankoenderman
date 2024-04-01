import React, { useState } from "react"
import { loadStripe } from '@stripe/stripe-js';

const buttonStyles = {
  fontSize: "20px",
  textAlign: "center",
  fontWeight: "bold",
  color: "#FFFFFF",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "#ff4D00",
  borderRadius: "10px",
  letterSpacing: "1.5px",
}

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51H04cHDv8KZeguAt2v86plT5Sb4kV2skoKgctXAs3AIjnxqr91uXmh3dCcVZijql8xcBXLnAniL25CiPvu6MRBab00KeL2oEWP")
  }
  return stripePromise
}

const Checkoutprod3 = () => {
  const [loading, setLoading] = useState(false)

  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1OyHGHDv8KZeguAtQ7kmcNnI", quantity: 1 }],
      successUrl: `https://share.hsforms.com/1BexRHwJSRB6i4sOKr-JbQQ2vk8s`,
      cancelUrl: `https://iwankoenderman.com/breekbetalingaf/`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (

  
    <button
      disabled={loading}
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      BETAAL PAKKET!
    </button>
    
  )
}

export default Checkoutprod3
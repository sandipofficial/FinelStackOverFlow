import "./Premium.css";
import { useNavigate} from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';

import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);

function Premium() {
  
  const navigate = useNavigate();

  const navigateToHome = () => {
    
    navigate('/');
  };

  const publishableKey =
  'pk_test_51NXvTISAATW6bcVQOwRupwcElOQB7SCJnAkbq8g0F2dfOuj0GQAG80Tvo3BpM1LrAQc7184yvoNFvMpBLJqLWzQv00R5UhjBMS';
  const [product, setProduct] = useState({
    name: 'Gold',
    price: 1000,
  });

  const priceForStripe = product.price * 100;
  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 5000,
    });
    
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    });
  };
  const payNow = async token => {
    try {
      const response = await axios({
        url: 'http://localhost:5000/payment',
        method: 'post',
        data: {
          amount: product.price,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
      }

    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  
  return (
 
<body>
    <div class="container">
        <h2>Select Your Plan</h2>
        <div class="price-row">
            <div class="price-col">
                <p>Basic</p>
                <h3>0 Rs <span>/month</span></h3>
                <ul>
                    <li>1 question per day</li>
                    <li>test_feature</li>
                    <li>test_feature</li>
                    
                </ul>
                <button onClick={navigateToHome} >Go Free</button>
            </div>
            <div class="price-col">
                <p>Silver</p>
                <h3>100 Rs <span>/month</span></h3>
                <ul>
                    <li>5 question per day</li>
                    <li>test_feature</li>
                    <li>test_feature</li>
                    
                </ul>
                <StripeCheckout class="abs"
                stripeKey={publishableKey}
                label="Pay Now"
                name="Pay With Credit Card"
                billingAddress
                shippingAddress
                amount={priceForStripe}
                description={`Your total is ₹100`}
                token={payNow}
                />
            </div>
            <div class="price-col">
                <p>Gold</p>
                <h3>1000 Rs <span>/month</span></h3>
                <ul>
                    <li>Unlimited questions</li>
                    <li>test_feature</li>
                    <li>test_feature</li>
                    
                </ul>
                <StripeCheckout class="abs"
                  stripeKey={publishableKey}
                  label="Pay Now"
                  name="Pay With Credit Card"
                  billingAddress
                  shippingAddress
                  amount={priceForStripe}
                  description={`Your total is ₹1000`}
                  token={payNow}
                  />
        
            </div>
        </div>
    </div>
</body>

  );
}

export default Premium;
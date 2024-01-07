import { useCartGETQuery } from "api/cartApi";
import CheckoutContact from "components/Checkout/CheckoutContact";
import CheckoutPayment from "components/Checkout/CheckoutPayment";
import CheckoutShipping from "components/Checkout/CheckoutShipping";
import Order from "components/Checkout/Order/Order";
import Preloader from "components/base/Preloader";
import React, { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";

const CheckoutPage = () => {
  const [tab, setTab] = useState(1);
  const [checkoutData, setCheckoutData] = useState({});
  const { data: cartData, isFetching: cartisFetching } = useCartGETQuery();
  useEffect(() => {
    if (cartData?.data && cartData.data.purchases) {
      console.log(cartData);
    } else {
      console.log("Cart is Empty");
    }
  }, [cartData, cartisFetching]);

  return (
    <div className="container-horizontal checkout">
      {cartisFetching && <Preloader />}
      <div className="container-vertical checkout__container">
        <div className="container-horizontal checkout__steps">
          <span
            className={
              tab == 1
                ? "container-horizontal text checkout__step checkout__step_active"
                : tab > 1
                ? "container-horizontal text checkout__step checkout__step_done"
                : "container-horizontal text checkout__step"
            }
            onClick={()=>setTab(1)}
          >
            {tab > 1 ? <MdDone /> : "1"}
          </span>
          <span
            className={
              tab == 2
                ? "container-horizontal text checkout__step checkout__step_active"
                : tab > 2
                ? "container-horizontal text checkout__step checkout__step_done"
                : "container-horizontal text checkout__step"
            }
            onClick={()=>setTab(2)}
          >
            {tab > 2 ? <MdDone /> : "2"}
          </span>
          <span
            className={
              tab == 3
                ? "container-horizontal text checkout__step checkout__step_active"
                : "container-horizontal text checkout__step"
            }
            onClick={()=>setTab(3)}
          >
            3
          </span>
        </div>
        {tab==1&&<CheckoutContact setTab={setTab} setCheckoutData={setCheckoutData}/>}
        {tab==2&&<CheckoutShipping setTab={setTab} checkoutData={checkoutData} setCheckoutData={setCheckoutData}/>}
        {tab==3&&<CheckoutPayment setTab={setTab} checkoutData={checkoutData} setCheckoutData={setCheckoutData}/>}
      </div>
      <Order data={cartData}/>
    </div>
  );
};

export default CheckoutPage;

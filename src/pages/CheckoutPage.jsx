import { useCartGETQuery } from "api/cartApi";
import CheckoutContact from "components/Checkout/CheckoutContact";
import CheckoutPayment from "components/Checkout/CheckoutPayment";
import CheckoutShipping from "components/Checkout/CheckoutShipping";
import Order from "components/Checkout/Order/Order";
import React, { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";

const CheckoutPage = () => {
  const [tab, setTab] = useState(1);
  const { data: cartData, isFetching: cartisFetching } = useCartGETQuery();
  useEffect(() => {
    if (cartData?.data && cartData.data.purchases) {
      console.log(cartData);
      /* dispatch(setCartCount(data.data.purchases.length));
      dispatch(setCartTotal(data.total.purchases_all));
      dispatch(setCart_id(data.data.id));
      Cookies.set("cart_id", data.data.id); */
    } else {
      console.log("Cart is Empty");
      /* Cookies.remove("cart_id", {
        path: "/",
        secure: true,
      });
      dispatch(removeCart());
      dispatch(setCartCount(0));
      dispatch(setCartTotal(0)); */
    }
  }, [cartData, cartisFetching]);

  return (
    <div className="container-horisontal checkout">
      <div className="container-vertical checkout__container">
        <div className="container-horisontal checkout__steps">
          <span
            className={
              tab == 1
                ? "container-horisontal text checkout__step checkout__step_active"
                : tab > 1
                ? "container-horisontal text checkout__step checkout__step_done"
                : "container-horisontal text checkout__step"
            }
            onClick={()=>setTab(1)}
          >
            {tab > 1 ? <MdDone /> : "1"}
          </span>
          <span
            className={
              tab == 2
                ? "container-horisontal text checkout__step checkout__step_active"
                : tab > 2
                ? "container-horisontal text checkout__step checkout__step_done"
                : "container-horisontal text checkout__step"
            }
            onClick={()=>setTab(2)}
          >
            {tab > 2 ? <MdDone /> : "2"}
          </span>
          <span
            className={
              tab == 3
                ? "container-horisontal text checkout__step checkout__step_active"
                : "container-horisontal text checkout__step"
            }
            onClick={()=>setTab(3)}
          >
            3
          </span>
        </div>
        {tab==1&&<CheckoutContact/>}
        {tab==2&&<CheckoutShipping setTab={()=>setTab(1)}/>}
        {tab==3&&<CheckoutPayment setTab={()=>setTab(2)}/>}
      </div>
      <Order data={cartData}/>
    </div>
  );
};

export default CheckoutPage;

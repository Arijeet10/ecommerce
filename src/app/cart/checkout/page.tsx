

import CheckoutForm from "@/app/cart/checkout/_components/CheckoutForm";

const Checkout = () => {



  return (
    <>
      <div className="px-4 py-4">
        <div className="flex flex-col gap-4">
          <div className="font-medium text-3xl">Billing Details</div>
          <div>
            <CheckoutForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

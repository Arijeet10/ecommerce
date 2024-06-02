const PaymentOptions = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <input type="radio" className="accent-[#000000]" />
          </div>
          <div>Bank</div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img src="/bikash.svg" className="object-contain" />
          </div>
          <div>
            <img src="/visa.svg" className="object-contain" />
          </div>
          <div>
            <img src="/mastercard.svg" className="object-contain" />
          </div>
          <div>
            <img src="/bengali.svg" className="object-contain" />
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentOptions;

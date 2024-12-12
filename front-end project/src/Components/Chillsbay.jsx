function Chillsbay() {
  const cardInfo = [
    {
      logo: "/logo1.png",
      title: "Your  entire  trip in one checkout!",
      des: "Add multiple experiences to your cart and checkout on one click.",
    },
    {
      logo: "/logo2.png",
      title: "Pay with Crypto on the go",
      des: "Enjoy the freedom of universal payments for a seamless marketplace experience",
    },
    {
      logo: "/logo3.png",
      title: "Free Cancellation and ticket transfer",
      des: "Resell your tickets or cancel your reservations at zero cost 24 hours before.",
    }
  ];
  return (
    <>
      <h1 className="text-center text-normal mt-16 mb-10 text-3xl lg:text-5xl font-semibold">
        Why Use Chillsbay?
      </h1>
      <div className="container bg-[#189eff0f] grid grid-cols-1 lg:grid-cols-3 mx-auto mt-10 p-12 rounded-2xl shadow-xl">
        {cardInfo.map((value, index) => (
            <div key={index} className="mt-10">
                <img className="w-fit mx-auto" src={value.logo} alt="" />
                <div className="w-[60%] mx-auto text-center">
                    <h3 className="text-3xl font-semibold mt-2 mb-3">{value.title}</h3>
                    <p className="text-lg">{value.des}</p>
                </div>
            </div>
        ))}
      </div>
    </>
  );
}

export default Chillsbay;

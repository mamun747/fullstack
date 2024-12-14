function ImgSection() {
    const cards = [
        {
            img: "/image1.png",
            title: "Eat & Drink"
        },
        {
            img: "/image2.png",
            title: "Events"
        },
        {
            img: "/image3.png",
            title: "Club"
        },
        {
            img: "/image4.png",
            title: "Things to do"
        }
    ]
  return (
    <>
    <section>
        <h1 className="text-center text-[#26395c] text-3xl lg:text-6xl font-bold mt-10 mb-8">What are you in the mood for?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 mb-10 container mx-auto p-4">
          {cards.map((value, index) => (
            <div key={index} className="flex flex-col items-center overflow-hidden">
              <img src={value.img} alt="" className="w-full h-[500px] lg:h-[650px]"/>
              <div>
                <h2 className="text-[#26395c] font-semibold text-2xl mt-4 mb-4">{value.title}</h2>
              </div>
            </div>
          ))}
        </div>
    </section>
    </>
  )
}

export default ImgSection
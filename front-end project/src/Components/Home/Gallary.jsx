function Gallary() {
    const gallaryImage = [
        { image: "/g1.png" },
        { image: "/g2.png" },
        { image: "/g3.png" },
        { image: "/g4.png" },
        { image: "/g5.png" },
        { image: "/g6.png" }
    ]
  return (
    <>
    <section className="border p-10 mb-10 mt-20">
        <div className="container mx-auto">
            <h3 className="text-normal text-3xl font-semibold text-center lg:text-start">See How people are chilling on<span className="text-[#0E8BFF]">Chillsbay</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-8">
                {
                    gallaryImage.map((value, i) => (
                        <div key={i} className="mt-5">
                            <img src={value.image} alt="" className="w-full object-cover h-full"/>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default Gallary
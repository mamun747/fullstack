function ThingsToDo() {
    const cards = [
        {
            img: "/image5.png",
            title: "Sight Seeing"
        },
        {
            img: "/image6.png",
            title: "Volley Ball Game"
        },
        {
            img: "/image7.png",
            title: "Wizkid Show"
        },
        {
            img: "/image7.png",
            title: "Wizkid Show"
        },
        {
            img: "/image5.png",
            title: "Sight Seeing"
        },
        {
            img: "/image6.png",
            title: "Volley Ball Game"
        },
        {
            img: "/image7.png",
            title: "Wizkid Show"
        },
        {
            img: "/image7.png",
            title: "Wizkid Show"
        }
    ]
  return (
    <>
    <section className="bg-[#f5faff] p-5">
       <div className="container mx-auto">
       <h1 className="text-center lg:text-start text-[#26395c] text-3xl lg:text-4xl font-bold mt-10 mb-8">Top things to do in Lagos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 mb-10 mx-auto p-4 gap-4">
          {cards.map((value, index) => (
            <div key={index} className="flex flex-col items-center overflow-hidden">
              <img src={value.img} alt="" className="w-full h-[270px] rounded-lg object-cover"/>
              <div>
                <h2 className="text-[#26395c] font-semibold text-2xl mt-4 mb-4">{value.title}</h2>
              </div>
            </div>
          ))}
        </div>
       </div>
    </section>
    </>
  )
}

export default ThingsToDo
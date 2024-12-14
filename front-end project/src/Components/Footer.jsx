import { Button } from "@nextui-org/react";

const FooterData = {
  socialIcons: [
    "facebook.png",
    "twitter.png",
    "instagram.png",
    "linkedin.png",
    "tiktok.png",
  ],
  sections: [
    {
      title: "Menu",
      menus: [
        {
          items: ["Home", "Eat", "Drink", "Events", "Club", "Recreation"],
        },
        {
          items: ["Blog", "Careers", "Contact", "FAQs"],
        },
      ],
    },
    {
      title: "Utility Pages",
      menus: [
        {
          items: [
            "Start Here",
            "Pay with Crypto",
            "Style Guide",
            "Password Protected",
            "404 Not Found",
            "Licenses",
            "Changelog",
          ],
        },
      ],
    },
  ],
  partnerSection: {
    img: "partner.png",
    title: "Become a Partner",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.",
  },
  logo: "/Logo.png",
  copyright: `© ${new Date().getFullYear()} All Rights reserved.`,
};

const MenuSection = ({ title, menus }) => {
  return (
    <div>
      <p className="font-semibold text-2xl border-b-1 mb-5 py-3">{title}</p>
      <div className="flex gap-12 text-xl text-[#656B89]">
        {menus.map((value, index) => (
          <ul key={index}>
            {value.items.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
function Footer() {
  const { socialIcons, sections, partnerSection, logo, copyright } = FooterData;
  return (
    <>
      <footer className="p-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
            {/* left side */}
          <div className="col-span-1">
            <img className="w-fit" src={logo} alt="" />
            <p className="text-sm mb-4">{copyright}</p>
            <div className="flex items-center space-x-4">
                {
                    socialIcons.map((value, index) => (
                        <a key={index}>
                            <img className="w-4 h-4" src={value} alt="" />
                        </a>
                    ))
                }
            </div>
          </div>
            {/* right side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 ms-auto col-span-3">
            {sections.map((value, index) => (
                <MenuSection key={index} title={value.title} menus={value.menus}/>
            ))}
          <div className="w-full bg-[#F5FAFF] p-8">
            <img className="mb-2" src={partnerSection.img} alt="" />
            <h3 className="text-3xl text-normal font-bold">{partnerSection.title}</h3>
            <p className="text-gray-400 mt-5 mb-5">{partnerSection.des}</p>
            <Button color="primary" className="w-full" size="xl">JOIN NOW</Button>
          </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

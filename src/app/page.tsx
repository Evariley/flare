import Image from "next/image";
import bgImage from "../images/Home/backgroud.png"
import Navbar from "./navbar/page";
import image1 from "../images/Home/elliptic(1).png"
import image2 from "../images/Home/layerzero(1).png"
import image3 from "../images/Home/hypernative.png"
import image4 from "../images/Home/googlecloud(1).png"
import image5 from "../images/Home/ankr(1).png"
import image6 from "../images/Home/arkham(1).png"
import image7 from "../images/Home/hextrust(1).png"
import image8 from "../images/Home/tower.png"
import image9 from "../images/Home/drop.png"
import image10 from "../images/Home/eye.png"
import image11 from "../images/Home/curve.png"
import image13 from "../images/code.png"
import image14 from "../images/join.webp"
import image15 from "../images/Home/fw5_join_bg.webp"
import { FaArrowRight, FaDiscord, FaGithub, FaLinkedin, FaMedium, FaTelegram, FaTwitter, FaXbox, FaYoutube } from "react-icons/fa";
import image12 from "../images/Home/circle.png"
import logo from "../images/Home/Screenshot_2025-07-22_215836-removebg-preview.png"
import CarouselPlugin from "./carousel";
import Counter from "./home/infinitecounter/page";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Card from "./home/card/page";
import CarouselAutoPlay from "./home/carousel/page";
import { link } from "fs";
export default function Home() {
  return (
    <div className="bg-white">
      <Navbar/>
  <section className="bg-white relative h-[80vh] sm:h-screen">
  <div className="md:rounded-4xl pt-20  sm:px-10 md:px-16 lg:px-20">
    <Image 
      src={bgImage} 
      className="absolute z-10 md:rounded-4xl h-[55vh] sm:h-[89.5vh] w-[100vw] sm:w-[90vw] md:mx-auto md:left-0 md:right-0" 
      alt="" 
    />
    <div className="z-40 w-full sm:w-[90vw] text-center absolute top-0 left-1/2 transform -translate-x-1/2 mt-16 sm:mt-20">
      <div className="p-6 sm:p-10 md:p-20">
        <div className="w-full">
          <Image src={logo} className="m-auto w-32 sm:w-40 md:w-48 lg:w-56" alt=""/>
        </div>
        <div className="py-4 sm:py-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold">
            The blockchain for data
          </h1>
        </div>
        <div className="text-gray-500 text-base sm:text-lg md:text-xl pb-4 sm:pb-5">
          <p>
            Flare is a full-stack layer 1 solution designed for<br className="hidden sm:block"/> 
            data intensive use cases.
          </p>
        </div>
        <div>
          <Link href="/claim">
            <button className="cursor-pointer text-white bg-[#C1003F] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base">
              Claim Flare
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="lg:py-20 ">
  <div className="text-center px-4">
    <p className="text-gray-500 text-base sm:text-lg">BUILDING WITH THE BEST</p>
  </div>

  <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-6 sm:px-10 md:px-20 lg:px-30 mt-6">
    {[image1, image2, image3, image4, image5, image6, image7].map((img, idx) => (
      <div key={idx} className="flex justify-center">
        <Image src={img} className="w-20 sm:w-24 md:w-28 lg:w-30" alt="" />
      </div>
    ))}
  </div>

  <div className="pt-10 px-4 sm:px-8 md:px-12 lg:px-20">
    <div className="pb-10 flex justify-center">
      <Image src={logo} className="m-auto w-28 sm:w-36 md:w-44" alt="" />
    </div>

    <div className="flex flex-col lg:flex-row justify-center gap-10">
      <div className="space-y-5 w-full lg:w-1/3">
        <div className="pb-3">
          <p className="text-gray-500 text-xs sm:text-sm">FOUNDATIONAL TECHNOLOGY</p>
        </div>
        {[
          {
            title: "Enshrined Data Protocols",
            desc: "Flare’s protocols are integrated into the blockchain`s core, and inherit the economic security of the entire network",
          },
          {
            title: "Ethereum Virtual Machine",
            desc: "Flare is EVM compatible with out-of-the-box support for all your favorite tooling",
          },
          {
            title: "Flare Stake",
            desc: "Flare uses a proof-of-stake (PoS) mechanism to ensure a significant and consistent level of economic security",
          },
        ].map((item, idx) => (
          <div key={idx} className="group">
            <div className="space-y-4 group-hover:bg-gray-100 px-4 py-3 rounded-2xl">
              <h1 className="text-black text-lg sm:text-xl md:text-2xl font-bold group-hover:underline underline-offset-7">
                {item.title}
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-1/3 flex justify-center">
        <Image src={image8} className="h-auto w-full max-w-md lg:max-w-full" alt="" />
      </div>

      <div className="w-full lg:w-1/3">
        <div className="pb-3">
          <p className="text-gray-500 text-xs sm:text-sm">NEW USE CASES</p>
        </div>
        <div className="space-y-8">
                <div className="group">
                  
                  <div className="group-hover:bg-[#FFE4E7] bg-[#FFF3F4] p-4 rounded-2xl">
                    <Link href="https://flare.network/products/fassets" >
                        <div className="flex items-center space-x-2">
                <Image src={image9} className="w-8 sm:w-10" alt="" />
                <div className="flex items-center space-x-2">
                  <h1 className="text-[#C1003F] text-sm sm:text-base group-hover:underline underline-offset-7">
                    FAssets
                  </h1>
                  <FaArrowRight className="text-[#C1003F]" />
                </div>
                      </div>
                                    <p className="text-black text-sm sm:text-base mt-2">Securely explore XRPfi, BTCfi and DOGEfi</p>

                    </Link>
          
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-400 text-xs sm:text-sm">ENSHRINED DATA PROTOCOLS</p>

            {[
              { img: image11, link: "https://flare.network/products/flare-data-connector", title: "FDC", desc: "Reliably access external blockchain events and real-world APIs" },
              { img: image10, link:"https://flare.network/products/flare-time-series-oracle", title: "FTSO", desc: "Easily integrate fast, secure, and decentralized price feeds" },
                  ].map((item, idx) => (
              <a href={item.link} key={idx}   className={`group block ${idx !== 0 ? 'mt-4' : ''}`}>
                       
                <div className="group-hover:bg-[#FFE4E7]   bg-[#FFF3F4] p-4 rounded-2xl">
                  <div className="flex items-center space-x-2 ">
                    <Image src={item.img} className="w-8 sm:w-10" alt="" />
                    <p className="text-[#C1003F] text-sm sm:text-base group-hover:underline underline-offset-7">
                      {item.title}
                    </p>
                    <FaArrowRight className="text-[#C1003F]" />
                  </div>
                  <p className="text-black text-sm sm:text-base mt-2">{item.desc}</p>
                </div>
            
              </a>
             
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     
      <section>
        <CarouselPlugin/>
      </section>

      <section>
        <div className="hover:bg-[#C1003F]  transition delay-150 duration-300 ease-in-out hover:text-white">
           <Counter/>

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 md:px-10 hover:bg-[#C1003F] transition delay-150 duration-300 ease-in-out hover:text-white">
  <div className="z-30 order-2 lg:order-1 text-center lg:text-left py-6 lg:py-0">
    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10em] font-semibold">
      Decentralized
    </h1>
    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal">
      100 Data Providers
    </p>
    <p className="px-2 text-sm sm:text-base md:text-lg">
      3.3% maximum stake per data provider
    </p>
  </div>
  <div className="m-auto z-10 mt-6 lg:order-2 lg:mt-0">
    <Image src={image12} alt="" className="w-48 sm:w-64 md:w-80 lg:w-100" />
  </div>
</div>

       <div className="grid grid-cols-1 lg:grid-cols-2 hover:bg-[#C1003F] transition delay-150 duration-300 ease-in-out hover:text-white px-4 sm:px-6 md:px-10 py-8">
  
  <div className="flex justify-center  mb-6 lg:mb-0">
    <Image src={image12} alt="" className="w-48 sm:w-64 md:w-80 lg:w-100" />
  </div>

  
  <div className="m-auto text-center lg:text-left space-y-6">
    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[11em] font-semibold leading-tight">
      Secure
    </h1>

    <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-6 sm:space-y-0 justify-center lg:justify-start">
  
      <div className="border-[0.8em] sm:border-[1em] text-center border-l-pink-100 border-t-pink-100 border-r-[#C1003F] border-b-[#C1003F] w-24 sm:w-28 md:w-32 py-4 sm:py-5 rounded-full">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">67%</h1>
      </div>

      
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">FLR Staked</h1>
        <p className="text-sm sm:text-base md:text-lg">
          of which, 80% is from the community
        </p>
      </div>
    </div>
  </div>
</div>

      
      </section>
 <section className="px-6 md:px-18 py-10 md:py-30">
  <div className="bg-gray-100 rounded-xl">
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-4 gap-8">
      <div className="items-center self-center px-4 md:px-9 space-y-5 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold">Build on Flare</h1>
        <p className="text-black/40 text-lg md:text-xl">
          Leverage Flare`s full-stack data solutionns in your
          <br className="hidden md:block" /> decentralized application
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
          <button className="border hover:bg-pink-800 cursor-pointer bg-[#C1003F] px-7 py-3 rounded-2xl text-white">
            Developer Resources
          </button>
          <button className="bg-white rounded-2xl px-8 py-3 cursor-pointer hover:bg-gray-100">
            Learn about Flare
          </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <Image src={image13} className="w-full md:w-[40em]" alt="" />
      </div>
    </div>
  </div>
</section>

       <section className="py-5">
        <div className="pb-10 py-5">
          <h1 className="text-center text-3xl">Participate in Flare</h1>
        </div>
  <div className="px-6 sm:px-10 lg:px-20">
  <Link href="https://fair.flare.network/?utm_source=website&utm_medium=referral&utm_campaign=fair">
    <Image 
      src={image14} 
      className="w-full h-auto object-cover" 
      alt="" 
    />
  </Link>
</div>

        <div>
          <Card/>
        </div>
        
      </section>
    <section className="py-5 pb-10">
  <div className="flex flex-col lg:flex-row bg-gray-100 justify-between py-5 sm:py-o">
    <div className="px-6 sm:px-10 lg:px-20 self-center space-y-6 text-center lg:text-left">
      <div className="text-2xl sm:text-3xl font-semibold">
        <h1>Subscribe to the Flare Newsletter</h1>
      </div>
      <div>
        <p className="text-base sm:text-lg lg:text-xl text-black/50">
          Join over 30,000 Flare community members. Sign up to the<br className="hidden lg:block"/> 
          Flare newsletter today to hear the latest on product releases,<br className="hidden lg:block"/> 
          ecosystem announcements and global events.
        </p>
      </div>
            <div>
              <Link href="https://flare.network/sign-up">
               <button className="bg-[#C1003F] px-6 py-2 rounded-xl text-white hover:bg-pink-800 duration-200">
          Subscribe
        </button>
              </Link>
    \
      </div>
    </div>
    <div className="lg:flex hidden justify-center lg:justify-end mt-6 lg:mt-0 ">
      <Image src={image15} className="w-4/5 sm:w-2/3 lg:w-full h-auto" alt="" />
    </div>
  </div>
</section>


    <section className="border-t-2">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-6 px-6 sm:px-10 lg:px-20">
  
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-5 space-y-4 sm:space-y-0">
        <div className="flex items-center border-b-2 sm:border-b-0 sm:border-r-2 px-4 pb-2 sm:pb-0">
          <Image src={logo} alt="" />
          <p className="text-2xl text-[#C1003F] font-semibold ml-2 sm:ml-0">flare</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-lg sm:text-2xl font-semibold">The blockchain for data</p>
        </div>
      </div>

  
      <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-3 sm:space-x-5 px-2 sm:px-9">
              {[{ desc: "Support", link: "https://flare.network/resources/technical-support" }, { desc: "Our Team", link: "https://flare.network/team" }, { desc: "Brand Assets", link: "https://flare.network/team" }, { desc: "Terms & Conditions", link: "https://flare.network/privacy-policy" }, { desc:"UK Disclaimer", link: "https://flare.network/uk-disclaimer"}].map((item, i) => (
          <Link href={item.link} key={i}>
            <div className="border-b-2 sm:border-b-0 sm:border-r-2 text-sm text-black/40 pr-0 sm:pr-4 hover:text-[#C1003F] cursor-pointer">
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="px-2 sm:px-8 text-black/40 text-center sm:text-left">
        <p className="text-sm">Flare 2025</p>
      </div>

  
      <div className="flex justify-center sm:justify-start space-x-5 px-2 sm:px-8">
              {[{ icon: FaGithub, link: "https://github.com/flare-foundation" }, { icon: FaYoutube, link: "https://www.youtube.com/c/Flare_Networks" }, { icon: FaLinkedin, link: "https://www.linkedin.com/company/flarenetwork/" }, { icon: FaDiscord, link: "https://discord.com/invite/flarenetwork" }, { icon: FaXbox, link: "https://x.com/FlareNetworks" }, { icon: FaMedium, link: "https://medium.com/flarenetwork" }, { icon: FaTelegram, link: "https://t.me/FlareNetwork" }].map((item, i) => (
          <Link href={item.link} key={i}>
            <item.icon size={18} className="text-black/40 hover:text-[#C1003F] cursor-pointer" />
          </Link>
        ))}
      </div>
    </div>

    
    <div className="py-5 space-y-4">
      <h1 className="text-black/40 font-semibold">Explore</h1>
      <div className="space-y-5">
              {[{ desc: "Flarescan", link: "https://flarescan.com/" }, { desc: "Flare Portal", link: "https://portal.flare.network/" }, { desc: "System Explorer", link: "https://flare-systems-explorer.flare.network/" }, {desc:"Developer Hub", link:"https://dev.flare.network/"}].map((item, i) => (
          <Link href={item.link} key={i} className="flex items-center space-x-4 text-black/40 hover:text-[#C1003F] cursor-pointer">
            <p className="text-sm">{item.desc}</p>
            <GoArrowUpRight />
          </Link>
        ))}
      </div>
    </div>

  
    <div className="py-5 space-y-4">
      <h1 className="text-black/40 font-semibold">Flare</h1>
      <div className="space-y-5">
              {[{ desc: "Grants", link: "https://flare.network/resources/grants" }, { desc: "Careers", link: "https://flare.network/careers" }, { desc: "Newsletter", link: "https://flare.network/sign-up" }, { desc:"Whitepapers", link:"https://dev.flare.network/support/flr/"}].map((item, i) => (
          <Link href={item.link} key={i} className="text-black/40 hover:text-[#C1003F] cursor-pointer flex items-center space-x-4">
            <p className="text-sm">{item.desc}</p>
          </Link>
        ))}
        <Link href="#" className="flex items-center space-x-4 text-black/40 hover:text-[#C1003F] cursor-pointer">
          <p className="text-sm">FLR</p>
          <GoArrowUpRight />
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

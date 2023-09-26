"use client";
import { useState } from "react";
import Hero from "@components/Hero";
import Search from "@components/Search";
import Card from "@components/home/Card";
import Features from "@components/Features";
import AboutUS from "@components/home/AboutUs";
import Link from "next/link";
import FeaturesCardByLeul from "@components/FeaturesCardByLeul";


// Leul tending product list
import { tendingProductList } from "./utils/trendingProduct";


export const imgs = [
  {
    title: "fibeb",
    description:
      "Made from handwoven cotton. The use of cotton in the dress adds a touch of natural beauty and ensures breathability, making it ideal for the warm Ethiopian climate. ",
    price: "3000",
    src: "/tibeb.jpg",
  },
  {
    title: "Photo",
    description:
      "Made from handwoven cotton. The use of cotton in the dress adds a touch of natural beauty and ensures breathability, making it ideal for the warm Ethiopian climate. ",
    price: "3000",
    src: "/african.svg",
  },
  {
    title: "fibeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "3000",
    src: "/assets/images/cloth3.jpg",
  },
  {
    title: "aibeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "200",
    src: "/tibeb.jpg",
  },
  {
    title: "zibeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "6000",
    src: "/tibeb.jpg",
  },
];
export const img = [
  {
    id: 1,
    title: "fibeb",
    description:
      "Made from handwoven cotton. The use of cotton in the dress adds a touch of natural beauty and ensures breathability, making it ideal for the warm Ethiopian climate. ",
    price: "3000",
    src: "/tibeb.jpg",
  },
  {
    id: 2,

    title: "aibeb",
    description: "Cotton hand made new Ethiopian dress",

    price: "3000",
    src: "/tibeb.jpg",
  },
 
  {
    id: 3,
    
    title: "yibeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "3000",
    src: "/tibeb.jpg",
  },
];
const imgss = ["/assets/images/cloth3.jpg", "/assets/images/cloth2.jpg"];
const AbtUs = [
  {
    description:
      "Absolutely love the shopping experience.The variety of stylish options is incredible, and the website is so easy to navigate",
    name: "Yonas Belay",
    type: "Customer",
    src: "assets/images/AbtUs.jpg",
  },
  {
    description:
      "Absolutely love the shopping experience.The variety of stylish options is incredible, and the website is so easy to navigate",
    name: "Yonas Belay",
    type: "Customer",
    src: "assets/images/AbtUs.jpg",
  },
  {
    description:
      "Absolutely love the shopping experience.The variety of stylish options is incredible, and the website is so easy to navigate",
    name: "Yonas Belay",
    type: "Customer",
    src: "assets/images/AbtUs.jpg",
  },
];


// features list by leul 
const featuresList = [
  {
    id: "1",
    title: "Fast Delivery",
    img: "assets/leulIcons/delivery.svg",
    description: "Free and Fast delivery for you orders",
  },
  {
    id: "2",
    title: "Secure Payment",
    img: "assets/leulIcons/secure.svg",
    description: "Trusted payment integrations",
  },
  {
    id: "3",
    title: "Online Support",
    img: "assets/leulIcons/support.svg",
    description: "24/7 Online support",
  },
  {
    id: "4",
    title: "Easy Access",
    img: "assets/leulIcons/sell.svg",
    description: "Get easy access to all products"
  },
]

export default function Home() {

  const { trending } = tendingProductList





  // fuctionality of left and right icons
  const [count, setcount] = useState(null);
  const [Fcount, setFcount] = useState(null);
  const [Tcount, setTcount] = useState(null);
  const [Acount, setAcount] = useState(null);
  function previous() {
    setcount((prevcount) => prevcount - 1);
  }

  function next() {
    if (count == featuredItems.length - 3) {
      setcount(0);
    } else setcount((prevcount) => prevcount + 1);
  }
  // mobile version for featured items
  function FNext() {
    if (Fcount == featuredItems.length - 1) {
      setFcount(0);
    } else setFcount((prevcount) => prevcount + 1);
  }

  function TPrevious() {
    setTcount((prevcount) => prevcount - 1);
  }
  function TNext() {
    if (Tcount == trendingItems.length - 1) {
      setTcount(0);
    } else setTcount((prevcount) => prevcount + 1);
  }

  function APrevious() {
    setAcount((prevcount) => prevcount - 1);
  }
  function ANext() {
    if (Acount == aboutUs.length - 1) {
      setAcount(0);
    } else setAcount((prevcount) => prevcount + 1);
  }
  const [featuredItems, setFeaturedItems] = useState(imgs);
  const [trendingItems, setTrendingItems] = useState(img);
  const [aboutUs, setAboutUs] = useState(AbtUs);

  return (
    <div className="w-screen  ">
      {/* hero */}
      <div className='absolute top-0'>
          <Hero/>
      </div>

      {/* search bar */}
      <div className="w-2/4 mx-auto mt-10">
        <Search
          setFeaturedItems={setFeaturedItems}
          setTrendingItems={setTrendingItems}
          // setItems={setItems}
        />
      </div>

      {/* feature clothes*/}
      <section className="w-[90vw] mx-auto">
        <p className="font-bold mt-[2rem] sm:text-4xl text-[20px] ">
          Featured Clothes
        </p>

        <div className="flex justify-center">
          {/* left icon */}
          <button onClick={previous} className="text-[3rem] mt-[2rem]">
            <div>
              <img
                className="w-[2rem] sm:w-[2rem] rounded-[50%]"
                src="/lessthan.jpg"
              />
            </div>
          </button>
          <div className="hidden sm:flex overflow-hidden items-start w-[20rem] sm:w-[79rem] border-solid">
            {featuredItems.map(({ title, description, price, src }) => (
              <div
                className="transition-transform duration-500 transform"
                style={{ transform: `translateX(-${count * 100}%)` }}
              >
                <Card
                  key={title}
                  title={title}
                  description={description}
                  price={price}
                  curr={src}
                />
              </div>
            ))}
          </div>
          {/* mobile version */}
          <div className="sm:hidden flex overflow-hidden items-start w-[20rem] sm:w-[60rem] border-solid">
            {featuredItems.map(({ title, description, price, src }) => (
              <div
                className="transition-transform duration-500 transform"
                style={{ transform: `translateX(-${Fcount * 100}%)` }}
              >
                <Card
                  key={title}
                  title={title}
                  description={description}
                  price={price}
                  curr={src}
                />
              </div>
            ))}
          </div>
          {/* right icon */}
          <button onClick={FNext} className="sm:hidden text-[3rem] mt-[2rem]">
            <div>
              <img
                className="w-[2rem] sm:w-[2rem] rounded-[50%]"
                src="/greaterthan.jpg"
              />
            </div>
          </button>
          {/* desktop version */}
          {/* right icon */}
          <button
            onClick={next}
            className="hidden sm:flex text-[3rem] mt-[13rem]"
          >
            <div>
              <img
                className="w-[2rem] sm:w-[2rem] rounded-[50%]"
                src="/greaterthan.jpg"
              />
            </div>
          </button>
        </div>
      </section>

      {/* Lewana Featrues code */}
      {/* <div className="ml-[5rem] sm:ml-[8rem] mt-[2rem]">
        <p className="font-bold sm:text-4xl text-xl text-[#912c2c]">
          Ethiopian Traditional Clothing
          <br />
          <span className="ml-[7rem]">Collections</span>
        </p>
        <div className="flex w-[30%vw] sm:w-[50%vw] mt-[1rem] mx-[1rem] sm:mx-[6rem]">
          <img
            className="h-[11rem] sm:h-[21rem]"
            src="assets/images/cloth.jpg"
          />
          <div className="grid sm:flex">
            <div className="mr-[2rem] h-[5rem] sm:h-[10rem] w-[5rem] sm:w-[10rem]">
              {imgss.map((curr) => {
                return (
                  <img
                    className="mb-[1rem] ml-[1rem] h-full w-full "
                    src={curr}
                  />
                );
              })}
            </div>
            <div className="mt-[5rem] sm:mt-0 sm:flex hidden">
              {/* fetaures */}
      {/* <Features />
            </div>
          </div>
        </div>
      </div> */}

      {/* Leul Features code */}

      <div className="w-screen primaryBg h-[30vh] text-white bg-[#912c2c] flex items-center my-5">
        <div className="container grid grid-cols-4 gap-3 ">
          {featuresList.map((item) => {
            return (
              <FeaturesCardByLeul
                icon={item.img}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>

      <div className="sm:hidden mt-[1rem]">
        <Features horizontal={true} />
      </div>
      {/* desktop version */}
      {/* trending cloth */}
      <div className="container">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="#192c2c"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M352 144h112v112"
            />
            <path
              fill="none"
              stroke="#192c2c"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="m48 368l121.37-121.37a32 32 0 0 1 45.26 0l50.74 50.74a32 32 0 0 0 45.26 0L448 160"
            />
          </svg>
          <p className="sub_title">Trending Clothes</p>
        </div>
        <div className="grid grid-cols-3 ">
          {trending.map(({ id,title, description, price, src }) => (
              <Link href={`product/${id}`}>
                <Card
              key={title}
              title={title}
              description={description}
              price={price}
              curr={src}
            />
              </Link>
          ))}
        </div>
        <div className="w-full text-end">
          <Link
            href="/product"
            className="btn-ghost text-end flex justify-end items-center  text-[#912c2c] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="#192c2c"
                d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8A2.37 2.37 0 0 1 8 7.083A2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0a.5.5 0 0 1 1 0a1.375 1.375 0 0 0 2.75 0a.5.5 0 0 1 1 0a1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0a.5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"
              />
            </svg>
            Explore
          </Link>
        </div>
      </div>
      {/* mobile version */}
      <div className="sm:hidden flex ml-[1rem]">
        {/* left icon */}
        <button onClick={TPrevious} className="text-[3rem] mt-[2rem]">
          <div>
            <img
              className="w-[2rem] sm:w-[2rem] rounded-[50%]"
              src="/lessthan.jpg"
            />
          </div>
        </button>
        <div className="grid grid-cols-4 gap-x-5 container">
          {trendingItems.map(({ title, description, price, src }) => (
            <div
              className="transition-transform duration-500 transform"
              style={{ transform: `translateX(-${Tcount * 100}%)` }}
            >
              <Card
                key={title}
                title={title}
                description={description}
                price={price}
                curr={src}
              />
            </div>
          ))}
        </div>
        {/* right icon */}
        <button onClick={TNext} className="text-[3rem] mt-[2rem]">
          <div>
            <img
              className="w-[2rem] sm:w-[2rem] rounded-[50%]"
              src="/greaterthan.jpg"
            />
          </div>
        </button>
      </div>
      <div className="container">
        {/* desktop version */}
        {/* about us */}
        <div className="sub_title flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="#192c2c"
              d="M3.516 7a3.5 3.5 0 1 1-3.5 3.5L0 10a7 7 0 0 1 7-7v2a4.97 4.97 0 0 0-3.536 1.464a5.01 5.01 0 0 0-.497.578c.179-.028.362-.043.548-.043zm9 0a3.5 3.5 0 1 1-3.5 3.5L9 10a7 7 0 0 1 7-7v2a4.97 4.97 0 0 0-3.536 1.464a5.01 5.01 0 0 0-.497.578c.179-.028.362-.043.549-.043z"
            />
          </svg>
          <p>What are people saying about us?</p>
        </div>
        {/* <div className="mx-[2rem] sm:mx-[13rem]">
          <div className="hidden sm:flex items-start overflow-hidden sm:grid-cols-3 ">
            {AbtUs.map(({ description, name, type, src }) => (
              <AboutUS
                description={description}
                name={name}
                type={type}
                curr={src}
              />
            ))}
          </div>
        </div> */}

        <div className="hidden sm:flex items-start overflow-hidden sm:grid-cols-3 ">
          {AbtUs.map(({ description, name, type, src }) => (
            <AboutUS
              description={description}
              name={name}
              type={type}
              curr={src}
            />
          ))}
        </div>
      </div>
      {/* mobile version */}
      <div className="sm:hidden flex ml-[1rem]">
        {/* left icon */}
        <button onClick={APrevious} className="text-[3rem] mt-[2rem]">
          <div>
            <img
              className="w-[2rem] sm:w-[2rem] rounded-[50%]"
              src="/lessthan.jpg"
            />
          </div>
        </button>
        <div className="items-start overflow-hidden flex w-[20rem] sm:w-[60rem] border-solid">
          {aboutUs.map(({ description, name, type, src }) => (
            <div
              className="transition-transform duration-500 transform"
              style={{ transform: `translateX(-${Acount * 100}%)` }}
            >
              <AboutUS
                description={description}
                name={name}
                type={type}
                curr={src}
              />
            </div>
          ))}
        </div>
        {/* right icon */}
        <button onClick={ANext} className="text-[3rem] mt-[2rem]">
          <div>
            <img
              className="w-[2rem] sm:w-[2rem] rounded-[50%]"
              src="/greaterthan.jpg"
            />
          </div>
        </button>
      </div>
    </div>
  );
}

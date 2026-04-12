import Banner from "@/components/Banner";
import Menu from "@/components/Menu";
import Navber from "@/components/Navber";
import Image from "next/image";
import getFood from "../../public/foodData";

export default async function Home  ()  {
   const foods = await getFood()
  return (
    <>
    <Banner></Banner>
    <Menu foods={foods} ></Menu>
    
    </>
  );
}

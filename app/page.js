import FeatureSliderComp from "@/components/FeaturesSliderComp/FeatureSliderComp";
import AddNav from "@/components/HeaderComp/AddNav";
import MainNav from "@/components/HeaderComp/MainNav";
import TopNav from "@/components/HeaderComp/TopNav";
import MonthlyQuizComp from "@/components/MonthlyQuizComp/MonthlyQuizComp";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full ">
      <TopNav />
      <div className=" w-full max-w-5xl mx-auto hidden lg:flex ">
        <AddNav />
      </div>
      <MainNav />

      <div className=" w-full max-w-5xl mx-auto mt-5 ">
        <h1 className=" uppercase text-xl font-bold text-black">
          Featured Section
        </h1>

        <Separator className="my-4" />
        <FeatureSliderComp />
        <Separator className="my-4" />

        <MonthlyQuizComp/>
      </div>
    </div>
  );
}

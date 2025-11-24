import Link from "next/link";
import Hero from "@/components/HomeSection/Hero";
import Hero2 from "@/components/HomeSection/Hero2";
import Hero3 from "@/components/HomeSection/Hero3";
import Hero4 from "@/components/HomeSection/Hero4";
import Hero5 from "@/components/HomeSection/Hero5";
import Hero6 from "@/components/HomeSection/Hero6";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Hero2/>
        <Hero3/>
        <Hero6 />
   <Hero4 />
   <Hero5 />   
       
    </main>
  );
}

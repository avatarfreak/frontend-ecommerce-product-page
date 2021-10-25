import Footer from "@/component/footer";
import { Header } from "@/component/header";
import MainContent from "@/component/main";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;

import LandingPage from "@/components/LandingPage";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <>
      <LandingPage />
      <div className="-mt-14 bg-[#F1F1F1] px-4">
        <Posts />
      </div>
    </>
  );
}

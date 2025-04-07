import ClientSatisfactions from "../components/ClientSatisfactions";
import Hero from "../components/Hero";
import NoPlaceLikeHome from "../components/NoPlaceLikeHome";

export default function Home() {
  return (
    <>
      <Hero />
      <NoPlaceLikeHome />
      <div className="clear-both overflow-hidden"></div>
      <ClientSatisfactions />
    </>
  );
}

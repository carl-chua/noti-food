import Header from "../components/Header";
import Footer from "../components/Footer";
import InformationCard from "../components/InformationCard";

export default function Main() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InformationCard />
      </div>
      <Footer />
    </div>
  );
}

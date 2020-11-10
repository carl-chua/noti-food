import Header from "../components/Header";
import Footer from "../components/Footer";
import InformationCard2 from "../components/InformationCard2";

export default function Main() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InformationCard2 />
      </div>
      <Footer />
    </div>
  );
}

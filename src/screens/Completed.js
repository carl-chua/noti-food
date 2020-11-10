import Header from "../components/Header";
import Footer from "../components/Footer";
import InformationCard3 from "../components/InformationCard3";

export default function Main() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InformationCard3 />
      </div>
    </div>
  );
}

import Header from "../components/Header";
import Footer from "../components/Footer";
import InformationCard2 from "../components/InformationCard2";

export default function Main() {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InformationCard2 />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "28px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

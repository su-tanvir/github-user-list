import { useNavigate } from "react-router-dom";
import Header from "../../components/Title";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <button
        style={{
          width: "100%",
          background: "transparent",
          color: "#fff",
          border: "none",
          textDecoration: "underline",
          textAlign: "center",
          fontSize: "16px",
        }}
        onClick={() => navigate("/")}
      >
        Go Homepage
      </button>
    </>
  );
}

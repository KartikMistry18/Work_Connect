import Hero from "../components/Hero";
import Works from "../components/Works";
import Services from "../components/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Works />
      <Services />
      {/* <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="ComplaintBot"
        agent-id="facd2057-66f2-4b77-a3b1-4ab31f250072"
        language-code="en"
      ></df-messenger> */}
    </div>
  );
}

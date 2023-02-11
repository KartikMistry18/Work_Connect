import Hero from "../components/Hero";
import Works from "../components/Works";

export default function Home() {
  return (
    <div>
      <Hero />
      <Works />
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="WorkerToClientBot"
        agent-id="5291fb65-78f7-477c-874a-0feea40a00f9"
        language-code="en"
      ></df-messenger>
    </div>
  );
}

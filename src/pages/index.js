import Hero from "../components/Hero";
import Works from "../components/Works";
import Services from "../components/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Works />
      <Services />
<<<<<<< Updated upstream
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="ComplaintBot"
        agent-id="facd2057-66f2-4b77-a3b1-4ab31f250072"
        language-code="en"
      ></df-messenger>
=======
      <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/5291fb65-78f7-477c-874a-0feea40a00f9">
</iframe>
>>>>>>> Stashed changes
    </div>
  );
}

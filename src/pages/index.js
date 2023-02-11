import Hero from "../components/Hero";
import Works from "../components/Works";

export default function Home() {
  return (
    <div>
      <Hero />
      <Works />
      <iframe
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/5291fb65-78f7-477c-874a-0feea40a00f9"
      ></iframe>
    </div>
  );
}

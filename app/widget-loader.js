// app/widget-loader.ts
import ReactDOM from "react-dom/client";
import ChatInterface from "~/routes/widget";

const mountChatWidget = () => {
  // Create a container div for the widget
  const container = document.createElement("div");
  container.id = "chat-widget-container";
  container.style.position = "fixed";
  container.style.bottom = "20px";
  container.style.right = "20px";
  container.style.zIndex = "1000";
  container.style.width = "300px";
  container.style.maxHeight = "80vh";
  container.style.overflowY = "auto";

  document.body.appendChild(container);

  const root = ReactDOM.createRoot(container);

  root.render(<ChatInterface chatContent={[]} />);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountChatWidget);
} else {
  mountChatWidget();
}

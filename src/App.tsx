// App.tsx
import { Map } from "./Map";

export const App = () => (
  <div style={{ padding: 10 }}>
    <h1 style={{ fontSize: 24, color: "rgb(0, 93, 219)", marginBottom: 20 }}>
      My Super Map
    </h1>

    <Map />

    <p style={{ marginTop: 20 }}>Done with 💙</p>
  </div>
);

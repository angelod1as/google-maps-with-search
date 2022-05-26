// App.tsx
import { Map } from "./Map"
import { Search } from "./Search"

export const App = () => (
  <div style={{ padding: 10 }}>
    <h1 style={{ fontSize: 24, color: "rgb(0, 93, 219)", marginBottom: 20 }}>
      My Super Map
    </h1>

    <Search />
    <Map />

    <p style={{ marginTop: 20 }}>Done with 💙</p>
  </div>
)

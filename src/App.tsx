// App.tsx
import { useState } from "react"
import { Map } from "./Map"
import { Search } from "./Search"

export type Coordinates = google.maps.LatLngLiteral | google.maps.LatLng
export type SetCoordinates = (coordinates: Coordinates) => void

const defaultCoordinates: Coordinates = {
  lat: 48.136297,
  lng: 11.419739,
}

export const App = () => {
  const [coordinates, setCoordinates] =
    useState<Coordinates>(defaultCoordinates)

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ fontSize: 24, color: "rgb(0, 93, 219)", marginBottom: 20 }}>
        My Super Map
      </h1>

      <Search setCoordinates={setCoordinates} />
      <Map coordinates={coordinates} />

      <p style={{ marginTop: 20 }}>Done with 💙</p>
    </div>
  )
}

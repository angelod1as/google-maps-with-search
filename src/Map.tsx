// Map.tsx
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import { MapComponent } from "./MapComponent"

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <div>Spinner</div>
    case Status.FAILURE:
      return <div>Error component</div>
    case Status.SUCCESS:
      // These are the coordinates of our beautiful office, in Munich
      const center = new window.google.maps.LatLng(48.136297, 11.419739)
      return <MapComponent center={center} zoom={14} />
  }
}

export const Map = () => {
  return <Wrapper apiKey="API_KEY" render={render} />
}

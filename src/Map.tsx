// Map.tsx
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import { Coordinates } from "./App"
import { MapComponent } from "./MapComponent"

const render = (status: Status, coordinates: Coordinates) => {
  switch (status) {
    case Status.LOADING:
      return <div>Spinner</div>
    case Status.FAILURE:
      return <div>Error component</div>
    case Status.SUCCESS:
      return <MapComponent center={coordinates} zoom={14} />
  }
}

type MapProps = {
  coordinates: Coordinates
}

export const Map = ({ coordinates }: MapProps) => {
  return (
    <Wrapper
      apiKey="API_KEY"
      render={(status) => render(status, coordinates)}
      libraries={["places"]}
    />
  )
}

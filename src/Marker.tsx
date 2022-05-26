import { useEffect, useState } from "react"
import { Coordinates } from "./App"

// Marker.tsx
type MarkerProps = {
  coordinates: Coordinates
  map?: google.maps.Map
}

export const Marker = ({ map, coordinates }: MarkerProps) => {
  const [marker, setMarker] = useState<google.maps.Marker>()

  // We do this to get lat and lng in the correct format from Google API
  const { lat, lng } = new google.maps.LatLng(coordinates)

  // Creates an empty Marker when component mounts
  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker())
    }
  }, [])

  useEffect(() => {
    if (marker) {
      // remove the marker if the coordinates doesn't exist
      if (!lat && !lng) {
        return marker.setMap(null)
      }

      // Updates the marker
      marker.setOptions({
        map,
        position: { lat: lat(), lng: lng() },
      })
    }
  }, [lat, lng, map, marker])

  // The component returns null as google.maps.Map manages the DOM manipulation.
  return null
}

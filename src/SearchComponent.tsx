// SearchComponent.tsx
import { useEffect, useRef } from "react"
import { SetCoordinates } from "./App"

type SearchComponentProps = {
  setCoordinates: SetCoordinates
}

export function SearchComponent({ setCoordinates }: SearchComponentProps) {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        ref.current,
        {
          types: ["geocode"],
          componentRestrictions: { country: "de" },
        },
      )
      // Here we set the only field we want back from Google, reducing cost
      autocomplete.setFields(["geometry"])
      // Here we add the listener, specifically to the event "place_changed"
      autocomplete.addListener("place_changed", () => {
        // Here we get the returned place
        const place = autocomplete.getPlace()

        // Put lat and lng into consts to make it easier to read
        const lat = place.geometry?.location?.lat()
        const lng = place.geometry?.location?.lng()

        if (lat && lng) {
          // Return if they exist
          return setCoordinates({
            lat,
            lng,
          })
        }
      })
    }
    // No need for any dep here, as the listener is set by Google Maps API
  }, [])

  return <input ref={ref} />
}

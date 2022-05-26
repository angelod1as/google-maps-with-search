// SearchComponent.tsx
import { useEffect, useRef } from "react"

export function SearchComponent() {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref.current) {
      new window.google.maps.places.Autocomplete(ref.current, {
        types: ["geocode"],
      })
    }
  }, [])

  return <input ref={ref} />
}

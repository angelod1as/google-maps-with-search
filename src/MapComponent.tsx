// MapComponent.tsx
import { useEffect, useRef } from "react"
import { Coordinates } from "./App"

export function MapComponent({
  center,
  zoom,
}: {
  center: Coordinates
  zoom: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
        fullscreenControl: false,
        mapTypeControl: false,
        panControl: false,
        streetViewControl: false,
      })
    }
  }, [])

  return <div style={{ height: 300, width: "100%" }} ref={ref} />
}

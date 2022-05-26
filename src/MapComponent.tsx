// MapComponent.tsx
import { useEffect, useRef, useState } from "react"
import { Coordinates } from "./App"
import { Marker } from "./Marker"

export function MapComponent({
  center,
  zoom,
}: {
  center: Coordinates
  zoom: number
}) {
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const newMap = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        fullscreenControl: false,
        mapTypeControl: false,
        panControl: false,
        streetViewControl: false,
      })
      setMap(newMap)
    }
  }, [])

  useEffect(() => {
    if (map) {
      map.setCenter(center)
      map.setZoom(zoom)
    }
  }, [center, map, zoom])

  return (
    <div style={{ height: 300, width: "100%" }} ref={ref}>
      {map && <Marker coordinates={center} map={map} />}
    </div>
  )
}

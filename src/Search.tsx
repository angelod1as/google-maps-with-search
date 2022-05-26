// Search.tsx
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import { SetCoordinates } from "./App"
import { SearchComponent } from "./SearchComponent"

const render = (status: Status, setCoordinates: SetCoordinates) => {
  switch (status) {
    case Status.LOADING:
      return <div>Different Spinner</div>
    case Status.FAILURE:
      return <div>Different Error component</div>
    case Status.SUCCESS:
      return <SearchComponent setCoordinates={setCoordinates} />
  }
}

type SearchProps = {
  setCoordinates: SetCoordinates
}

export const Search = ({ setCoordinates }: SearchProps) => {
  return (
    <Wrapper
      apiKey="API_KEY"
      render={(status) => render(status, setCoordinates)}
      libraries={["places"]}
    />
  )
}

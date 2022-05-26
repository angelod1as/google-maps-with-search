// Search.tsx
import { Wrapper, Status } from "@googlemaps/react-wrapper"

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <div>Different Spinner</div>
    case Status.FAILURE:
      return <div>Different Error component</div>
    case Status.SUCCESS:
      return <div>My location search</div>
  }
}

export const Search = () => {
  return <Wrapper apiKey="API_KEY" render={render} libraries={["places"]} />
}

// Map.tsx
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <div>Spinner</div>;
    case Status.FAILURE:
      return <div>Error component</div>;
    case Status.SUCCESS:
      return <div>My Map</div>;
  }
};

export const Map = () => {
  return <Wrapper apiKey="API_KEY" render={render} />;
};

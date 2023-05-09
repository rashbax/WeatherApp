
import RMain from "./ResponsiveApp/RMain";
import '../src/WeatherApp/Style.css'
import { Offline, Online } from "react-detect-offline";

function App() {
 
  return (
    <>
    <Online>
    <div className="App">
      <RMain/>
    </div>
    </Online>
    <Offline>
      <h3>Error</h3>
    </Offline>
    </>
  );
}

export default App;

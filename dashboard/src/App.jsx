import React, { useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoute from "./router/routes/publicRoute.jsx";
import { getRoute } from "./router/routes/index.jsx";
function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoute]);
  useEffect(() => {
    const route = getRoute();
    setAllRoutes([...allRoutes, route]);
  }, [])
  return <Router allRoute={allRoutes}/>
}

export default App

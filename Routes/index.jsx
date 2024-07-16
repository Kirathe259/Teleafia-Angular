//import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import NotFoundPage from "../pages/NotFoundPage";



function AppRoutes() {
	return (
		<Router>
			<Routes>
      <Route path="/" element={<SignupPage />} />
			<Route path="*" element={<NotFoundPage />} />
			
      
       
        {/*Admin*/}
			
        {/*doctor*/}
       
			</Routes>
		</Router>
	);
}

export default AppRoutes;


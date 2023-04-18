import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackProvider from "./components/FeedbackProvider";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import AboutIconLink from "./components/AboutIconLink";

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route
					path="/"
					element={
						<>
							<div className="container">
								<FeedbackProvider>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</FeedbackProvider>
							</div>
							<AboutIconLink />
						</>
					}
				></Route>
				<Route
					path="/about"
					element={
						<div className="container">
							<About />
						</div>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

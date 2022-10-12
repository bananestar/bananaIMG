import './App.css';
import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layout/base/base-layout';
import HomePage from './pages/base/home/home';
import PhotoPage from './pages/base/photo/photo';
import VideoPage from './pages/base/video/video';
import CollectionPage from './pages/base/collection/collection';

function App() {
	return (
		<>
			<Routes>
				<Route path="/">
					<Route path="" element={<BaseLayout />}>
						<Route index element={<HomePage />} />
						<Route path='/photo' element={<PhotoPage />} />
						<Route path='/video' element={<VideoPage />} />
						<Route path='/collection' element={<CollectionPage />} />
					</Route>
					<Route path="/admin" element={<BaseLayout />}>
						<Route index element={<HomePage />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;

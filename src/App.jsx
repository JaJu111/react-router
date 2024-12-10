import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import SinglePage from './pages/SinglePage';
import EditPost from './pages/EditPost';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='about' element={<AboutPage />} />
					<Route path='posts' element={<BlogPage />} />
					<Route path='posts/:id' element={<SinglePage />} />
					<Route path='posts/:id/edit' element={<EditPost />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	)
}
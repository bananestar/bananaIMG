import { Outlet } from 'react-router-dom';
import Footer from '../../components/base/footer/footer';
import Header from '../../components/base/header/header';
import NavMenu from '../../components/base/nav-menu/nav-menu';
import style from './layout.module.scss';

const BaseLayout = () => (
	<div className={style.baseMain}>
		<Header />
		<NavMenu />
		<main className={style.baseContent}>
			{/* ↓ Element de routing via React-router */}
			<Outlet />
		</main>
		<Footer />
	</div>
);

export default BaseLayout;

import { Home } from '../pages/home';
import { Character } from '../pages/character';
import { Header } from '../plantilla/header';
import { Error404 } from '../pages/error404';
import { gethash } from '../utils/gethash';
import { resolveRoutes } from '../utils/resolveRoutes';
import { Routes } from '../models/models';
import { Contact } from '../pages/contact';

const routes: Routes = {
	'/': Home,
	'/:id': Character,
	'/contact': Contact,
};

export const router = async () => {
	const header = null || document.getElementById('header');
	const content = null || document.getElementById('content');
	if (header) header.innerHTML = await Header();
	let hash = gethash();
	let route = await resolveRoutes(hash);
	let render = routes[route as keyof Routes]
		? routes[route as keyof Routes]
		: Error404;
	if (content) content.innerHTML = await render();
};

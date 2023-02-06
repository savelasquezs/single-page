import { getAll } from '../utils/getData';
import '../styles/home.css';
export const Home = async () => {
	const characters = await getAll();
	const view = `
        <div class="Characters">
            ${characters
							.map(
								(character) => `
            <article class="Character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="image of ${character.name}">
                    <h2>${character.name}</h2>
                </a>
            </article> 
            `
							)
							.join('')}
        <div>
    `;
	return view;
};

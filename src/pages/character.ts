import { getOne } from '../utils/getData';
import { gethash } from '../utils/gethash';
import '../styles/character.css';

export const Character = async () => {
	const id = parseInt(gethash());
	const character = await getOne(id);

	const view = `
    <div class="Characters-inner">
        <article class="Character-card">
            <img src="${character.image}" alt"name">
            <h2>${character.name}</h2>
            <h3>Episoders:  ${character.episode.length}</h3>
            <h3>Status:     ${character.status}</h3>
            <h3>Species:    ${character.species}</h3>
            <h3>Gender:     ${character.gender}</h3>
            <h3>Origin:     ${character.origin.name}</h3>
         
        </article>
    </div>
    `;
	return view;
};

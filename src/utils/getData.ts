import axios from 'axios';
import { Character, RootObject } from '../models/models';

const api = axios.create({
	baseURL: import.meta.env.VITE_API,
});

export async function getOne(id: Character['id']) {
	const apiUrl = id ? `/character/${id}` : '/character';
	const { data } = await api<Character>(apiUrl);
	return data;
}

export async function getAll() {
	const { data } = await api<RootObject>('/character');
	const personajes = data.results;
	return personajes;
}

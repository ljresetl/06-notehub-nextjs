import axios from 'axios';

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const instance = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchNotes = async ({ page, perPage, search }: { page: number; perPage: number; search: string }) => {
  const { data } = await instance.get('/notes', { params: { page, perPage, search } });
  return data;
};

export const fetchNoteById = async (id: string) => {
  const { data } = await instance.get(`/notes/${id}`);
  return data;
};

export const createNote = async (note: { title: string; content: string; tag: string }) => {
  const { data } = await instance.post('/notes', note);
  return data;
};

export const deleteNote = async (id: string) => {
  const { data } = await instance.delete(`/notes/${id}`);
  return data;
};

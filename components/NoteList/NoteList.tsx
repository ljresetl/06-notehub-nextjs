'use client';

import Link from 'next/link';
import css from './NoteList.module.css';

interface Note {
  id: string;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
}

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <h3 className={css.title}>{note.title}</h3>
          <p className={css.content}>{note.content}</p>
          <p className={css.tag}>Tag: {note.tag}</p>
          <p className={css.date}>Created: {new Date(note.createdAt).toLocaleDateString()}</p>
          <div className={css.footer}>
            <Link href={`/notes/${note.id}`} className={css.link}>
              View details
            </Link>
            <button className={css.button}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

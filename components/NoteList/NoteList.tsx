'use client';

import Link from 'next/link';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNote } from '@/lib/api';
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
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });

  const handleDelete = (id: string) => {
    mutate(id);
  };

  return (
    <ul className={css.list}>
      {notes.map((note) => {
        const formattedDate = new Date(note.createdAt).toISOString().split('T')[0];

        return (
          <li key={note.id} className={css.listItem}>
            <h3 className={css.title}>{note.title}</h3>
            <p className={css.content}>{note.content}</p>
            <p className={css.tag}>Tag: {note.tag}</p>
            <p className={css.date}>Created: {formattedDate}</p>
            <div className={css.footer}>
              <Link href={`/notes/${note.id}`} className={css.link}>
                View details
              </Link>
              <button className={css.button} onClick={() => handleDelete(note.id)}>
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

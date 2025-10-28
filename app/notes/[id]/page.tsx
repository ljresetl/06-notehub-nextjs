import NoteDetailsClient from './NoteDetails.client';

export default async function NoteDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // ✅ розпаковуємо Promise

  return <NoteDetailsClient id={id} />;
}

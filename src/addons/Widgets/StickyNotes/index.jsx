import { useState, useEffect } from 'react';
import { cacheStorageSave, cacheStorageRead } from 'utils/cache';
import StickyNotesComponent from './stickyNotesComponent';

function StickyNotes({ name, height }) {
  const [note, setNote] = useState(null);

  useEffect(() => {
    (async () => {
      const content = await cacheStorageRead(`widgetContent-${name}`);
      if (content) {
        setNote(content.data);
      }
    })();
  }, []);

  useEffect(() => {
    if (note != null) {
      (async () => {
        await cacheStorageSave(`widgetContent-${name}`, note);
      })();
    }
  }, [note]);

  return (
    <StickyNotesComponent height={height} note={note ?? ''} setNote={setNote} />
  );
}
export default StickyNotes;

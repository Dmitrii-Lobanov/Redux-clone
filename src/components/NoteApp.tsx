import React from 'react';
import { INote } from '../types';
import NoteEditor from './NoteEditor';
import NoteList from './NoteList';

interface IProps {
  notes: INote[];
  openNoteId?: number | null;
  onAddNote?: () => void;
  onChangeNote: (id: number, content: string) => void;
  onOpenNote: (id: number) => void;
  onCloseNote: () => void;  
}

const NoteApp: React.FC<IProps> = ({ 
  notes, 
  openNoteId, 
  onAddNote, 
  onChangeNote, 
  onOpenNote, 
  onCloseNote 
}): JSX.Element => (
  <div>
    {
      openNoteId ?
        <NoteEditor note={notes[openNoteId]} onChangeNote={onChangeNote} onCloseNote={onCloseNote} /> :
        <div>
          <NoteList notes={notes} onOpenNote={onOpenNote} />
          <button className="editor-button" onClick={onAddNote}>New Note</button>
        </div>
    }
  </div>
);

export default NoteApp;
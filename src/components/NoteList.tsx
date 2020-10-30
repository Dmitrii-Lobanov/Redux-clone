import React from 'react';
import { INote } from '../types';
import NoteLink from './NoteLink';

interface IProps {
  notes: INote[];
  onOpenNote: (id: number) => void;
}

const NoteList: React.FC<IProps> = ({ notes = [], onOpenNote }): JSX.Element => (
  <ul className="note-list">
    {
      Object.keys(notes).map((id: string): JSX.Element => 
        <NoteLink key={id} note={notes[Number(id)]} onOpenNote={onOpenNote} />
      )
    }
  </ul>
)

export default NoteList;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { INote } from '../types';
import NoteTitle from './NoteTitle';

interface IProps {
  note: INote;
  onOpenNote: (id: number) => void;
}

const NoteLink: React.FC<IProps> = ({ note, onOpenNote }): JSX.Element => (
  <li className="note-list-item">
    <a href="#" onClick={(): void => onOpenNote(note?.id)}>
      <NoteTitle note={note} />
    </a>
  </li>
)

export default NoteLink;
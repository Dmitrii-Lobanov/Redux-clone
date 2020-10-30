import React from 'react';
import { INote } from '../types';

interface IProps {
  note: INote;
}

const NoteTitle: React.FC<IProps> = ({ note }): JSX.Element => {
  const title: string = note?.content.split('\n')[0].replace(/^\s+|\s+$/g, '');
  if (!title?.length) {
    return <i>Untitled</i>;
  }

  return <span>{title}</span>
}

export default NoteTitle;
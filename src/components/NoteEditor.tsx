import React, { ChangeEvent } from 'react';
import { INote } from '../types';

interface IProps {
  note: INote;
  onChangeNote: (id: number, content: string) => void;
  onCloseNote: () => void;
}

const NoteEditor: React.FC<IProps> = ({ note, onChangeNote, onCloseNote }): JSX.Element => (
  <div>
    <div>
      <textarea 
        className="editor-content"
        autoFocus
        value={note?.content}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChangeNote(note?.id, e.target.value)}
        rows={10}
        cols={80}
      />
    </div>
    <button className="editor-button" onClick={onCloseNote}>Close</button>
  </div>
)

export default NoteEditor;
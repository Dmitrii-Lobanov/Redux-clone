export interface IReduxInitialState {
  nextNodeId: number,
  notes: INote[]
}

export interface INote {
  id: number,
  content: string
}
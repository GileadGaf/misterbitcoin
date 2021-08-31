export class Move {
  constructor(
    public toId: string,
    public toName: string,
    public fromId: string,
    public fromName: string,
    public amount: number,
    public transferReason:string='',
    public at: number,
  ) {}
}

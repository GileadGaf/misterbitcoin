import { Move } from './move.model';

export class User {
  constructor(
    public _id?: string,
    public name: string = '',
    public email: string = '',
    public phone: string = '',
    public coins: number = 100,
    public moves: Move[] = [],
    public password?:String
  ) {}
}

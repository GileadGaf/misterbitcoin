import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { UtilitiesService } from './utilities.service';
import { User } from '../models/user.modal';
import { Move } from '../models/move.model';

const USERS: User[] = [
  {
    _id: '5a56640269f443a5d64b32ca',
    name: 'Ochoa Hyde',
    email: 'ochoahyde@renovize.com',
    phone: '+1 (968) 593-3824',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a5664025f6ae9aa24a99fde',
    name: 'Hallie Mclean',
    email: 'halliemclean@renovize.com',
    phone: '+1 (948) 464-2888',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a56640252d6acddd183d319',
    name: 'Parsons Norris',
    email: 'parsonsnorris@renovize.com',
    phone: '+1 (958) 502-3495',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a566402ed1cf349f0b47b4d',
    name: 'Rachel Lowe',
    email: 'rachellowe@renovize.com',
    phone: '+1 (911) 475-2312',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a566402abce24c6bfe4699d',
    name: 'Dominique Soto',
    email: 'dominiquesoto@renovize.com',
    phone: '+1 (807) 551-3258',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a566402a6499c1d4da9220a',
    name: 'Shana Pope',
    email: 'shanapope@renovize.com',
    phone: '+1 (970) 527-3082',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a566402f90ae30e97f990db',
    name: 'Faulkner Flores',
    email: 'faulknerflores@renovize.com',
    phone: '+1 (952) 501-2678',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a5664027bae84ef280ffbdf',
    name: 'Holder Bean',
    email: 'holderbean@renovize.com',
    phone: '+1 (989) 503-2663',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a566402e3b846c5f6aec652',
    name: 'Rosanne Shelton',
    email: 'rosanneshelton@renovize.com',
    phone: '+1 (968) 454-3851',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a56640272c7dcdf59c3d411',
    name: 'Pamela Nolan',
    email: 'pamelanolan@renovize.com',
    phone: '+1 (986) 545-2166',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a5664029a8dd82a6178b15f',
    name: 'Roy Cantu',
    email: 'roycantu@renovize.com',
    phone: '+1 (929) 571-2295',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a5664028c096d08eeb13a8a',
    name: 'Ollie Christian',
    email: 'olliechristian@renovize.com',
    phone: '+1 (977) 419-3550',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a5664026c53582bb9ebe9d1',
    name: 'Nguyen Walls',
    email: 'nguyenwalls@renovize.com',
    phone: '+1 (963) 471-3181',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a56640298ab77236845b82b',

    name: 'Glenna Santana',
    email: 'glennasantana@renovize.com',
    phone: '+1 (860) 467-2376',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a56640208fba3e8ecb97305',
    name: 'Malone Clark',
    email: 'maloneclark@renovize.com',
    phone: '+1 (818) 565-2557',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a566402abb3146207bc4ec5',
    name: 'Floyd Rutledge',
    email: 'floydrutledge@renovize.com',
    phone: '+1 (807) 597-3629',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a56640298500fead8cb1ee5',
    name: 'Grace James',
    email: 'gracejames@renovize.com',
    phone: '+1 (959) 525-2529',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a56640243427b8f8445231e',
    name: 'Tanner Gates',
    email: 'tannergates@renovize.com',
    phone: '+1 (978) 591-2291',
    coins: 100,
    moves: [],
    contacts: [],
  },
  {
    _id: '5a5664025c3abdad6f5e098c',
    name: 'Lilly Conner',
    email: 'lillyconner@renovize.com',
    phone: '+1 (842) 587-3812',
    coins: 100,
    moves: [],
    contacts: [],
  },
];

const USERS_KEY = 'userDb';
const CURR_USER = 'loggedinUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //mock the server
  private _usersDb: User[] = this._loadFromStorage(USERS_KEY) || USERS;

  private _users$ = new BehaviorSubject<User[]>([]);
  public users$ = this._users$.asObservable();

  constructor(private utilService: UtilitiesService) {}

  public loadUsers(filterBy?: { term: string }): void {
    //save and load from storage
    let users = [...this._usersDb];
    const loggedinUser = this.getLoggedinUser();
    if (loggedinUser) {
      users=users.filter(user => user._id !== loggedinUser._id);
    }
    if (filterBy && filterBy.term) {
      users = this._filter(users, filterBy.term);
    }
    this._users$.next(this._sort(users));
  }

  public getUserById(id: string): Observable<User> {
    //mock the server work
    const user = this._usersDb.find((contact) => contact._id === id);
    //return an observable
    return user
      ? of({ ...user })
      : Observable.throw(`Contact id ${id} not found!`);
  }

  public async deleteContact(id: string) {
    //mock the server work
    this._usersDb = this._usersDb.filter((user) => user._id !== id);
    this._saveToStorage(USERS_KEY, this._usersDb);
    // change the observable data in the service - let all the subscribers know
    this._users$.next(this._usersDb);
  }

  public getEmptyUser(): User {
    return new User();
  }
  
  public getLoggedinUser() {
    return this._loadFromStorage(CURR_USER);
  }

  public signup(user: User) {
    this._saveToStorage(CURR_USER, user);
  }

  public async login(userId) {
    const user = await this.getUserById(userId).toPromise();
    this._saveToStorage(CURR_USER, user);
  }

  public logout() {
    this._saveToStorage(CURR_USER, null);
  }

  public async addNewMove(move: Move) {
    const loggedinUser = this.getLoggedinUser();
    const contact = await this.getUserById(move.toId).toPromise();
    if (!loggedinUser || !contact) return;
    if (loggedinUser.coins >= move.amount) {
      loggedinUser.moves.push(move);
      loggedinUser.coins -= move.amount;
      contact.coins += move.amount;
      this._saveToStorage(CURR_USER, loggedinUser);
      this.saveUser(loggedinUser);
      this.saveUser(contact);
      return loggedinUser;
    }
  }


  public saveUser(user: User) {
    const savedUser = user._id? this._updateUser(user) : this._addUser(user);
    this._saveToStorage(USERS_KEY, this._usersDb);
    return savedUser;
    // const savedContact = contact._id
    //   ? this._updateContact(contact)
    //   : this._addContact(contact);
    // this.saveToStorage();
    // return savedContact;
  }

  private _addUser(user: User) {
    const newUser = new User(
      this.utilService.makeId(),
      user.name,
      user.email,
      user.phone
    );
    //Mock the server work
    this._usersDb.push(newUser);
       // Change the observable data in the service - let all the subscribers know
    this._users$.next(this._sort(this._usersDb));
    return of(newUser);
  }

  private _updateUser(user: User) {
    //Mock the server work
    this._usersDb = this._usersDb.map((currUser) =>
      currUser._id === user._id ? user : currUser
    );
       // Change the observable data in the service - let all the subscribers know
    this._users$.next(this._sort(this._usersDb));
    return of(user);
  }

  private _sort(users: User[]): User[] {
    return users.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    });
  }

  private _filter(users: User[], term: string) {
    term = term.toLocaleLowerCase();
    return users.filter((user) => {
      return (
        user.name.toLocaleLowerCase().includes(term) ||
        user.phone.toLocaleLowerCase().includes(term) ||
        user.email.toLocaleLowerCase().includes(term)
      );
    });
  }

  private _loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }

  private _saveToStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
  }
}

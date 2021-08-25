import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { UtilitiesService } from './utilities.service';
import { Contact } from '../models/contact.model';
import { User } from '../models/user.modal';

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

const CONTACTS_KEY = 'contactDb';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  //mock the server
  private _contactsDb: User[] = this._loadFromStorage() || USERS;

  private _contacts$ = new BehaviorSubject<User[]>([]);
  public contacts$ = this._contacts$.asObservable();

  constructor(private utilService: UtilitiesService) {}

  public loadContacts(filterBy?: { term: string }): void {
    //save and load from storage
    let contacts = this._contactsDb;
    if (filterBy && filterBy.term) {
      contacts = this._filter(contacts, filterBy.term);
    }
    this._contacts$.next(this._sort(contacts));
  }

  public getContactById(id: string): Observable<User> {
    //mock the server work
    const contact = this._contactsDb.find((contact) => contact._id === id);
    debugger;
    //return an observable
    return contact
      ? of({ ...contact })
      : Observable.throw(`Contact id ${id} not found!`);
  }

  public async deleteContact(id: string) {
    //mock the server work
    this._contactsDb = this._contactsDb.filter((contact) => contact._id !== id);
    this.saveToStorage();
    // change the observable data in the service - let all the subscribers know
    this._contacts$.next(this._contactsDb);
  }

  public getEmptyContact() {
    return { _id: '', name: '', email: '', phone: '' };
  }

  public saveContact(contact: User) {
    const savedContact = contact._id
      ? this._updateContact(contact)
      : this._addContact(contact);
    this.saveToStorage();
    return savedContact;
  }

  private _updateContact(contact: User) {
    //mock the server work
    this._contactsDb = this._contactsDb.map((c) =>
      contact._id === c._id ? contact : c
    );
    // change the observable data in the service - let all the subscribers know
    this._contacts$.next(this._sort(this._contactsDb));
    return of(contact);
  }

  private _addContact(contact: User) {
    //mock the server work
    const newContact = new User(
      this.utilService.makeId(),
      contact.name,
      contact.email,
      contact.phone
    );
    this._contactsDb.push(newContact);
    this._contacts$.next(this._sort(this._contactsDb));
    return of(contact);
  }

  private _sort(contacts: User[]): User[] {
    return contacts.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    });
  }

  private _filter(contacts: User[], term: string) {
    term = term.toLocaleLowerCase();
    return contacts.filter((contact) => {
      return (
        contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
      );
    });
  }

  private _loadFromStorage() {
    return JSON.parse(localStorage.getItem(CONTACTS_KEY) || 'null');
  }

  public saveToStorage() {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(this._contactsDb));
  }
}

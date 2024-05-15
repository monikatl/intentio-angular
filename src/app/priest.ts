import { Function } from './function';

export class Priest {
  id: number;
  firstName: string;
  name: string;
  priestFunction: Function;
  email: string;

  constructor(id: number, firstName: string, name: string, priestFunction: Function, email: string) {
    this.firstName = firstName;
    this.id = id;
    this.name = name;
    this.priestFunction = priestFunction;
    this.email = email;
  }
    
}
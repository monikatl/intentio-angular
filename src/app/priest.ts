import { Function } from './function';

export class Priest {
  firstName: string;
  name: string;
  priestFunction: Function;
  email: string;

  constructor(firstName: string, name: string, priestFunction: Function, email: string) {
    this.firstName = firstName;
    this.name = name;
    this.priestFunction = priestFunction;
    this.email = email;
  }
    
}
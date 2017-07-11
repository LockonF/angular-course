export class Contact {
  private _firstName: string;
  private _lastName: string;
  private _avatarUrl: string;
  private _phone: string;
  private _birthday: Date;

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get avatarUrl(): string {
    return this._avatarUrl;
  }

  set avatarUrl(value: string) {
    this._avatarUrl = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get birthday(): Date {
    return this._birthday;
  }

  set birthday(value: Date) {
    this._birthday = value;
  }
}
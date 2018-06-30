
class identifier
{
  identifier: string;
  location: string;
  identifierType: string;
  preferred: string;

}
export class Patient{
      constructor() {
      }
      uuid: string;
      person: any;
      identifiers: identifier[];
}
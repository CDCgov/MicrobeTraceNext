import { Location } from "./location";

export class ContactVenue {
  public Venue: Location;
  public Duration: number;
  public DateOfContact: string;

  constructor() {
    this.Venue = new Location();
  }

}



//export class Duration {
//  public Value: number;
//  public Description: string;
//  constructor() {}
//}
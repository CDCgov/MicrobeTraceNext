export class AddressLocation implements Location {
    ancestorOrigins: DOMStringList;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    assign(url: string): void {
        throw new Error("Method not implemented.");
    }
    reload(): void;
    reload(forcedReload: boolean): void;
    reload(forcedReload?: any) {
        throw new Error("Method not implemented.");
    }
    replace(url: string): void {
        throw new Error("Method not implemented.");
    }
  public longitude: string;
  public latitude: string;
 
  constructor() {
  }
}
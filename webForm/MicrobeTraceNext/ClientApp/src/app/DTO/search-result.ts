import { SearchBy } from "./enums";
import { MicrobeTraceData } from "./microbetrce-data";
import { SearchValue } from "./search-value";

export class SearchResults {
  public SeachValue: SearchValue;
  public SearchResult: MicrobeTraceData[];

  constructor(result: MicrobeTraceData[], value: SearchValue) {

    this.SeachValue = value;
    this.SearchResult = result;

  }
  
}
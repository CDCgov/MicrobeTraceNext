import { SearchBy } from "./enums";

export class SearchValue {
  public SearchCriteria: SearchBy;
  public Value1: string;
  public Value2: string;

  constructor() {
    this.SearchCriteria = SearchBy.nCoVIDAndLastName;
  }
}
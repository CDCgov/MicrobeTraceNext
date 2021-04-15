import { Injectable, Output, EventEmitter } from '@angular/core';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { SearchResults } from '../DTO/search-result';


@Injectable({
  providedIn: 'root'
})
export class ApplicationDataService {
  public MicrobeTraceData: MicrobeTraceData;
  public PromptLoginQuestion: boolean = false;
  public SearchResult: SearchResults;
  constructor() {
    this.MicrobeTraceData = new MicrobeTraceData();
    this.SearchResult = new SearchResults(undefined,undefined);
   }

   //Update the entire object

    @Output() Change: EventEmitter<MicrobeTraceData> = new EventEmitter();
    @Output() PromptQuestionChange: EventEmitter<boolean> = new EventEmitter();
  @Output() SearchChange: EventEmitter<SearchResults> = new EventEmitter();


   update(newData: MicrobeTraceData) {
    this.MicrobeTraceData = newData;
    this.Change.emit(this.MicrobeTraceData);
    }

  updateSearch(newData: SearchResults) {
    this.SearchResult = newData;
    this.SearchChange.emit(this.SearchResult);
  }

    updatePromptQuestion(val: boolean){
      this.PromptLoginQuestion = val;
      this.PromptQuestionChange.emit(this.PromptLoginQuestion);

    }


    logout(){
      //Does logout mean clearing all data?
      this.MicrobeTraceData = new MicrobeTraceData();
      this.SearchResult = new SearchResults(undefined,undefined);
    }
}

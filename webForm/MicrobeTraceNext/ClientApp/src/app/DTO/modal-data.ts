export class ModalData{
  public Username: string;
  public Question: string;
  public Response: boolean;
  public Button1Desp: string;
  public Button2Desp: string;
  constructor(question: string, button1: string, name:string = undefined,  button2: string = undefined){
    this.Username = name;
    this.Question = question;
    this.Button1Desp = button1;
    this.Button2Desp = button2;
  }
}
export class ModalListData {
  public Header: string;
  public Details: string[];
  public Response: boolean;
  public Button1Desp: string;
  public Button2Desp: string;
  constructor(details: string[], button1: string, header: string = undefined, button2: string = undefined) {
    this.Header = header;
    this.Details = details;
    this.Button1Desp = button1;
    this.Button2Desp = button2;
  }
}
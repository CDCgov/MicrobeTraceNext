export class DownloadFilterBlockResponse {
  public success: boolean;
  public message: string;
  public searchResult: BlockData[];
  public matchedPercentage: number;
  constructor() { }

}

export class BlockData {
  public data: string;
  public blockID: string;
  public blockName: string;

  constructor() {}
}
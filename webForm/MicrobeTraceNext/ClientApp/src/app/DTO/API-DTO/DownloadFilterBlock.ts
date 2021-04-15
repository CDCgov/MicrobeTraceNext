export class DownloadFilterBlock {
  tenantID!: string | undefined;
  userID!: string | undefined;
  ledgerName!: string | undefined;
  blockProofHash!: string | undefined;
  blockchainProofHash!: string | undefined;
  blockFilter!: Filters[] | undefined;
  puiInfo!: string | undefined;

  constructor() {}
}


export class Filters {

  public Key: string;
  public Value: string;

  constructor(key: string, val: string) {
    this.Key = key;
    this.Value = val;
  }
}
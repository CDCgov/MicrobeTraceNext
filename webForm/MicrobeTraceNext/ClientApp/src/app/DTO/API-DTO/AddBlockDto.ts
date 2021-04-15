export class AddBlockDto {
  tenantID!: string | undefined;
  userID!: string | undefined;
  updatedByUserId!: string | undefined;
  ledgerName!: string | undefined;
  isFile!: boolean | undefined;
  saveTextAsFile!: boolean | undefined;
  blockName!: string | undefined;
  blockDescription!: string | undefined;
  blockProofHash!: string | undefined;
  blockchainProofHash!: string | undefined;
  isActive!: boolean | undefined;
  statusMessage!: string | undefined;
  dateTimeStamp!: moment.Moment | undefined;
  body!: string | undefined;
  fileExtension!: string | undefined;
  isSmartContract!: boolean | undefined;

  constructor() {}
}
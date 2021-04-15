
export class AddBlockResponse {
  tenantID!: string | undefined;
  userID!: string | undefined;
  ledgerName!: string | undefined;
  blockName!: string | undefined;
  blockProofHash!: string | undefined;
  statusMessage!: string | undefined;
  message: string;
  success: boolean;

  constructor() {}
}
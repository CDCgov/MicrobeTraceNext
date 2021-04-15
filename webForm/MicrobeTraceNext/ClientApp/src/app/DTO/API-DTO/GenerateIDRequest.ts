export class GenerateIDRequest {
  tenantID!: string | undefined;
  userID!: string | undefined;
  updatedByUserId!: string | undefined;
  ledgerName!: string | undefined;
  state: string;

  constructor() {}
}
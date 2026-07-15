declare module '@apiverve/spamdetector' {
  export interface spamdetectorOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface spamdetectorResponse {
    status: string;
    error: string | null;
    data: SpamDetectorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface SpamDetectorData {
      likelySpam:        boolean | null;
      isDisposableEmail: boolean | null;
      isIPBlacklisted:   boolean | null;
      ipDetails:         IPDetails;
      parsed:            boolean | null;
  }
  
  interface IPDetails {
      country: null | string;
      region:  null | string;
  }

  export default class spamdetectorWrapper {
    constructor(options: spamdetectorOptions);

    execute(callback: (error: any, data: spamdetectorResponse | null) => void): Promise<spamdetectorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: spamdetectorResponse | null) => void): Promise<spamdetectorResponse>;
    execute(query?: Record<string, any>): Promise<spamdetectorResponse>;
  }
}

declare module '@apiverve/spamdetector' {
  export interface spamdetectorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface spamdetectorResponse {
    status: string;
    error: string | null;
    data: SpamDetectorData;
    code?: number;
  }


  interface SpamDetectorData {
      likelySpam:        boolean;
      isDisposableEmail: boolean;
      isIPBlacklisted:   boolean;
      ipDetails:         IPDetails;
      parsed:            boolean;
  }
  
  interface IPDetails {
      country: string;
      region:  string;
  }

  export default class spamdetectorWrapper {
    constructor(options: spamdetectorOptions);

    execute(callback: (error: any, data: spamdetectorResponse | null) => void): Promise<spamdetectorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: spamdetectorResponse | null) => void): Promise<spamdetectorResponse>;
    execute(query?: Record<string, any>): Promise<spamdetectorResponse>;
  }
}

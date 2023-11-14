export abstract class DataManagement {
  protected saveSessionData = (json: string, key: string) => {
    sessionStorage.setItem(key, json);
  };

  protected getSessionData = <T>(key: string): T | null => {
    const dataJson = sessionStorage.getItem(key);
    if (dataJson) {
      return JSON.parse(dataJson) as T;
    }
    return null;
  };

  protected getSessionDataArray = <T>(key: string): T[] => {
    const dataJson = sessionStorage.getItem(key);
    if (dataJson) {
      return JSON.parse(dataJson) as T[];
    }
    return [];
  };

  protected saveLocalData = (json: string, key: string) => {
    localStorage.setItem(key, json);
  };

  protected getLocalData = <T>(key: string): T | null => {
    const dataJson = localStorage.getItem(key);
    if (dataJson) {
      return JSON.parse(dataJson) as T;
    }
    return null;
  };

  protected getLocalDataArray = <T>(key: string): T[] => {
    const dataJson = localStorage.getItem(key);
    if (dataJson) {
      return JSON.parse(dataJson) as T[];
    }
    return [];
  };
}

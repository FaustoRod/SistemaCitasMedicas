export abstract class DataManagement {
  protected saveData = (json: string, key: string) => {
    sessionStorage.setItem(key, json);
  };

  protected getData = <T>(key: string): T | null => {
    const dataJson = sessionStorage.getItem(key);
    if (dataJson) {
      return JSON.parse(dataJson) as T;
    }
    return null;
  };

  protected getDataArray = <T>(key: string): T[] => {
    const dataJson = sessionStorage.getItem(key);
    if (dataJson) {
      return JSON.parse(dataJson) as T[];
    }
    return [];
  };
}

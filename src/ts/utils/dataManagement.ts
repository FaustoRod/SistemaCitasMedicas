export abstract class DataManagement {
  protected saveData = (json: string, key: string) => {
    localStorage.setItem(key, json);
  };

  protected getData = <T>(key: string): T | null => {
    const dataJson = localStorage.getItem(key);
    if (dataJson) {
      return JSON.parse(dataJson) as T;
    }
    return null;
  };

  protected getDataArray = <T>(key: string): T[] => {
    const dataJson = localStorage.getItem(key);
    if (dataJson) {
      return JSON.parse(dataJson) as T[];
    }
    return [];
  };
}

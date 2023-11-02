/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STORAGE_KEY: string;
  readonly VITE_USER_STORAGE_KEY: string;
  readonly VITE_CURRENT_USER_STORAGE_KEY: string;
  readonly VITE_DATE_FORMAT: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

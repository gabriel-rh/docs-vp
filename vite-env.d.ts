declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_NETLIFY_CONTEXT?: string;
      VITE_GITHUB_ACTIONS?: string;
      VITE_GITHUB_REPOSITORY?: string;
      VITE_LOCAL_BASE?: string;
    }
  }
}

export {};

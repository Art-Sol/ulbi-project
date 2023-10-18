export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number; // для webpack-dev-server
  apiUrl: string; // для инстанса аксиоса и возможности задания url извне
  project: 'storybook' | 'frontend' | 'jest'; // для возможности задавать среды в разных инструменах
}

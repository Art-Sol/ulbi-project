import type webpack from 'webpack';
import { type BuildOptions } from './types/config';

import {buildCssLoader} from "./loaders/buildCssLoader";
import {buildSvgLoader} from "./loaders/buildSvgLoader";
import {buildBabelLoader} from "./loaders/buildBabelLoader";

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const {isDev} = options;
  // Если не используем typescript - нужен babel-loader (для react jsx)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const babelLoader = buildBabelLoader(options);
  const svgLoader = buildSvgLoader();
  const cssLoader = buildCssLoader(isDev);

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader
  ];
}

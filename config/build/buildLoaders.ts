import type webpack from 'webpack';
import { type BuildOptions } from './types/config';

import {buildCssLoader} from "./loaders/buildCssLoader";
import {buildSvgLoader} from "./loaders/buildSvgLoader";

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // Если не используем typescript - нужен babel-loader (для react jsx)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true
            }
          ]

        ]
      }

    }
  };

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

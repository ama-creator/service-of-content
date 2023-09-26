import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buldResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    // mode development OR production
    mode: mode,
    entry: paths.entry, // файл с которого начинает работу webpack
    output: {
      filename: "[name].[contenthash].js", // [name] - динамическое имя файл. [contenthash] добавляет к имени згачения для кэширования
      path: paths.build, // создает корневую папку, в которую будет складываться сборка
      clean: true, // отвечает за очистку дубликатов при пересборки проекта
    },
    plugins: buildPlugins(options),
    module: {
      // rules - правила обработки файлов, которые выходят за рамки JS: .svg, .png, .scss и т. д..
      rules: buildLoaders(options),
    },

    // Чтобы вебпак понимал импорты с автокомлитом без разширения к имени файла - "./main"
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}

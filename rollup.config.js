import path from "path";
export default [
  {
    input: "./src/lib/app.js",
    output: [
      {
        file: path.resolve(__dirname, "./dist/index.esm.js"),
        format: "es",
      },
      {
        file: path.resolve(__dirname, "./dist/index.cjs.js"),
        format: "cjs",
      },
      {
        file: path.resolve(__dirname, "./dist/index.umd.js"),
        format: "umd",
				name:'HandLock'
      },
    ],
  },
];

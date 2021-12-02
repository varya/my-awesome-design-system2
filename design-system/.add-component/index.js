// @see: https://levelup.gitconnected.com/how-to-generate-react-components-from-your-terminal-a27741a5b862
const { match } = require("assert");
const fs = require("fs");
const path = require("path");
const component = require("./react-template.js");
const story = require("./storybook-template.js");

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error("You must include a component name.");

const dir = path.resolve(`./src/components/${name}/`);

// throw an error if the file already exists
if (fs.existsSync(dir))
  throw new Error("A component with that name already exists.");

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// Write component template
fs.writeFile(
  path.resolve(`${dir}/index.js`),
  component(name),
  writeFileErrorHandler
);

// Write storybook template
fs.writeFile(
  path.resolve(`${dir}/${name}.stories.mdx`),
  story(name),
  writeFileErrorHandler
);

// insert new component into 'components/index.ts file
fs.readFile("./src/index.js", "utf8", function (err, data) {
  if (err) throw err;

  // grab all components and combine them with new component
  const currentComponents = data.match(/(?<={ default as )(.*?)(?= })/g);
  const newComponents = [name, ...currentComponents].sort();
  const tokens = data.match(/(?<={ )(.*?)(?= } from ".\/tokens")/g);

  const fileComment = `/*
 * This is an index file for your library.
 * It's being updated automatically by add-component script
 * You can add tokens/components reexport, it will be preserved at next run, but not anything else.
 */

export { default as GlobalStyle } from "./global.js";
export { ${tokens} } from "./tokens";\n\n`;

  // create the import and export statements
  const exportStatements = newComponents
    .filter((component) => component !== "GlobalStyle")
    .map(
      (component) =>
        `export { default as ${component} } from "./components/${component}";\n`
    )
    .join("");

  const fileContent = `${fileComment}\n${exportStatements}`;

  fs.writeFile(`./src/index.js`, fileContent, writeFileErrorHandler);
});

console.log(`Created component ${name}`);

module.exports = (name) => `
import { Meta, Canvas, Story, ArgsTable } from '@storybook/addon-docs';

import ${name} from ".";

<Meta title="Components/${name}" />

## ${name}

TODO: add component description

<Canvas>
  <Story name="Default">
    <${name}/>
  </Story>
</Canvas>

## Props

<ArgsTable of={${name}} />
`;

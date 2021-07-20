import ButtonProps from './Button.props';
import Button from './Button.vue';
import { Story, Meta } from "@storybook/vue3";

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        options: ['primary', 'secondary'],
        type: 'select',
        labels: {
          primary: 'primary',
          secondary: 'secondary'
        },
      }
    },
    rounded: {
      type: 'boolean'
    }
  },
} as Meta;

const Template: Story<ButtonProps> = (args : ButtonProps) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {Button},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args">button</Button>',
});

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};

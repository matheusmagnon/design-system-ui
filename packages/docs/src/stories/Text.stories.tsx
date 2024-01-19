import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@design-front-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde commodi ut non, sint, repellendus soluta beatae qui quia alias neque eius, praesentium cumque magnam earum distinctio obcaecati delectus nam debitis.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const customTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

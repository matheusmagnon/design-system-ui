import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@front-ui/react'

export default {
  title: 'typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde commodi ut non, sint, repellendus soluta beatae qui quia alias neque eius, praesentium cumque magnam earum distinctio obcaecati delectus nam debitis.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const customTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

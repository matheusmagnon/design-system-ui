import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@front-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/matheusmagnon.png',
    alt: 'Matheus Magnon',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

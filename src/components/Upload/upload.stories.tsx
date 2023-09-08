import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { Upload } from './upload'
import Icon from '../Icon/icon'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Upload',
  component: Upload,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultUpload = () => (
  <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action('changed')}
      onRemove={action('removed')}
      name="fileName"
      multiple
      drag
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br/>
      <p>Drag file over to upload</p>
    </Upload>
)
export const Default = {
  render: () => <DefaultUpload />
};



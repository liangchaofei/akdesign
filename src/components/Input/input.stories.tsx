import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './input'; // 请根据实际路径调整

const meta: Meta<InputProps> = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // 在这里定义组件的参数类型和控制控制器（如果需要）
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...'
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter text...',
    disabled: true
  },
};


export const Size: Story = {
  args: {
    placeholder: 'Enter text...',
    size: 'lg'
  },
};
export const Prepend: Story = {
  args: {
    placeholder: 'Enter text...',
    prepend: '$',
  },
};

export const Append: Story = {
  args: {
    placeholder: 'Enter text...',
    append: '.00',
  },
};

export const Event: Story = {
  args: {
    placeholder: 'Enter text...',
    onChange: (e) => alert(e.target.value)
  },
};



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

const Template: Story<InputProps> = (args: InputProps) => <Input {...args} />;


export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Disabled input',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'your-icon-name', // 您的图标名称
  placeholder: 'Input with icon',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  size: 'lg',
  placeholder: 'Large input',
};

export const WithPrependAndAppend = Template.bind({});
WithPrependAndAppend.args = {
  prepend: '$',
  append: '.00',
  placeholder: 'Price input',
};

// 您可以继续添加更多的故事来展示组件的不同状态和属性

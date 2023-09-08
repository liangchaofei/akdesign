import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { AutoComplete, AutoCompleteProps, DataSourceType } from './autoComplete'; // 请根据实际路径调整

interface GithubUserProps {
    login: string;
    url: string;
    avatar_url: string;
  }
  
const meta: Meta<AutoCompleteProps> = {
  title: 'Example/AutoComplete',
  component: AutoComplete,
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

const handleFetch = (query: string) => {
    console.log('query', query)
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items)
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
      })
}
const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <>
        <h2>Name: {itemWithGithub.value}</h2>
        <p>url: {itemWithGithub.url}</p>
      </>
    )
  }
export const Default: Story = {
  args: {
    onSelect: action('selected'),
    fetchSuggestions: handleFetch,
    renderOption: renderOption
  },
};





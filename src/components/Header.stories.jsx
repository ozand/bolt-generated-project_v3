import React from 'react';
    import Header from './Header';

    export default {
      title: 'Components/Header',
      component: Header,
    };

    const Template = (args) => <Header {...args} />;

    export const LightMode = Template.bind({});
    LightMode.args = {
      theme: 'light',
    };

    export const DarkMode = Template.bind({});
    DarkMode.args = {
      theme: 'dark',
    };

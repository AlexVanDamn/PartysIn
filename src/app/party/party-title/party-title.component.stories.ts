// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PartyTitleComponent } from './party-title.component';


export default {
  title: 'Party/PartyTitle',
  component: PartyTitleComponent,
} as Meta;

const Template: Story<PartyTitleComponent> = (args: PartyTitleComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'REZ LongZ Festival',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  title: '',
};

import { Story, Meta } from '@storybook/angular/types-6-0';
import { PartyDateComponent } from './party-date.component';


export default {
  title: 'Party/PartyDate',
  component: PartyDateComponent,
} as Meta;

const Template: Story<PartyDateComponent> = (args: PartyDateComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
};

export const Placeholder = Template.bind({});
Placeholder.args = {
};

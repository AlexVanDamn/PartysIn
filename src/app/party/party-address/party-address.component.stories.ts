import { Story, Meta } from '@storybook/angular/types-6-0';
import { PartyAddressComponent } from './party-address.component';


export default {
  title: 'Party/PartyAddress',
  component: PartyAddressComponent,
} as Meta;

const Template: Story<PartyAddressComponent> = (args: PartyAddressComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  address: {
    id: 1,
    name: 'Universal Dog',
    street: '123 Main St',
    streetNo: '',
    city: 'Anytown',
    district: 'Castelo Branco',
    postalCode: '12345-678',
    country: 'Portugal'
  }
};

export const Placeholder = Template.bind({});
Placeholder.args = {
};

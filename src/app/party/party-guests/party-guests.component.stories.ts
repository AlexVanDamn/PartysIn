// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { PartyGuestsComponent } from './party-guests.component';

import { PartyGuestsModule } from './party-guests.module';

export default {
  title: 'Party/PartyGuests',
  component: PartyGuestsComponent,
  decorators: [
    moduleMetadata({
      imports: [PartyGuestsModule]
    }),
  ],
} as Meta;

const Template: Story<PartyGuestsComponent> = (args: PartyGuestsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  guestCounter: 3,
  guests: [
    { id: 1, firstName: 'John', lastName: 'Doe', username: 'jdoe', picture: '/assets/userpics/avatar_01.jpg'},
    { id: 2, firstName: 'Jane', lastName: 'Doe', username: 'jane', picture: '/assets/userpics/avatar_02.jpg'},
    { id: 3, firstName: 'Jack', lastName: 'Doe', username: 'jack'},
    { id: 4, firstName: 'Jill', lastName: 'Doe', username: 'jill'},
  ]
};

export const Placeholder = Template.bind({});
Placeholder.args = {
};

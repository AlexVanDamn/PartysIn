import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { PartyCreatedByComponent } from './party-created-by.component';
import { PartyCreatedByModule } from './party-created-by.module';

PartyCreatedByComponent

export default {
  title: 'Party/PartyCreatedBy',
  component: PartyCreatedByComponent,
  decorators: [
    moduleMetadata({
      imports: [PartyCreatedByModule]
    }),
  ],
} as Meta;

const Template: Story<PartyCreatedByComponent> = (args: PartyCreatedByComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  user : {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    username: 'jdoe',
    picture: '/assets/userpics/avatar_01.jpg'
  }
};

export const Placeholder = Template.bind({});
Placeholder.args = {
};

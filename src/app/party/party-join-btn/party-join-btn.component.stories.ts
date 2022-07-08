// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { moduleMetadata } from '@storybook/angular';

import { PartyJoinBtnComponent } from './party-join-btn.component';
import { PartyJoinBtnModule } from './party-join-btn-module';

export default {
  title: 'Party/PartyJoinBtn',
  component: PartyJoinBtnComponent,
  decorators: [
    moduleMetadata({
      imports: [PartyJoinBtnModule]
    }),
  ],
} as Meta;

const Template: Story<PartyJoinBtnComponent> = (args: PartyJoinBtnComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};

export const Placeholder = Template.bind({});
Placeholder.args = {
};

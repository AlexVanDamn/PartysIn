// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { FollowBtnComponent } from './follow-btn.component';
import { FollowBtnModule } from './follow-btn.module';

export default {
  title: 'UI/FollowBtn',
  component: FollowBtnComponent,
  decorators: [
    moduleMetadata({
      imports: [FollowBtnModule]
    }),
  ],
} as Meta;

const Template: Story<FollowBtnComponent> = (args: FollowBtnComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  // user:{ id: 1, firstName: 'John', lastName: 'Doe', username: 'jdoe', picture: '/assets/userpics/avatar_01.jpg'},
};

export const Placeholder = Template.bind({});
Placeholder.args = {
};

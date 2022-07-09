// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { PartyPageComponent } from './party-page.component';
import { PartyPageModule } from './party-page.module';
import { PartyTitleModule } from '../party-title/party-title.module';

export default {
  title: 'Party/PartyPage',
  component: PartyPageComponent,
  decorators: [
    moduleMetadata({
      imports: [PartyPageModule],
      declarations: [],
    }),
  ],
} as Meta;

const Template: Story<PartyPageComponent> = (args: PartyPageComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};

export const Placeholder = Template.bind({});
Placeholder.args = {
};

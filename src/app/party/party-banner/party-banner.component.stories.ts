import { Story, Meta } from '@storybook/angular/types-6-0';
import { PartyBannerComponent } from './party-banner.component';

export default {
  title: 'Party/PartyBanner',
  component: PartyBannerComponent,
} as Meta;

const Template: Story<PartyBannerComponent> = (args: PartyBannerComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};

export const Placeholder = Template.bind({});
Placeholder.args = {
};

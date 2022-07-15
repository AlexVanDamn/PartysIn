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
  banner: '/assets/banner/banner_01.png',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
};

// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { PartyPageComponent } from './party-page.component';
import { PartyPageModule } from './party-page.module';
import { PartyTitleModule } from '../party-title/party-title.module';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Party } from '../data/party';
import { User } from '../data/user';

export default {
  title: 'Party/PartyPage',
  component: PartyPageComponent,
  decorators: [
    moduleMetadata({
      imports: [PartyPageModule],
      declarations: [],
      providers: [HttpClient, HttpHandler],
    }),
  ],
} as Meta;

const Template: Story<PartyPageComponent> = (args: PartyPageComponent) => ({
  props: args,
});

export const Default = Template.bind({});

const beispielParty: Party = {
  id: 1,
  name: 'Party Name',
  status: {
    id: 1,
    statusOption: "DRAFT"
  },
  description: 'A party for all the dogs',
  banner: '/assets/banner/banner_01.png',
  dateBegin: new Date(),
  dateEnd: new Date(),
  addressId: 1,
  address: {
    id: 1,
    name: 'Party Address',
    street: 'Street',
    streetNo: '1',
    city: 'City',
    district: 'District',
    postalCode: '12345',
    country: 'Country',
  },
  createdBy: {
    id: 1,
    firstname: 'Alex',
    lastname: 'Kowalski',
    username: 'alexkowalski',
    email: 'adasd@email.de'
  }
}


Default.args = {
  party: beispielParty,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
};

/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  services: {
    id: `${scope}.services`,
    defaultMessage: 'Services',
  },
  smart_connect: {
    id: `${scope}.smart_connect`,
    defaultMessage: 'Smart Connect',
  },
});

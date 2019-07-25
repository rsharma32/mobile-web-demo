/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.FeaturePage';

export default defineMessages({
  header: {
    id: `${scope}.smart-connect`,
    defaultMessage: 'Smart Connect',
  },
  description: {
    id: `${scope}.smart-connect.text`,
    defaultMessage: 'How might we help you today?',
  },
});

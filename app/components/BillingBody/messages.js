import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.BillingPage';

export default defineMessages({
  accountBalance: {
    id: `${scope}.account-balance`,
    defaultMessage: 'View Account Balance',
  },
  adjustments: {
    id: `${scope}.adjustments`,
    defaultMessage: 'Adjustments/Credits',
  },
  payments: {
    id: `${scope}.payments`,
    defaultMessage: 'Payments',
  },
  online: {
      id:`${scope}.online-statements`,
      defaultMessage: 'View Online Statements',
  },
});
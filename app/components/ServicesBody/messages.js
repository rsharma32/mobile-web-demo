import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  techSupport: {
    id: `${scope}.tech_support`,
    defaultMessage: 'Tech Support',
  },
  billingAccount: {
    id: `${scope}.billing_account`,
    defaultMessage: 'Billing & Account Services',
  },
  generalQuestions: {
    id: `${scope}.general_questions`,
    defaultMessage: 'General Questions',
  },
});
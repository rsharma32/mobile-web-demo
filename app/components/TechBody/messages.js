import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.TechSupportPage';

export default defineMessages({
  analytics: {
    id: `${scope}.analytics_dashboard`,
    defaultMessage: 'Analytics Dashboard',
  },
  demand: {
    id: `${scope}.demand_shifting`,
    defaultMessage: 'Demand Shifting',
  },
  serviceBot: {
    id: `${scope}.service_bot`,
    defaultMessage: 'Service Bot',
  },
  customer: {
      id:`${scope}.customer_integration`,
      defaultMessage: 'Customer Integration',
  },
});
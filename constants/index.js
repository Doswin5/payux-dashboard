import { analyticsIcon, developerIcon, documentationIcon, fraudIcon, homeIcon, integrationIcon, logoutIcon, paymentIcon, succeededTag, pendingTag, declinedTag, visaCard, bankCard, masterCard, } from '@/assets'

export const sidebarLinks = [
  {
    id: 1,
    icon: homeIcon,
    linkRoute: '/',
    linkName: 'Home',
  },
  {
    id: 2,
    icon: analyticsIcon,
    linkRoute: '/analytics',
    linkName: 'Analytics'
  },
  {
    id: 3,
    icon: paymentIcon,
    linkRoute: '/payments',
    linkName: 'Payments'
  },
  {
    id: 4,
    icon: integrationIcon,
    linkRoute: '/integrations',
    linkName: 'Integrations'
  },
  {
    id: 5,
    icon: fraudIcon,
    linkRoute: '/fraud-solution',
    linkName: 'Fraud Solution'
  },
  {
    id: 6,
    icon: developerIcon,
    linkRoute: '/developers',
    linkName: 'Developers'
  },
]

export const transactions = [
  {
    id: 1,
    paymentId: '06c1774-7f3d-46ad...90a8',
    status: 'succeeded',
    statusImage: succeededTag,
    amount: '19,623.00',
    paymentMethod: visaCard,
    creationDate: 'Mar 23, 2022, 13:00 PM'
  },
  {
    id: 2,
    paymentId: '06c1775-7f3d-46ad...90c4',
    status: 'pending',
    statusImage: pendingTag,
    amount: '25,481.00',
    paymentMethod: masterCard,
    creationDate: 'Mar 23, 2022, 13:00 PM'
  },
  {
    id: 3,
    paymentId: '06c1776-7f3d-46ad...90b2',
    status: 'declined',
    statusImage: declinedTag,
    amount: '6,300.00',
    paymentMethod: bankCard,
    creationDate: 'Mar 23, 2022, 13:00 PM'
  },
  {
    id: 4,
    paymentId: '06c1774-7f3d-46ad...90a8',
    status: 'succeeded',
    statusImage: succeededTag,
    amount: '19,623.00',
    paymentMethod: visaCard,
    creationDate: 'Mar 23, 2022, 13:00 PM'
  },
  {
    id: 5,
    paymentId: '06c1775-7f3d-46ad...90c4',
    status: 'pending',
    statusImage: pendingTag,
    amount: '25,481.00',
    paymentMethod: masterCard,
    creationDate: 'Mar 23, 2022, 13:00 PM'
  },
  {
    id: 6,
    paymentId: '06c1776-7f3d-46ad...90b2',
    status: 'declined',
    statusImage: declinedTag,
    amount: '6,300.00',
    paymentMethod: bankCard,
    creationDate: 'Mar 23, 2022, 13:00 PM'
  },
  {
    id: 7,
    paymentId: '06c1774-7f3d-46ad...90a8',
    status: 'succeeded',
    statusImage: succeededTag,
    amount: '19,623.00',
    paymentMethod: visaCard,
    creationDate: 'Mar 23, 2022, 13:00 PM'
  },
  {
    id: 8,
    paymentId: '06c1775-7f3d-46ad...90c4',
    status: 'pending',
    statusImage: pendingTag,
    amount: '25,481.00',
    paymentMethod: masterCard,
    creationDate: 'Mar 23, 2022, 13:00 PM'
  },
  {
    id: 9,
    paymentId: '06c1776-7f3d-46ad...90b2',
    status: 'declined',
    statusImage: declinedTag,
    amount: '6,300.00',
    paymentMethod: bankCard,
    creationDate: 'Mar 23, 2022, 13:00 PM'
  },
  {
    id: 10,
    paymentId: '06c1774-7f3d-46ad...90a8',
    status: 'succeeded',
    statusImage: succeededTag,
    amount: '19,623.00',
    paymentMethod: visaCard,
    creationDate: 'Mar 23, 2022, 13:00 PM'
  },
  {
    id: 11,
    paymentId: '06c1775-7f3d-46ad...90c4',
    status: 'pending',
    statusImage: pendingTag,
    amount: '25,481.00',
    paymentMethod: masterCard,
    creationDate: 'Mar 23, 2022, 13:00 PM'
  },
  {
    id: 12,
    paymentId: '06c1776-7f3d-46ad...90b2',
    status: 'declined',
    statusImage: declinedTag,
    amount: '6,300.00',
    paymentMethod: bankCard,
    creationDate: 'Mar 23, 2022, 13:00 PM'
  },
]
import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'

export const links = [
  {
    label: 'Talk with us',
    href: '#',
  },
  {
    label: 'About us',
    href: '#',
  },
  {
    label: 'Services',
    children: [
      {
        label: 'Dietray',
        description: 'Read our documentation and FAQs, or get in touch.',
        href: '#',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'Medical',
        description: 'Discover and join us.',
        href: '#',
        icon: <IoCalendar />,
      },
      {
        label: 'companionship',
        description: 'Do even more with Assistants.',
        href: '#',
        icon: <IoGrid />,
      },
      {
        label: 'Blog',
        description: 'Get updates, articles and insights from the team.',
        href: '#',
        icon: <MdWeb />,
      },
    ],
  },
  {
    label: 'Pricing',
    href: '#',
  },
]

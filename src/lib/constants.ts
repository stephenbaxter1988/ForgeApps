export const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL as string ?? 'https://calendly.com'

export interface Project {
  id: string
  label: string
  logo: string          // path to logo.png in the project folder
  tagline: string
  screenshots: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 'WoofnFluff',
    label: 'Woof n Fluff',
    logo: '/img/projects/WoofnFluff/logo.png',
    tagline: 'Booking calendar, customer records & daily schedule for a dog grooming business.',
    screenshots: [
      '/img/projects/WoofnFluff/1.png',
      '/img/projects/WoofnFluff/2.png',
      '/img/projects/WoofnFluff/3.png',
    ],
  },
  {
    id: 'ArkEx',
    label: 'ArkEx',
    logo: '/img/projects/ArkEx/logo.png',
    tagline: 'Structured, trust-first Pokemon card trading platform.',
    screenshots: [
      '/img/projects/ArkEx/1.png',
      '/img/projects/ArkEx/2.png',
      '/img/projects/ArkEx/3.png',
    ],
  },
]

export const COPY = {
  nav: {
    cta: 'Book Free Consultation',
  },
  hero: {
    headline: 'Tools forged for real businesses',
    subtext: 'Paper trails, messy spreadsheets, or just too much to keep track of. Simple software, built around your business, that sorts it out.',
    cta: 'Book Free Consultation',
  },
  whatYouDo: {
    heading: 'Built around your problem',
    subtext: 'You know your business better than anyone. Share what\'s slowing you down and we\'ll build something that fixes it. Nothing more, nothing less.',
    features: [
      {
        title: 'Job & Order Tracking',
        description: 'Know exactly what\'s on, what\'s done, and what needs doing. No more digging through notes.',
      },
      {
        title: 'Customer Records',
        description: 'Everything you need to know about a customer, in one place, every time.',
      },
      {
        title: 'Daily Planning',
        description: 'A clear view of your day so nothing slips through the cracks.',
      },
      {
        title: 'Whatever You Need',
        description: 'Quotes, rotas, stock, invoices. If it\'s causing pain, it can be fixed.',
      },
    ],
  },
  whoItsFor: {
    heading: 'Who it\'s for',
    subtext: 'If you run a small business and something in your day is harder than it should be, you\'re in the right place.',
    businesses: [
      'Dog groomers', 'Plumbers', 'Electricians', 'Nail techs',
      'Hair & beauty salons', 'Independent shops', 'Personal trainers',
      'Painters & decorators', 'Landscapers', 'Childminders',
      'Tattoo artists', 'Mechanics',
    ],
  },
  useCase: {
    heading: 'A real example',
    business: 'Dog grooming business',
    steps: [
      {
        label: 'The problem',
        text: 'Appointments in a notebook. Customers calling to check their slot. A missed dog here, a double-booking there.',
      },
      {
        label: 'The solution',
        text: 'A simple app with a daily schedule, customer records, and automatic reminders. Built exactly for how the business runs.',
      },
      {
        label: 'The result',
        text: 'No more missed appointments. The owner runs their day from their phone. Customers get reminded automatically.',
      },
    ],
  },
  howItWorks: {
    heading: 'How it works',
    steps: [
      {
        number: '01',
        title: 'Free consultation',
        description: 'We talk through what\'s causing the friction. No tech jargon, no pressure. Just a conversation about your business.',
      },
      {
        number: '02',
        title: 'We build your tool',
        description: 'A focused app built specifically around your problem. Not a generic off-the-shelf product.',
      },
      {
        number: '03',
        title: 'You use it daily',
        description: 'It just works. And support is always on hand if anything needs changing down the line.',
      },
    ],
  },
  pricing: {
    heading: 'Simple, transparent pricing',
    subtext: 'The price is agreed before anything gets built. No surprises.',
    items: [
      { label: 'Build', amount: '£300 – £700', note: 'Personally priced for your project' },
      { label: 'Hosting', amount: 'Optional', note: 'Fully managed or your preferred provider' },
      { label: 'Changes', amount: 'Small fee', note: 'Per update after agreed launch' },
      { label: 'Bugs', amount: 'Free', note: 'Fixed for life, no questions asked' },
    ],
  },
  finalCta: {
    heading: "Got something in your business that's harder than it should be?",
    cta: 'Book Free Consultation',
  },
  footer: {
    email: 'hello@forgeapps.co.uk',
    tagline: 'Simple tools. Real results.',
  },
}

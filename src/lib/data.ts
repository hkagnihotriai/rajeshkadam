export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Relationship Guidance",
    description:
      "Navigating conflict, communication, and commitment with clarity and compassion.",
  },
  {
    title: "Stress & Anxiety Support",
    description:
      "Grounding practices and perspective to steady a racing mind.",
  },
  {
    title: "Spiritual Counselling",
    description:
      "Exploring life's deeper questions through the lens of Vedic wisdom.",
  },
  {
    title: "Emotional Healing",
    description: "Gentle, structured space to process what has been carried too long.",
  },
  {
    title: "Grief & Loss Support",
    description: "Companionship through mourning, honouring both sorrow and memory.",
  },
  {
    title: "End-of-Life Emotional Care",
    description:
      "Presence and peace for patients and families facing life's final chapter.",
  },
  {
    title: "Family Counselling",
    description: "Restoring understanding and warmth between generations.",
  },
  {
    title: "Personal Growth",
    description: "Self-inquiry and practice aimed at steady, lasting change.",
  },
  {
    title: "Mindfulness & Meditation",
    description: "Simple, sustainable practices to quiet the mind and return to presence.",
  },
  {
    title: "Youth Mentoring",
    description: "Helping young people find direction, confidence, and inner steadiness.",
  },
  {
    title: "Purpose & Meaning",
    description: "Clarifying what matters, and aligning daily life around it.",
  },
  {
    title: "Workplace Wellness",
    description: "Bringing calm, focus, and values to professional life.",
  },
];

export const panchKosh = [
  {
    name: "Annamaya",
    subtitle: "The Physical Sheath",
    description: "The body sustained by food — the outermost, most visible layer of self.",
  },
  {
    name: "Pranamaya",
    subtitle: "The Energy Sheath",
    description: "The layer of breath and vital energy that animates the body.",
  },
  {
    name: "Manomaya",
    subtitle: "The Mind Sheath",
    description: "Thoughts, emotions, and the restless activity of the mind.",
  },
  {
    name: "Vijnanamaya",
    subtitle: "The Wisdom Sheath",
    description: "The discerning intellect that distinguishes the real from the fleeting.",
  },
  {
    name: "Anandamaya",
    subtitle: "The Bliss Sheath",
    description: "The innermost layer — quiet joy that exists beneath every circumstance.",
  },
];

export const stats = [
  { value: "20+", label: "Years of Practice" },
  { value: "500+", label: "Workshops Led" },
  { value: "2", label: "Published Books" },
  { value: "2000+", label: "Families Counselled" },
];

export type Book = {
  slug: string;
  title: string;
  author: string;
  blurb: string;
  price: number;
  coverImageUrl?: string;
  endorsements?: { quote: string; name: string; context: string }[];
};

export const books: Book[] = [
  {
    slug: "freedom-in-and-out",
    title: "Freedom In and Out: A Handbook on Panch Kosh",
    author: "Rajesh Anant Kadam",
    blurb:
      "A practical guide to the five sheaths of the self, translating ancient Vedic psychology into everyday tools for inner freedom.",
    price: 399,
  },
  {
    slug: "from-hurt-to-harmony",
    title: "From Hurt to Harmony",
    author: "Sita Kadam-Zope & Rajesh Anant Kadam",
    blurb:
      "Heal yourself, heal your relationships, heal your world — a father-daughter collaboration blending decades of counselling wisdom with the voice of modern emotional experience.",
    price: 495,
    coverImageUrl: "/images/from-hurt-to-harmony-cover.jpg",
    endorsements: [
      {
        quote:
          "A rare blend of father-daughter perspectives, bringing together decades of counselling wisdom and the voice of modern emotional experience.",
        name: "Hrishikesh Mafatlal",
        context: "Chairman, Arvind Mafatlal Group",
      },
      {
        quote:
          "The authors brilliantly decode complex Vedic concepts into practical tools, making ancient wisdom highly actionable for modern readers.",
        name: "Commodore Prashant Shidhaye",
        context: "Vishisht Seva Medal Awardee, Indian Navy",
      },
      {
        quote:
          "This book goes beyond theory and offers a clear path to understanding conflicts, healing emotional wounds, and building lasting harmony in every relationship.",
        name: "DasGadadhar Das",
        context: "Founder, Bhaktivedanta Vidyabhavan Gurukul, Ranchi",
      },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

// Placeholder testimonials — replace with real ones from Rajesh before launch.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Rajesh ji helped our family find words for things we had carried silently for years. We finally feel heard.",
    name: "A. Sharma",
    context: "Family counselling client",
  },
  {
    quote:
      "His workshop on the Panch Kosh changed how I understand my own stress. Simple, practical, deeply calming.",
    name: "P. Iyer",
    context: "Workshop participant",
  },
  {
    quote:
      "During my father's final months, his presence gave our whole family a sense of peace we didn't know was possible.",
    name: "N. Deshpande",
    context: "End-of-life care family",
  },
  {
    quote:
      "I came in anxious about my career and left with a much clearer sense of purpose. Grateful for his guidance.",
    name: "R. Verma",
    context: "Young professional",
  },
  {
    quote:
      "A rare counsellor who blends psychology and spirituality without ever feeling preachy. Just wisdom, gently offered.",
    name: "S. Kulkarni",
    context: "Individual counselling client",
  },
];

export type Workshop = {
  title: string;
  category: string;
  duration: string;
  description: string;
};

export const workshops: Workshop[] = [
  {
    title: "Panch Kosh: Mapping the Five Layers of Self",
    category: "Self-Discovery",
    duration: "3 hours",
    description: "An experiential introduction to the five sheaths and how they shape identity.",
  },
  {
    title: "From Hurt to Harmony: Healing Family Relationships",
    category: "Family",
    duration: "Half-day",
    description: "Practical tools for repairing trust and communication within families.",
  },
  {
    title: "Mindful Living for Young Professionals",
    category: "Youth & Career",
    duration: "2 hours",
    description: "Grounding practices for focus, resilience, and calm under pressure.",
  },
  {
    title: "Grief, Loss & the Language of the Soul",
    category: "Grief Support",
    duration: "3 hours",
    description: "A gentle space to process loss through reflection and shared presence.",
  },
  {
    title: "Stress Alchemy: Ancient Tools for Modern Anxiety",
    category: "Stress & Anxiety",
    duration: "Half-day",
    description: "Vedic and psychological techniques for transforming everyday stress.",
  },
  {
    title: "Purpose & Dharma: Finding Your Life's Work",
    category: "Purpose",
    duration: "Full day",
    description: "A deep-dive workshop on aligning work and life with inner purpose.",
  },
];

export type InsightPreview = {
  title: string;
  excerpt: string;
  date: string;
};

// Placeholder posts — real posts will be authored via the admin panel in a later phase.
export const insightPreviews: InsightPreview[] = [
  {
    title: "Why the Mind Needs Silence, Not Just Rest",
    excerpt:
      "Rest quiets the body. Silence quiets the mind. Here's the difference, and why both matter.",
    date: "Coming soon",
  },
  {
    title: "The Panch Kosh Model, Explained Simply",
    excerpt:
      "A plain-language walk through the five sheaths, and how to notice them in your own day.",
    date: "Coming soon",
  },
  {
    title: "Sitting With Grief Without Rushing It",
    excerpt:
      "What twenty years of counselling grieving families has taught me about time and healing.",
    date: "Coming soon",
  },
];

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

export type ImpactHighlight = {
  title: string;
  description: string;
};

export const impactHighlights: ImpactHighlight[] = [
  {
    title: "Founder, Bharatiya Institute for Healthy Minds",
    description:
      "Co-founded a new institute integrating Indian wisdom, scientific psychology, and compassionate service, building a team of doctors and counsellors to scale family wellness support.",
  },
  {
    title: "National Keynote Speaker",
    description:
      "Invited to speak on the Panch Kosh framework at IIT Dhanbad's national conference and as keynote speaker at a National CSR Conclave, carrying Vedic psychology to audiences well beyond healthcare.",
  },
  {
    title: "Academic Partnerships in Spiritual Care",
    description:
      "Designed and teaches Diploma courses in Spiritual Care for nursing and medical students, including a batch of 20 Japanese yoga teachers who travelled to train under him.",
  },
  {
    title: "Rural Community Wellness",
    description:
      "Over four years of sustained outreach in villages near Mira Road, working toward structured, ongoing family wellness programs for the wider community.",
  },
  {
    title: "Integrating Spiritual Care Into Medicine",
    description:
      "Partners directly with hospital departments, including Oncology, to bring spiritual and emotional support into clinical care, alongside dedicated end-of-life companionship for patients and families.",
  },
  {
    title: "A Growing Body of Work",
    description:
      "Currently developing a digital Family Wellness Assessment tool and a new book of real spiritual-care stories, alongside his existing published titles.",
  },
];

export type Book = {
  slug: string;
  title: string;
  author: string;
  blurb: string;
  price: number;
  free?: boolean;
  callout?: string;
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
    price: 0,
    free: true,
    callout: "Use this free tool to assess the Panch Kosh of your relationships.",
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
          "A rare blend of father-daughter perspectives, bringing together decades of counselling wisdom and the voice of modern emotional experience....",
        name: "Hrishikesh Mafatlal",
        context: "Chairman, Arvind Mafatlal Group",
      },
      {
        quote:
          "In an age of overwhelmed minds and strained relationships, this book places the power of change back into the reader's own hands, gently, practically, and without judgment.",
        name: "Dr. Vijaykumar Gawli",
        context: "International Clinical Research Mentor",
      },
      {
        quote:
          "The book does not merely discuss problems, it gently leads the reader toward responsibility, self-awareness, acceptance, and inner transformation....",
        name: "Neha and Nirdosh Sobti",
        context: "Founders, The Madhavas Rock Band",
      },
      {
        quote:
          "The authors brilliantly decode complex Vedic concepts into practical tools, making ancient wisdom highly actionable for modern readers. The book's greatest strength is its unique dual narrative voice. Rather than offering easy answers, it demands rigorous self-examination and cultivates intellectual humility....",
        name: "Commodore Prashant Shidhaye",
        context: "Vishisht Seva Medal Awardee, Indian Navy",
      },
      {
        quote:
          "A refreshing blend of practical wisdom, compassionate counseling, and timeless spiritual insights. The authors skillfully guide readers from self-reflection to self-transformation...",
        name: "Dr. Gaurav Gangvani",
        context: "Interventional Radiologist & Health Educator, Lilavati Hospital and Bhaktivedanta Hospital, Mumbai",
      },
      {
        quote:
          "This book goes beyond theory and offers a clear path to understanding conflicts, healing emotional wounds, and building lasting harmony in every relationship. Blending timeless spiritual insights with real-life situations, this book helps readers turn challenges into opportunities for growth, peace, and deeper connection.",
        name: "DasGadadhar Das",
        context: "Founder, Bhaktivedanta Vidyabhavan Gurukul, Ranchi",
      },
      {
        quote:
          "Whether struggling with family, marriage, friendships, or oneself, readers will find inspiration, clarity, and hope on every page of this remarkable book. Every chapter invites readers to understand themselves more deeply, uncover hidden patterns, and develop the inner strength needed for healthy relationships.",
        name: "Paripurti Aditya Mane",
        context: "Home Maker",
      },
      {
        quote:
          "Through stories based on real experiences and insights drawn from philosophy and Vedic wisdom, the book tries to offer a practical and deeply human perspective on relationships, responsibility, emotional awareness, and inner growth while making it relatable and relevant to today's society.",
        name: "Brigadier Niranjan Jog",
        context: "Sena Medal Awardee, Indian Army",
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

export const youtubeChannel = {
  name: "Rajesh Anant Kadam",
  handle: "@rajeshanantkadam",
  url: "https://www.youtube.com/@rajeshanantkadam",
};

// Add YouTube video IDs here (the part after "v=" in a video URL) to feature
// them as embedded players. Leave empty to show a "coming soon" placeholder.
export const featuredVideoIds: string[] = [
  "Cx8MFGNXCic",
  "rXk3wBzlLGs",
  "tqigqk6OmWQ",
  "i_PShDDoSNo",
];

export type GalleryImage = {
  src: string;
  caption: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/csr-conclave-speaking.jpg",
    caption: "Speaking at the National CSR Conclave 2.0, Indore",
  },
  {
    src: "/images/gallery/csr-conclave-award.jpg",
    caption: "Recognized as a speaker at CSR Conclave 2.0",
  },
  {
    src: "/images/gallery/iit-dhanbad-conference.jpg",
    caption: "Invited to IIT Dhanbad's National Conference on Ancient Indian Text, Science and Technology",
  },
  {
    src: "/images/gallery/press-coverage.jpg",
    caption: "Press coverage of the CSR Conclave in an Indore newspaper",
  },
  {
    src: "/images/gallery/guest-japanese-yoga-teachers.jpg",
    caption: "Welcoming Japanese yoga teachers who completed the Diploma in Spiritual Care",
  },
  {
    src: "/images/gallery/medical-students-lecture.jpg",
    caption: "Teaching spiritual care to medical students from Latur",
  },
  {
    src: "/images/gallery/hand-hygiene-day.jpg",
    caption: "World Hand Hygiene Day awareness program with nursing students",
  },
  {
    src: "/images/gallery/vedic-wisdom-address.jpg",
    caption: "Addressing a community gathering on Vedic wisdom and wellness",
  },
  {
    src: "/images/gallery/krishnarpanam-felicitation.jpg",
    caption: "Felicitated at a community Sangha Shatabdi celebration",
  },
  {
    src: "/images/gallery/aims-foundation.jpg",
    caption: "AIMS Foundation, site of the Diploma in Spiritual Care for nursing students",
  },
];

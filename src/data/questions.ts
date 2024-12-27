export interface Question {
  id: string;
  question: string;
  answer: string;
  bibleReferences: string[];
  category: 'faith' | 'prayer' | 'bible' | 'lifestyle' | 'doctrine';
}

export const questions: Question[] = [
  {
    id: '1',
    category: 'faith',
    question: 'What is salvation?',
    answer: 'Salvation is the free gift of eternal life through faith in Jesus Christ. It comes by God\'s grace through faith, not by our own works.',
    bibleReferences: ['Ephesians 2:8-9', 'John 3:16', 'Romans 10:9-10']
  },
  {
    id: '2',
    category: 'prayer',
    question: 'How should I pray?',
    answer: 'Jesus taught us to pray with sincerity, humility, and faith. The Lord\'s Prayer serves as a model for our prayers.',
    bibleReferences: ['Matthew 6:9-13', 'Luke 11:2-4', '1 Thessalonians 5:17']
  },
  {
    id: '3',
    category: 'bible',
    question: 'Why should we read the Bible?',
    answer: 'The Bible is God\'s inspired Word, useful for teaching, correcting, and training in righteousness. It guides our faith and daily life.',
    bibleReferences: ['2 Timothy 3:16-17', 'Psalm 119:105', 'Hebrews 4:12']
  }
];
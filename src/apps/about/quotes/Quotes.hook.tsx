export interface IQuote {
  text: string;
  author: string;
}
export const quotes: IQuote[] = [
  {
    text: 'Look on my Works, ye Mighty, and despair!',
    author: 'Percy Shelley, Ozymandias',
  },
];

export const stoic: IQuote[] = [
  {
    text: 'You have power over your mind—not outside events. Realize this, and you will find strength.',
    author: 'Marcus Aurelius',
  },
  { text: 'We suffer more often in imagination than in reality.', author: 'Seneca' },
  {
    text: 'It is not the man who has too little, but the man who craves more, that is poor.',
    author: 'Seneca',
  },
  {
    text: 'If it is not right, do not do it; if it is not true, do not say it.',
    author: 'Marcus Aurelius',
  },
  {
    text: 'The best revenge is to be unlike him who performed the injury.',
    author: 'Marcus Aurelius',
  },
  { text: 'Don’t explain your philosophy. Embody it.', author: 'Epictetus' },
  {
    text: 'Man is affected, not by events, but by the view he takes of them.',
    author: 'Epictetus',
  },
  {
    text: 'Waste no more time arguing about what a good man should be. Be one.',
    author: 'Marcus Aurelius',
  },
  { text: 'Difficulties strengthen the mind, as labor does the body.', author: 'Seneca' },
  {
    text: 'He who fears death will never do anything worthy of a man who is alive.',
    author: 'Seneca',
  },
  {
    text: 'First say to yourself what you would be; and then do what you have to do.',
    author: 'Epictetus',
  },
  {
    text: 'It is not death that a man should fear, but he should fear never beginning to live.',
    author: 'Marcus Aurelius',
  },
  {
    text: 'No person has the power to have everything they want, but it is in their power not to want what they don’t have.',
    author: 'Seneca',
  },
  {
    text: 'Make the best use of what is in your power, and take the rest as it happens.',
    author: 'Epictetus',
  },
  {
    text: 'The life we receive is not short, but we make it so, nor do we have any lack of it, but are wasteful of it.',
    author: 'Seneca',
  },
  { text: 'The whole future is uncertain; live immediately.', author: 'Seneca' },
  {
    text: 'Very little is needed to make a happy life; it is all within yourself, in your way of thinking.',
    author: 'Marcus Aurelius',
  },
  {
    text: 'How long are you going to wait before you demand the best for yourself?',
    author: 'Epictetus',
  },
  {
    text: 'Wealth consists not in having great possessions, but in having few wants.',
    author: 'Epictetus',
  },
  {
    text: 'If you live in harmony with nature you will never be poor; if you live according to what others think, you will never be rich.',
    author: 'Seneca',
  },
  {
    text: 'Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.',
    author: 'Marcus Aurelius',
  },
  { text: 'No man was ever wise by chance.', author: 'Seneca' },
  {
    text: 'Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.',
    author: 'Epictetus',
  },
  { text: 'The greater the difficulty, the more glory in surmounting it.', author: 'Epictetus' },
  {
    text: 'To be even-minded is the greatest virtue.',
    author: 'Heraclitus (often associated with Stoic thought)',
  },
  {
    text: 'You act like mortals in all that you fear, and like immortals in all that you desire.',
    author: 'Seneca',
  },
  {
    text: 'It’s not what happens to you, but how you react to it that matters.',
    author: 'Epictetus',
  },
  { text: 'The obstacle is the way.', author: 'Marcus Aurelius (paraphrased)' },
  { text: 'Sometimes even to live is an act of courage.', author: 'Seneca' },
  { text: 'If you wish to be loved, love.', author: 'Seneca' },
  {
    text: 'The happiness of your life depends upon the quality of your thoughts.',
    author: 'Marcus Aurelius',
  },
  { text: 'He who is brave is free.', author: 'Seneca' },
  { text: 'What we do now echoes in eternity.', author: 'Marcus Aurelius' },
  {
    text: 'To bear trials with a calm mind robs misfortune of its strength and burden.',
    author: 'Seneca',
  },
  {
    text: 'Circumstances don’t make the man, they only reveal him to himself.',
    author: 'Epictetus',
  },
  { text: 'While we are postponing, life speeds by.', author: 'Seneca' },
  {
    text: 'Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.',
    author: 'Marcus Aurelius',
  },
  { text: 'No great thing is created suddenly.', author: 'Epictetus' },
  { text: 'It is the power of the mind to be unconquerable.', author: 'Seneca' },
  {
    text: 'Choose not to be harmed—and you won’t feel harmed. Don’t feel harmed—and you haven’t been.',
    author: 'Marcus Aurelius',
  },
];

export const allquotes = quotes.concat(stoic);

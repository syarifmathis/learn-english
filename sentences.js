// ==============================================================
//  English Sentence Practice — Source Data
// ==============================================================
//  Edit this file to add/change sentences. The HTML loads it via
//  <script src="sentences.js">, so it works both locally and online.
//
//  Each sentence has the shape:
//    {
//      text: "The full sentence.",
//      glossary: [                       // optional — difficult words/phrases
//        { word: "phrase", meaning: "translation or definition" },
//        ...
//      ]
//    }
//
//  Translations are free text — write them in any language.
//  Personal notes are NOT stored here; they're saved in your browser's
//  localStorage and stay tied to the sentence text even if you reload.
// ==============================================================

window.SENTENCES_DATA = [
  {
    text: "I see your point, but I can't help feeling there's another side to this.",
    glossary: [
      { word: "I see your point", meaning: "I understand what you're saying" },
      { word: "can't help feeling", meaning: "can't stop feeling / strongly feel" }
    ]
  },
  { text: "To be honest, I hadn't really thought about it that way before." },
  { text: "That's a fair point, although I'd argue the opposite." },
  {
    text: "I'm inclined to agree with you on that one.",
    glossary: [
      { word: "I'm inclined to", meaning: "I tend to / I lean towards" }
    ]
  },
  { text: "It really depends on how you look at it." },
  {
    text: "I've been meaning to bring this up at the next meeting.",
    glossary: [
      { word: "been meaning to", meaning: "have intended to (for some time)" },
      { word: "bring up", meaning: "mention / introduce a topic" }
    ]
  },
  { text: "We're running a bit behind schedule on this project." },
  { text: "Could you walk me through your reasoning?" },
  {
    text: "Let's circle back to that point in a moment.",
    glossary: [
      { word: "circle back", meaning: "return to a topic later" }
    ]
  },
  { text: "I'd appreciate it if you could send it over by Friday." },
  {
    text: "If I'd known earlier, I would have done things differently.",
    glossary: [
      { word: "If I'd known", meaning: "third conditional — past unreal" }
    ]
  },
  {
    text: "Had I been in your position, I probably would have made the same choice.",
    glossary: [
      { word: "Had I been", meaning: "inverted conditional — formal 'If I had been'" }
    ]
  },
  { text: "I wouldn't have minded if you'd told me sooner." },
  { text: "Even if it rains, we should still go ahead with the plan." },
  {
    text: "I'd rather you didn't mention this to anyone else just yet.",
    glossary: [
      { word: "I'd rather you didn't", meaning: "polite way to say 'please don't'" }
    ]
  },
  {
    text: "We need to come up with a better solution.",
    glossary: [
      { word: "come up with", meaning: "think of / produce (an idea)" }
    ]
  },
  {
    text: "I don't really get along with my new colleague.",
    glossary: [
      { word: "get along with", meaning: "have a good relationship with" }
    ]
  },
  {
    text: "She's been putting off making the decision for weeks.",
    glossary: [
      { word: "put off", meaning: "delay / postpone" }
    ]
  },
  {
    text: "Could you look after my plants while I'm away?",
    glossary: [
      { word: "look after", meaning: "take care of" }
    ]
  },
  {
    text: "Things didn't quite turn out the way I'd expected.",
    glossary: [
      { word: "turn out", meaning: "end up / result in" }
    ]
  },
  { text: "By the time I arrived, everyone had already left." },
  { text: "He told me he'd been working on it for months." },
  { text: "I didn't realize you'd already seen the email." },
  { text: "She mentioned that she might be running a little late." },
  { text: "They said they were considering a different approach." },
  { text: "I'm a bit disappointed, but I understand why it happened." },
  { text: "It's not that I disagree, it's just that I see it differently." },
  { text: "I'm not entirely convinced, to be honest." },
  { text: "That's actually quite a relief to hear." },
  {
    text: "I can't quite put my finger on what's bothering me.",
    glossary: [
      { word: "put my finger on", meaning: "identify exactly / pinpoint" }
    ]
  },
  { text: "I was wondering if you could give me some recommendations." },
  {
    text: "The flight ended up being delayed by almost three hours.",
    glossary: [
      { word: "ended up", meaning: "eventually was / finally became" }
    ]
  },
  { text: "I hadn't expected the city to be so crowded this time of year." },
  { text: "We somehow got lost on the way back to the hotel." },
  {
    text: "It turned out to be the highlight of the whole trip.",
    glossary: [
      { word: "turn out to be", meaning: "end up being" },
      { word: "highlight", meaning: "best part" }
    ]
  },
  { text: "I haven't had a chance to look at it yet." },
  { text: "Sorry, my mind was elsewhere — what were you saying?" },
  {
    text: "I've been so swamped with work lately.",
    glossary: [
      { word: "swamped", meaning: "extremely busy / overwhelmed" }
    ]
  },
  {
    text: "Things have been a bit hectic on my end.",
    glossary: [
      { word: "hectic", meaning: "very busy / chaotic" },
      { word: "on my end", meaning: "from my side / for me" }
    ]
  },
  { text: "Let me get back to you on that by tomorrow." },
  {
    text: "She must have forgotten about our meeting.",
    glossary: [
      { word: "must have forgotten", meaning: "modal of speculation — strong certainty about the past" }
    ]
  },
  { text: "He might not have received the message yet." },
  { text: "They could have been more upfront about it." },
  { text: "You should have mentioned it earlier." },
  { text: "It can't have been easy for them." },
  { text: "If I were you, I'd give it a bit more thought." },
  { text: "You might want to consider another option." },
  { text: "It might be worth checking with someone else first." },
  { text: "I'd suggest waiting until we have more information." },
  { text: "Have you thought about taking a different approach?" },
  {
    text: "Let's not jump to conclusions just yet.",
    glossary: [
      { word: "jump to conclusions", meaning: "decide too quickly without enough info" }
    ]
  },
  {
    text: "It's a bit of a long shot, but it's worth trying.",
    glossary: [
      { word: "long shot", meaning: "an attempt unlikely to succeed" }
    ]
  },
  {
    text: "I'm not going to lie, that caught me off guard.",
    glossary: [
      { word: "caught me off guard", meaning: "surprised me / I wasn't prepared" }
    ]
  },
  {
    text: "We'll just have to play it by ear.",
    glossary: [
      { word: "play it by ear", meaning: "decide as we go, without a fixed plan" }
    ]
  },
  {
    text: "That's easier said than done.",
    glossary: [
      { word: "easier said than done", meaning: "easy to talk about, hard to actually do" }
    ]
  },
  {
    text: "I've been trying to cut back on caffeine.",
    glossary: [
      { word: "cut back on", meaning: "reduce / consume less of" }
    ]
  },
  { text: "I'm not really a morning person." },
  { text: "I should probably get more sleep." },
  {
    text: "I've been feeling a bit under the weather lately.",
    glossary: [
      { word: "under the weather", meaning: "slightly ill / not feeling well" }
    ]
  },
  { text: "I'm trying to get into a better routine." },
  { text: "I'm thinking of taking a few days off next week." },
  {
    text: "We're hoping to wrap things up by the end of the month.",
    glossary: [
      { word: "wrap up", meaning: "finish / conclude" }
    ]
  },
  { text: "I haven't quite made up my mind yet." },
  {
    text: "I'm leaning towards the second option, actually.",
    glossary: [
      { word: "leaning towards", meaning: "preferring / inclined to choose" }
    ]
  },
  { text: "Let's see how things go and take it from there." },
  { text: "I'm afraid I have to disagree with you on this one." },
  { text: "With all due respect, I think there's been a misunderstanding." },
  {
    text: "I can see where you're coming from, but I'm not sure I agree.",
    glossary: [
      { word: "where you're coming from", meaning: "your perspective / your reasoning" }
    ]
  },
  { text: "I'm not so sure that's the whole picture." },
  {
    text: "I'd push back on that a little, if you don't mind.",
    glossary: [
      { word: "push back on", meaning: "challenge / disagree with politely" }
    ]
  },
  { text: "I apologize for the delay in getting back to you." },
  { text: "I should have made that clearer from the start." },
  {
    text: "It completely slipped my mind.",
    glossary: [
      { word: "slipped my mind", meaning: "I forgot" }
    ]
  },
  { text: "I take full responsibility for the mistake." },
  {
    text: "I didn't mean to come across that way.",
    glossary: [
      { word: "come across", meaning: "appear / give an impression" }
    ]
  },
  { text: "Just so I understand correctly, are you saying that we should wait?" },
  { text: "Could you elaborate on that point?" },
  { text: "What exactly do you mean by that?" },
  { text: "I'm not sure I follow — could you give me an example?" },
  { text: "Let me make sure I've got this right." },
  { text: "I really appreciate everything you've done." },
  {
    text: "You've been incredibly helpful — I owe you one.",
    glossary: [
      { word: "I owe you one", meaning: "I'll return the favour" }
    ]
  },
  { text: "That was a really thoughtful thing to do." },
  { text: "I'm impressed with how you handled the situation." },
  {
    text: "Thanks for going out of your way to help.",
    glossary: [
      { word: "going out of your way", meaning: "making a special effort" }
    ]
  },
  { text: "After giving it some thought, I've decided to accept." },
  {
    text: "On second thought, maybe we should reconsider.",
    glossary: [
      { word: "on second thought", meaning: "after thinking again" }
    ]
  },
  {
    text: "I'm in two minds about it, honestly.",
    glossary: [
      { word: "in two minds", meaning: "unable to decide between two options" }
    ]
  },
  {
    text: "Looking back, I think we made the right call.",
    glossary: [
      { word: "made the right call", meaning: "made the correct decision" }
    ]
  },
  {
    text: "It's worth weighing the pros and cons before deciding.",
    glossary: [
      { word: "pros and cons", meaning: "advantages and disadvantages" }
    ]
  },
  { text: "Could I have something a little less spicy, please?" },
  { text: "I'd rather not have anything too heavy this late." },
  { text: "Is there any chance of getting a refund?" },
  { text: "I was wondering if it comes in a smaller size." },
  { text: "Would it be possible to swap this for something else?" },
  {
    text: "It was lovely catching up with you.",
    glossary: [
      { word: "catching up", meaning: "talking after not seeing each other for a while" }
    ]
  },
  { text: "We should definitely do this again sometime soon." },
  {
    text: "I'd better get going — I've got a lot on today.",
    glossary: [
      { word: "got a lot on", meaning: "have a lot to do / very busy" }
    ]
  },
  { text: "Let's stay in touch and not leave it so long next time." },
  { text: "Take it easy, and we'll talk soon." }
];

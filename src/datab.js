const datab = [
  {
    question: '11111111111111111111111111111?',
    incorrectAnswers: [
      'Computer Style Sheets',
      'Creative Style Sheets',
      'Colorful Style Sheets',
    ],
    correctAnswer: 'Cascading Style Sheets',
  },

  {
    question: '2222222222222222222222222?',
    incorrectAnswers: [
      'In the <body> section',
      'At the end of the document',
      "You can't refer to an external style sheet",
    ],
    correctAnswer: 'In the <head> section',
  },
  {
    question: '333333333333333333333333333333?',
    incorrectAnswers: ['<script>', '<headStyle>', '<css>'],
    correctAnswer: '<style>',
  },
  {
    question: '444444444444444444444444?',
    incorrectAnswers: ['class', 'font', 'styles'],
    correctAnswer: 'style',
  },
  {
    question: '55555555555555555555555555555?',
    incorrectAnswers: [
      '{body:color=black;}',
      '{body;color:black;}',
      'body:color=black;',
    ],
    correctAnswer: 'body {color: black;}',
  },
  {
    question: '666666666666666666666666666666?',
    incorrectAnswers: [
      "' this is a comment",
      '// this is a comment',
      '// this is a comment //',
    ],
    correctAnswer: '/* this is a comment */',
  },
  {
    question: '77777777777777777777777777?',
    incorrectAnswers: ['color', 'bgcolor', 'bgColor'],
    correctAnswer: 'background-color',
  },
  {
    question: '8888888888888888888888888888888888?',
    incorrectAnswers: [
      'all.h1 {background-color:#FFFFFF;}',
      'h1.setAll {background-color:#FFFFFF;}',
      'h1.all {background-color:#FFFFFF;}',
    ],
    correctAnswer: 'h1 {background-color:#FFFFFF;}',
  },
];

export default datab;

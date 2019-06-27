import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuestionnairePage} from '../questionnaire/questionnaire'
import {Category} from '../../app/model/math/math.module';
import { QuizDataProvider } from '../../providers/quiz-data/quiz-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any = ['Mathematics','Politics','Soccer','Music','Science'];
  Categories: Array<Category> = [
    {categoryName: 'Mathematics',
    questions: [
      {question: 'Choose the multiple of 10',
      options: [
        {option: '3' },
        {option: '16'},
        {option: '110'}
        
      ]
      
    },
    {question: 'Choose the multiple of 3',
      options: [
        {option: '14' },
        {option: '25'},
        {option: '27'}
        
      ]
      
    },
    {question: '4 + 5 * (2 * 10) - 11 = ?',
    options: [
      {option: '8' },
      {option: '93'},
      {option: '94'}
      
    ]
    
  },
  {question: 'Difference of 99 and 11?',
  options: [
    {option: '87' },
    {option: '75'},
    {option: '88'}
    
  ]
  
},
{question: '7 + 12 * 3 / 2 =?',
options: [
  {option: '53' },
  {option: '25'},
  {option: '10'}
  
]

}
    ]
  },
  {categoryName: 'Politics',
    questions: [
      {question: 'Who was the President before Mandela?',
      options: [
        {option: 'F.W de Cleck' },
        {option: 'Jacob Zuma'},
        {option: 'Thabo Mbeki'}
        
      ]
      
    },
    {question: 'Third black president of South Africa?',
      options: [
        {option: 'Jacob Zuma' },
        {option: 'Thabo Mbeki'},
        {option: 'Kgalema Motlanthe'}
       
      ]
      
    },
    {question: 'How many years did Mandela spent in jail?',
    options: [
      {option: '37' },
      {option: '27'},
      {option: '17'}
      
    ]
    
  },
  {question: 'In which province was Mandela buried?',
  options: [
    {option: 'Western Cape' },
    {option: 'Eastern Cape'},
    {option: 'Kwazulu Natal'}
   
  ]
  
},
{question: 'Who is the leader of EFF?',
options: [
  {option: 'Musi Maimane' },
  {option: 'Floid Shivambu'},
  {option: 'Julius Malema'}
  
]

}
    ]
  },
  {categoryName: 'Soccer',
    questions: [
      {question: 'Which team is the 2018/2019 ABSA Premer Soccer Legue champions?',
      options: [
        {option: 'Orlando Pirates' },
        {option: 'CapeTown City'},
        {option: 'Mamelodi Sundowns'}
        
      ]
      
    },
    {question: 'Who is the previous(2018) Ballon dOr winner?',
      options: [
        {option: 'Lionel Messi' },
        {option: 'Luka Modric'},
        {option: 'Christiano Ronaldo'}
       
      ]
      
    },
    {question: 'In which year did Bafana Bafana won the AFCON?',
    options: [
      {option: '1996' },
      {option: '1995'},
      {option: '2010'}
      
    ]
    
  },
  {question: 'Who won the 2019 European golden boot?',
  options: [
    {option: 'Christiano Ronaldo' },
    {option: 'Kylian Mbappe'},
    {option: 'Lionel Messi'}
   
  ]
  
},
{question: 'How many times did Messi won Ballon dOr?',
options: [
  {option: '6' },
  {option: '5'},
  {option: '8'}
  
    ]

  }
    ]
  },
  {categoryName: 'Music',
    questions: [
      {question: 'When is AKAs birthday?',
      options: [
        {option: 'December 28' },
        {option: 'January 28'},
        {option: 'September 28'}
        
      ]
      
    },
    {question: 'How old is Afro-soul singer Lira?',
      options: [
        {option: '40' },
        {option: '39'},
        {option: '41'}
       
      ]
      
    },
    {question: 'What is DJ Black Coffee real name?',
    options: [
      {option: 'Nkosinathi Innocent Maphumulo' },
      {option: 'Thato Sikwane'},
      {option: 'Oscar Bonginkosi Mdlongwa'}
      
    ]
    
  },
  {question: 'Where was Cassper Nyovest born?',
  options: [
    {option: 'Mafikeng' },
    {option: 'Soweto'},
    {option: 'Gugulethu'}
   
  ]
  
},
{question: 'Who won the 2015 SAMA for Record of the Year?',
options: [
  {option: 'K.O ft. KiD X-Caracara' },
  {option: 'Black-Fortune Teller'},
  {option: 'AKA-All eyes on Me'}
  
    ]

  }
    ]
  },
  {categoryName: 'Science',
    questions: [
      {question: 'How far away is the sun?',
      options: [
        {option: '94 million miles away from the earth' },
        {option: '97 million miles away from the earth'},
        {option: '93 million miles away from the earth'}
        
      ]
      
    },
    {question: 'Which of the following is used in pencils?',
      options: [
        {option: 'Silicon' },
        {option: 'Graphite'},
        {option: 'Charcoal'}
       
      ]
      
    },
    {question: 'Chemical formula for water is?',
    options: [
      {option: 'Ho' },
      {option: 'H2O'},
      {option: 'NaIO2'}
      
    ]
    
  },
  {question: 'The gas usually filled in the electric bulb is?',
  options: [
    {option: 'Nitrogen' },
    {option: 'Hytrogen'},
    {option: 'Oxygen'}
   
  ]
  
},
{question: 'Washing soda is common name for?',
options: [
  {option: 'Calcium bicarbonate' },
  {option: 'Sodium carbonate'},
  {option: 'Calcium carbonate'}
  
    ]

  }
    ]
  }
  
  ]
  constructor(public navCtrl: NavController, private quizdata: QuizDataProvider) {

  }
  goToQuestionsPAge(value, Qs) {
    this.quizdata.setData(Qs)
    this.navCtrl.push(QuestionnairePage, value);
  }

}

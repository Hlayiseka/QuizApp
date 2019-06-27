import { Categories } from "../categories.model";

export const soccer:Array<Categories> = [
    //0
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

},
]
export interface Category { //0
        categoryName: string,
        questions: [
            {question: string
            options: [
                {option: string},
                {option: string},
                {option: string}
                
            ]
            },
            {question: string
                options: [
                    {option: string},
                    {option: string},
                    {option: string}
                   
                ]
                }, {question: string
                    options: [
                        {option: string},
                        {option: string},
                        {option: string}
                       
                    ]
                    },
                    {question: string
                        options: [
                            {option: string},
                            {option: string},
                            {option: string}
                           
                        ]
                        },
                        {question: string
                            options: [
                                {option: string},
                                {option: string},
                                {option: string}
                               
                            ]
                            }
                

        ]
     //1
}
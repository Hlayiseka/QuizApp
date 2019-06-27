import { Categories } from "../categories.model";

export const politics:Array<Categories> = [
    //0
    {question: 'Who was the President before Mandela?',
      options: [
        {option: 'F.W de Cleck' },
        {option: 'Jacob Zuma'},
        {option: 'Thabo Mbeki'}
        
      ]
      
    },
    {question: 'Who was the third black president of South Africa?',
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
  {question: 'In which province was Mandela buried',
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
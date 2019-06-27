import { Categories } from "../categories.model";

export const music:Array<Categories> = [
    //0
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
       
    ]},
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
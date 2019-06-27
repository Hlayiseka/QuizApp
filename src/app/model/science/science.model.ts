import { Categories } from "../categories.model";

export const science:Array<Categories> = [
    //0
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
}// import { Categories } from "../categories.model";

// export const Science: Categories[] = [
//     {question: 'Who started tech company Huawei?', choice1: 'A. Ren Zhengfei', choice2: 'B. Steve jobs', choice3: 'C. Bill Gates', choice4: 'D. Larry page'},
//     {question: 'Who is the CEO of Facebook?', choice1: 'A. Bill Gates', choice2: 'B. Jeff Beezos', choice3: 'C. Vladmir Putin', choice4: 'D. Mark Elliot Zuckerberg'},
//     {question: 'Country ahead on 5G network.', choice1: 'A. United States Of Amerioca', choice2: 'B. South Africa', choice3: 'C. China', choice4: 'D. Germany'},
//     {question: 'Tech company already deploying 5G.', choice1: 'A. Google', choice2: 'B. Huawei.', choice3: 'C. Microsoft.', choice4: 'D. Qualcomm.'},
//     {question: 'Country that invented Microsoft.', choice1: 'A. France.', choice2: 'B. DRC congo.', choice3: 'C. United States Of America.', choice4: 'D. Zimbabwe.'}
// ]
import { Categories } from "../categories.model";

export const Maths:Array<Categories> = [
    //0
    {question: 'Choose the multiple of 10',
    options: [
        {option: '3' },
        {option: '16'},
        {option: '110'}
    
    ]},
    {question: 'Choose the multiple of 3',
    options: [
        {option: '14' },
        {option: '25'},
        {option: '27'}
       
    ]},
    {question: '4 + 5 * (2 * 10) - 11 = ?',
    options: [
        {option: '8' },
        {option: '93'},
        {option: '94'}
    ]},
    {question: 'Difference of 99 and 11?',
    options: [
        {option: '87' },
        {option: '75'},
        {option: '88'}
       
    ]},
    {question: '7 + 12 * 3 / 2 =?',
    options: [
        {option: '53' },
        {option: '25'},
        {option: '10'}
       
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
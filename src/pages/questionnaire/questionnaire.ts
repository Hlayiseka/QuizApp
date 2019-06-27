import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Maths } from '../../app/model/math/math.module';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import {TotalPage} from '../total/total'
import { QuizDataProvider } from '../../providers/quiz-data/quiz-data';

@IonicPage()
@Component({
  selector: 'page-questionnaire',
  templateUrl: 'questionnaire.html',
})
export class QuestionnairePage {

  /* 
    class add and remove
  */
 class1: string = 'btn btn-warning';
 class2: string = 'unhide';
  
  title: string;
  Questions:any;
  total: number = 0;
  correMaths = ['110', '27', '93', '88', '25'];
  correPolitics = ['F.W de Cleck', 'Kgalema Motlanthe', '27', 'Eastern Cape', 'Julius Malema'];
  correSoccer = ['Mamelodi Sundowns','Luka Modric','1996','Lionel Messi','5'];
  correMusic = ['January 28','40','Nkosinathi Innocent Maphumulo','Mafikeng','K.O ft. KiD X-Caracara'];
  correScience = ['93 million miles away from the earth','Graphite','H2O','Nitrogen','Sodium carbonate'];
  constructor(public navCtrl: NavController, public navParams: NavParams, private quizData: QuizDataProvider) {
    
  }

  ionViewDidLoad() {
    // console.log(this.navParams);
    this.title = this.navParams.data;
    this.Questions = this.quizData.questions;
  }
  click1 =0;
  click2 =0;
  click3 =0;
  click4 =0;
  click5 =0;
  getAns(val){
    switch (this.title) {
      case 'Mathematics':
        this.correMaths.map(res => {
          if(this.class2 == 'unhide') {
            this.class2 = 'hide';
          }else {
            this.class2 == 'unhide'
          }
          if (val == res){

            if (val =="110")
            {
              if(this.click1 ==0)
              {
              this.click1 =this.click1+1;
            this.total = this.total + 20;
            console.log(val);
              }
             
            }
          } 
          else  if (val =="27")
          {
            
            if(this.click2 ==0)
            {
            this.click2 =this.click2+1;
          this.total = this.total + 20;
          console.log(val);
            }
          }
          else  if (val =="93")
          {
            
            if(this.click3 ==0)
            {
            this.click3 =this.click3+1;
          this.total = this.total + 20;
          console.log(val);
            }
          }
          else  if (val =="88")
          {
            
            if(this.click4 ==0)
            {
            this.click4 =this.click4+1;
          this.total = this.total + 20;
          console.log(val);
            }
          }
          else  if (val =="25")
          {
            
            if(this.click5 ==0)
            {
            this.click5 =this.click5+1;
          this.total = this.total + 20;
          console.log(val);
            }
          }
          
        })
        console.log('logic for Mathematics');
        break;
        case 'Politics':
          this.correPolitics.map(res => {
            if (val == res){
              if (val =="F.W de Cleck")
            {
              if(this.click1 ==0)
              {
              this.click1 =this.click1+1;
            this.total = this.total + 20;
            console.log(val);
              }
             
            }
          } 
          else  if (val =="Kgalema Motlanthe")
          {
            
            if(this.click2 ==0)
            {
            this.click2 =this.click2+1;
          this.total = this.total + 20;
          console.log(val);
            }
          }
          else  if (val =="27")
          {
            
            if(this.click3 ==0)
            {
            this.click3 =this.click3+1;
          this.total = this.total + 20;
          console.log(val);
            }
          }
          else  if (val =="Eastern Cape")
          {
            
            if(this.click4 ==0)
            {
            this.click4 =this.click4+1;
          this.total = this.total + 20;
          console.log(val);
            }
          }
          else  if (val =="Julius Malema")
          {
            
            if(this.click5 ==0)
            {
            this.click5 =this.click5+1;
          this.total = this.total + 20;
          console.log(val);
            }
          }
          })
          console.log('No logic for politics');
          break;
          case 'Soccer':
            this.correSoccer.map(res => {
              if (val == res){
                if (val =="Mamelodi Sundowns")
              {
                if(this.click1 ==0)
                {
                this.click1 =this.click1+1;
              this.total = this.total + 20;
              console.log(val);
                }
               
              }
            } 
            else  if (val =="Luka Modric")
            {
              
              if(this.click2 ==0)
              {
              this.click2 =this.click2+1;
            this.total = this.total + 20;
            console.log(val);
              }
            }
            else  if (val =="1996")
            {
              
              if(this.click3 ==0)
              {
              this.click3 =this.click3+1;
            this.total = this.total + 20;
            console.log(val);
              }
            }
            else  if (val =="Lionel Messi")
            {
              
              if(this.click4 ==0)
              {
              this.click4 =this.click4+1;
            this.total = this.total + 20;
            console.log(val);
              }
            }
            else  if (val =="5")
            {
              
              if(this.click5 ==0)
              {
              this.click5 =this.click5+1;
            this.total = this.total + 20;
            console.log(val);
              }
            }
            })
            break;
            case 'Music':
              this.correMusic.map(res => {
                if (val == res){
                  if (val =="January 28")
                {
                  if(this.click1 ==0)
                  {
                  this.click1 =this.click1+1;
                this.total = this.total + 20;
                console.log(val);
                  }
                 
                }
              } 
              else  if (val =="40")
              {
                
                if(this.click2 ==0)
                {
                this.click2 =this.click2+1;
              this.total = this.total + 20;
              console.log(val);
                }
              }
              else  if (val =="Nkosinathi Innocent Maphumulo")
              {
                
                if(this.click3 ==0)
                {
                this.click3 =this.click3+1;
              this.total = this.total + 20;
              console.log(val);
                }
              }
              else  if (val =="Mafikeng")
              {
                
                if(this.click4 ==0)
                {
                this.click4 =this.click4+1;
              this.total = this.total + 20;
              console.log(val);
                }
              }
              else  if (val =="K.O ft. KiD X-Caracara")
              {
                
                if(this.click5 ==0)
                {
                this.click5 =this.click5+1;
              this.total = this.total + 20;
              console.log(val);
                }
              }
              })
              break;
              case 'Science':
                this.correScience.map(res => {
                  if (val == res){
                    if (val =="93 million miles away from the earth")
                  {
                    if(this.click1 ==0)
                    {
                    this.click1 =this.click1+1;
                  this.total = this.total + 20;
                  console.log(val);
                    }
                   
                  }
                } 
                else  if (val =="Graphite")
                {
                  
                  if(this.click2 ==0)
                  {
                  this.click2 =this.click2+1;
                this.total = this.total + 20;
                console.log(val);
                  }
                }
                else  if (val =="H2O")
                {
                  
                  if(this.click3 ==0)
                  {
                  this.click3 =this.click3+1;
                this.total = this.total + 20;
                console.log(val);
                  }
                }
                else  if (val =="Nitrogen")
                {
                  
                  if(this.click4 ==0)
                  {
                  this.click4 =this.click4+1;
                this.total = this.total + 20;
                console.log(val);
                  }
                }
                else  if (val =="Sodium carbonate")
                {
                  
                  if(this.click5 ==0)
                  {
                  this.click5 =this.click5+1;
                this.total = this.total + 20;
                console.log(val);
                  }
                }
                })
      default:
        break;

    }
    
  }
  showTotal(){
    this.navCtrl.push(TotalPage, this.total);
  }
}

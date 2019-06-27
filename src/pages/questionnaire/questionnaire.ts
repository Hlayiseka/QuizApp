import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Maths } from '../../app/model/math/math.model';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import {TotalPage} from '../total/total'
import { QuizDataProvider } from '../../providers/quiz-data/quiz-data';

@IonicPage()
@Component({
  selector: 'page-questionnaire',
  templateUrl: 'questionnaire.html',
})
export class QuestionnairePage {
  @ViewChild('slides') slides: Slides;
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
    console.log(this.quizData.questions);
    
  }

 
  ionViewDidLoad() {
    // console.log(this.navParams);
    this.title = this.navParams.data;
    this.Questions = this.quizData.questions;
    this.slides.lockSwipeToPrev(true);
  }
  getAns(val){
    if (this.slides.isEnd() ==false){
      switch (this.title) {
        case 'Mathematics':
          this.correMaths.map(res => {
            if (val == res){
              this.total = this.total + 20;
 
            } else {
 
            }
 
          })
          console.log('logic for Mathematics');
          break;
          case 'Politics':
            this.correPolitics.map(res =>{
              if( val == res){
                this.total = this.total +20;
              }
              else{
 
              }
            })
            break;
            case 'Music':
              this.correMusic.map(res => {
                if (val == res){
                  this.total = this.total +20;
                }
              })
            break;
            case 'Soccer':
              this.correSoccer.map(res => {
                if (val == res){
                  this.total = this.total +20;
                }
              })
              break;
              case 'Science':
                this.correScience.map(res => {
                  if (val == res) {
                    this.total = this.total+20
                  }
                })
        default:
          break;
      }
      this.slides.slideNext();
    } else{
      console.log('Quiz done');
 
    }
  }
  showTotal(){
    this.navCtrl.push(TotalPage, this.total);
  }
 }


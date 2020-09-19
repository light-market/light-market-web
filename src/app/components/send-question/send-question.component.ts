import { Component, OnInit } from '@angular/core';
import { FAQ } from 'src/app/models/faq.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-send-question',
  templateUrl: './send-question.component.html',
  styleUrls: ['./send-question.component.scss']
})
export class SendQuestionComponent implements OnInit {
  isAsking = false;
  faq: FAQ[] = [];
  sendedQuestion : FAQ;
  message : string;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getQuestions();
  }
  askQuestion() {
    this.isAsking = true;
  }
  getQuestions(){
    this.api.getFaq().subscribe((response)=>{
      this.faq=response;
    })
  }
  onSubmitQuestion(form :NgForm){
    const value = form.value;
    this.sendedQuestion = {
      question : value.question,
      author : value.author
    }
    this.api.sendQuestion(this.sendedQuestion).subscribe(response=>{
      this.message = response.message;
    });
    form.reset();
    
  }

}

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
  faq: FAQ[] = [];
  sendedQuestion: FAQ;
  message: string;
  isLoading = false;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getQuestions();
  }
  getQuestions() {
    this.isLoading = true;
    this.api.getFaq().subscribe((response) => {
      this.faq = response;
      this.isLoading = false;
    })
  }
  onSubmitQuestion(form: NgForm) {
    const value = form.value;

    this.sendedQuestion = {
      question: value.question,
      author: value.author
    }
    this.api.sendQuestion(this.sendedQuestion).subscribe(response => {
      console.log(response.message)
      this.message = response.message;
    });
    form.reset();

  }

}

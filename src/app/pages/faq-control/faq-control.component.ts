import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FAQ } from 'src/app/models/faq.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-faq-control',
  templateUrl: './faq-control.component.html',
  styleUrls: ['./faq-control.component.scss']
})
export class FaqControlComponent implements OnInit {
  questions: FAQ[] = [];
  dtOptions: DataTables.Settings = {};
  deleteMessage: string = "Are You Sure Deleting Question";
  deletedItemID = '';
  message = {
    approve: null,
    delete: null
  };
  approvedQuestion: FAQ = {
    author: '',
    question: '',
    isShown: false
  };
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.apiService.getQuestionsAdmin().subscribe(res => {
      this.questions = res;
    }, err => {
      console.log(err)
    })
  }
  @HostListener('click', ['$event'])
  onClick(event: any) {
    this.message = {
      approve: null,
      delete: null
    }
  }
  onDeleteQuestion(event, id) {
    this.apiService.DeleteQuestion(this.deletedItemID).subscribe(res => {
      this.message.delete = res.message;
      this.questions.splice(id, 1);
    }, err => {
      this.message.delete = err.message;
    })
  }
  onSubmit(form: NgForm) {
    this.approvedQuestion.answer = form.value.answer;
    this.approvedQuestion.specialist = form.value.specialist;
    this.approvedQuestion.isShown = true;
    this.apiService.approveQuestion(this.approvedQuestion).subscribe(res => {
      this.message.approve = res.message;
    }, err => {
      this.message.approve = err.message;

    })
  }

}

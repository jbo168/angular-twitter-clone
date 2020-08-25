import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-feed-edit',
  templateUrl: './feed-edit.component.html',
  styleUrls: ['./feed-edit.component.css']
})
export class FeedEditComponent implements OnInit {
  id: number;
  feedForm: FormGroup;
  editMode = false;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit () {

  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let postBody = '';

    if (this.editMode) {
      console.log('edit mode');
    }

    this.feedForm = new FormGroup({
      'postBody': new FormControl(postBody, Validators.required)
    });
  }

}

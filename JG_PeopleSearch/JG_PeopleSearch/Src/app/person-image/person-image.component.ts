import { Component, Input, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'person-image',
  templateUrl: './person-image.component.html',
  styleUrls: ['./person-image.component.css']
})
export class PersonImageComponent implements AfterViewInit {

  @Input() id: number;
  public imageSrc : string = '../Src/assets/placeholder.png';
    
  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    this.fetchImage();
  }

  fetchImage() : void
  {
    let url = `api/peopleimage/${this.id.toString()}`;

    this.http.get<string>(url).subscribe((base64String)=>{
      this.imageSrc = base64String;
    });
  }
}
   
import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderPage } from '../header/header.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HeaderPage, HttpClientModule],
})
export class Tab1Page implements OnInit {
  constructor() {}

  private http =  inject(HttpClient)

  data:any

      ngOnInit(): void {
        
        const noteTitle:any = document.getElementById('noteTitle')
        const noteNote: any = document.getElementById('noteNote')

        this.http.get('http://localhost:3000/notes').subscribe(response => {

        console.log(response)
        this.data = response


          
        });

      }

      delete() {

        const noteTitle:any = document.getElementById('noteTitle')
        const noteNote: any = document.getElementById('noteNote')

        if(noteTitle.innerHTML == this.data[0]['title'] && noteNote.innerHTML == this.data[0]['notes']) {

     
  
          this.http.delete(`http://localhost:3000/notes/${this.data[0]['id']}`).subscribe(() => {
          
          window.location.reload()

          });
        }

     

      }


}

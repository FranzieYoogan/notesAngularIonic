import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderPage } from '../header/header.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HeaderPage, HttpClientModule]
})
export class Tab2Page {

  constructor() {}

  private http = inject(HttpClient)


  create() {

    const notesTitle:any = document.getElementById('notesTitle')
    const notesNote:any = document.getElementById('notesNote')
    const error:any = document.getElementById('error')

    const body = {

      "title": notesTitle.value,
      "notes": notesNote.value

      
    }

    if(notesTitle.value != "" && notesNote.value != "") {

      this.http.post('http://localhost:3000/notes', body).subscribe(response => {
        console.log('Updated config:', response);
      });

     window.location.reload()

    } else {

      error.innerHTML = "ERROR"

    }

 

    
  }


}

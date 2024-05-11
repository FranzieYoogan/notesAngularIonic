import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square });
  }

  ngOnInit(): void {
    
    const labelStyle:any = document.getElementById('labelStyle')
    const labelStyle2:any = document.getElementById('labelStyle2')
    const createIcon:any = document.getElementById('createIcon')
    const allIcon:any = document.getElementById('allIcon')

     if(window.location.href == "http://localhost:8100/tabs/tab1") {

     labelStyle.style.color = "#2ee6a8"
     labelStyle2.style.color = "black"
     allIcon.src = "/assets/icon/notesTab2.svg"
     createIcon.src = "/assets/icon/createNote.svg"
     } 
    
     if(window.location.href == "http://localhost:8100/tabs/tab2") {

     labelStyle2.style.color = "#2ee6a8"
     labelStyle.style.color = "black"
     createIcon.src = "/assets/icon/createNote2.svg"
     allIcon.src = "/assets/icon/notesTab.svg"

    }

  }


  createNote2() {
    const labelStyle2:any = document.getElementById('labelStyle2')
    const labelStyle:any = document.getElementById('labelStyle')
    const createIcon:any = document.getElementById('createIcon')
    const allIcon:any = document.getElementById('allIcon')

    createIcon.src = "/assets/icon/createNote2.svg"
    allIcon.src = "/assets/icon/notesTab.svg"
    labelStyle2.style.color = "#2ee6a8"
    labelStyle.style.color = "black"

  }

    allNotes() {
    const createIcon:any = document.getElementById('createIcon')
    const allIcon:any = document.getElementById('allIcon')
    const labelStyle2:any = document.getElementById('labelStyle2')
    const labelStyle:any = document.getElementById('labelStyle')

    allIcon.src = "/assets/icon/notesTab2.svg"
    createIcon.src = "/assets/icon/createNote.svg"
    labelStyle.style.color = "#2ee6a8"
    labelStyle2.style.color = "black"

  }

}

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

     if(window.location.href == "http://localhost:8100/tabs/tab1") {

     labelStyle.style.color = "#2ee6a8"
     labelStyle2.style.color = "black"

     } 
    
     if(window.location.href == "http://localhost:8100/tabs/tab2") {

     labelStyle2.style.color = "#2ee6a8"
     labelStyle.style.color = "black"

    }

  }


  createNote2() {
    const labelStyle2:any = document.getElementById('labelStyle2')
    const labelStyle:any = document.getElementById('labelStyle')

    labelStyle2.style.color = "#2ee6a8"
    labelStyle.style.color = "black"

  }

    allNotes() {
    const labelStyle2:any = document.getElementById('labelStyle2')
    const labelStyle:any = document.getElementById('labelStyle')

    labelStyle.style.color = "#2ee6a8"
    labelStyle2.style.color = "black"

  }

}

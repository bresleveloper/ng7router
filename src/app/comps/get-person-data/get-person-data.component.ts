import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { ActivatedRoute, Router, CanActivate, NavigationStart, 
    ChildActivationEnd, ActivationEnd, Scroll } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get-person-data',
  templateUrl: './get-person-data.component.html',
  styleUrls: ['./get-person-data.component.css']
})
export class GetPersonDataComponent implements OnInit, OnDestroy {

  person:{}

  private subs:Subscription[] = []

  constructor(private route: ActivatedRoute, private router:Router) { 
      //show events, show with no unsubscribe
      //show only ngOnInit
      this.subs.push(router.events.subscribe(console.log))
      this.subs.push(router.events.subscribe(e=>{
          if (e instanceof NavigationStart) {
              console.log ('yee navi start')
          }
          if (e instanceof Scroll ) {
            console.log ('yee navi Scroll ')
              
          }
      }))
      route.params.subscribe(console.log)
      route.params.subscribe(params => this.person = this.persons[params['id']])
  }
  
  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe())  //s['unsubscribe']()
    //s[show ? 'show' : 'hide']()
  }

  persons = {
      "1" : { name: 'Mr. Bin'},
      "2" : { name: 'Superman'},
      "3" : { name: 'Batman'},
      "4" : { name: 'Robbin'},
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.person = this.persons[id]
  }


  



}




@Component({
    selector: 'app-get-person-age',
    template: '<h3>33</h3>',
  })
  export class GetPersonAgeComponent  {}  

  @Component({
    selector: 'app-get-person-age',
    template: '<h3>mew mew</h3>',
  })
  export class GetPersonKittenComponent  {}  



@Injectable({providedIn:'root'})
export class PersonGuardService implements CanActivate {

  constructor(public router: Router) {}

  canActivate(): boolean {
    let r = Math.random()
    console.log(r) 
    if (r > 0.5) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }

}
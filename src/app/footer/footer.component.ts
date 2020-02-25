import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { AppState} from '../../redux/app.state';

import { SetFilterAction } from '../../redux/filter/filter.action'

@Component({
  selector: 'atd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private strore: Store<AppState>
  ) { }

  ngOnInit() {
  }

  doFilter(filter){
    const action = new SetFilterAction(filter)
    console.log(action)
    this.strore.dispatch(action)
  }

}

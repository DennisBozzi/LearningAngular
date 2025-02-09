import { Component } from '@angular/core';
import { createAvatar } from '@dicebear/core';
import { personas } from '@dicebear/collection';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-infinity-scroll',
  imports: [InfiniteScrollDirective],
  templateUrl: './infinity-scroll.component.html',
  styleUrl: './infinity-scroll.component.scss'
})

export class InfinityScrollComponent {

  array = [];
  items = 16;
  direction = "";
  end = false;

  generateAvatar(name: string) {
    return {
      name: name,
      uri: createAvatar(personas, { seed: name }).toDataUri()
    }
  }

  names = [
    this.generateAvatar('Alice'),
    this.generateAvatar('Bob'),
    this.generateAvatar('Charlie'),
    this.generateAvatar('David'),
    this.generateAvatar('Eve'),
    this.generateAvatar('Frank'),
    this.generateAvatar('Grace'),
    this.generateAvatar('Heidi'),
    this.generateAvatar('Ivan'),
    this.generateAvatar('Judy'),
    this.generateAvatar('Kevin'),
    this.generateAvatar('Lily'),
    this.generateAvatar('Mallory'),
    this.generateAvatar('Niaomi'),
    this.generateAvatar('Oscar'),
    this.generateAvatar('Peggy'),
    this.generateAvatar('Quentin'),
    this.generateAvatar('Rita'),
    this.generateAvatar('Steve'),
    this.generateAvatar('Trent'),
    this.generateAvatar('Ursula'),
    this.generateAvatar('Victor'),
    this.generateAvatar('Wendy'),
    this.generateAvatar('Xander'),
    this.generateAvatar('Yvonne'),
    this.generateAvatar('Zelda'),
    this.generateAvatar('Alice'),
    this.generateAvatar('Bob'),
    this.generateAvatar('Charlie'),
    this.generateAvatar('David'),
    this.generateAvatar('Eve'),
    this.generateAvatar('Frank'),
    this.generateAvatar('Grace'),
    this.generateAvatar('Heidi'),
    this.generateAvatar('Ivan'),
    this.generateAvatar('Judy'),
    this.generateAvatar('Kevin'),
    this.generateAvatar('Lily'),
    this.generateAvatar('Mallory'),
    this.generateAvatar('Niaomi'),
    this.generateAvatar('Oscar'),
    this.generateAvatar('Peggy'),
    this.generateAvatar('Quentin'),
    this.generateAvatar('Rita'),
    this.generateAvatar('Steve'),
    this.generateAvatar('Trent'),
    this.generateAvatar('Ursula'),
    this.generateAvatar('Victor'),
    this.generateAvatar('Wendy'),
    this.generateAvatar('Xander'),
    this.generateAvatar('Yvonne'),
    this.generateAvatar('Zelda')
  ];

  onScrollDown() {
    this.items += 4;
    if (this.items >= this.names.length) {
      this.end = true;
    }
    this.direction = "down";
  }

}

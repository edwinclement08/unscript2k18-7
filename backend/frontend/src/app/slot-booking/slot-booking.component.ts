import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot-booking',
  templateUrl: './slot-booking.component.html',
  styleUrls: ['./slot-booking.component.css']
})
export class SlotBookingComponent implements OnInit {
  x: number[];
  floors: any;
  currentFloor: string;
  constructor() {
    this.floors = [
      new Floor("9th Floor", [new Room("Samvaad", true), new Room("Open Source Lab", true),]),
      new Floor("8th Floor", [new Room("806", false), new Room("807", false), new Room("807", false)]),

    ];
    this.currentFloor =this.floors[0].name ;
  }

  ngOnInit() {
  }

  floorClicked(floor) {
    this.currentFloor = floor.name;
  }

}


class Room {
  name: string;
  bookstatus: boolean;
  constructor(name: string, bookStatus: boolean) {
    this.name = name;
    this.bookstatus = bookStatus;
  }
}

class Floor {
  rooms: Room[];
  name: string;
  constructor(name: string, rooms: Room[]) {
    this.rooms = rooms;
    this.name = name;
  }
}

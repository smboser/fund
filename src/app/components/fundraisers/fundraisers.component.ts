import { Component, OnInit } from '@angular/core';
import { FundraiserService } from '../../services/fundraiser.service';
import { FundraiserData } from '../../interfaces/fundraiser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fundraisers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fundraisers.component.html',
  styleUrl: './fundraisers.component.scss',
})
export class FundraisersComponent implements OnInit {
  public fundraiserData: FundraiserData[] = [];

  ngOnInit(): void {
    this.lists();
  }

  constructor(private fundraiserService: FundraiserService) {}

  lists() {
    // this.fundraiserService.list();
    this.fundraiserService.getLists();
    this.fundraiserService.fundraiserList$.subscribe((fundraiserData) => {
      this.fundraiserData = fundraiserData;
    });
  }
}

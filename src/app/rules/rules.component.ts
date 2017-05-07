import { Component, OnInit } from '@angular/core';
import { RulesService } from 'app/rules/rules.service';
import { CommonService } from 'app/common.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  all_rules = [];

  constructor(private commonService: CommonService, private rulesService: RulesService) { }

  ngOnInit() {
  	this.rulesService.getRules().subscribe((data) => {
  		this.all_rules = data;
  	});
  }
  createRule() {}
  updateRule() {}
  selectRule() {}
  deleteRule() {}
}

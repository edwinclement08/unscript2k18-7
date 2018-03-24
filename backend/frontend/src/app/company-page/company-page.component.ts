import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
  company:any = {
    name : "Morgan Stanley",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    website:"http://www.morganstanley.com",
    headquarters:"New York, NY",
    company_type:"Public Company",
    company_size:"10,001+ employees",
    specialties:"Sales & Trading, Investment Banking, Investment Management, Prime Brokerage, Research, Institutional Consulting, Wealth Management, and Private Wealth Management",
    job_profile:"Java and Javascript Developer"
  }
  flag:string="company"
  constructor() { }

  ngOnInit() {
  }
  viewStudent(){
    this.flag = "student";
  }
  eligibilityCriteria(){
    this.flag = "eligibility";
  }
  companyProfile(){
    this.flag = "company";
  }
}

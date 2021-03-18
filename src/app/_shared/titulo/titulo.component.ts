import { Component, OnInit, Input } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Breadcrumb, BreadcrumbService } from "angular-crumbs";

@Component({
  selector: "app-titulo",
  templateUrl: "./titulo.component.html",
  styleUrls: ["./titulo.component.css"],
})
export class TituloComponent implements OnInit {
  @Input() titulo: string;

  constructor(
    private titleService: Title,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit() {
    this.breadcrumbService.breadcrumbChanged.subscribe((crumbs) => {
      this.titleService.setTitle(this.createTitle(crumbs));
    });
  }

  private createTitle(routesCollection: Breadcrumb[]) {
    const title = "Angular Breadcrumb";
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) {
      return title;
    }

    const routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`;
  }

  private titlesToString(titles) {
    return titles.reduce((prev, curr) => {
      return `${curr.displayName} - ${prev}`;
    }, "");
  }
}

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Pagination } from "../models/pagination";

@Component({
  selector: "hbm-custom-paginator",
  templateUrl: "./custom-paginator.component.html",
  styleUrls: ["./custom-paginator.component.scss"],
})
export class CustomPaginatorComponent implements OnInit {
  @Input() length!: number;
  @Input() pageSize: number = 2;
  @Input() hasFirstButton: boolean = true;

  @Output() pageChanged = new EventEmitter<Pagination>();

  pages: number[] = [];
  currentPage: number = 1;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["length"] || changes["pageSize"]) {
      this.fillPages();
    }
  }

  public get pageCount(): number {
    return Math.ceil(this.length / this.pageSize);
  }

  private fillPages() {
    this.pages = Array(this.pageCount)
      .fill(8)
      .map((x: number, i: number) => i + 1);
  }

  onPageChange(newPage: number) {
    if (newPage <= this.pageCount) {
      const previousPage = this.currentPage;
      this.currentPage = newPage;
      this.pageChanged.emit({
        previousPage,
        currentPage: this.currentPage,
      });
    }
  }
}

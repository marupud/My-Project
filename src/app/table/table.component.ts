import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'age'];
  dataSource = new MatTableDataSource<usersTableFormat>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  animals: any[] = [];
  isLoading: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.loadUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getUserData();
  }

  getUserData() {
    this.userService.getUsersTable().subscribe(users => {
      this.dataSource.data = users;
    });
  }

  loadUsers(): void {
    this.isLoading = true;
    this.userService.getAnimals()
      .then(data => {
        this.animals = data;
        this.isLoading = false;
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        this.isLoading = false;
      });
  }

}
export interface usersTableFormat {
  id: number;
  name: string;
  email: string;
  age: number;
}


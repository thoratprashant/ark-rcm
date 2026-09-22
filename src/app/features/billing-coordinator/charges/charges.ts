import { AfterViewInit, Component, OnDestroy, ViewChild, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink, RouterLinkActive } from '@angular/router';

type ChargeStatus = 'Reviewed by Physician - Yes' | 'Reviewed by Physician - No' | 'Voided' | 'Draft';

type Charge = {
  id: string;
  dateOfService: string;
  renderingPhysician: string;
  chargeValue: number;
  status: ChargeStatus;
  statusNote?: string;
  dateOfAdmission: string;
  unmatched?: boolean;
};

@Component({
  selector: 'app-charges',
  imports: [
    FormsModule,
    CurrencyPipe,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './charges.html',
  styleUrl: './charges.scss',
})
export class Charges implements AfterViewInit, OnDestroy {
  private sort?: MatSort;
  private paginator?: MatPaginator;

  @ViewChild(MatSort)
  set matSort(sort: MatSort | undefined) {
    this.sort = sort;
    this.syncTableControls();
  }

  @ViewChild(MatPaginator)
  set matPaginator(paginator: MatPaginator | undefined) {
    this.paginator = paginator;
    this.syncTableControls();
  }

  protected readonly totalCharges = 7;
  protected readonly showListing = signal(false);
  protected readonly showSyncWarning = signal(false);
  protected readonly filtersOpen = signal(true);
  protected readonly displayedColumns = ['id', 'dateOfService', 'renderingPhysician', 'chargeValue', 'status', 'dateOfAdmission', 'actions'];
  protected readonly dataSource = new MatTableDataSource<Charge>([
    {
      id: 'CHG-98420',
      dateOfService: '2023-10-24',
      renderingPhysician: 'Dr. Sarah Jenkins, MD',
      chargeValue: 420,
      status: 'Reviewed by Physician - Yes',
      dateOfAdmission: '-',
    },
    {
      id: 'CHG-98419',
      dateOfService: '2023-10-23',
      renderingPhysician: 'Dr. Alan Vance, MD',
      chargeValue: 420,
      status: 'Reviewed by Physician - No',
      dateOfAdmission: '2023-10-20',
    },
    {
      id: 'CHG-98418',
      dateOfService: '2023-10-23',
      renderingPhysician: 'Dr. Robert Chen, MD',
      chargeValue: 420,
      status: 'Reviewed by Physician - No',
      dateOfAdmission: '-',
    },
    {
      id: 'CHG-98417',
      dateOfService: '2023-10-22',
      renderingPhysician: 'Dr. Sarah Jenkins, MD',
      chargeValue: 420,
      status: 'Voided',
      statusNote: 'Voided by S. Mitchell - Oct 22, 2023',
      dateOfAdmission: '-',
      unmatched: true,
    },
    {
      id: 'CHG-98416',
      dateOfService: '2023-10-22',
      renderingPhysician: 'Dr. Alan Vance, MD',
      chargeValue: 420,
      status: 'Draft',
      dateOfAdmission: '2023-10-18',
    },
    {
      id: 'CHG-98415',
      dateOfService: '2023-10-21',
      renderingPhysician: 'Dr. Robert Chen, MD',
      chargeValue: 420,
      status: 'Reviewed by Physician - No',
      dateOfAdmission: '-',
    },
    {
      id: 'CHG-98414',
      dateOfService: '2023-10-21',
      renderingPhysician: 'Dr. Sarah Jenkins, MD',
      chargeValue: 420,
      status: 'Reviewed by Physician - Yes',
      dateOfAdmission: '2023-10-19',
    },
  ]);

  protected dateRange = 'previous-week';
  protected renderingPhysician = 'all-multi';
  protected supervisingPhysician = 'all';
  protected serviceDepartment = 'nephrology';
  protected patientDepartment = 'dialysis';
  protected insurancePackage = 'all';
  protected procedureCodes = '90960, 90961';
  protected netActivity = 'e.g., 0.00';

  private warningTimer?: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    this.syncTableControls();
  }

  ngOnDestroy(): void {
    if (this.warningTimer) {
      clearTimeout(this.warningTimer);
    }
  }

  protected showChargesListing(): void {
    this.showListing.set(true);
    this.showSyncWarning.set(true);

    if (this.warningTimer) {
      clearTimeout(this.warningTimer);
    }

    this.warningTimer = setTimeout(() => this.showSyncWarning.set(false), 60000);

    setTimeout(() => this.syncTableControls());
  }

  protected toggleFilters(): void {
    this.filtersOpen.update((open) => !open);
  }

  protected getStatusTone(status: ChargeStatus): string {
    if (status === 'Reviewed by Physician - Yes') {
      return 'success';
    }

    if (status === 'Draft') {
      return 'draft';
    }

    return 'danger';
  }

  private syncTableControls(): void {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}

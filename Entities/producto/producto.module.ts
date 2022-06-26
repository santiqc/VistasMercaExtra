import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { ProductoComponent } from './list/producto.component';
import { ProductoDetailComponent } from './detail/producto-detail.component';
import { ProductoUpdateComponent } from './update/producto-update.component';
import { ProductoDeleteDialogComponent } from './delete/producto-delete-dialog.component';
import { ProductoRoutingModule } from './route/producto-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [SharedModule, ProductoRoutingModule, MatIconModule, NgxPaginationModule],
  declarations: [ProductoComponent, ProductoDetailComponent, ProductoUpdateComponent, ProductoDeleteDialogComponent],
  entryComponents: [ProductoDeleteDialogComponent],
})
export class ProductoModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { PedidoComponent } from '../list/pedido.component';
import { PedidoDetailComponent } from '../detail/pedido-detail.component';
import { PedidoUpdateComponent } from '../update/pedido-update.component';
import { PedidoRoutingResolveService } from './pedido-routing-resolve.service';
import { User2RouteAccessService } from 'app/core/auth/user2-route-access.service';

const pedidoRoute: Routes = [
  {
    path: '',
    component: PedidoComponent,
    canActivate: [User2RouteAccessService],
  },
  {
    path: ':id/view',
    component: PedidoDetailComponent,
    resolve: {
      pedido: PedidoRoutingResolveService,
    },
    canActivate: [User2RouteAccessService],
  },
  {
    path: 'new',
    component: PedidoUpdateComponent,
    resolve: {
      pedido: PedidoRoutingResolveService,
    },
    canActivate: [User2RouteAccessService],
  },
  {
    path: ':id/edit',
    component: PedidoUpdateComponent,
    resolve: {
      pedido: PedidoRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(pedidoRoute)],
  exports: [RouterModule],
})
export class PedidoRoutingModule {}

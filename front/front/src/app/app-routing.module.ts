import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { SearchComponent } from './search/search.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AppComponent } from './app.component';
import { SellerComponent } from './seller/seller.component';
import { OrderHistoryComponent} from './order-history/order-history.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  
//  { path: '/', redirectTo: 'AppComponent', pathMatch: 'full' },
  { path: 'order-history', component: OrderHistoryComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'productdetails', component: ProductpageComponent},
  { path: 'search', component: SearchComponent},
  { path: 'Seller', component: SellerComponent },
  { path: 'search/:searchKey', component: SearchComponent},
  { path: 'cart', component: AddToCartComponent},
  {path: 'sellerProduct',component:SellerProductsComponent},
  {path: 'getProducts', component: AddProductComponent},
  { path: '**', component: AppComponent },
 // { path: '/', redirectTo: 'AppComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';
import { cargarUsuario } from '../../store/actions';
import { AppState } from '../../store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario | null = null;
  loading = false;
  error: any;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select('usuario')
      .subscribe(
        ({ user, loading, error }) => (
          (this.usuario = user), (this.loading = loading), (this.error = error)
        )
      );

    this.route.params.subscribe(({ id }) => {
      console.log(id);
      this.store.dispatch(cargarUsuario({ id }));
    });
  }
}

import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuario = createAction(
  '[Usuario] Cargar Usuario',
  props<{ id: string }>()
);
export const cargarUsuarioSuccess = createAction(
  '[Usuario] Usuario cargado!',
  props<{ usuario: Usuario }>()
);
export const cargarUsuarioError = createAction(
  '[Usuario] Usuario NO cargado!',
  props<{ payload: any }>()
);

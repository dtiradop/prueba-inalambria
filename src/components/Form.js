import React from 'react'

export const Form = () => {
  return (
<form class="row g-4 mb-5">
  <div class="col-auto">
    <label  class="visually-hidden">Ingresa el lugar que deseas buscar</label>
    <input type="text" class="form-control" placeholder='Ingresa el lugar' value={"New york"} readonly/>
  </div>
  <div class="col-auto">
    <label class="visually-hidden">Cantidad de lugares que deseas buscar</label>
    <input type="text" class="form-control"  placeholder="Cantidad de lugares" value={"100"} readonly/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-sm o-btn mb-3">Buscar</button>
  </div>
</form>
  )
}

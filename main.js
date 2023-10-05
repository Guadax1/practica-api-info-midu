import { fetchIpInfo } from './assets/fetch-api';
import './style.css'

const $form   = document.querySelector( '#form' ),
      $input  = document.querySelector( '#input' ),
      $submit = document.querySelector( '#submit' ),
      $result = document.querySelector( '#result' );

$form.addEventListener( 'submit', async ( event ) => {
  event.preventDefault()
  const {value} = $input;
  if ( !value ) return;

  $submit.setAttribute( 'disable', '' );
  $submit.setAttribute( 'aria-busy', 'true' );

  const ipInfo = await fetchIpInfo(value);

  if ( ipInfo ) {
    $result.innerHTML = JSON.stringify( ipInfo, null, 2 );
  }

  $submit.removeAttribute( 'disable');
  $submit.removeAttribute( 'aria-busy');
})



// Revisar el patter (atributo del input)
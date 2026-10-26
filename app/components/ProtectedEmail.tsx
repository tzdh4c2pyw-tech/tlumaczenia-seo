'use client';
import { useId, useState } from 'react';
import { revealContactAddress } from './contact-address';
export default function ProtectedEmail() {
  const [address,setAddress]=useState(''); const id=useId();
  return <span className="office-email"><button type="button" aria-expanded={Boolean(address)} aria-controls={id} onClick={()=>setAddress(address?'':revealContactAddress())}>{address?'Ukryj e-mail':'Pokaż e-mail'}</button><span id={id}>{address&&<a href={`mailto:${address}`}>{address}</a>}</span><noscript>Kontakt telefoniczny: +48 883 040 483.</noscript></span>;
}

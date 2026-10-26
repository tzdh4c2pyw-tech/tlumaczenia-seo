import type { Metadata } from 'next';
import './globals.css';
import './office.css';
import { OfficeHeader, OfficeFooter } from './components/OfficeChrome';
import SiteDesignSystem from './components/SiteDesignSystem';
import VisualScaleGuard from './components/VisualScaleGuard';
import { TextVisualPolish } from './components/TextVisualPolish';
import { office } from '@/lib/office';
export const metadata:Metadata={
  metadataBase:new URL(office.siteUrl),
  title:{default:'Tłumaczenia dla sądów, Policji i prokuratury | Vadym Rekel',template:'%s | Vadym Rekel'},
  description:'Język ukraiński w postępowaniu karnym i cywilnym. Tłumaczenia poświadczone, dokumenty i materiał cyfrowy. Kancelaria Vadym Rekel w Krakowie, zapytania z całej Polski.',
  authors:[{name:'Vadym Rekel',url:'https://vadymrekel.pro/kwalifikacje'}],creator:'Vadym Rekel',publisher:office.name,
  alternates:{canonical:office.siteUrl},
  verification:{google:'IRGY-E1KJFL1eUQihR952TtnvoTINcS0GzMSq0XJbfQ'},
  openGraph:{type:'website',locale:'pl_PL',url:office.siteUrl,siteName:'Vadym Rekel — przekład w postępowaniu',images:[{url:'/images/portret-vadym-rekel.webp',alt:'Vadym Rekel — tłumacz przysięgły języka ukraińskiego'}]},
  robots:{index:true,follow:true,'max-image-preview':'large'},
};
const graph={'@context':'https://schema.org','@graph':[
 {'@type':'ProfessionalService','@id':`${office.url}/#office`,name:office.name,legalName:office.legalName,url:office.url,taxID:office.nip,identifier:{'@type':'PropertyValue',propertyID:'REGON',value:office.regon},telephone:'+48883040483',image:`${office.siteUrl}/images/portret-vadym-rekel.webp`,address:{'@type':'PostalAddress',streetAddress:'ul. Kielecka 2/53',postalCode:'31-526',addressLocality:'Kraków',addressCountry:'PL'},hasMap:office.maps,areaServed:{'@type':'Country',name:'Polska'},contactPoint:{'@type':'ContactPoint',telephone:'+48735753383',contactType:'uzgodnienie terminu',availableLanguage:['pl','uk']},founder:{'@id':`${office.url}/#translator`}},
 {'@type':'Person','@id':`${office.url}/#translator`,name:'Vadym Rekel',jobTitle:'Tłumacz przysięgły języka ukraińskiego',identifier:'TP/27/17',url:'https://vadymrekel.pro/kwalifikacje',knowsAbout:['Tłumaczenia polsko-ukraińskie','Terminologia procedury karnej i cywilnej','Terminologia informatyki śledczej']},
 {'@type':'WebSite','@id':`${office.siteUrl}/#website`,url:office.siteUrl,name:'Przekład w postępowaniu — Vadym Rekel',inLanguage:'pl',publisher:{'@id':`${office.url}/#office`}}
]};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pl"><body><TextVisualPolish/><SiteDesignSystem/><VisualScaleGuard/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(graph).replace(/</g,'\\u003c')}}/><OfficeHeader/>{children}<OfficeFooter/></body></html>}

import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            titleen
            description
            descriptionen
            author
            lang
            langen
            subtitlenl1
            subtitleen1
            keywords
            siteUrl   
            phonenr
            phonelink
            whatsapplink
            telegramlink
            whatsappref
            mailAdres
            logo
            addressLocality
            addressCountry
            Country          
            strucurl
            Facebookpers
            Facebookpersarialabel
            Instagrampers
            Instagrampersarialabel
            Linkedinpers
            Linkedinpersarialabel
            Tiktokpers
            Tiktokpersarialabel
            Kvknr
            BTWVat
            BankRekNR
            sloganbedrijfalt
            twitterUsername
            nlhrefurl
            enhrefurl
          }
        }
      }
    `
  )
  return site.siteMetadata
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const gtmTrackingId = process.env.GATSBY_GTM_MEASUREMENT_ID;
const cspDirectives = [
  "default-src 'self' 'unsafe-inline' https://*.hotjar.com https://*.hotjar.io wss://*.hotjar.com https://js.stripe.com/v3",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com/ https://*.hotjar.com https://js.stripe.com/v3",
  "font-src 'self' https://*.hotjar.com",
  "style-src 'self' 'unsafe-inline' https://*.hotjar.com",
  "img-src 'self' data: https://iwankoenderman/  https://*.google-analytics.com https://www.googletagmanager.com/ https://*.hotjar.com",
  "frame-src 'self' https://www.youtube-nocookie.com https://youtube-nocookie.com https://*.hotjar.com https://js.stripe.com/ ", 
  "connect-src 'self'  https://*.google-analytics.com/ https://*.analytics.google.com/ https://*.googletagmanager.com/ https://*.hotjar.com https://*.hotjar.io wss://*.hotjar.com",
  "object-src 'self' blob: https://www.googletagmanager.com/",
  "worker-src 'self' blob: https://www.googletagmanager.com/"
]

const directivesToCspHeader = headers => headers.join(';');
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://iwankoenderman.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const robot_site_Url = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    FAST_DEV: true,
    PARALLEL_SOURCING: true
  },
  headers: [
    {
      source: `/`,
      headers: [
        {
          key: `content-security-policy`,
          value:`${directivesToCspHeader(cspDirectives)}`,
        },
        {
          key: `permissions-policy`,
          value: `geolocation=(self "https://iwankoenderman.com"), microphone=(), unload=()`,
        },
        {
          key: `x-frame-options`,
          value: `DENY`,
        },
        {
          key: `cross-origin-resource-policy`,
          value: `cross-origin`,
        },
        {
          key: `cross-origin-opener-policy-Report-Only `,
          value: `same-origin`,
        },
        {
          key: `cross-origin-embedder-policy-Report-Only `,
          value: `credentialless`,  
        },
        {
          key: `accept-language`,
          value: `nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7`,
        }
      ]
    }
  ],
  /* Your site config here */
  siteMetadata: {
    title: `Bereik jij klanten op social media? | coach Iwan Koenderman`,
    titleen: `Do you reach clients on social media?| Coach Iwan Koenderman`, 
    description: 'Ik help ambitieuze ondernemers, die coachen, in 5 eenvoudige stappen met het verwoorden van hun boodschap aan meer klanten op social media. Klik!',
    descriptionen:'Discover how, as an entrepreneurial coach, you can formulate your message from your why in 5 simple steps to attract more clients on social media. Click',
    author: 'Coach Iwan Koenderman',
    subtitlenl1: 'Hé, coach, op zoek naar financiële vrijheid? Ik leer je in 5 stappen hoe de passie van je social media spat.',
    subtitleen1: 'Hey coach, want financial freedom? I will teach you how to make your passion shine on social media in just 5 steps.',
    nlhrefurl: "https://iwankoenderman.com/",
    enhrefurl: "https://iwankoenderman.com/en/",
    keywords: [
    'online zichtbaar',
    'online zichtbaarheid',
    'online business coach',
    'online coach',
    'coach',
    'strategie sociale media',
    'contentstrategie social media',
    'social media strategie',
    'facebook strategie',
    'instagram marketing strategie',
    'instagram strategie',
    'instagram strategy',
    'social media strategy',
    'social media strategie',
    'linkedin strategy',
    'linkedin strategie',
    'online marketingstrategie',  
    'Facebook groepen',  
    'online groeien',
    'online business',
    ],
    siteUrl: 'https://iwankoenderman.com/',
    logo: "../logo.png",
    languages: {
      langs: ['nl', 'en'],
      defaultLangKey: 'nl'
    },
    image: "/indexog.png",
    phonenr: "++31(0)622196160",
    phonelink: "tel:+31622196160",
    whatsapplink: "https://wa.me/31622196160",
    telegramlink: "https://telegram.me/iwankoenderman/",
    addressLocality: "UTRECHT",
    addressCountry: "NL",
    Country: "Nederland",
    strucurl: "/static/bf877ae03838ec07c0e4f913f3200bf4/c26c2/",
    Facebookpers: "https://www.facebook.com/iwan.koenderman/",
    Facebookpersarialabel: "mijn Facebookpagina Iwan Koenderman",
    Instagrampers: "https://www.instagram.com/iwan_koenderman/",
    Instagrampersarialabel: "mijn instagram bedrijfsprofiel",
    Linkedinpers: "https://www.linkedin.com/in/iwan-koenderman-623b7133",
    Linkedinpersarialabel: "mijn linkedin pagina iwan-koenderman",
    Tiktokpers: "https://www.tiktok.com/@iwankoenderman?lang=nl-NL",
    Tiktokpersarialabel: "mijn tiktok bedrijfsprofiel",
    sloganbedrijfalt: "|Online Business Coach Online Profiler Blogger Photographer",
    twitterUsername: "@IwanKoenderman",
    mailAdres: "mailto:info@iwankoenderman.com",
    whatsappref: "mailto:info@iwankoenderman.com",
    Kvknr: "73674400",
    BTWVat: "NL002056900B35",
    BankRekNR: "NL73 KNAB 0258 3134 71",
    robot_site_Url, 
    }, 
    partytownProxiedURLs: [
      `https://www.googletagmanager.com/gtag/js?id=${gtmTrackingId}`,
      `https://www.google-analytics.com/analytics.js`,
      `https://iwankoenderman.com/~partytown/debug/partytown-ww-atomics.js`,
    ],
    plugins: [   
      `gatsby-plugin-preload-fonts`,   
      `gatsby-plugin-perf-budgets`,
      `gatsby-plugin-webpack-bundle-analyser-v2`,    
      {
        resolve: 'gatsby-plugin-exclude',
        options:  { paths: ['/en/**', '!/en/', '!/en/thanksebook', '!/en/privacystatementandcookiepolicy/',  '!/en/videoreviewenglish/', '!/en/termandconditions/', '!/en/introductionvideoiwankoenderman', '!/en/linktreefromcoachiwankoenderman', '!/en/cancelpayment','!/en/scedulefirstzoomsession','/nl/**',                                   
      ] },
     
      },   
        {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/privacystatementandcookiepolicy/', '/termandconditions/', '/thanksebook/', '/bedanktebook/', '/cancelpayment/', '/scedulefirstzoomsession/']
      }
      },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://iwankoenderman.com',
        sitemap: 'https://iwankoenderman.com/sitemap-index.xml',
        policy: [
          {
            userAgent: '*',
            allow: ['/'],
            disallow: ['/privacystatementandcookiepolicy/', '/termandconditions/', '/thanksebook/', '/bedanktebook/', '/en/404.html', '/en/404']
          }
          ],
        
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [
              {
              userAgent: '*', 
               disallow: ['/privacystatementandcookiepolicy/', '/termandconditions/', '/thanksebook/', '/bedanktebook/', '/en/404.html', '/en/404', '/__third-party-proxy/*', '/static/*', '/~partytown/*', '/en/404.html']
              }
            ]
          },
          'branch-deploy': {
            policy: [
              {
                userAgent: '*', 
                disallow: ['/privacystatementandcookiepolicy/', '/termandconditions/', '/thanksebook/', '/bedanktebook/', '/en/404.html', '/en/404']
              }
              ],
                sitemap: null,
                host: null
          },
          'deploy-preview': {
            policy: [ 
              {
                userAgent: '*', 
                disallow: ['/privacystatementandcookiepolicy/', '/termandconditions/', '/thanksebook/', '/bedanktebook/', '/en/404.html', '/en/404']
              }
            ],
            sitemap: null,
            host: null
          }
        }
      }
    },
    "gatsby-plugin-image",
     {
      resolve: "gatsby-plugin-sharp",
      options: {
      base64Width: 20,
      forceBase64Format: `webp`, // valid formats: png,jpg,webp,
      useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
      stripMetadata: true,
      defaultQuality: 50,
      failOnError: true,
    },
  },
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      extensions: [`.mdx`, `.md`],
    },
      },
      {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `scr`,
        path: `${__dirname}/src/`,
      },
  },
  {
    resolve: 'gatsby-plugin-security-txt',
    options: {
      contact: 'mailto:info@iwankoenderman.com',
      expires: '2025-12-31T23:59:59z',
      canonical: 'https://iwankoenderman.com/.well-known/security.txt',
      languages: 'nl, en',
    },
  },
  {
    resolve: `gatsby-plugin-csp-nonce`,
    options: {
        disableOnDev: false,
        enableLogs: false,
        nonce: 'nonce-DhcnhD3khTMePgXw',
    },
  },
  {
    resolve: `gatsby-plugin-intl`,
    options: {
      // language JSON resource path
      path: `${__dirname}/src/intl`,
      // supported language
      languages: [`nl`, `en`],
      // language file path
      defaultLanguage: `nl`,
      // option to redirect to `/ko` when connecting `/`
      redirect: false,
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `Een website voor coaches`,
      short_name: `Coachwebsite`,
      description: `De website van online businesscoach Iwan Koenderman, meer klanten online`,
      lang: `nl`,
      start_url: '/',
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `standalone`,
      icon: 'src/images/flavicon.png', // This path is relative to the root of the site.
      cache_busting_mode: 'none',
      icon_options: {
        // For all the options available,
        // please see the section "Additional Resources" below.
        purpose: `any maskable`,
      },
      legacy: true, // this will not add apple-touch-icon links to <head>
      localize: [
        {
          start_url: '/en/',
          lang: `en`,
          name: `A website for coaches`,
          short_name: `Coach site`,
          description: `The website of online business coach Iwan Koenderman, get more clients online`,
        },
      ],
          },
  },
  `gatsby-plugin-offline`,
 ]
  };
---
title: Kioti.com
---

# Kioti.com

---

KIOTI is the western-hemisphere DBA for Daedong, an international agricultural machinery company. In 2022, GOODFOLKS was chosen to completely overhaul [KIOTI.com](https://kioti.com/), which serves the North American market. The old site was painfully slow for users and frustrating for admins to manage. We delivered a new site and API—both built on [CraftCMS](https://craftcms.com/)—that made it easy for KIOTI to manage their [product and marketing data](#data-management) in three [languages across two pricing regions](#i18n). We also put a major focus on [site performance](#make-it-fast) for their customers.

---

### Data Management

KIOTI needed a new system to store and manage their product data—one that was easy to update and avoided the duplication that came from manually entering information across different parts of the site. They also needed a way to share that data with their third-party dealer management software, [Rollick](https://rollick.io/solutions/oem-solutions/).

We worked closely with KIOTI’s internal team to audit and organize their product data into a logical structure. From there, we built a dedicated API using a separate CraftCMS install, giving admins a visual interface to update product and dealer info. Those updates are automatically pushed to Aimbase, and other systems—like the marketing site—can subscribe to changes and pull fresh data as needed.

The end result is a site whose product pages are automatically generated with data that is always in sync with KIOTI's dealer tools.

---

### i18n

One of the more complex challenges was delivering content in three languages (English, Spanish, and French) with region-specific variations for both the U.S. and Canada. Once again, CraftCMS was the perfect choice. Its native internationalization tools allowed us to separate content by language and region while giving us granular control over what was translatable, region-specific, or shared.

We partnered with [Acclaro](https://www.acclaro.com/) for professional translation services and used [Yii’s](https://www.yiiframework.com/) native string translation features for hardcoded interface text that wasn’t stored in the CMS.

---

### Make It Fast

Performance was a major priority for KIOTI. With a JavaScript- and image-heavy site pulling from multiple data sources, we had to be intentional to keep it fast.

We tackled this from several angles. First, we used [Vite](https://vite.dev/) to modularize JavaScript and conditionally loaded only the scripts needed for components present on each page. Second, we built a responsive image component powered by [Imgix](https://www.imgix.com/) to deliver optimized image sizes and quality.

The biggest improvement came from a layered caching strategy. We combined [Servd’s](https://servd.host/) static caching, [Twig](https://twig.symfony.com/) template caching, and Yii’s data caching. To avoid performance drops during content updates, we built a custom system that listens for API pings, queues update jobs to run on separate processes, and clears caches asynchronously.

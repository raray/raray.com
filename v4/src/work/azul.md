---
title: Azul.com
---

# Azul.com

---

I worked on [Azul.com](https://azul.com/) throughout my five-year tenure at GOODFOLKS. During that time, we completed two major redesigns, [integrated their downloads meta API](#downloads), [implemented Imgix](#imgix) to drastically improve image performance, and built a [contextual styling system](#custom-components) to make reusable components more flexible.

---

### Downloads

Azul manages thousands of JDK versions, all of which need to be [available for download](https://azul.com/downloads/) through their site. When I started, every new release required manually entering package data into the WordPress admin—costing hundreds of work hours annually and introducing countless opportunities for human error.

Once Azul completed a public API that exposed metadata for all available downloads, we were tasked with integrating it into the website. While querying the API itself was straightforward, transforming and organizing the data to fit the site’s structure was anything but. We collaborated closely with Azul’s internal team to build a backend interface that could aggregate and map metadata into the user-friendly filters now featured on the site.

Performance and stability were core priorities. We rewrote the feature’s JavaScript to fetch data from our own server (which proxied requests to the API) in order to simplify caching and reduce load times. That intermediate layer allowed us to optimize performance while preserving continuity with the existing UI. Later, once the API’s caching was reliable enough, we removed the server component and pulled data directly from JavaScript.

Today, the downloads feature parses and displays over 11,000 download options in under a second.

---

### Imgix

Azul’s site is extremely image-heavy. Nearly every one of its hundreds of pages and blog posts includes multiple background and inline images. To improve site-wide performance, we integrated [Imgix](https://imgix.com/) as an image processor and CDN.

We built a reusable image component that renders a responsive `<picture>` element and handles configuration for multiple breakpoints. It automatically reserves space by calculating dimensions, serves tiny placeholder images for faster paint times, and lazy-loads non-critical assets—all of which helped boost Lighthouse scores.

We rolled the component out across the site, using existing image data to ensure zero disruption for content editors. In many cases, image weight dropped by up to 90%.

---

### Custom Components

The site is built on WordPress and powered by over 100 custom [Gutenberg blocks](https://wordpress.org/gutenberg/) and page templates, all designed to follow a cohesive design system and backed by [ACF](https://www.advancedcustomfields.com/). But sometimes, Azul needs to break the mold for special experiences—like [this campaign page](https://www.azul.com/oracle-java-therapy/).

To support these requests without overhauling the block system, we added a feature that allows editors to apply custom context classes to individual pages via the admin. These classes trigger style overrides on existing blocks without touching the data or editor interface. It gives designers the flexibility to get creative while keeping the content team in familiar territory—and it minimizes the dev time needed to execute new ideas.

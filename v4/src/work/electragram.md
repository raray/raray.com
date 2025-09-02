---
title: Electramgram
---

# Electragram

---

Electragram was an online stationery company that reimagined digital correspondence with the charm of vintage design. Built on artfully designed, vintage-inflected templates, it aimed to bring the same delight to sending and receiving an online card as one might feel with a handwritten note. I was the primary frontend developer for the project, responsible for building the interactive card editor and the system that powered the correspondence experience.

---

## Interactive Card Builder

At the heart of Electragram was a bespoke [Vue.js](https://vuejs.org/) application that allowed users to create their own “telegrams.” The editor let them choose from a library of background papers, borders, frames, badges, and stickers—each loaded through an admin system built with [Laravel](https://laravel.com/).

To make this work, I designed a JSON-based data structure to store each card’s configuration. This structure gave us the flexibility to store an ever-expanding range of customizations and ensured the cards could be easily re-rendered anywhere in the system.

---

## Rendering & Delivery

Once designed, each card was rendered into an emailable image using [AWS Lambda](https://aws.amazon.com/lambda/). This serverless approach allowed us to generate images on demand while keeping the system lightweight, scalable, and cost-efficient.

---

## Recognition

Electragram’s blend of craftsmanship and technology drew significant attention. The product was featured in both [Vogue](https://www.vogue.com/article/electragram-online-stationery-company-anna-carter) and [Fast Company](https://www.fastcompany.com/90784579/meet-electragram-a-vintage-design-e-card-service-backed-by-jony-ive), highlighting its unique approach to digital correspondence.

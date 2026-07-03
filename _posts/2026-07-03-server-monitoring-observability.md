---
title: "Why I Added Grafana, Prometheus, and Loki to the Homelab"
date: 2026-07-03
type: "build"
status: "Published"
tags:
  - Homelab
  - Observability
  - Docker
  - Grafana
  - Prometheus
  - Loki
excerpt:
  "Adding a metrics and logging stack alongside Wazuh and Suricata, and why
  visibility matters as much as detection."
---

## What this is

A writeup on the reasoning behind adding a full observability stack — Grafana,
Prometheus, Loki, and Promtail — to my Docker/Dockge-based home server, on top
of the security stack (Wazuh, Suricata) already running there.

## The gap

Wazuh and Suricata are good at telling me _something is wrong_ — an alert fires,
a rule triggers, an IOC matches. What they're not built for is answering the
everyday operational question: _is the server itself healthy right now?_ CPU,
memory, disk, container uptime, log volume over time. Without that, I was flying
blind on the infrastructure underneath my own detection tools.

That gap became obvious the hard way during a full-disk incident that crashed
OpenSearch and took Wazuh down with it. There was no dashboard warning me disk
usage was climbing toward the edge — I only found out when things had already
broken. That incident was the direct trigger for this addition.

<div class="callout"><strong>Lesson:</strong> a SIEM without infrastructure observability underneath it is a blind spot, not a safety net.</div>

## Why this stack specifically

- **Prometheus** — pulls time-series metrics (CPU, memory, disk, container
  health) on a scrape interval, giving me a queryable history instead of just
  point-in-time snapshots.
- **Grafana** — turns those metrics (and Loki's logs) into dashboards I can
  actually glance at, rather than digging through raw numbers or `docker stats`.
- **Loki + Promtail** — centralizes container and system logs so I'm not SSH-ing
  in and `docker logs`-ing services one at a time when something misbehaves.

Together they cover the layer Wazuh doesn't: system and container-level health,
trended over time, in one place.

## Why it matters for the portfolio

Beyond the practical need, this stack rounds out the homelab as a portfolio
piece. It's the difference between a project that says "I can detect security
events" and one that says "I can also run and monitor the infrastructure those
tools depend on" — which maps more directly onto GRC and Security Analyst roles
where uptime, logging discipline, and operational visibility are as much the job
as alert triage.

## Result

Grafana, Prometheus, Loki, and Promtail now sit alongside Wazuh, Suricata,
Cloudflare Tunnel, n8n, and Authentik in the Docker/Dockge stack — closing the
visibility gap that caused the disk-crash incident in the first place.

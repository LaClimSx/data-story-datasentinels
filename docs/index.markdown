---
layout: default
title: Subreddit Conflicts
---


## When One Conflict Sparks Another (RQ1)
{: #rq1 data-figure="fig-rq1" data-caption="RQ1 — About 18% of negative links trigger another conflict within 5 days, exceeding a randomized baseline."}

**Research question:**  
*How often do subreddit conflicts trigger chain reactions of further hostilities in the network?*

We define a conflict as a negative hyperlink **A → B**.
A conflict triggers a **chain reaction** if **B** initiates at least one further negative interaction **B → C** within a time window Δt. Each conflict is counted at most once, and Δt is varied for robustness.

{% include rq1_plot.html %}

### Findings 

Subreddit conflicts frequently lead to further hostilities.

Approximately **18% of negative interactions** are followed by at least one subsequent conflict within a **five-day window**, with this probability increasing as the time window expands. These cascades are initiated by **thousands of distinct subreddits**.

Compared to a randomized baseline, cascade frequency remains **consistently higher than chance**, indicating **non-random escalation dynamics**.


---


## How Far Do Conflicts Travel? (RQ2) 
{: #rq2 data-figure="fig-rq2-length" data-caption="RQ2 — Cascades are highly skewed: most are small, a few become large and deep."}

**Research question:**  
*How are the length and depth of conflict cascades distributed, and what do these distributions reveal about conflict dynamics?*

We study:
- **Cascade length**: total number of conflict edges  
- **Cascade depth**: the longest directed chain

{% include rq2_length_plot.html %}
{% include rq2_depth_plot.html %}

### Findings

Both cascade length and depth are **highly skewed**.

Most cascades are **short and shallow**, but a small number show **large length and depth**, suggesting occasional escalation into extended conflict chains. This is consistent with **bursty, uneven conflict dynamics**.


---

## Who Amplifies Conflict? (RQ3)
{: #rq3 data-figure="fig-rq3" data-caption="RQ3 — Pending: are there repeat “amplifiers” that spread conflict disproportionately?"}

**Research question:**  
*Are certain subreddits recurrent “amplifiers” that spread conflict more frequently than others?*

{% include rq3_plot.html %}

<span class="status"><span class="dot miss"></span> Results not yet available</span>

We haven’t computed this result yet. This section is intentionally left open: identifying amplifiers could explain why a few cascades become exceptionally large while most remain local.


---


## Triads, Rivalries, and the Failure of Balance (RQ4)
{: #rq4 data-figure="fig-rq4" data-caption="RQ4 — Unbalanced triads are overrepresented; commentary subreddits appear prominently."}

**Research question:**  
*Do triads of subreddits follow balance theory patterns more often than expected by chance?*

{% include rq4_plot.html %}

### Findings

The reality is messy: there are **significantly more unbalanced triads** than expected.

Subreddits that participate in unbalanced triads are often already rivals. Several prominent examples do not share a single topic (e.g., **r/subredditdrama**, **r/changemyview**, **r/bestof**), but are known for linking to other areas of Reddit, often critically.

This suggests that balance theory, at least in its simplest form, only partially captures Reddit’s conflict structure.


---


## Timing Isn’t Everything (RQ5)
{: #rq5 data-figure="fig-rq5" data-caption="RQ5 — Timing doesn’t predict alliance vs retaliation; alliances dominate overall."}


**Research question:**  
*How does temporal proximity between conflicts influence the likelihood of alliances or retaliations?*

We define a **temporal gap** as the time between a conflict **A → B** and the next conflict where **B** becomes the source of a subsequent conflict.

{% include rq5_plot.html %}

### Findings

Temporal proximity does **not** significantly influence whether responses are alliances or retaliations — robustly across time scales and after controlling for class imbalance.

A striking global pattern dominates:
- **98.8% alliances**
- **1.2% retaliation**

This suggests coalition-building is the default strategy, driven by factors beyond timing (e.g., community size, centrality, topic alignment, moderation style, severity).


---


## Do Similar Communities Stick Together? (RQ6)
{:#rq6 data-figure="fig-rq6" data-caption="RQ6 — Pending: do semantically similar communities ally more often (embedding similarity)?"}

**Research question:**  
*Can embedding similarity predict whether communities will become allies or adversaries during conflict cascades?*

Subreddit embeddings are **300-dimensional vectors** capturing semantic meaning.  
Cosine similarity measures how alike two subreddits are.

**Hypothesis:**  
High similarity → alliances, low similarity → retaliation.

{% include rq6_plot.html %}

<span class="status"><span class="dot miss"></span> Results not yet available</span>

We haven’t computed this conclusion yet. This analysis will connect *content similarity* to *conflict behavior*, clarifying whether alliances form via shared identity or purely strategic positioning.


---

## Takeaways

- Conflicts often escalate beyond chance, but usually burn out quickly (**RQ1–RQ2**)  
- Alliances dominate retaliations, and timing alone doesn’t predict response type (**RQ5**)  
- Unbalanced triads are common, especially among cross-linking “meta” communities (**RQ4**)  
- Amplification (RQ3) and embedding similarity (RQ6) remain open — explicitly and transparently

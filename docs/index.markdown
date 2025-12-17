---
layout: default
title: Subreddit Conflicts
---

<div class="post pinned" id="top">
  <div class="post-top">
    <div class="post-title-wrap">
      <span class="rq-icon hero" aria-hidden="true"></span>
      <div>
        <h1 class="post-title">Subreddit Conflicts</h1>
        <div class="post-meta">Alliances, rivalries, and cascade dynamics in Reddit hyperlink conflicts.</div>
      </div>
    </div>
    <div class="tag pin">Pinned</div>
  </div>

  <div class="post-body" markdown="1">

Reddit looks like a collection of independent communities — but communities constantly **talk about each other**.
Sometimes that’s admiration. Sometimes it’s critique. And sometimes it’s outright conflict.

In this project, we study a network of **negative hyperlinks between subreddits** to understand:

- how conflicts **escalate** into cascades (or die out),
- how often communities respond with **alliances vs retaliation**,
- whether classic social patterns (like **balance theory**) hold up in practice.

**How to read this page:** each Research Question (RQ) is presented as a “post” with text + at least one plot.

> We do not invent missing results: RQ3 and RQ6 are clearly marked as pending.

  </div>
</div>


<div class="post" id="rq1">
  <div class="post-top">
    <div class="post-title-wrap">
    <span class="rq-icon rq1" aria-hidden="true"></span>
        <div>
        <h2 class="post-title">When One Conflict Sparks Another (RQ1)</h2>
        <div class="post-meta">Cascades · Escalation · Temporal dynamics</div>
        </div>
    </div>
    <div class="tag ok">Results ready</div>
  </div>

  <div class="post-body" markdown="1">

**Research question:**  
*How often do subreddit conflicts trigger chain reactions of further hostilities in the network?*

We define a conflict as a negative hyperlink **A → B**.  
A conflict triggers a **chain reaction** if **B** initiates at least one further negative interaction **B → C** within a time window Δt. Each conflict is counted at most once, and Δt is varied for robustness.

{% include rq1_plot.html %}

### Findings

Subreddit conflicts frequently lead to further hostilities.

Approximately **18% of negative interactions** are followed by at least one subsequent conflict within a **five-day window**, with this probability increasing as the time window expands. These cascades are initiated by **thousands of distinct subreddits**.

Compared to a randomized baseline, cascade frequency remains **consistently higher than chance**, indicating **non-random escalation dynamics**.

  </div>
</div>


<div class="post" id="rq2">
  <div class="post-top">
    <div class="post-title-wrap">
    <span class="rq-icon rq2" aria-hidden="true"></span>
        <div>
            <h2 class="post-title">How Far Do Conflicts Travel? (RQ2)</h2>
            <div class="post-meta">Cascade length · Cascade depth · Network structure</div>
        </div>
    </div>
    <div class="tag ok">Results ready</div>
  </div>

  <div class="post-body" markdown="1">

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

  </div>
</div>


<div class="post" id="rq3" markdown="1">
  <div class="post-top">
    <div class="post-title-wrap">
    <span class="rq-icon rq3" aria-hidden="true"></span>
        <div>
            <h2 class="post-title">Who Amplifies Conflict? (RQ3)</h2>
            <div class="post-meta">Amplification · Structural roles · Open question</div>
        </div>
    </div>
    <div class="tag todo">Pending</div>
  </div>

  <div class="post-body" markdown="1">

**Research question:**  
*Are certain subreddits recurrent “amplifiers” that spread conflict more frequently than others?*

{% include rq3_plot.html %}

<p class="muted">
Results not yet available.
</p>

We haven’t computed this result yet. This section is intentionally left open: identifying amplifiers could explain why a few cascades become exceptionally large while most remain local.

  </div>
</div>


<div class="post" id="rq4" markdown="1">
  <div class="post-top">
    <div class="post-title-wrap">
    <span class="rq-icon rq4" aria-hidden="true"></span>
        <div>
            <h2 class="post-title">Triads, Rivalries, and the Failure of Balance (RQ4)</h2>
            <div class="post-meta">Balance theory · Signed triads · Meta communities</div>
        </div>
    </div>
    <div class="tag ok">Results ready</div>
  </div>

  <div class="post-body" markdown="1">

**Research question:**  
*Do triads of subreddits follow balance theory patterns more often than expected by chance?*

{% include rq4_plot.html %}

### Findings

The reality is messy: there are **significantly more unbalanced triads** than expected.

Subreddits that participate in unbalanced triads are often already rivals. Several prominent examples do not share a single topic (e.g., **r/subredditdrama**, **r/changemyview**, **r/bestof**), but are known for linking to other areas of Reddit, often critically.

This suggests that balance theory, at least in its simplest form, only partially captures Reddit’s conflict structure.

  </div>
</div>


<div class="post" id="rq5" markdown="1">
  <div class="post-top">
    <div class="post-title-wrap">
    <span class="rq-icon rq5" aria-hidden="true"></span>
        <div>
            <h2 class="post-title">Timing Isn’t Everything (RQ5)</h2>
            <div class="post-meta">Temporal gaps · Alliances · Retaliation</div>
        </div>
    </div>
    <div class="tag ok">Results ready</div>
  </div>

  <div class="post-body" markdown="1">

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

  </div>
</div>


<div class="post" id="rq6" markdown="1">
  <div class="post-top">
    <div class="post-title-wrap">
    <span class="rq-icon rq6" aria-hidden="true"></span>
        <div>
            <h2 class="post-title">Do Similar Communities Stick Together? (RQ6)</h2>
            <div class="post-meta">Embeddings · Semantic similarity · Open question</div>
        </div>
    </div>
    <div class="tag todo">Pending</div>
  </div>

  <div class="post-body" markdown="1">

**Research question:**  
*Can embedding similarity predict whether communities will become allies or adversaries during conflict cascades?*

Subreddit embeddings are **300-dimensional vectors** capturing semantic meaning.  
Cosine similarity measures how alike two subreddits are.

**Hypothesis:**  
High similarity → alliances  
Low similarity → retaliation

{% include rq6_plot.html %}

<p class="muted">
Results not yet available.
</p>

We haven’t computed this conclusion yet. This analysis will connect *content similarity* to *conflict behavior*, clarifying whether alliances form via shared identity or purely strategic positioning.

  </div>
</div>


<div class="post" id="takeaways" markdown="1">
  <div class="post-top">
    <div class="post-title-wrap">
    <span class="rq-icon summary" aria-hidden="true"></span>
        <div>
            <h2 class="post-title">Takeaways</h2>
            <div class="post-meta">Summary · What we learned so far</div>
        </div>
    </div>
    <div class="tag">Summary</div>
  </div>

  <div class="post-body" markdown="1">

- Conflicts often escalate beyond chance, but usually burn out quickly (**RQ1–RQ2**)  
- Alliances dominate retaliations, and timing alone doesn’t predict response type (**RQ5**)  
- Unbalanced triads are common, especially among cross-linking “meta” communities (**RQ4**)  
- Amplification (**RQ3**) and embedding similarity (**RQ6**) remain open — explicitly and transparently

  </div>
</div>
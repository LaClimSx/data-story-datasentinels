---
layout: default
title: Subreddit Conflicts
---

<div class="post pinned" id="top">
  <div class="post-top" markdown="0">
    <div class="post-title-wrap">
    <img src="{{ '/assets/img/icon-intro.svg' | relative_url }}" alt="" class="rq-icon">
      <div>
        <h1 class="post-title">Subreddit Conflicts</h1>
        <div class="post-meta">Alliances, rivalries, and cascade dynamics in Reddit hyperlink conflicts.</div>
      </div>
    </div>
    <div class="tag pin">Pinned</div>
  </div>

  <div class="post-body" markdown="1">

In an online ecosystem as dynamic and decentralized as Reddit, individual communities — known as subreddits — don’t exist in isolation. They constantly **interact, influence, and sometimes conflict with one another**. While much research focuses on collaboration or user behavior within individual communities, the dynamics of conflict across subreddit networks remain poorly understood. Mapping how antagonistic interactions spread, escalate, or dissipate across the Reddit ecosystem can illuminate broader patterns of online social behavior.
        
This project investigates negative hyperlinks between subreddits as a proxy for conflict interactions, using network analysis to explore how conflicts cascade, which communities act as amplifiers, and whether classic theories of social balance hold in decentralized online environments like Reddit. By combining quantitative measurement with narrative interpretation, we intend not just to describe conflict — but to understand its mechanics, its reach, and its implications for community moderation and platform health. In doing so, this study contributes to a growing tradition of data storytelling in digital sociology: transforming raw interaction data into insight that informs action and decision-making within online spaces. 

<div markdown="0">
{% include intro_plot.html %}
</div>

</div>
</div>

<div class="post" id="rq1">
  <div class="post-top" markdown="0">
    <div class="post-title-wrap">
    <img
    src="{{ '/assets/img/data-sentinel.svg' | relative_url }}"
    alt=""
    class="rq-icon rq1">
        <div>
        <h2 class="post-title">When One Conflict Sparks Another (RQ1)</h2>
        <div class="post-meta">Cascades · Escalation · Temporal dynamics</div>
        </div>
    </div>
  </div>

  <div class="post-body" markdown="1">

**Research question:**  
*How often do subreddit conflicts trigger chain reactions of further hostilities in the network?*

We define a conflict as a negative hyperlink **A → B**.  
A conflict triggers a **chain reaction** if **B** initiates at least one further negative interaction **B → C** within a time window Δt. Each conflict is counted at most once, and Δt is varied for robustness.

<div markdown="0">
{% include rq1_plot.html %}
</div>

### Findings

Subreddit conflicts frequently lead to further hostilities.

Approximately **18% of negative interactions** are followed by at least one subsequent conflict within a **five-day window**, with this probability increasing as the time window expands. These cascades are initiated by **thousands of distinct subreddits**.

Compared to a randomized baseline, cascade frequency remains **consistently higher than chance**, indicating **non-random escalation dynamics**.

  </div>
</div>


<div class="post" id="rq2">
  <div class="post-top" markdown="0">
    <div class="post-title-wrap">
    <img
    src="{{ '/assets/img/data-sentinel.svg' | relative_url }}"
    alt=""
    class="rq-icon rq2">
        <div>
            <h2 class="post-title">How Far Do Conflicts Travel? (RQ2)</h2>
            <div class="post-meta">Cascade length · Cascade depth · Network structure</div>
        </div>
    </div>
  </div>

  <div class="post-body" markdown="1">

**Research question:**  
*How are the length and depth of conflict cascades distributed, and what do these distributions reveal about conflict dynamics?*

We study:
- **Cascade length**: total number of conflict edges  
- **Cascade depth**: the longest directed chain

<div markdown="0">
{% include rq2_1_length_plot.html %}
{% include rq2_2_depth_plot.html %}
</div>

### Findings

Both cascade length and depth are **highly skewed**.

Most cascades are **short and shallow**, but a small number show **large length and depth**, suggesting occasional escalation into extended conflict chains. This is consistent with **bursty, uneven conflict dynamics**.

  </div>
</div>


<div class="post" id="rq3">
  <div class="post-top" markdown="0">
    <div class="post-title-wrap">
    <img
    src="{{ '/assets/img/data-sentinel.svg' | relative_url }}"
    alt=""
    class="rq-icon rq3">
        <div>
            <h2 class="post-title">Who Amplifies Conflict? (RQ3)</h2>
            <div class="post-meta">Amplification · Structural roles · Open question</div>
        </div>
    </div>
  </div>

  <div class="post-body" markdown="1">

**Research question:**  
*Are certain subreddits recurrent “amplifiers” that spread conflict more frequently than others?*

<div markdown="0">
{% include rq3_1_amplification_count.html %}
</div>

<div markdown="0">
{% include rq3_2_amplification_count_per_days.html %}
</div>

We haven’t computed this result yet. This section is intentionally left open: identifying amplifiers could explain why a few cascades become exceptionally large while most remain local.

  </div>
</div>


<div class="post" id="rq4">
  <div class="post-top" markdown="0">
    <div class="post-title-wrap">
    <img
    src="{{ '/assets/img/data-sentinel.svg' | relative_url }}"
    alt=""
    class="rq-icon rq4">
        <div>
            <h2 class="post-title">Triads, Rivalries, and the Failure of Balance (RQ4)</h2>
            <div class="post-meta">Balance theory · Signed triads · Meta communities</div>
        </div>
    </div>
  </div>

  <div class="post-body" markdown="1">

**Research question:**  
*Do triads of subreddits follow balance theory patterns more often than expected by chance?*

<div markdown="0">
{% include rq4_interactive_fights_triads.html %}
</div>

### Findings

The reality is messy: there are **significantly more unbalanced triads** than expected.

Subreddits that participate in unbalanced triads are often already rivals. Several prominent examples do not share a single topic (e.g., **r/subredditdrama**, **r/changemyview**, **r/bestof**), but are known for linking to other areas of Reddit, often critically.

This suggests that balance theory, at least in its simplest form, only partially captures Reddit’s conflict structure.

  </div>
</div>


<div class="post" id="rq5">
  <div class="post-top" markdown="0">
    <div class="post-title-wrap">
    <img
    src="{{ '/assets/img/data-sentinel.svg' | relative_url }}"
    alt=""
    class="rq-icon rq5">
        <div>
            <h2 class="post-title">Timing Isn’t Everything (RQ5)</h2>
            <div class="post-meta">Temporal gaps · Alliances · Retaliation</div>
        </div>
    </div>
  </div>

  <div class="post-body" markdown="1">

**Research question:**  
*How does temporal proximity between conflicts influence the likelihood of alliances or retaliations?*

We define a **temporal gap** as the time between a conflict **A → B** and the next conflict where **B** becomes the source of a subsequent conflict.

<div markdown="0">
{% include rq5_1_interactive_temporal.html %}
</div>

<div markdown="0">
{% include rq5_2_interactive_responses_sentiment.html %}
</div>

<div markdown="0">
{% include rq5_3_interactive_response_boxplot.html %}
</div>

<div markdown="0">
{% include rq5_4_interactive_semantic.html %}
</div>

<div markdown="0">
{% include rq5_5_interactive_pca.html %}
</div>

<div markdown="0">
{% include rq5_6_interactive_roc.html %}
</div>

### Findings

Temporal proximity does **not** significantly influence whether responses are alliances or retaliations — robustly across time scales and after controlling for class imbalance.

A striking global pattern dominates:
- **98.8% alliances**
- **1.2% retaliation**

This suggests coalition-building is the default strategy, driven by factors beyond timing (e.g., community size, centrality, topic alignment, moderation style, severity).

  </div>
</div>


<div class="post" id="rq6">
  <div class="post-top" markdown="0">
    <div class="post-title-wrap">
    <img
    src="{{ '/assets/img/data-sentinel.svg' | relative_url }}"
    alt=""
    class="rq-icon rq6">
        <div>
            <h2 class="post-title">Do Similar Communities Stick Together? (RQ6)</h2>
            <div class="post-meta">Embeddings · Semantic similarity · Open question</div>
        </div>
    </div>
  </div>

  <div class="post-body" markdown="1">

**Research question:**  
*Can embedding similarity predict whether communities will become allies or adversaries during conflict cascades?*

Subreddit embeddings are **300-dimensional vectors** capturing semantic meaning.  
Cosine similarity measures how alike two subreddits are.

**Hypothesis:**  
High similarity → alliances  
Low similarity → retaliation

<p class="muted">
Results not yet available.
</p>

We haven’t computed this conclusion yet. This analysis will connect *content similarity* to *conflict behavior*, clarifying whether alliances form via shared identity or purely strategic positioning.

  </div>
</div>


<div class="post" id="takeaways">
  <div class="post-top" markdown="0">
    <div class="post-title-wrap">
    <img src="{{ '/assets/img/icon-conclusion.svg' | relative_url }}" alt="" class="rq-icon">
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

When we began exploring subreddit conflicts, it was easy to imagine Reddit as a platform dominated by large-scale, ongoing wars between communities. The data tells a **quieter, more fragmented story**. Most conflicts appear suddenly, spread briefly, and then fade away. Rather than endless feuds, Reddit is shaped by many short-lived skirmishes, driven by moments of disagreement rather than sustained hostility.

Yet these conflicts are **far from random**. A single negative interaction often invites another, creating short chains of response. Interestingly, communities are more likely to form alliances than to retaliate directly, suggesting that Reddit’s social structure favors alignment over escalation. The familiar idea that “the enemy of my enemy is my friend” only partially applies here — many relationships remain unresolved and unbalanced, reflecting the messiness of real social behavior.

What emerges is a view of Reddit as a living network of communities, where conflict spreads through visibility and proximity, but rarely spirals out of control. Some subreddits play outsized roles in shaping conflict, while others act as stabilizers, absorbing tension rather than amplifying it. Not every research question produced a definitive answer — and that uncertainty is part of the story.

Ultimately, this project is not just about tracking negative links between subreddits. It is about understanding how disagreement moves through online spaces, how communities respond, and what keeps a massive platform like Reddit from collapsing into constant conflict. By turning interaction data into narrative, we aim to offer a clearer way to see how digital communities negotiate disagreement — one link, one reaction, and one brief conflict at a time.

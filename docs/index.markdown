---
layout: default
title: Subreddit Conflicts
---

<div class="post pinned" id="top">
  <div class="post-top" markdown="0">
    <div class="post-title-wrap">
    <img src="{{ '/assets/img/icon-intro.svg' | relative_url }}" alt="" class="rq-icon">
      <div>
        <h1 class="post-title">Why do we hate on r/ADA ?</h1>
        <div class="post-meta">u/benevolentstudent401</div>
      </div>
    </div>
    <div class="tag pin">Pinned</div>
  </div>

  <div class="post-body" markdown="1">

Hi guys !

As y'all are specialists of conflicts between subreddits, I just wanted to ask why the r/ada subreddit receives so much hate by r/csmastudents? I mean I get that the class is hard, but is that reason enough to be at odds with them? How can we explain that? Does it originate from other subreddits maybe?

Thanks again for your answers in advance!

</div>
</div>

<div class="post" id="top">
  <div class="post-top" markdown="0">
    <div class="post-title-wrap">
    <img src="{{ '/assets/img/icon-intro.svg' | relative_url }}" alt="" class="rq-icon">
      <div>
        <h1 class="post-title">Welcome to r/SubredditConflits!</h1>
        <div class="post-meta">u/datasentinels</div>
      </div>
    </div>
  </div>

  <div class="post-body" markdown="1">

Hi u/benevolentstudent401! 

Welcome to r/SubredditConflits and thank you for this first post in our newly created subreddit!

We are delighted to see you take an interest in the conflictual and negative relationships between subreddits! In the following series of posts, we will present both why us at DataSentinels decided to create this subreddit as well as interesting facts about those negative links. And now here comes our thread!

</div>
</div>

<div class="post" id="top">
  <div class="post-top" markdown="0">
    <div class="post-title-wrap">
    <img src="{{ '/assets/img/icon-intro.svg' | relative_url }}" alt="" class="rq-icon">
      <div>
        <h1 class="post-title">About Subreddit Conflicts</h1>
        <div class="post-meta">u/datasentinels</div>
      </div>
    </div>
  </div>

  <div class="post-body" markdown="1">
Reddit is often described as a collection of separate communities — thousands of subreddits, each with its own culture, rules, and conversations. But these communities do not exist in isolation. They constantly reference one another, react to events elsewhere on the platform, and sometimes clash in very public ways.

One of the clearest traces of these interactions is the hyperlink. When a subreddit links to a post from another community, it is often doing more than just sharing content. In many cases, the link signals criticism, disagreement, or disapproval. These moments leave behind a visible footprint of tension between communities.

Here, we look closely at those negative links and what happens after they appear. We follow how conflicts begin, how they spread from one subreddit to another, and how long they tend to last. We also examine which communities play a central role in keeping conflicts alive, and whether classic ideas about alliances and rivalries hold up in this online setting.

What emerges is not a picture of Reddit as a platform locked in endless battles between opposing groups. Instead, the patterns suggest something quieter and more dynamic. Disagreements surface frequently, travel across community boundaries, and draw in new participants — but most of the time, they fade away just as quickly.

By tracing these interactions over time, we can better understand how conflict moves through Reddit: when it escalates, when it stalls, and why large-scale breakdowns are far less common than they might appear.

<div markdown="0">
{% include intro_plot.html %}
</div>

**How to read the figure above:** it gives the overall distribution of link sentiments, setting the baseline for everything that follows. The rest of the page focuses on the **negative** portion of that distribution — the links most associated with antagonism.

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
        <h2 class="post-title">When One Conflict Sparks Another</h2>
        <div class="post-meta">Cascades · Escalation · Temporal dynamics</div>
        </div>
    </div>
  </div>

  <div class="post-body" markdown="1">

A single negative link can be an isolated jab — or it can be the first domino. We model each negative link as a directed edge **A → B** (“A links negatively to B”). A cascade begins when the *target* **B** later becomes a *source* and launches another negative link **B → C** within a time window **Δt**.

Two design choices keep this conservative:
- Each edge is counted at most once as a trigger.
- We vary **Δt** to check whether the effect is robust rather than a coincidence of one particular time scale.

<div markdown="0">
{% include rq1_plot.html %}
</div>

### What we see

Conflict often **does** propagate — but not always, and not endlessly.

Around **18% of negative links** are followed by at least one further conflict within a **five-day window**, and the probability rises as the window expands. Importantly, cascades are not dominated by a handful of communities: they are initiated by **thousands of distinct subreddits**.

When compared to a randomized baseline, the observed cascade rate stays **consistently above chance**, which points to real escalation dynamics rather than random churn.

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
            <h2 class="post-title">How Far Do Conflicts Travel?</h2>
            <div class="post-meta">Cascade length · Cascade depth · Network structure</div>
        </div>
    </div>
  </div>

  <div class="post-body" markdown="1">

Once a cascade starts, the next question is whether it **peters out quickly** or turns into a longer sequence.

We use two complementary measures:
- **Cascade length**: the total number of negative edges involved  
- **Cascade depth**: the longest directed chain (the “furthest hop”)

<div markdown="0">
{% include rq2_1_length_plot.html %}
{% include rq2_2_depth_plot.html %}
</div>

### What we see

Both length and depth are **highly skewed**.

Most cascades are **short and shallow** — brief flare-ups that stop after one or two steps. But a small minority stretches much farther in both length and depth, which is consistent with **bursty escalation**: rare episodes where conflict stays “hot” long enough to jump multiple times.

A useful way to interpret this is: **Reddit conflict is usually local, occasionally contagious, and very rarely runaway.**

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
            <h2 class="post-title">Who Amplifies Conflict?</h2>
            <div class="post-meta">Amplification · Structural roles · Next steps</div>
        </div>
    </div>
  </div>

  <div class="post-body" markdown="1">

Not every community plays the same role in the network. Some subreddits might behave like **repeat broadcasters** — frequently participating in cascades and helping conflict reach more of the graph.

The plots below set up an “amplification score” view: first as raw counts, then normalized by the time scale (days) to compare activity levels more fairly.

<div markdown="0">
{% include rq3_1_amplification_count.html %}
</div>

<div markdown="0">
{% include rq3_2_amplification_count_per_days.html %}
</div>

**Status:** This analysis is still open. The next step is to formalize “amplifier” behavior (e.g., persistence over time, robustness across thresholds, and separation from simple activity/size effects). Identifying amplifiers could explain why a few cascades become exceptionally large while most remain local.

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
            <h2 class="post-title">Triads, Rivalries, and the Failure of Balance</h2>
            <div class="post-meta">Balance theory · Signed triads · Meta communities</div>
        </div>
    </div>
  </div>

  <div class="post-body" markdown="1">

A classic idea in social network theory is **balance**: relationships in triangles tend to “resolve” into stable patterns (friends of friends become friends; enemies of enemies become friends). In signed networks, balance predicts that some triad configurations should be much more common than others.

Here we test that intuition on subreddit interaction triads. The interactive view below highlights where **unbalanced** structures appear in the conflict network.

<div markdown="0">
{% include rq4_interactive_fights_triads.html %}
</div>

### What we see

The reality is messy: there are **significantly more unbalanced triads** than expected.

Subreddits that appear inside these unbalanced triads are often already rivals. Several prominent examples are “meta” communities that routinely link outward (often critically), such as **r/subredditdrama**, **r/changemyview**, and **r/bestof**.

The takeaway is not that balance theory is useless — but that **Reddit’s conflict structure doesn’t reliably settle into tidy triangles**. Public linking behavior can keep relationships ambiguous, performative, or context-dependent.

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
            <h2 class="post-title">Timing Isn’t Everything</h2>
            <div class="post-meta">Temporal gaps · Alliances · Retaliation</div>
        </div>
    </div>
  </div>

  <div class="post-body" markdown="1">

It’s tempting to assume that “fast replies” mean retaliation and “slow replies” mean disengagement. To check that, we look at **temporal gaps**: the time between a conflict **A → B** and the next moment when **B** becomes the source of another conflict.

We then compare timing against the *type* of response — whether the follow-up tends to behave like alliance formation or retaliation.

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

### What we see

Temporal proximity does **not** meaningfully predict whether responses look like alliances or retaliations — this holds across time scales and after accounting for class imbalance.

A striking global pattern dominates:
- **98.8% alliances**
- **1.2% retaliation**

This suggests coalition-building is the default strategy, driven by factors beyond timing (e.g., community size, centrality, topic alignment, moderation style, and the perceived severity of the original conflict).

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
            <h2 class="post-title">Do Similar Communities Stick Together?</h2>
            <div class="post-meta">Embeddings · Semantic similarity · Next steps</div>
        </div>
    </div>
  </div>

  <div class="post-body" markdown="1">

If two subreddits talk about similar topics, do they tend to align when conflict breaks out — or does similarity make rivalry more likely?

To explore that, we represent each subreddit with a **300-dimensional embedding** capturing semantic meaning, and use cosine similarity as a measure of “topic closeness.” A simple directional expectation is:

**Higher similarity → alliances**  
**Lower similarity → retaliation**

<p class="muted">
Results not yet available.
</p>

**Status:** This section is still open. Once computed, it will connect *content similarity* to *conflict behavior*, clarifying whether alliances form through shared identity/topics or through more strategic positioning in the network.

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

Looking across thousands of interactions between subreddits, a clear picture takes shape.

Conflict on Reddit does spread. When one community publicly criticizes another, it often prompts further reactions. These chains of response happen more frequently than chance alone would suggest, indicating that conflict can move through the network rather than remaining isolated.

At the same time, most conflicts remain small. The majority of chains stop after one or two steps. Longer cascades — where tension jumps repeatedly from one community to the next — do exist, but they are rare. Escalation is the exception, not the rule.

When communities respond, they are far more likely to align than retaliate. Instead of directly attacking the original source of conflict, subreddits usually form alliances against a shared target. Timing plays little role in this behavior: fast responses are not more aggressive, and slower ones are not more conciliatory. The structure of the network matters more than speed.

Relationships between communities also resist neat categorization. Rather than settling into stable alliances or rivalries, many subreddit interactions remain unresolved. Triangles of relationships often stay unbalanced, especially around highly visible “meta” communities that regularly comment on activity across the platform. These spaces help keep conflicts visible without necessarily pushing them toward escalation.

Overall, the picture that emerges challenges common assumptions about online conflict. Reddit is not dominated by large, persistent wars between communities. Instead, it is shaped by many brief episodes of disagreement that spread through attention and visibility, reshape alignments, and then fade.

Some questions remain open — particularly which communities consistently amplify conflict, and how similarity between subreddits shapes their responses. But even without those answers, the patterns suggest that Reddit’s structure favors containment over collapse. Disagreement is frequent and public, yet most of the time, it remains temporary.

  </div>
</div>

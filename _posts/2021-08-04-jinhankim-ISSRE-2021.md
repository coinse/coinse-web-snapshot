---
layout: post
title:  "One paper introducing a new Mutation-Based Fault Localisation technique has been accepted to ISSRE 2021 Research Track"
date:   2021-08-04 11:00
author: Jinhan Kim
categories: coinse
excerpt: We introduce a new MBFL technique called SIMFL that leverages a statistical inference over a mutation analysis that has been taken before the faults are observed.
---

After a long peer-review process, our new paper, "Ahead of Time Mutation Based Fault Localisation using Statistical Inference" has been accepted
to [ISSRE 2021](http://2021.issre.net/) Research Track. The work has been done by Jinhan Kim, Gabin An, Robert Feldt and Shin Yoo.
The proposed technique, named SIMFL (Statistical Inference for Mutation-based Fault Localisation), aims to localise faults precisely using mutants,
along with reducing the huge cost of mutation analysis.
The core idea is to leverage a statistical inference over a mutation analysis that has been taken before the faults are observed.
We seek similar failing patterns of the faults in the mutation results, then we suppose the location of the mutants showing similar pattern as the suspicious fault locations.
An empirical evaluation using DEFECTS4J shows that SIMFL can successfully localise up to 113 out of 203 studied faults (55%) at the top, and 159 (78%) faults within the top five, significantly outperforming existing MBFL techniques.


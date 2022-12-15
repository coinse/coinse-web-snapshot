---
layout: post
title:  "Human competitiveness of GP"
date:   2017-03-30 9:00
author: Shin Yoo
categories: coinse, publication, tosem
excerpt: The human competitiveness of Genetic Programming for Spectrum Based Fault Localisation
---

A paper that had been under review for some time has been finally accepted by the ACM Transactions on Software Engineering and Methodology (TOSEM):

**Human Competitiveness of Genetic Programming in SBFL: Theoretical and Empirical Analysis** by Shin Yoo, Xiaoyuan Xie, Fei-Ching Kuo, Tsong-Yue Chen, and Mark Harman

The paper presents a theoretical proof that, under a consistent tie breaker for the ranking, no SBFL formula can be better than or equivalent to all other formulas against all possible faults and programs. In other words, the greatest formula does not exist. What we currently have is an expanding set of _maximal_ formulas: they are better than other formulas for some faults, but can be worse then other formulas for other faults. 

The paper also contains an empirical study, because, whether a maximal formula is really useful is a question that can be only answered empirically. It depends on the frequency of occurrence of a particular type of faults for which a formula is maximal.

The human competitiveness of GP follows from the fact that GP successfully generated a maximal formula, which also happens to be very effective against a large portion of studied faults. Casually speaking, GP formulas are maximal for the _right_ reason.

For me, this is an exciting news: the collaboration with my co-authors have been very productive, and I think we achieved an important milestone in both SBSE and SBFL research. COINSE is committed to pushing fault localisation techniques further. Stay tuned!
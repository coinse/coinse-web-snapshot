---
layout: post
title:  "A new paper has been published in the Journal of Systems and Software."
date:   2021-08-02 14:00
author: Seongmin Lee
categories: coinse
excerpt: A COINSE paper about observation-based dependence analysis has been accepted at the Journal of Systems and Software.
---

A paper titled "Observation-based approximate dependence modeling and its use for program slicing," which is a journal extension of the SCAM 2019 paper, has been published in the [Journal of Systems and Software](https://www.journals.elsevier.com/journal-of-systems-and-software). It is a collaboration between [Seongmin Lee](/members/seongmin), Dave Binkley, Robert Feld, Nicolas Gold, and [Shin Yoo](/members/shin.yoo).

In this paper, we propose a novel program dependence approximation based solely using dynamic information. Our technique, MOAD (Modeling Observation-based Approximate Dependency), employing statistical models on the execution information from a few perturbed programs, can approximate the program dependence without any static analysis on the program. This paper evaluates the MOAD's performance in terms of the program slicing both quantitatively and qualitatively compared to the existing observation-based slicing, ORBS, and static slicing.

{% reference Lee2021ua %}

<h4>Abstract</h4>

While dependency analysis is foundational to much program analysis, many techniques have limited scalability and handle only monolingual systems. We present a novel dependency analysis technique that aims to approximate program dependency from a relatively small number of perturbed executions. Our technique, MOAD (Modeling Observation-based Approximate Dependency), reformulates program dependency as the likelihood that one program element is dependent on another (instead of a Boolean relationship). MOAD generates program variants by deleting parts of the source code and executing them while observing the impact. MOAD thus infers a model of program dependency that captures the relationship between the modification and observation points. We evaluate MOAD using program slices obtained from the resulting probabilistic dependency models. Compared to the existing observation-based backward slicing technique, ORBS, MOAD requires only 18.6% of the observations, while the resulting slices are only 12% larger on average. Furthermore, we introduce the notion of the observation-based forward slices. Unlike ORBS, which inherently computes backward slices, MOAD’s model’s dependences can be traversed in either direction allowing us to easily compute forward slices. In comparison to the static forward slice, MOAD only misses deleting 0–6 lines (median 0), while excessively deleting 0–37 lines (median 8) from the slice.


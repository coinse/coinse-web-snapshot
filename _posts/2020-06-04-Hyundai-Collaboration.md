---
layout: post
title:  "New Preprint about Hyundai Motors Collaboration"
date:   2020-06-04 09:00
author: Shin Yoo
categories: coinse
excerpt: A new arXiv preprint about the collaboration between COINSE, Chalmers, and Hyundai Motors Company is available.
---

![Surprise Adequacy Analysis Visualisation]({{ site.url }}/assets/images/blog/2020-06-04-Hyundai-Collaboration.png)

A new arXiv preprint that reports the collaboration between COINSE, Prof. Robert Feldt, and the R&D Division at Hyundai Motors Company is now availale from [https://arxiv.org/abs/2006.00894](https://arxiv.org/abs/2006.00894). 

For iterative training/development of a semantic segmentation DNN model, we propose a way to reduce the manual labelling cost. If a new input is "surprising" w.r.t. the training data, its segmentation accuracy is likely to be low; if it is not surprising at all, the model is likely to process it correctly. Based on this, we can selectively decide not to label unsurprising inputs.

Segmentation is evaluated using Intersection over Union (IoU) between an inferred and a human labelled segment. Let a segment be “incorrect" when IoU < 0.5: the FN (i.e., marking a problematic image to be okay) rate is typically < 5% even when not labelling ~50% of inputs.

Here is a visualisation of the SA analysis: the heatmap shows that SA can pinpoint the regions that the segmentation DNN finds unfamiliar, and therefore “difficult”, to handle: [https://www.youtube.com/watch?v=N7wKFx8pcsU](https://www.youtube.com/watch?v=N7wKFx8pcsU)

It was really nice to see our previous work being applied to industry data and models. A big thank you to Hyundai Motors Company and its R&D Division, who made the collaboration smooth and frictionless.
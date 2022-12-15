---
layout: post
title:  "Three new ICSE 2020 workshop papers from COINSE"
date:   2020-02-27 17:00
author: Shin Yoo
categories: coinse
excerpt: Three new papers have been accepted into collocated workshops at ICSE 2020.
---

ICSE 2020 workshop notifications came out, and three papers from COINSE have been accepted into [DeepTest 2020](https://deeptestconf.github.io) and [SBST 2020](https://sbst20.github.io).

- Evaluating Surprise Adequacy for Question Answering, Seah Kim and Shin Yoo, DeepTest 2020

We have applied the Surprise Adequacy (from the ICSE 2019 paper by Jinhan, Robert, and Shin) to the Machine Comprehension/Question Answering DNNs. It shows that SA can distinguish questions that are more difficult to answer correctly, without being guided by labels (i.e., the correct answers). We believe this result can be useful when developing DNN-based QA systems.

- SINVAD: Search-based Image Space Navigation for DNN Image Classifier Test Input Generation, Sungmin Kang, Robert Feldt, and Shin Yoo

We show the feasibility of constructing a search space within the latent feature space using Variational Autoencoders. Instead of collecting new training images, it is possible to synthesize plausible inputs, not by adding local noises to a seed image, but by _moving away_ from the original image in the semantic space.

- Flexible Probabilistic Modeling for Search Based Test Data Generation, Robert Feldt and Shin Yoo (Short Paper)

We propose probabilistic generative models as an alternative to performing costly search producing a single solution. By training generative models, we may be able to _sample_ fresh instances of test data that satisfy the requirement (such as coverage or other higher-order concerns). We consider various related issues and propose a few technical componenets (note: the legend says that this was originally to be a 2 page position paper, but authors, both being mindless professors, forgot the page limit and just wrote on).
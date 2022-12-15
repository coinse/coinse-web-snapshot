---
layout: post
title: "A new paper about automatically augmenting equivalent mutant dataset has been accepted at MUTATION 2022"
date:   2022-03-12 10:00
author: Seungjoon Chung
categories: coinse
excerpt: We present an automated technique to augment equivalent mutant dataset.
---

Our new paper titled "Augmenting Equivalent Mutant Dataset Using Symbolic Execution" has been accepted at [Mutation 2022](https://icst2022.vrain.upv.es/home/mutation-2022) workshop. This work was done by Seungjoon Chung and Shin Yoo from COINSE.

One widely known challenge in mutation testing is the existence of equivalent mutants (hereafter denoted as EM). The problem is that the program equivalence is undecidable in general, resulting in no highly efficient and automated way of distinguishing EMs from non-equivalent mutants (hereafter denoted as NEM).
Recently, Machine Learning (ML) has been applied to classify EMs from NEMs based on easily collectable features. While these techniques show promising accuracy, there is the problem of providing a sufficient number of EMs (via manual inspection) to train the classification models.

In this paper, we introduce two techniques that can be used to augment the equivalent mutant benchmarks. First, we propose a symbolic execution-based validation of mutant equivalence, instead of manual classification. Second, we introduce a synthesis technique for equivalent mutants: for a subset of mutation operators, the technique identifies potential mutation locations that are guaranteed to produce equivalent mutants. 

We compare these two techniques to MutantBench, a manually labelled equivalent mutant benchmark. For the 19 programs studied, MutantBench contains 462 equivalent mutants, whereas our technique is capable of generating 1,725 equivalent mutants automatically, of which 1,349 are new and unique. We further show that the additional equivalent mutants can lead to more accurate equivalent mutant classification models.

The preprint of our work is available [here]({{ site.url }}/publications/pdfs/Chung2022ae.pdf){:target="\_blank"}.
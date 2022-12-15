---
layout: post
title:  "Paper accepted at JSS"
date:   2019-11-04 13:00
author: Shin Yoo
categories: coinse, publication, jss
excerpt: A COINSE paper has been accepted at Journal of Systems and Software.
---

A paper titled "Evaluating Lexical Approximation of Program Dependence" has been accepted at [Journal of Systems and Software](https://www.journals.elsevier.com/journal-of-systems-and-software). It is a collaboration between [Seongmin Lee](/members/seongmin), Dave Binkley, Nicolas Gold, Syed Islam, Jens Krinke, and [Shin Yoo](/members/shin.yoo). 

{% reference Lee2019aa %}

<h4>Abstract</h4>

Complex dependence analysis typically provides an underpinning approximation of true program dependence. We investigate the effectiveness of using lexical infor- mation to approximate such dependence, introducing two new deletion operators to Observation-Based Slicing (ORBS). ORBS provides direct observation of program dependence, computing a slice using iterative, speculative deletion of program parts. Deletions become permanent if they do not affect the slicing criterion. The original ORBS uses a bounded deletion window operator that attempts to delete consecutive lines together. Our new deletion operators attempt to delete multiple, non-contiguous lines that are lexically similar to each other. We evaluate the lexical dependence approximation by exploring the trade-off between the precision and the speed of dependence analysis performed with new deletion operators. The deletion operators are evaluated independently, as well as collectively via a novel generalization of ORBS that exploits multiple deletion operators: Multi-operator Observation-Based Slicing (MOBS). An empirical evaluation using three Java projects, six C projects, and one multi-lingual project written in Python and C finds that the lexical information provides a useful approximation to the underlying dependence. On average, MOBS can delete 69% of lines deleted by the original ORBS, while taking only 36% of the wall clock time required by ORBS.


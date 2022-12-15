---
layout: post
title:  "First batch of papers from COINSE"
date:   2016-06-19 20:35
author: Shin Yoo
categories: coinse, publication, ssbse
excerpt: A couple of papers by students have been accepted.
---

[SSBSE][ssbse] is an annual international symposium for people who work in the field of search-based software engineering. In addition to the graduate student track, it maintains a track called "SBSE Challenge Track". The idea is that organisers will announce a few real world open source applications, and participants can do whatever SBSE type things(?) to them and report the findings, which does not have to be novel technical contribution. The track rather aims to show that these techniques are applicable to real systems, and to expand the authorship in the field.

As a group barely a year old and with a small number of students, COINSE made a two submissions this year to SSBSE and I am glad to report that both got accepted. I know, they are not full-blown research papers, but on the other hand I do believe that the firsthand experience of the entire research cycle (idea, design, imlementation, experimentation, write-up, getting accepted, and presentation) will be a valuable one for the students. So I am proud of the results :)

The accepted papers are:

* **Amortised Deep Parameter Optimisation of GPGPU Work Group Size for OpenCV** by Jeongju Sohn, Seongmin Lee, and Shin Yoo (Challenge Track): We have applied amortised optimisation to OpenCV's GPGPU layer, and optmise the work group size unbeknownst to the user. Consequently, the GPU version of the template matching will be increasingly faster as the user continues to use the framework.

* **Field Report: Applying Monte Carlo Tree Search for Program Synthesis** by Jinsuk Lim and Shin Yoo (Graduate Student Track): This is the result of _Undergraduate_ Research Project work done by Jinsuk, and the notificaion is just in time for the good news to be included in the URP report. We convert generic program synthesis (i.e. automatic programming from specifications and/or examples) to single player combinatorial gaming, and apply Monte Carlo Tree Search to it.

Well done, guys!

[ssbse]: http://ssbse.org

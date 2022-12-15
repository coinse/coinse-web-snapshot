---
layout: post
title:  "Paper accepted at IEEE Transactions on Software Engineering"
date:   2019-07-12 13:00
author: Shin Yoo
categories: coinse, publication, tse
excerpt: An extension of ISSTA 2017 paper has been accepted at IEEE Transactions on Software Engineering (TSE).
---

A journal extension of the [ISSTA 2017 paper](https://coinse.kaist.ac.kr/publications/pdfs/Sohn2017xq.pdf) has been accepted at IEEE Transactions on Software Engineering (TSE). The empirical evaluation of FLUCCS has been significantly extended with cross-project evaluation as well as more learn-to-rank algorithms. This is the first journal paper for Jeongju Sohn, congratulations!

{% reference Sohn2019jk %}

    <h4>Abstract</h4>

    Fault localisation aims to reduce the debugging efforts of human developers by highlighting the program elements that are suspected to be the root cause of the observed failure. Spectrum Based Fault Localisation (SBFL), a coverage based approach, has been widely studied in many researches as a promising localisation technique. Recently, however, it has been proven that SBFL techniques have reached the limit of further improvement. To overcome the limitation, we extend SBFL with code and change metrics that have been mainly studied in defect prediction, such as size, age, and churn. FLUCCS, our fault learn-to-rank localisation technique, employs both existing SBFL formulæ and these metrics as input. We investigate the effect of employing code and change metrics for fault localisation using four different learn-to-rank techniques: Genetic Programming, Gaussian Process Modelling, Support Vector Machine, and Random Forest. We evaluate the performance of FLUCCS with 386 real world faults collected from Defects4J repository. The results show that FLUCCS with code and change metrics places 144 faults at the top and 304 faults within the top ten. This is a significant improvement over the state-of-art SBFL formulæ, which can locate 65 and 212 faults at the top and within the top ten, respectively. We also investigate the feasibility of cross-project transfer learning of fault localisation. The results show that, while there exist project-specific properties that can be exploited for better localisation per project, ranking models learnt from one project can be applied to others without significant loss of effectiveness.
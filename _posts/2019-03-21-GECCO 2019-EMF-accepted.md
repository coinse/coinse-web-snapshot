---
layout: post
title:  "GECCO 2019: Ensemble Model for Fault Localisation (EMF) accepted"
date:   2019-03-21 13:00
author: Shin Yoo
categories: coinse, publication, gecco
excerpt: A COINSE paper about ensemble model for fault localisation has been accepted at GECCO 2019.
---

A paper titled "Why Train-and-Select when you can use them all? {E}nsemble Model for Fault Localisation" has been accepted at [ACM Genetic and Evolutionary Computation Conference (GECCO 2019)](https://gecco-2019.sigevo.org). 

{% reference Sohn2019aa %}

    <h4>Abstract</h4>

    Learn-to-rank techniques have been successfully applied to fault localisation to produce ranking models that place faulty program elements at or near the top. Genetic Programming has been successfully used as a learning mechanism to produce highly effective ranking models for fault localisation. However, the inherent stochastic nature of GP forces its users to learn multiple ranking models and choose the best performing one for the actual use. This train-and-select approach means that the absolute majority of the computational resources that go into the evolution of ranking models are eventually wasted. We introduce Ensemble Model for Fault Localisation (EMF), which is a learn-to-rank fault localisation technique that utilises all trained models to improve the accuracy of localisation even further. EMF ranks program elements using a lightweight, voting-based ensemble of ranking models. We evaluate EMF using 389 real-world faults in Defects4J benchmark. EMF can place 30.1% more faults at the top when compared to the best performing individual model from the train-and-select approach. We also apply Genetic Algorithm (GA) to construct the best performing ensemble. Compared to naively using all ranking models, GA generated ensembles can localise further 9.2% more faults at the top on average.
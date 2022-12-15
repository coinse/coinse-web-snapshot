---
layout: post
title:  "A new paper about GUI smoke test repairing technique has been accepted at ICST 2022 Industry Track"
date:   2021-12-28 15:00
author: Juyeon Yoon
categories: coinse
excerpt: We present a new repair technique for View Identification Failures (VIF) in GUI tests from a collaboration work between COINSE and Samsung Research.
---

Our new paper titled "Repairing Fragile GUI Test Cases Using Word and Layout Embedding" has been accepted to [ICST 2022](https://icst2022.vrain.upv.es/) industry track. This work was done by Juyeon Yoon, Seungjoon Chung, Jinhan Kim, and Shin Yoo from COINSE, Shin Hong from Handong university, and Kihyuck Shin from Samsung Research.

The GUI level regression tests, written and maintained by smartphone vendors, check that various device configurations are compatible with commonly used apps. Those test scripts are inherently fragile because GUI views have frequent changes and the changes are not directly visible and trackable by vendors. One example of such fragility is defined as View Identification Failure (VIF); it occurs when the recent modification to the app source code changes the view identifier, but the test case continues to find the same button using the *pre-change* identifier. The test consequently fails by attempting to match the non-existing or wrong GUI element.

Motivated by the fact that the semantic logic of both the app and the test case rarely changes, we repair the VIF by matching the most similar view identifier in the current view with the obsolete identifier in the test script. We both exploit the lexical and semantic similarity between view identifiers themselves using string distance measure and word embeddings and also compare the similarity between the neighbouring context of the GUI elements containing the identifiers using node embeddings learned in layout graphs. 

An empirical evaluation on the real-world VIFs shows that our proposed techinque can repair 88.5% of the failures by ranking the correct one on top. This is a significant improvement over the existing tool based on the lexical similarity only, which can repair only 28.3% of the failures in one attempt.

Check our [preprint]({{ site.url }}/publications/pdfs/Yoon2022fs.pdf){:target="\_blank"} to dive into more details.


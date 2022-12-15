---
layout: post
title:  "A new paper about Bug Inducing Commit accepted at ESEC/FSE IVR 2021"
date:   2021-07-14 14:55
author: Gabin An
categories: coinse
excerpt: A COINSE paper about reducing the search space of Bug Inducing Commit (BIC) has been accepted at the Ideas, Visions and Reflections (IVR) track of ESEC/FSE 2021.
---

A COINSE paper titled "Reducing the Search Space of Bug Inducing Commits
using Failure Coverage" has been accepted at the Ideas, Visions and Reflections (IVR) track of [ESEC/FSE 2021](https://2021.esec-fse.org/).

A Bug Inducing Commit (BIC) refers to the commit that introduced the bug into a program, and knowing BICs at debugging time is beneficial in many ways since it can directly help developers debug their source code and also boost the accuracy of automated debugging techniques.

We show that the search space of BICs can be dramatically reduced using  only the code coverage of corresponding failing executions. This technique can be applied at debugging time unlike other BIC identification techniques requiring fixing commit or bug reports.
We expect that our technique can increase the effectiveness and efficiency of both bisection and other BIC retrieval technique.

{% reference An2021qb %}

<h4>Abtract</h4>
Knowing how exactly a bug has been introduced into the code can help developers debug the bug efficiently. However, techniques currently used to retrieve Bug Inducing Commits (BICs) from the repository timeline are limited in their accuracy. Automated bisection of the version history depends on the bug revealing test case being executable against all candidate previous versions, whereas blaming the last commits that touched the same parts as the fixing commit (à la SZZ) requires that the bug has already been fixed. We show that filtering commits using the coverage of the bug revealing test cases can effectively reduce the search space for both bisection and SZZ-like blame models by 87.6% and 27.9%, respectively, significantly reducing the cost of BIC retrieval. The application of our approach to bugs in Defects4J also reveals inconsistencies in some of their BICs known in the literature.
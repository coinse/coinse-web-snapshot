---
layout: page
title: Projects
---

###  [Evaluating CAVM: A New Search-Based Test Data Generation Tool for C][cavm]

We present CAVM (pronounced ``ka-boom''), a new search-based test data generation tool for C. CAVM is developed to augment an existing commercial tool, codescroll, which uses static analysis and input partitioning to generate test data. Unlike the current state-of-the-art search-based test data generation tool for C, austin, CAVM handles dynamic data structures using purely search based techniques. This work has been accepted at SSBSE 2017.

###  [FLUCCS: Using Code and Change Metrics to Improve Fault Localisation][fluccs]

We incorporate code and change metrics into the fault localisation problem. We formulate fault localisation as a learning-to-rank problem: features include existing SBFL formula scores, as well as code metrics (size, complexity) and change metrics (age, churn). We also introduce method level aggregation to improve effectiveness of method level localisation. This work has been accepted at ISSTA 2017.

###  [Amortised Deep Parameter Optimisation of GPGPU Work Group Size for OpenCV][adpoopencv]

This work applies amortised optimisation to deep parameter optimisation for work group size in OpenCV's GPGPU layer. Work group size is critical to the overal performance of GPGPU, yet tuning the parameter has been left to either automated heuristic or manual trial and error. This work shows that systematic and amortised optimisation is feasible. It has been published at SSBSE 2016 as part of the SBSE Challenge Track.

###  [Monte-Carlo Tree Search for Generic Program Synthesis: A Field Report][mctsps]

Genetic programming has been the most widely studied stochastic approach for program synthesis. This work evaluates Monte-Carlo Tree Search as a constructive metaheuristic for program synthesis using benchmarks set by the GP community. The initial idea of the "programming game" is from [David White][drw]; this particular set of experiments has been performed by Jinsuk Lim as part of his Undergraudate Research Program (URP). It has been published at the graduate student track of SSBSE 2016.

###  [Seeing is Slicing: Observation-based Slicing of Picture Description Languages][visualorbs]

This work applies observation-based slicing, [ORBS][orbs], to Picture Description Languages (PDLs) such as the TikZ extension of LaTeX. The result is that we can slice PDL source code with a graphic slicing criterion, i.e. a cropped image from the original diagram. This work has been published at SCAM 2014.

###  [Higher-Strength Combinatorial Interaction Testing][highordercit]

This work shows that, thanks to the existence of constraints (and their capabilities to reduce the search space), higher strength combinatorial interaction testing is practically viable. This work has been published at ESEC/FSE 2013.

###  [Evolving Human Competitive Spectrum-Based Fault Localisation][evolvingsbfl]

This is the first work that applied genetic programming to evolve SBFL risk evaluation formulas, with human competitive results (evaluated empirically). This work has been published at SSBSE 2012.

###  [Spectrum-Based Fault Localisation Visualiser][sbflvis]

This visualisation tool allows you to plot and interact with the 3D surface of SBFL risk evaluation formulas. It serves as an insightful method to understand relative performance of each formula, as well as an intuitive shorthand for the recent proof that states there does not exist **the greatest formula**, i.e. the formula that dominates all other formulas against any arbitray combination of faults, test suites, and programs.

[cavm]: {{page.url | prepend: site.baseurl | preprend: site.url}}cavm/
[fluccs]: {{page.url | prepend: site.baseurl | preprend: site.url}}fluccs/
[evolvingsbfl]: {{page.url | prepend: site.baseurl | preprend: site.url}}evolvingsbfl/
[sbflvis]: {{page.url | prepend: site.baseurl | preprend: site.url}}sbflvis/
[highordercit]: {{page.url | prepend: site.baseurl | preprend: site.url}}highordercit/
[visualorbs]: {{page.url | prepend: site.baseurl | preprend: site.url}}visualorbs/
[adpoopencv]: {{page.url | prepend: site.baseurl | preprend: site.url}}adpoopencv/
[mctsps]: {{page.url | prepend: site.baseurl | preprend: site.url}}mctsps/


[orbs]: http://crest.cs.ucl.ac.uk/resources/orbs/
[drw]: http://www.davidrwhite.co.uk

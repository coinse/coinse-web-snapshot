---
layout: page
title: CS492 Search Based Software Engineering (Autumn 2016)
---

### Syllabus

This class covers metaheuristic optimisation algorithms and their application to software engineering problems. The goal of the class is twofold: the first objective is to understand major classes of metaheuristic algorithms, including local search algorithms and population based optimisation (such as genetic algorithm and particle swarm optimisation). The second objective is to study the application of these algorithms to software engineering problems. For this, the class will introduce the fundamental concepts in so called Search Based Software Engineering, and then study various application cases across the software development lifecycle (requirements, design, planning, testing, maintenance, etc). The desired learning outcome is to be able to use metaheuristic optimisation to automate, and/or gain insights into, software engineering tasks.

The first half of the course will be a series of lectures on metaheuristic algoithms. The second half will be a series of case studies based on paper presentations, given by students, about important and/or recent papers in the field of Search Based Software Engineering.

### Evaluation

* Coursework: 30%
* Project: 30%
* Final Exam: 30%
* Class Participation: 10%

### Lectures

* 09/01: [Introduction 1/2][slide01]
* 09/06: [Introduction 2/2][slide02]
* 09/08: [Fitness Landscape][slide03]
* 09/13: [Random and Local Search Algorithms][slide04]
	* [Bertrand Meyer's blog post about insights on random testing](https://bertrandmeyer.com/2011/07/11/testing-insights/)
	* [Pointers to fuzz testing](http://pages.cs.wisc.edu/~bart/fuzz/)
	* [Random Testing Lecture Slide][ucl_random_testing]
	* [Adaptive Random Testing][Chen2004]
* 09/15: No lecture (Mid-autumn Festival Holiday)
* 09/20: [Evolutionary Computation 1/2][slide05]
* 09/22: [Evolutionary Computation 2/2][slide06]
* 09/27: Guest Lecture - MS Azure Tutorial
* 09/29: [Multi-objective Optimisation][slide07]
* 10/04: [Genetic Programming][slide08]
* 10/06: No lecture (Away at [SSBSE 2016][ssbse2016])
* 10/11: No lecture (Away at [SSBSE 2016][ssbse2016])
* 10/13: [Bio-inspired Algorithms][slide09]
* 10/18: [Normalisation][slide10], [SBSE Overview][slide11]
* 10/20: No lecture (Midterm week)
* 10/25: No lecture (Midterm week)
* 10/27: [Theory - Elementary Landscape Analysis][slide12]
* 11/01: Project Idea Presentations (5 minutes per group)
* 11/03: [Advanced Algorithms][slide13], Paper reading
	* Group 3: [S. Heule, M. Sridharan, and S. Chandra. *Mimic: Computing models for opaque code*. In Proceedings of the 2015 10th Joint Meeting on Foundations of Software Engineering, ESEC/FSE 2015, pages 710–720, 2015.](http://dl.acm.org/citation.cfm?id=2786875)
* 11/08: Paper reading
	* Group 4: [K. Praditwong, M. Harman, and X. Yao. *Software module clustering as a multi-objective search problem*. IEEE Transactions on Software Engineering, 37(2):264–282, March-April 2010.](http://ieeexplore.ieee.org/document/5406532/)
	* Group 7: [A. Hindle, E. T. Barr, Z. Su, M. Gabel, and P. Devanbu. *On the naturalness of software*. In Proceedings of the 34th International Conference on Software Engineering, ICSE ’12, pages 837–847, Piscataway, NJ, USA, 2012. IEEE Press.](http://dl.acm.org/citation.cfm?id=2337223.2337322)
* 11/10: Paper reading
	* [S. Yoo. Evolving human competitive spectra-based fault localisation techniques. In G. Fraser and J. Teixeira de Souza, editors, Search Based Software Engineering, volume 7515 of Lecture Notes in Computer Science, pages 244–258. Springer Berlin Heidelberg, 2012.](http://link.springer.com/chapter/10.1007%2F978-3-642-33119-0_18)
	* Group 8: [Y. Jia, M. Cohen, M. Harman, and J. Petke. *Learning combinatorial interaction test generation strategies using hyperheuristic search*. In IEEE/ACM 37th IEEE International Conference on Software Engineering (ICSE), volume 1, pages 540–550, May 2015.](http://dl.acm.org/citation.cfm?id=2818821)
* 11/15: Paper reading
	* Group 1: [Danilo Ardagna, Giovanni Paolo Gibilisco, Michele Ciavotta, and Alexander Lavrentev, *A Multi-model Optimization Framework for the Model Driven Design of Cloud Applications*. In proceedings of the 2014 International Symposium on Search Based Software Engineering, page 61-76, 2014.](http://link.springer.com/chapter/10.1007/978-3-319-09940-8_5)
	* Group 2: [F. Wu, W. Weimer, M. Harman, Y. Jia, and J. Krinke. *Deep parameter optimisation*. In Proceedings of the 2015 Annual Conference on Genetic and Evolutionary Computation, GECCO 2015, pages 1375–1382, 2015.](http://dl.acm.org/citation.cfm?id=2754648)
* 11/17: Paper reading
	* Group 6: [G. Fraser and A. Arcuri. *Whole test suite generation*. IEEE Transactions on Software Engineering, 39(2):276–291, Feb. 2013.](http://ieeexplore.ieee.org/document/6152257/)
	* Group 9: [F. Ferrucci, M. Harman, J. Ren, and F. Sarro. *Not going to take this anymore: Multi-objective overtime planning for software engineering projects.* In Proceedings of the 2013 International Conference on Software Engineering, ICSE ’13, pages 462–471, 2013.](http://dl.acm.org/citation.cfm?id=2486788.2486849)
* 11/22: Paper reading
	* Group 5: [S. Yoo, M. Harman, and S. Ur. *GPGPU test suite minimisation: Search based software engineering performance improvement using graphics cards*. Empirical Software Engineering, 18(3):550–593, 2013.](http://link.springer.com/article/10.1007/s10664-013-9247-y)
	* Group 3: [M. Harman, L. Hu, R. Hierons, J. Wegener, H. Sthamer, A. Baresel,and M. Roper, *Testability Transformation*. IEEE Transactions on Software Engineering, 30(1):3-16, 2004.](http://dl.acm.org/citation.cfm?id=960317)

* 11/24: No Lecture (Undergraduate Admission Interview Day)
* 11/29: Paper reading
	* Group 4: [Experimental assessment of software metrics using automated refactoring](http://dl.acm.org/citation.cfm?id=2372260)
	* Group 7: [Automatically finding patches using genetic programming](http://dl.acm.org/citation.cfm?id=1555051)
* 12/01: Paper reading
	* Group 8: [Search-based security testing of web applications](http://dl.acm.org/citation.cfm?id=2593835)
	* Group 1: [Putting the Developer in-the-Loop: An Interactive GA for Software Re-modularization](http://dl.acm.org/citation.cfm?id=2415195)
* 12/06: 
	* Group 2: [Searching for resource-efficient programs: Low-power pseudorandom number generators](http://dl.acm.org/citation.cfm?id=1389437)
	* Group 6: [Finding test data with specific properties via meta heuristic search](http://ieeexplore.ieee.org/document/6698888/)
* 12/08: Paper reading
	* Group 9: [Empirical evaluation of pareto efficient multi- objective regression test case prioritisation.](http://dl.acm.org/citation.cfm?id=2771788)
	* Group 5: [Strong mutation-based test data generation using hill climbing](http://dl.acm.org/citation.cfm?id=2897012)
* 12/13: Project Results Presentations (15 min. presentation plus 5 min. Q&A each)
	* Group 1 to 4: 13:00 - 14:20
	* Group 5 to 9: 17:00 - 18:30
* 12/15: No lecture (End of term exam week)
* 12/20: **Final Term Exam: N1 102 13:00 - 15:00**

### Coursework

Courseworks consist of solving large scale problems using stochastic approaches. There will be a class leaderboard, so that participants can submit their solutions to see how well they are doing. The winning entries will receive **prizes** and present their solutions to the class. In addition to submission of solutions to the leaderboard, participants should submit their implementation and report online.

* Coursework #1: [TSP coursework slides]({{site.baseurl}}/assets/files/2016-cs492/coursework1-slides.pdf), [Spec]({{site.baseurl}}/assets/files/2016-cs492/coursework1-document.pdf). **Due by the end of 30th September.**

* Corusework #2: GP Symbolic Regression [Spec]({{site.baseurl}}/assets/files/2016-cs492/coursework2-document.pdf). Training data [csv file]({{site.baseurl}}/assets/files/2016-cs492/coursework2-training.csv) **Due by the end of 3rd November.**

### Course Project

The course project will be about actual application of metaheuristic problem solving to software engineering. Please see the [document]({{site.baseurl}}/assets/files/2016-cs492/project-2016.pdf). Groups should prepare two talks:

* Project Idea Pitch: introduce what your group plans to do within 5 minutes. 1st November 2016. Here are some example [project ideas]({{site.baseurl}}/assets/files/2016-cs492/cs492-2016-project-ideas.pdf).

* Project Outcome Preentation: present the results you obtained within 15 minutes. We are going to use the 13th December slot, but it may have to be moved so that all groups can fit.

Details about the deliverables are specified in the project documentation. Submission deadline is **the end of 16th December 2016**.

### Groups

Here are the group numbers and members.

* Group 1: Rafael, Hampus
* Group 2: 조성원, 조형준
* Group 3: 박준영, 배소라, 박지혁
* Group 4: 이준범, 하이근
* Group 5: 김훈, 박종민, 김건일
* Group 6: 정유림, 진민규, 송지영
* Group 7: 임형진, 이대근, 조준희
* Group 8: 진종민, 한충우, 신현석
* Group 9: Moritz, Cristoffer

### Reading List

Here are some papers on various SBSE topics to pick from in order to prepare for the first paper presentation of your group. You can also consult the [SBSE Repository](http://crestweb.cs.ucl.ac.uk/resources/sbse_repository/repository.html).

### #Requirements

* A. Bagnall, V. Rayward-Smith, and I. Whittley. The next release problem. Information and Software Technology, 43(14):883–890, Dec. 2001.

* Y. Zhang, M. Harman, and S. A. Mansouri. The Multi-Objective Next Release Problem. In GECCO ’07: Proceedings of the 2007 Genetic and Evolutionary Computation Conference, pages 1129–1136. ACM Press, 2007.

### #Project Management

* G. Antoniol, M. D. Penta, and M. Harman. Search-based Techniques Applied to Optimization of Project Planning for a Massive Maintenance Project. In Proceedings of the 21st IEEE International Conference on Software Maintenance (ICSM ’05), pages 240–249, Los Alamitos, California, USA, 25-30 September 2005. IEEE Computer Society.

* F. Ferrucci, M. Harman, J. Ren, and F. Sarro. Not going to take this anymore: Multi-objective overtime planning for software engineering projects. In Proceedings of the 2013 International Conference on Software Engineering, ICSE ’13, pages 462–471, Piscataway, NJ, USA, 2013. IEEE Press.

### #Modularisation

* B. S. Mitchell and S. Mancoridis. On the automatic modularization of software systems using the bunch tool. IEEE Transactions on Software Engineering, 32(3):193–208, 2006.

* K. Praditwong, M. Harman, and X. Yao. Software module clustering as a multi-objective search problem. IEEE Transactions on Software Engineering, 37(2):264–282, March-April 2010.

### #Test Data Generation

* C. Michael, G. McGraw, and M. Schatz. Generating software test data by evolution. IEEE Transactions on Software Engineering, 27(12):1085–1110, December 2001.

* G. Fraser and A. Arcuri. Whole test suite generation. Software Engineering, IEEE Transactions on, 39(2):276–291, Feb 2013.

* M. Harman, L. Hu, R. Hierons, J. Wegener, H. Sthamer, A. Baresel, and M. Roper. Testability transformation. IEEE Transactions on Software Engineering, 30(1):3–16, Jan. 2004.

### #Automated Patching

* W. Weimer, T. Nguyen, C. L. Goues, and S. Forrest. Automatically finding patches using genetic programming. In Proceedings of the 31st IEEE International Conference on Software Engineering (ICSE ’09), pages 364–374, Vancouver, Canada, 16-24 May 2009. IEEE.

* Z. P. Fry, B. Landau, and W. Weimer. A human study of patch maintainability. In Proceedings of the 2012 International Symposium on Software Testing and Analysis, ISSTA 2012, pages 177–187, New York, NY, USA, 2012. ACM.

### #Regression Testing

* S. Yoo and M. Harman. Pareto efficient multi-objective test case selection. In Proceedings of International Symposium on Software Testing and Analysis, pages 140–150. ACM Press, July 2007.

* M. G. Epitropakis, S. Yoo, M. Harman, and E. K. Burke. Empirical evaluation of pareto efficient multi- objective regression test case prioritisation. In Proceedings of the 2015 International Symposium on Software Testing and Analysis, ISSTA 2015, pages 234–245, New York, NY, USA, 2015. ACM.

### #Refactoring

* M. O'Cinnéide, L. Tratt, M. Harman, S. Counsell, and I. Hemati Moghadam. Experimental assessment of software metrics using automated refactoring. In Proceedings of the ACM-IEEE international symposium on Empirical software engineering and measurement, ESEM ’12, pages 49–58, New York, NY, USA, 2012. ACM.

### #Genetic Improvement

* D. White, A. Arcuri, and J. Clark. Evolutionary improvement of programs. IEEE Transactions on Evolutionary Computation, 15(4):515 –538, August 2011.

* W. Langdon and M. Harman. Optimizing existing software with genetic programming. Transactions on Evolutionary Computation, 19(1):118–135, 2015.

* B. R. Bruce. Energy optimisation via genetic improvement: A sbse technique for a new era in software development. In Proceedings of the Companion Publication of the 2015 Annual Conference on Genetic and Evolutionary Computation, GECCO Companion ’15, pages 819–820, New York, NY, USA, 2015. ACM.

### #Deep Parameter Optimisation

* F. Wu, W. Weimer, M. Harman, Y. Jia, and J. Krinke. Deep parameter optimisation. In Proceedings of the 2015 Annual Conference on Genetic and Evolutionary Computation, GECCO 2015, pages 1375–1382, 2015.

### #Fault Localisation

* S. Yoo. Evolving human competitive spectra-based fault localisation techniques. In G. Fraser and J. Teixeira de Souza, editors, Search Based Software Engineering, volume 7515 of Lecture Notes in Computer Science, pages 244–258. Springer Berlin Heidelberg, 2012.


[slide01]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide01.pdf
[slide02]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide02.pdf
[slide03]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide03.pdf
[slide04]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide04.pdf
[slide05]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide05.pdf
[slide06]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide06.pdf
[slide07]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide07.pdf
[slide08]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide08.pdf
[slide09]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide09.pdf
[slide10]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide10.pdf
[slide11]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide11.pdf
[slide12]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide12.pdf
[slide13]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide13.pdf
[slide14]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide14.pdf
[slide15]: {{site.baseurl}}/assets/files/2016-cs492/cs492-slide15.pdf

[ucl_random_testing]: {{site.baseurl}}/assets/files/2016-cs492/ucl_random_testing.pdf
[Chen2004]:{{site.baseurl}}/assets/files/2016-cs492/Chen2004.pdf
[coursework]: {{site.baseurl}}/assetts/files/2015-cs492d/coursework.pdf
[proposal]: {{site.baseurl}}/assetts/files/2015-cs492d/proposal.pdf
[2015-tsp-winner.pdf]: {{site.baseurl}}/assetts/files/2015-cs492d/2015-tsp-winner.pdf
[2015-sudoku-winner.pdf]: {{site.baseurl}}/assetts/files/2015-cs492d/2015-sudoku-winner.pdf

[ssbse2016]: http://ssbse.org/2016



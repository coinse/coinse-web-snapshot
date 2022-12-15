---
layout: page
title: CS454 AI Based Software Engineering (Autumn 2017)
---

###  Syllabus

This class covers metaheuristic optimisation algorithms and their application to software engineering problems. The goal of the class is twofold: the first objective is to understand major classes of metaheuristic algorithms, including local search algorithms and population based optimisation (such as genetic algorithm and particle swarm optimisation). The second objective is to study the application of these algorithms to software engineering problems. For this, the class will introduce the fundamental concepts in so called Search Based Software Engineering, and then study various application cases across the software development lifecycle (requirements, design, planning, testing, maintenance, etc). The desired learning outcome is to be able to use metaheuristic optimisation to automate, and/or gain insights into, software engineering tasks.

The first half of the course will be a series of lectures on metaheuristic algoithms. The second half will be a series of case studies based on paper presentations, given by students, about important and/or recent papers in the field of Search Based Software Engineering.

**Note:** due to the larger-than-usual attendance number, it has not been decided yet how to run the project part of the course. Consequently, the below lecture schedule is only tentative.

###  Evaluation

* Coursework: 30%
* Project: 30%
* Final Exam: 30%
* Class Participation: 10%

### Teaching Assistant

* Seongmin Lee ([nim.gnoes.eel@gmail.com](emailto:nim.gnoes.eel@gmail.com)), Jinhan Kim ([jinhankim@kaist.ac.kr](emailto:jinhankim@kaist.ac.kr))
* T/A Office Hour: 14:30-17:30, Wednesdays, N1 Room 402

###  Lectures

* 08/29: [Introduction 1/2][slide01]
* 08/31: [Introduction 2/2][slide02]
* 09/05: [Fitness Landscape][slide03], [Random and Local Search Algorithms][slide04]
* 09/07: No lecture ([FSE](http://esec-fse17.uni-paderborn.de)/[SSBSE](http://ssbse17.github.io) 2017)
* 09/12: No lecture ([FSE](http://esec-fse17.uni-paderborn.de)/[SSBSE](http://ssbse17.github.io) 2017)
* 09/14: [Evolutionary Computation 1/2][slide05], [Coursework #1]({{site.baseurl}}/assets/files/teaching/2017/cs454/coursework_1.pdf)
* 09/19: [Evolutionary Computation 2/2][slide06]
    - [Genetic Algorithm Walkers](http://rednuht.org/genetic_walkers/)
    - [Genetic Algorithm 2D Car Thingy](http://rednuht.org/genetic_cars_2/)
* 09/21: [Genetic Programming][slide07]
* 09/26: [Bio-inspired Algorithms][slide08]
* 09/28: [Multi-objective Optimisation][slide09]
* 10/03: No lecture (Chuseok Holiday)
* 10/05: No lecture (Chuseok Holiday)
* 10/10: [MOEA Evaluation Metrics][slide10], [Normalisation][slide11], [SBSE Overview][slide12]
* 10/12: [Theory - Elementary Landscape Analysis][slide13]
* 10/17: No lecture (Midterm week)
* 10/19: No lecture (Midterm week)
* 10/24: [Advanced Algorithms and Optimisation Tips][slide14]
* 10/26: **Project Pitch**
* 10/31: Paper Reading. Presenter: Team 8, Dissenter: Team 6
    - F. Wu, W. Weimer, M. Harman, Y. Jia, and J. Krinke. Deep parameter optimisation. In Proceedings of the 2015 Annual Conference on Genetic and Evolutionary Computation, GECCO 2015, pages 1375–1382, 2015. [https://dl.acm.org/citation.cfm?id=2754648](https://dl.acm.org/citation.cfm?id=2754648)
* 11/02: Paper Reading. Presenter: Team 6, Dissenter: Team 7
    - G. Gay. Generating Effective Test Suites by Combining Coverage Criteria, pages 65–82. Springer Inter- national Publishing, Cham, 2017. [https://link.springer.com/chapter/10.1007/978-3-319-66299-2_5](https://link.springer.com/chapter/10.1007/978-3-319-66299-2_5)
* 11/07: Paper Reading. Presenter: Team 7, Dissenter: Team 3
    - Y. Zhang, M. Harman, and S. A. Mansouri. The Multi-Objective Next Release Problem. In GECCO ’07: Proceedings of the 2007 Genetic and Evolutionary Computation Conference, pages 1129–1136. ACM Press, 2007. [https://dl.acm.org/citation.cfm?id=1277179](https://dl.acm.org/citation.cfm?id=1277179)
* 11/09: Paper Reading. Presenter: Team 3, Dissenter: Team 4
    - W. Weimer, T. Nguyen, C. L. Goues, and S. Forrest. Automatically finding patches using genetic programming. In Proceedings of the 31st IEEE International Conference on Software Engineering (ICSE ’09), pages 364–374, Vancouver, Canada, 16-24 May 2009. IEEE. [https://dl.acm.org/citation.cfm?id=1555051](https://dl.acm.org/citation.cfm?id=1555051)
* 11/14: Paper Reading. Presenter: Team 4, Dissenter: Team 5
    - K. Praditwong, M. Harman, and X. Yao. Software module clustering as a multi-objective search problem. IEEE Transactions on Software Engineering, 37(2):264–282, March-April 2010. [http://ieeexplore.ieee.org/document/5406532/](http://ieeexplore.ieee.org/document/5406532/)
* 11/16: Paper Reading. Presenter: Team 5, Dissenter: Team 2
    - G. Fraser and A. Arcuri. Whole test suite generation. Software Engineering, IEEE Transactions on, 39(2):276–291, Feb 2013. [https://dl.acm.org/citation.cfm?id=2478706](https://dl.acm.org/citation.cfm?id=2478706)
* 11/21: Paper Reading. Presenter: Team 2, Dissenter: Team 1
    - Sebastian Bauersfeld, Stefan Wappler, Joachim Wegener. A Metaheuristic Approach to Test Sequence Generation for Applications with a GUI. International Symposium on Search Based Software Engineering (SSBSE 2011), page 173-187 [https://link.springer.com/chapter/10.1007%2F978-3-642-23716-4_17](https://link.springer.com/chapter/10.1007%2F978-3-642-23716-4_17)
    - [Sapienz](https://github.com/Rhapsod/sapienz) is a search-based Android testing tool. It was developed as a research prototype (see the original [ISSTA 2016 paper](https://dl.acm.org/citation.cfm?doid=2931037.2931054)) and later bought by Facebook (see this [ArsTechnica article](https://arstechnica.com/information-technology/2017/08/facebook-dynamic-analysis-software-sapienz/)).
    - [ExSyst](https://www.st.cs.uni-saarland.de/exsyst/) is a system testing technique that exploits the UI in order to maximise structural coverage. It was developed at Saarland University, Germany.
    - [Sikuli](http://sikuli.org) is a scripting language that accepts graphical elements as function arguments: it was developed at MIT, USA.
* 11/23: Paper Reading. Presenter: Team 1, Dissenter: Team 9
    - A. Arcuri and G. Fraser. Parameter tuning or default values? an empirical investigation in search-based software engineering. Empirical Software Engineering, 18(3):594–623, Jun 2013. [https://link.springer.com/article/10.1007/s10664-013-9249-9](https://link.springer.com/article/10.1007/s10664-013-9249-9)
    - Slides on [No Free Lunch Theorem][slide15]
* 11/28: Paper Reading. Presenter: Team 9, Dissenter: Team 8
    - G. Xiao, F. Southey, R. C. Holte, and D. Wilkinson. Software testing by active learning for commercial games. In Proceedings of the 20th national conference on Artificial intelligence - Volume 2, AAAI’05, pages 898–903. AAAI Press, 2005. [https://aaai.org/Library/AAAI/2005/aaai05-142.php](https://aaai.org/Library/AAAI/2005/aaai05-142.php)
* 11/30: **Project Presentation #1.** Team 9, 1, 2, 5
* 12/05: **Project Presentation #2.** Team 4, 3, 7, 6, 8
* 12/07: No lecture (Undergraduate Admission Interview Day)
* 12/12: **Final Term Exam**

###  Coursework

Courseworks consist of solving large scale problems using stochastic approaches. There will be a class leaderboard, so that participants can submit their solutions to see how well they are doing. The winning entries will receive **prizes** and present their solutions to the class. In addition to submission of solutions to the leaderboard, participants should submit their implementation and report online.

* Coursework #1: Travelling Salesman Problem

Your goal is to implement a solver for the [Travelling Salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem). This is a well known NP-complete problem with lots of practical applications. Please refer to the [coursework document]({{site.baseurl}}/assets/files/teaching/2017/cs454/coursework_1.pdf) for more details. This coursework is due on 28 September 2017: submission should be made on [KLMS](http://klms.kaist.ac.kr/course/view.php?id=61518).

* Corusework #2: Learning to Rank for Automated Debugging

Your goal is to implement a learning-to-rank algorithm for automated debugging technique called fault localisation. Fault localisation aims to take various observations from test executions (including failing ones) and tell the developer where the responsible fault is within the code base. We will provide you with [data from 156 faults]({{site.baseurl}}/assets/files/teaching/2017/cs454/fluccs_data.zip) in real world open source Java projects. Your task is to implement an algorithm such that it ranks all the faulty methods as high as possible based on the data we provide. Submit your algorithm as well as your best ranking model: we will evaluate your model using 54 unseen faults to see how generally applicable your model is. Detailed instruction can be seen in the [coursework document]({{site.baseurl}}/assets/files/teaching/2017/cs454/coursework_2.pdf) and [slides]({{site.baseurl}}/assets/files/teaching/2017/cs454/coursework_2_slides.pdf). This coursework is due on 8th December 2017: submission should be made on [KLMS](http://klms.kaist.ac.kr/course/view.php?id=61518).

###  Course Project

The course project will be about actual application of metaheuristic problem solving to software engineering. Please see the [document]({{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-project-2017.pdf). Groups should prepare two talks:

* Project Idea Pitch: introduce what your group plans to do within 5 minutes on 26th October 2017. Please see KLMS to read project topics from the last year.

* Project Outcome Presentation: present the results you obtained within 15 minutes. We are going to use the 30th November and 5th Deembe slot.

Details about the deliverables are specified in the project documentation. Submission deadline is the end of 18th December 2017.

###  Groups



###  Reading List

Here are some papers on various SBSE topics to pick from in order to prepare for the first paper presentation of your group. You can also consult the [SBSE Repository](http://crestweb.cs.ucl.ac.uk/resources/sbse_repository/repository.html).

#### Requirements

* A. Bagnall, V. Rayward-Smith, and I. Whittley. The next release problem. Information and Software Technology, 43(14):883–890, Dec. 2001.

* Y. Zhang, M. Harman, and S. A. Mansouri. The Multi-Objective Next Release Problem. In GECCO ’07: Proceedings of the 2007 Genetic and Evolutionary Computation Conference, pages 1129–1136. ACM Press, 2007.

#### Project Management

* G. Antoniol, M. D. Penta, and M. Harman. Search-based Techniques Applied to Optimization of Project Planning for a Massive Maintenance Project. In Proceedings of the 21st IEEE International Conference on Software Maintenance (ICSM ’05), pages 240–249, Los Alamitos, California, USA, 25-30 September 2005. IEEE Computer Society.

* F. Ferrucci, M. Harman, J. Ren, and F. Sarro. Not going to take this anymore: Multi-objective overtime planning for software engineering projects. In Proceedings of the 2013 International Conference on Software Engineering, ICSE ’13, pages 462–471, Piscataway, NJ, USA, 2013. IEEE Press.

#### Modularisation

* B. S. Mitchell and S. Mancoridis. On the automatic modularization of software systems using the bunch tool. IEEE Transactions on Software Engineering, 32(3):193–208, 2006.

* K. Praditwong, M. Harman, and X. Yao. Software module clustering as a multi-objective search problem. IEEE Transactions on Software Engineering, 37(2):264–282, March-April 2010.

#### Test Data Generation

* C. Michael, G. McGraw, and M. Schatz. Generating software test data by evolution. IEEE Transactions on Software Engineering, 27(12):1085–1110, December 2001.

* G. Fraser and A. Arcuri. Whole test suite generation. Software Engineering, IEEE Transactions on, 39(2):276–291, Feb 2013.

* M. Harman, L. Hu, R. Hierons, J. Wegener, H. Sthamer, A. Baresel, and M. Roper. Testability transformation. IEEE Transactions on Software Engineering, 30(1):3–16, Jan. 2004.

#### Automated Patching

* W. Weimer, T. Nguyen, C. L. Goues, and S. Forrest. Automatically finding patches using genetic programming. In Proceedings of the 31st IEEE International Conference on Software Engineering (ICSE ’09), pages 364–374, Vancouver, Canada, 16-24 May 2009. IEEE.

* Z. P. Fry, B. Landau, and W. Weimer. A human study of patch maintainability. In Proceedings of the 2012 International Symposium on Software Testing and Analysis, ISSTA 2012, pages 177–187, New York, NY, USA, 2012. ACM.

#### Regression Testing

* S. Yoo and M. Harman. Pareto efficient multi-objective test case selection. In Proceedings of International Symposium on Software Testing and Analysis, pages 140–150. ACM Press, July 2007.

* M. G. Epitropakis, S. Yoo, M. Harman, and E. K. Burke. Empirical evaluation of pareto efficient multi- objective regression test case prioritisation. In Proceedings of the 2015 International Symposium on Software Testing and Analysis, ISSTA 2015, pages 234–245, New York, NY, USA, 2015. ACM.

#### Refactoring

* M. O'Cinnéide, L. Tratt, M. Harman, S. Counsell, and I. Hemati Moghadam. Experimental assessment of software metrics using automated refactoring. In Proceedings of the ACM-IEEE international symposium on Empirical software engineering and measurement, ESEM ’12, pages 49–58, New York, NY, USA, 2012. ACM.

#### Genetic Improvement

* D. White, A. Arcuri, and J. Clark. Evolutionary improvement of programs. IEEE Transactions on Evolutionary Computation, 15(4):515 –538, August 2011.

* W. Langdon and M. Harman. Optimizing existing software with genetic programming. Transactions on Evolutionary Computation, 19(1):118–135, 2015.

* B. R. Bruce. Energy optimisation via genetic improvement: A sbse technique for a new era in software development. In Proceedings of the Companion Publication of the 2015 Annual Conference on Genetic and Evolutionary Computation, GECCO Companion ’15, pages 819–820, New York, NY, USA, 2015. ACM.

#### Deep Parameter Optimisation

* F. Wu, W. Weimer, M. Harman, Y. Jia, and J. Krinke. Deep parameter optimisation. In Proceedings of the 2015 Annual Conference on Genetic and Evolutionary Computation, GECCO 2015, pages 1375–1382, 2015.

#### Fault Localisation

* S. Yoo. Evolving human competitive spectra-based fault localisation techniques. In G. Fraser and J. Teixeira de Souza, editors, Search Based Software Engineering, volume 7515 of Lecture Notes in Computer Science, pages 244–258. Springer Berlin Heidelberg, 2012.


[slide01]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide01.pdf
[slide02]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide02.pdf
[slide03]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide03.pdf
[slide04]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide04.pdf
[slide05]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide05.pdf
[slide06]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide06.pdf
[slide07]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide07.pdf
[slide08]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide08.pdf
[slide09]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide09.pdf
[slide10]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide10.pdf
[slide11]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide11.pdf
[slide12]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide12.pdf
[slide13]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide13.pdf
[slide14]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide14.pdf
[slide15]: {{site.baseurl}}/assets/files/teaching/2017/cs454/cs454-slide15.pdf

[ucl_random_testing]: {{site.baseurl}}/assets/files/teaching/2016/cs492b/ucl_random_testing.pdf
[Chen2004]:{{site.baseurl}}/assets/files/teaching/2016/cs492b/Chen2004.pdf
[coursework]: {{site.baseurl}}/assetts/files/teaching/2015/cs492d/coursework.pdf
[proposal]: {{site.baseurl}}/assetts/files/teaching/2015/cs492d/proposal.pdf
[2015-tsp-winner.pdf]: {{site.baseurl}}/assetts/files/teaching/2015/cs492d/2015-tsp-winner.pdf
[2015-sudoku-winner.pdf]: {{site.baseurl}}/assetts/files/teaching/2015/cs492d/2015-sudoku-winner.pdf

[ssbse2016]: http://ssbse.org/2016

---
layout: page
title: CS454 AI Based Software Engineering (Autumn 2018)
---

<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'Syllabus')" id="defaultOpen">Syllabus</button>
  <button class="tablinks" onclick="openTab(event, 'Schedule')">Schedule</button>
  <button class="tablinks" onclick="openTab(event, 'Assignments')">Assignments</button>
  <button class="tablinks" onclick="openTab(event, 'Projects')">Projects</button>
  <button class="tablinks" onclick="openTab(event, 'Reading List')">Reading List</button>
</div>

<!-- Tab content -->
<div id="Syllabus" class="tabcontent" markdown="1">

###  Syllabus

This class covers metaheuristic optimisation algorithms and their application to software engineering problems. The goal of the class is twofold: the first objective is to understand major classes of metaheuristic algorithms, including local search algorithms and population based optimisation (such as genetic algorithm and particle swarm optimisation). The second objective is to study the application of these algorithms to software engineering problems. For this, the class will introduce the fundamental concepts in so called Search Based Software Engineering, and then study various application cases across the software development lifecycle (requirements, design, planning, testing, maintenance, etc). The desired learning outcome is to be able to use metaheuristic optimisation to automate, and/or gain insights into, software engineering tasks.

The first half of the course will be a series of lectures on metaheuristic algoithms. The second half will be a series of case studies based on paper presentations, given by students, about important and/or recent papers in the field of Search Based Software Engineering.

### Required Skills

The course assumes that students have the following skills. **Unless you satisfy the following, you may encounter significant difficulties during courseworks and projects**:

- Proficient in programming (at least one of Python, C, or Java)
- Basic Unix/Linux literacy
    + To be able to write simple shell scripts
    + To be able to build and execute 3rd party software from source code
- Version control through git (projects should be submitted as a git repository)
- (Optional but strongly recommended) LaTeX

Out of these, I would understand if you have to learn how to use git during this course. But programming proficiency and *nix literacy are essential from the beginning.

###  Evaluation

* Coursework: 20%
* Project: 40%
* Final Exam: 30%
* Class Participation: 10%

### Teaching Assistant

* Seongmin Lee ([nim.gnoes.eel@gmail.com](emailto:nim.gnoes.eel@gmail.com)) 

</div>

<div id="Schedule" class="tabcontent" markdown="1">

###  Lectures

The schedule below is **tentative** for now and may change, given that we do not know the exact class size yet.

* 08/28: [Introduction 1/2][slide01]
* 08/30: [Introduction 2/2][slide02]
* 09/04: [Fitness Landscape][slide03], [Random and Local Search Algorithms][slide04]
* 09/06: [Evolutionary Computation 1/2][slide05], [Coursework #2]({{site.baseurl}}/assets/files/teaching/2018/cs454/coursework2.pdf)
    - [TSP Example][slide07]
* 09/11: No lecture ([SSBSE 2018](http://ssbse18.irisa.fr))
* 09/13: [Evolutionary Computation 2/2][slide06]
    - [Genetic Algorithm Walkers](http://rednuht.org/genetic_walkers/)
    - [Genetic Algorithm 2D Car Thingy](http://rednuht.org/genetic_cars_2/)
* 09/18: [Genetic Programming][slide08]
* 09/20: [Multi-objective Optimisation][slide10]
* 09/25: No lecture (Chuseok Holiday)
* 09/27: [MOEA Evaluation Metrics][slide11], [Normalisation][slide12], 
* 10/02: [Bio-inspired Algorithms][slide09], [SBSE Overview][slide13]
* 10/04: [Advanced Algorithms and Optimisation Tips][slide14]
* 10/09: No lecture (Korean Language Proclamation Day)
* 10/11: [Theory - Elementary Landscape Analysis][slide15], [No Free Lunch Theorem][slide16]
* 10/16: No lecture (Midterm week)
* 10/18: No lecture (Midterm week)
* 10/23: **Project Pitch #1**: Team 1, 3, 5, 7, 9, 11
* 10/25: **Project Pitch #2**: Team 2, 4, 6, 8, 10, 12
* 10/30: [General Machine Learning for SE][slide17]
* 11/01: Paper Reading
	- Presenter: Team 1, Discussion Leader: Team 7
	- Presenter: Team 2, Discussion Leader: Team 8
* 11/06: Paper Reading
	- Presenter: Team 3, Discussion Leader: Team 9
	- Presenter: Team 4, Discussion Leader: Team 10
* 11/08: Paper Reading
	- Presenter: Team 5, Discussion Leader: Team 11
	- Presenter: Team 6, Discussion Leader: Team 12
* 11/13: Project Milestone Check
* 11/15: Paper Reading
    - Presenter: Team 7, Discussion Leader: Team 1
    - Presenter: Team 8, Discussion Leader: Team 2
* 11/20: Paper Reading
    - Presenter: Team 9, Discussion Leader: Team 3
    - Presenter: Team 10, Discussion Leader: Team 4
* 11/22: Paper Reading
    - Presenter: Team 11, Discussion Leader: Team 5
    - Presenter: Team 12, Discussion Leader: Team 6
* 11/27: **Project Presentation #1.**
* 11/29: No lecture (undergraduate admission interview)
* 12/04: **Project Presentation #2.**
* 12/06: **Project Presentation #3.**
* 12/11: **Final Term Exam**

</div>

<div id="Assignments" class="tabcontent" markdown="1">

### Assignment #1: Getting to know the subject

Choose a paper from the reading list. Write an essay containing the following points:

- What is the software engineering problem authors are trying to solve?
- What are the technical contributions of the paper?
- Why do you like this work, or are interested in this work?

Please submit a PDF file containing your essay. Submission should be made via [KLMS](http://klms.kaist.ac.kr/mod/assign/view.php?id=261489). It is due on 23:59, Tuesday 4th September. **Late submission is not allowed for this coursework**.

### Assignment #2: Travelling Salesman Problem

Your goal is to implement a solver for the [Travelling Salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem). This is a well known NP-complete problem with lots of practical applications. Please refer to the [coursework document]({{site.baseurl}}/assets/files/teaching/2018/cs454/coursework2.pdf) for more details. It is due by 23:59:59 on 20th September 2018. 

There is a live competition leaderboard too. Solve the rl11849.tsp problem instance and upload your solution to the [leaderboard](https://coinse.kaist.ac.kr/leaderboard/5/) (you need to sign up and create an account). Leaderboard participation is not mandatory for this course, and your coursework grade is independent from your ranking. However, just for fun, there will be a prize for the winner.

### Assignment #3: Critical Essay

During the paper seminar weeks, everyone should submit an essay about the paper he or she is reading as the discussion leader team member. For example, everyone in Team 7 should submit an essay about the paper Team 1 chose and presented. The *minimum* expected length is a single A4 page: write what you think is a coherent and convincing critique.

The deadline for each team will be exactly seven days after the presentation of the paper they are writing about. There will be a submission site at KLMS, whose deadline will be set to the very last one: we will check the initial submission time for those who have early deadlines. The usualy late submission penalty applies.

</div>

<div id="Projects" class="tabcontent" markdown="1">

## Group Project Outline

The course project requires you to identify and formulate an SBSE problem and solve it using a metaheuristic approach. Please see the [document]({{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-project-2018.pdf). Groups should prepare two talks:

* Project Idea Pitch: give a 10 minute presentation about what your group plans to do. This will happen on 23th and 25th October. 

* Project Final Presentation: present the results you obtained within 15 minutes. We are going to use the 27th November and 4th, 6th Deembe slots.

Details about the deliverables are specified in the project documentation. Submission deadline is the end of 18th December 2018.

### Paper Reading

The paper reading seminars in November are led by groups. At each lecture, two groups will present one paper each, using 30 minutes. Another two groups will have read the paper, and lead the questions and discussions after the talk.

You are free to choose any reasonably recent publication (within the last 5 years) that is clearly related to SBSE. Naturally, you may want to read something related to your group's project, which is encouraged.

### Milestone Check

On 13th November, we will do a quick project milestone check. Each team has five minutes, explaining where the project currently is, and what the expected challenge aheads are. The aim of this session is two-folds:

- To ensure that projects move along
- For me to understand what the difficulties are, and to step in appropriately for the success of the project

### Final Presentation

Due to inevitable school-wide schedule on 28-29 November, one of the final presentation slot is rather early. I invite four teams to volunteer for this slot :) If you want to get early feedback, and wrap up the remaining project before the final submission deadline, this is a good chance: write to me or TA.

### Teams (Contact the T/A if your name is not here)

- Team 1: 이정관, 김세아, Nick Heppert, Liu Lingjun
- Team 2: 오종훈, 홍석주, 신승철, 강현우
- Team 3: 강성민, 이형진, 김대영, 김민
- Team 4: 조민규, 고지훈, 한준호, 위재원
- Team 5: Mathias Sixten, David Budischek, Gaspard Murat, Gustav Janér, Yixuan Huang
- Team 6: 류찬영, 박찬민, 하정호, 한상우
- Team 7: 남석현, 박성호, 한동훈, 김태수
- Team 8: Peerapon Akkapusit, Zuzana Jelčicová, Zelalem Mihret, Peter Muschick
- Team 9: 김범기, 김태환, 조은호, 최민성
- Team 10: 고영록, 이하연, 전호진, 조창호, 신민규
- Team 11: 이수환, 이진우, 배영경, 임선우
- Team 12: 최재훈, 박찬수, 이은지, Phan Duy Loc

#### Presentation Date

- 11.27: Team 3, Team 7, Team 8, Team 10
- 12.04: Team 1, Team 5, Team 6, Team 11
- 12,06: Team 2, Team 4, Team 9, Team 12

### Previous Projects

These are made available only as a reference. You cannot propose identical projects. Two of them are in Korean, because the policy was different then: apologies for those who do not read/speak Korean.

- [Search-based Javascript Modelling for Static Analysis (from 2016, Korean)]({{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-previous-project-2016-group3.pdf)
- [GUI Test Suite Generation using Ant Colony Optimization with EFG Traversal Criterion (from 2017, Korean)]({{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-previous-project-2017-group2.pdf)
- [Improving Test Data Generation for Java Programs using Search-based Approach and d-criterion (from 2016)]({{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-previous-project-2016-group6.pdf)
- [Sample Efficient Hyperparameter Optimization (from 2017)]({{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-previous-project-2017-group1.pdf)
</div>

<div id="Reading List" class="tabcontent" markdown="1">

###  Reading List

Here are some papers on various SBSE topics to pick from in order to prepare for the first paper presentation of your group. You can also consult the [SBSE Repository](http://crestweb.cs.ucl.ac.uk/resources/sbse_repository/repository.html).

#### Requirements

* Y. Zhang, M. Harman, and S. A. Mansouri. The Multi-Objective Next Release Problem. In GECCO ’07: Proceedings of the 2007 Genetic and Evolutionary Computation Conference, pages 1129–1136. ACM Press, 2007.

* Y.Xue and Y.-F. Li. Multi-objective Integer Programming Approaches for Solving Optimal Feature Selection Problem: A new perspective on Multi-objective Optimization Problems in SBSE. In Proceedings of the 40th International Conference on Software Engineering, ICSE ’18, pages 1231–1242, New York, NY, USA, 2018. ACM.

#### Project Management

* G. Antoniol, M. D. Penta, and M. Harman. Search-based Techniques Applied to Optimization of Project Planning for a Massive Maintenance Project. In Proceedings of the 21st IEEE International Conference on Software Maintenance (ICSM ’05), pages 240–249, Los Alamitos, California, USA, 25-30 September 2005. IEEE Computer Society.

* F. Ferrucci, M. Harman, J. Ren, and F. Sarro. Not going to take this anymore: Multi-objective overtime planning for software engineering projects. In Proceedings of the 2013 International Conference on Software Engineering, ICSE ’13, pages 462–471, Piscataway, NJ, USA, 2013. IEEE Press.

#### Modularisation

* B. S. Mitchell and S. Mancoridis. On the automatic modularization of software systems using the bunch tool. IEEE Transactions on Software Engineering, 32(3):193–208, 2006.

* K. Praditwong, M. Harman, and X. Yao. Software module clustering as a multi-objective search problem. IEEE Transactions on Software Engineering, 37(2):264–282, March-April 2010.

#### Test Data Generation

* G. Fraser and A. Arcuri. Whole test suite generation. Software Engineering, IEEE Transactions on, 39(2):276–291, Feb 2013.

* R. B. Abdessalem, S. Nejati, L. C. Briand, and T. Stifter. Testing vision-based control systems using learnable evolutionary algorithms. In Proceedings of the 40th International Conference on Software Engineering, ICSE ’18, pages 1016–1026, New York, NY, USA, 2018. ACM.

* J. Castelein, M. Aniche, M. Soltani, A. Panichella, and A. van Deursen. Search-based test data generation for sql queries. In Proceedings of the 40th International Conference on Software Engineering, ICSE ’18, pages 1230–1230, New York, NY, USA, 2018. ACM.

#### Automated Patching

* W. Weimer, T. Nguyen, C. L. Goues, and S. Forrest. Automatically finding patches using genetic programming. In Proceedings of the 31st IEEE International Conference on Software Engineering (ICSE ’09), pages 364–374, Vancouver, Canada, 16-24 May 2009. IEEE.

* M. Wen, J. Chen, R. Wu, D. Hao, and S.-C. Cheung. Context-aware patch generation for better au- tomated program repair. In Proceedings of the 40th International Conference on Software Engineering, ICSE ’18, pages 1–11, New York, NY, USA, 2018. ACM.

#### Regression Testing

* S. Yoo and M. Harman. Pareto efficient multi-objective test case selection. In Proceedings of International Symposium on Software Testing and Analysis, pages 140–150. ACM Press, July 2007.

* M. G. Epitropakis, S. Yoo, M. Harman, and E. K. Burke. Empirical evaluation of pareto efficient multi- objective regression test case prioritisation. In Proceedings of the 2015 International Symposium on Software Testing and Analysis, ISSTA 2015, pages 234–245, New York, NY, USA, 2015. ACM.

#### Refactoring

* M. O'Cinnéide, L. Tratt, M. Harman, S. Counsell, and I. Hemati Moghadam. Experimental assessment of software metrics using automated refactoring. In Proceedings of the ACM-IEEE international symposium on Empirical software engineering and measurement, ESEM ’12, pages 49–58, New York, NY, USA, 2012. ACM.

#### Genetic Improvement

* D. White, A. Arcuri, and J. Clark. Evolutionary improvement of programs. IEEE Transactions on Evolutionary Computation, 15(4):515 –538, August 2011.

* W. Langdon and M. Harman. Optimizing existing software with genetic programming. Transactions on Evolutionary Computation, 19(1):118–135, 2015.

* B. R. Bruce. Energy optimisation via genetic improvement: A SBSE technique for a new era in software development. In Proceedings of the Companion Publication of the 2015 Annual Conference on Genetic and Evolutionary Computation, GECCO Companion ’15, pages 819–820, New York, NY, USA, 2015. ACM.

#### Deep Parameter Optimisation

* F. Wu, W. Weimer, M. Harman, Y. Jia, and J. Krinke. Deep parameter optimisation. In Proceedings of the 2015 Annual Conference on Genetic and Evolutionary Computation, GECCO 2015, pages 1375–1382, 2015.

#### Fault Localisation

* S. Yoo. Evolving human competitive spectra-based fault localisation techniques. In G. Fraser and J. Teixeira de Souza, editors, Search Based Software Engineering, volume 7515 of Lecture Notes in Computer Science, pages 244–258. Springer Berlin Heidelberg, 2012.

* J. Sohn and S. Yoo. Fluccs: Using code and change metrics to improve fault localisation. In Proceedings of the International Symposium on Software Testing and Analysis, ISSTA 2017, pages 273–283, 2017.
</div>

<script>
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>

[slide01]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide01.pdf
[slide02]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide02.pdf
[slide03]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide03.pdf
[slide04]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide04.pdf
[slide05]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide05.pdf
[slide06]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide06.pdf
[slide07]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide07.pdf
[slide08]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide08.pdf
[slide09]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide09.pdf
[slide10]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide10.pdf
[slide11]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide11.pdf
[slide12]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide12.pdf
[slide13]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide13.pdf
[slide14]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide14.pdf
[slide15]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide15.pdf
[slide16]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide16.pdf
[slide17]: {{site.baseurl}}/assets/files/teaching/2018/cs454/cs454-slide17.pdf

[ucl_random_testing]: {{site.baseurl}}/assets/files/teaching/2016/cs492b/ucl_random_testing.pdf
[Chen2004]:{{site.baseurl}}/assets/files/teaching/2016/cs492b/Chen2004.pdf

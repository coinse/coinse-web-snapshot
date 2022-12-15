---
layout: page
title: CS454 AI Based Software Engineering (Autumn 2019)
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

- **Strong programming skills**: you are required to develop an **individual** course project. There will be also a number of hands-on sessions where we will program together during the class.
- Unix/Linux-savvy: you should be familiar with the usual build tools and Unix/Linux command line environments.
- Git-aware: you will be required to submit a github repository as part of your project deliverables.
- (Optional but strongly recommended) LaTeX

Out of these, I would understand if you have to learn how to use git during this course. But programming proficiency and *nix literacy are essential from the beginning.

###  Evaluation

This may change.

* Coursework: 20%
* Project: 40%
* Midterm Exam: 30%
* Class Participation: 10%

### Teaching Assistant

- [Sungmin Kang](https://coinse.kaist.ac.kr/members/sungmin.kang/): [stuatlittle@kaist.ac.kr](mailto:stuatlittle@kaist.ac.kr)

</div>

<div id="Schedule" class="tabcontent" markdown="1">

###  Lectures

The schedule below is **tentative** for now and may change, given that we do not know the exact class size yet.

- 09/03: [Introduction 1/2][slide01]
- 09/05: [Introduction 2/2][slide02]
- 09/10: [Fitness Landscape][slide03], [Random][slide04] and [Local Search Algorithms][slide05]
- 09/12: **No Lecture: Chuseok Holiday**
- 09/17: [Evolutionary Computation 1/2][slide06]
- 09/19: [Evolutionary Computation 2/2][slide07]
  + [TSP Example][slide08]
  + Just for fun:
  + [Genetic Algorithm Walkers](http://rednuht.org/genetic_walkers/)
  + [Genetic Algorithm 2D Car Thingy](http://rednuht.org/genetic_cars_2/)
- 09/24: [Genetic Programming][slide09]
- 09/26: [Multi-objective Optimisation][slide10]
- 10/01: [MOEA Evaluation Metrics][slide11], [Normalisation][slide12]
- 10/03: **No Lecture: National Foundation Day**
- 10/08: [Bio-inspired Algorithms][slide13], [SBSE Overview][slide14]
- 10/10: [Advanced Algorithms and Optimisation Tips][slide15]
- 10/15: [Theory - Elementary Landscape Analysis][slide16], [No Free Lunch Theorem][slide17]
- 10/17: [General Machine Learning for SE][slide18]
- 10/22: **Midterm Exam**
- 10/24: **No Lecture: Midterm Week**
- 10/29: Project Pitch: 1, 3, 5, 7, 9, 11, 15
- 10/31: Project Pitch: 2, 4, 6, 8, 10, 12, 14
- 11/05: Paper Presentation
    + Team 1: [Context-aware patch generation for better automated program repair](https://dl.acm.org/citation.cfm?id=3180155.3180233)
    + Team 2: [Evolving human competitive spectra-based fault localisation techniques](https://link.springer.com/chapter/10.1007/978-3-642-33119-0_18)
- 11/07: Paper Presentation
    + Team 3: [Testing vision-based control systems using learnable evolutionary algorithms](https://dl.acm.org/citation.cfm?id=3180160)
    + Team 4: [Experimental assessment of software metrics using automated refactoring](https://dl.acm.org/citation.cfm?id=2372260)
- 11/12: Paper Presentation
    + Team 5: [Whole Test Suite Generation](https://ieeexplore.ieee.org/document/6152257)
    + Team 6: [Software module clustering as a multi-objective search problem](https://ieeexplore.ieee.org/document/5406532)
- 11/14: Paper Presentation
    + Team 7: [Automatically finding patches using genetic programming](https://dl.acm.org/citation.cfm?id=1555051)
    + Team 8: [ReScue: crafting regular expression DoS attacks](https://dl.acm.org/citation.cfm?id=3238159)
- 11/19: Paper Presentation
    + Team 9: [Harnessing evolution for multi-hunk program repair](https://dl.acm.org/citation.cfm?id=3339508)
    + Team 10: [FLUCCS: Using code and change metrics to improve fault localisation](https://dl.acm.org/citation.cfm?id=3092717)
- 11/21: Paper Presentation
    + Team 11: [Deep parameter optimisation](https://dl.acm.org/citation.cfm?id=2754648)
    + Team 12: [Search-based test data generation for SQL queries](https://dl.acm.org/citation.cfm?id=3180202)
- 11/26: Paper Presentation
    + Team 14: [Search-based Techniques Applied to Optimization of Project Planning for a Massive Maintenance Project](https://ieeexplore.ieee.org/document/1510120)
    + Team 15: [Search-based energy testing of Android](https://dl.acm.org/citation.cfm?id=3339505.3339645)
- 11/28: **No Lecture: KAIST Undergraduate Admission Interview Day**
- 12/03: TBD
- 12/05: Project Presentation
- 12/10: Project Presentation
- 12/12: Project Presentation
- 12/17: **No Lecture: Finals Week**
- 12/19: **No Lecture: Finals Week**

</div>

<div id="Assignments" class="tabcontent" markdown="1">

### **Assignment #1: Getting to know the subject**

Choose a paper from the reading list. Write an essay containing the following points:

- What is the software engineering problem authors are trying to solve?
- What are the technical contributions of the paper?
- Why do you like this work, or are interested in this work?

It is due on 23:59, Tuesday 10th September 2019. **Late submission is not allowed for this coursework**.

### **Assignment #2: Travelling Salesman Problem**

Your goal is to implement a solver for the [Travelling Salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem). This is a well known NP-complete problem with lots of practical applications. Please refer to the [coursework document]({{site.baseurl}}/assets/files/teaching/2019/cs454/coursework2.pdf) for more details. It is due by the end of Thursday 10th October 2019. 

There is a live competition leaderboard too. Solve the rl11849.tsp problem instance and upload your solution to the [leaderboard](https://coinse.kaist.ac.kr/leaderboard/) (you need to sign up and create an account - use your KAIST email address). Leaderboard participation is not mandatory for this course, and your coursework grade is independent from your ranking. However, just for fun, there will be a prize for the winner.

### **Assignment #3: Critical Essay**

During the paper seminar weeks, everyone should submit an essay about the paper he or she is reading as the discussion leader team member. The *minimum* expected length is a single A4 page: write what you think is a coherent and convincing critique.

The deadline for each team will be exactly seven days after the presentation of the paper they are writing about. There will be a submission site at KLMS, whose deadline will be set to the very last one: we will check the initial submission time for those who have early deadlines. The usualy late submission penalty applies.
</div>

<div id="Projects" class="tabcontent" markdown="1">

## Group Project Outline

The course project requires you to identify and formulate an SBSE problem and solve it using a metaheuristic approach. Please see the [document]({{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-project-2019.pdf). Groups should prepare two talks:

* Project Idea Pitch: give a 10 minute presentation about what your group plans to do. This will happen on 29th and 31st October. 

* Project Final Presentation: present the results you obtained within 12 minutes. This will happen on 17th December. 

Details about the deliverables are specified in the project documentation. Submission deadline is the end of 20th December 2019. 

### Paper Reading

The paper reading seminars in November are led by groups. At each lecture, two groups will present one paper each, using 30 minutes. Another two groups will have read the paper, and lead the questions and discussions after the talk.

You are free to choose any reasonably recent publication (within the last 5 years) that is clearly related to SBSE. Naturally, you may want to read something related to your group's project, which is encouraged.

### Milestone Check

On a to-be-determined date in November, we will do a quick project milestone check. Each team has five minutes, explaining where the project currently is, and what the expected challenge aheads are. The aim of this session is two-fold:

- To ensure that projects move along
- For me to understand what the difficulties are, and to step in appropriately for the success of the project


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

<!-- #### Requirements

* Y. Zhang, M. Harman, and S. A. Mansouri. The Multi-Objective Next Release Problem. In GECCO ’07: Proceedings of the 2007 Genetic and Evolutionary Computation Conference, pages 1129–1136. ACM Press, 2007.

* Y.Xue and Y.-F. Li. Multi-objective Integer Programming Approaches for Solving Optimal Feature Selection Problem: A new perspective on Multi-objective Optimization Problems in SBSE. In Proceedings of the 40th International Conference on Software Engineering, ICSE ’18, pages 1231–1242, New York, NY, USA, 2018. ACM. -->

#### Project Management

* G. Antoniol, M. D. Penta, and M. Harman. Search-based Techniques Applied to Optimization of Project Planning for a Massive Maintenance Project. In Proceedings of the 21st IEEE International Conference on Software Maintenance (ICSM ’05), pages 240–249, Los Alamitos, California, USA, 25-30 September 2005. IEEE Computer Society.

* F. Ferrucci, M. Harman, J. Ren, and F. Sarro. Not going to take this anymore: Multi-objective overtime planning for software engineering projects. In Proceedings of the 2013 International Conference on Software Engineering, ICSE ’13, pages 462–471, Piscataway, NJ, USA, 2013. IEEE Press.

* R. Degiovanni, F. Molina, G. Regis, N. Aguirre. A genetic algorithm for goal-conflict identification. In Proceedings of the 33rd International Conference on Automated Software Engineering, ASE '18.

#### Modularisation

* B. S. Mitchell and S. Mancoridis. On the automatic modularization of software systems using the bunch tool. IEEE Transactions on Software Engineering, 32(3):193–208, 2006.

* K. Praditwong, M. Harman, and X. Yao. Software module clustering as a multi-objective search problem. IEEE Transactions on Software Engineering, 37(2):264–282, March-April 2010.

#### Test Data Generation

* G. Fraser and A. Arcuri. Whole test suite generation. Software Engineering, IEEE Transactions on, 39(2):276–291, Feb 2013.

* R. B. Abdessalem, S. Nejati, L. C. Briand, and T. Stifter. Testing vision-based control systems using learnable evolutionary algorithms. In Proceedings of the 40th International Conference on Software Engineering, ICSE ’18, pages 1016–1026, New York, NY, USA, 2018. ACM.

* J. Castelein, M. Aniche, M. Soltani, A. Panichella, and A. van Deursen. Search-based test data generation for SQL queries. In Proceedings of the 40th International Conference on Software Engineering, ICSE ’18, pages 1230–1230, New York, NY, USA, 2018. ACM.

* R. B. Abdessalem, A. Panichella, S.Nejati, L. C. Briand, and T. Stifer. Testing Autonomous Cars for Feature Interaction Failures using Many-Objective Search. In Proceedings of the 33rd International Conference on Automated Software Engineering, ASE '18.

* R. Jabbarvand, J. Lin, and S. Malek. Search-based energy testing of Android. In Proceedings of the 41st International Conference on Software Engineering, ICSE ’19.

#### Automated Patching

* W. Weimer, T. Nguyen, C. L. Goues, and S. Forrest. Automatically finding patches using genetic programming. In Proceedings of the 31st IEEE International Conference on Software Engineering (ICSE ’09), pages 364–374, Vancouver, Canada, 16-24 May 2009. IEEE.

* M. Wen, J. Chen, R. Wu, D. Hao, and S.-C. Cheung. Context-aware patch generation for better au- tomated program repair. In Proceedings of the 40th International Conference on Software Engineering, ICSE ’18, pages 1–11, New York, NY, USA, 2018. ACM.

* S. Saha, R. K. Saha, and M. R. Prasad. Harnessing evolution for multi-hunk program repair. In Proceedings of the 41st International Conference on Software Engineering, ICSE ’19.

#### Regression Testing

* S. Yoo and M. Harman. Pareto efficient multi-objective test case selection. In Proceedings of International Symposium on Software Testing and Analysis, pages 140–150. ACM Press, July 2007.

* M. G. Epitropakis, S. Yoo, M. Harman, and E. K. Burke. Empirical evaluation of pareto efficient multi- objective regression test case prioritisation. In Proceedings of the 2015 International Symposium on Software Testing and Analysis, ISSTA 2015, pages 234–245, New York, NY, USA, 2015. ACM.

#### Refactoring

* M. O'Cinnéide, L. Tratt, M. Harman, S. Counsell, and I. Hemati Moghadam. Experimental assessment of software metrics using automated refactoring. In Proceedings of the ACM-IEEE international symposium on Empirical software engineering and measurement, ESEM ’12, pages 49–58, New York, NY, USA, 2012. ACM.

* V. Alizadeh and M. Kessentini. Reducing Interactive Refactoring Effort via Clustering-Based Multi-objective Search. In Proceedings of the 33rd International Conference on Automated Software Engineering, ASE '18.

#### Genetic Improvement

* D. White, A. Arcuri, and J. Clark. Evolutionary improvement of programs. IEEE Transactions on Evolutionary Computation, 15(4):515 –538, August 2011.

* W. Langdon and M. Harman. Optimizing existing software with genetic programming. Transactions on Evolutionary Computation, 19(1):118–135, 2015.

* B. R. Bruce. Energy optimisation via genetic improvement: A SBSE technique for a new era in software development. In Proceedings of the Companion Publication of the 2015 Annual Conference on Genetic and Evolutionary Computation, GECCO Companion ’15, pages 819–820, New York, NY, USA, 2015. ACM.

#### Deep Parameter Optimisation

* F. Wu, W. Weimer, M. Harman, Y. Jia, and J. Krinke. Deep parameter optimisation. In Proceedings of the 2015 Annual Conference on Genetic and Evolutionary Computation, GECCO 2015, pages 1375–1382, 2015.

#### Fault Localisation

* S. Yoo. Evolving human competitive spectra-based fault localisation techniques. In G. Fraser and J. Teixeira de Souza, editors, Search Based Software Engineering, volume 7515 of Lecture Notes in Computer Science, pages 244–258. Springer Berlin Heidelberg, 2012.

* J. Sohn and S. Yoo. FLUCCS: Using code and change metrics to improve fault localisation. In Proceedings of the International Symposium on Software Testing and Analysis, ISSTA 2017, pages 273–283, 2017.

#### Security

* Y. Shen, Y. Jiang, C. Xu, P. Yu, X. Ma, and J. Lu. ReScue: Crafting Regular Expression DoS Attacks. In Proceedings of the 33rd International Conference on Automated Software Engineering, ASE '18.

</div>

<script>

if (window.location.href == sessionStorage.getItem('lastVisitedUrl')) {
    // When this page is lastly visited: Reopen the lastly visted tab
    try {
        i = sessionStorage.getItem('currentButtonIndex')
        document.getElementsByClassName("tablinks")[i].click()
    } catch (e) { 
        document.getElementById("defaultOpen").click();
    }
} else {
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
}
    
</script>

[slide01]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide01.pdf
[slide02]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide02.pdf
[slide03]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide03.pdf
[slide04]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide04.pdf
[slide05]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide05.pdf
[slide06]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide06.pdf
[slide07]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide07.pdf
[slide08]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide08.pdf
[slide09]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide09.pdf
[slide10]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide10.pdf
[slide11]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide11.pdf
[slide12]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide12.pdf
[slide13]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide13.pdf
[slide14]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide14.pdf
[slide15]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide15.pdf
[slide16]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide16.pdf
[slide17]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide17.pdf
[slide18]: {{site.baseurl}}/assets/files/teaching/2019/cs454/cs454-slide18.pdf

[ucl_random_testing]: {{site.baseurl}}/assets/files/teaching/2016/cs492b/ucl_random_testing.pdf
[Chen2004]:{{site.baseurl}}/assets/files/teaching/2016/cs492b/Chen2004.pdf

---
layout: page
title: CS453 Automated Software Testing, Spring 2021
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

### Lectures
Time: 10:30-11:45, Mondays and Wednesdays
Location: Online, using Zoom - the meeting link will be distributed later.

### Lecturer

Shin Yoo [shin.yoo@kaist.ac.kr](mailto:shin.yoo@kaist.ac.kr)
Office: E3-1 Room 2405

### Communication

All class announcements, as well as Q&A, will take place using a dedicated Slack workspace. **You are required to join [cs453-2021-kaist.slack.com](https://cs453-2021-kaist.slack.com/)** if you want to continue this course. It is strongly recommended that you install either a desktop or a mobile client, to get notifications. **Email the lecturer or one of the TAs to get the invitation link, if you do not have one.** When you sign up, please set your username as your real **full name in English, followed by "(your student id number)"**. For example, "Shin Yoo (20201234)"."

### Syllabus

This course is concerned with a broad range of software testing techniques, with a heavy emphasis on automation, tools, and frameworks, as well as the research outputs behind them. The topic will include, but are not limited to: black box testing/combinatorial testing, random testing, concepts of coverage, structural testing, mutation testing, regression testing, testability transformation, automated debugging, etc.

### Prerequisite

- **Strong programming skills**: you are required to actively contribute to group and individual project, which involves serious implementation. There will be also a number of hands-on sessions where we will program together during the class.
- Unix/Linux-savvy: you should be familiar with the usual build tools and Unix/Linux command line environments.
- **Git-aware**: knowing how to use git is mandatory for this course. First, we will use GitHub classroom for coursework. Second, you will be required to submit a github repository as part of your project deliverable.
- Ideally, CS350 Introduction to Software Engineering.

### Evaluation

Please note that, unlike previous years, we will have the final exam instead of the mid-term exam. Also, there is no participation points.

- Coursework: 40%
- Final Exam: 30%
- Project: 30%

### Teaching Assistant

- Sungmin Kang (stuatlittle@kaist.ac.kr)

### References

We do not have a *textbook* per se, and the course will be based on slides and other reading material that are deemed appropriate. However, if you want to get broader sense for some of the topics dealt by this course, I recommend the following books and publications.

- Paul Ammann and Jeff Offutt. Introduction to Software Testing (2nd Ed.)
- Andreas Zeller. Why Programs Fail (2nd Ed.)
- Y. Jia and M. Harman. [An analysis and survey of the development of mutation testing](http://ieeexplore.ieee.org/document/5487526/). IEEE transactions on software engineering, 37(5):649–678.
- P. McMinn. [Search-based software test data generation: A survey](http://onlinelibrary.wiley.com/doi/10.1002/stvr.294/abstract). Software Testing, Verification and Reliability, 14(2):105–156, June 2004.
</div>

<div id="Schedule" class="tabcontent" markdown="1">
### Lecture Schedule

The schedules are tentative at the moment.
- 01 Mar: No Lecture (Public Holiday)
- 03 Mar: [Introduction][slide00] 
- 08 Mar: [Testing Fundamentals][slide01]
- 10 Mar: Tutorial - Metaprogramming 101 for Python
- 15 Mar: [Black Box Testing & Combinatorial Interaction Testing][slide02]
- 17 Mar: [Testing Finite State Machines][slide03]
- 22 Mar: [Control and Data Flow][slide04]
- 24 Mar: [Random and Adaptive Random Testing][slide05]
  - [Randoop](https://randoop.github.io/randoop/): a random unit test generation tool for Java
  - [Hypothesis](https://github.com/HypothesisWorks/hypothesis-python)
- 29 Mar: Random Testing Hands-on
  - [Randoop](https://github.com/randoop/randoop) and [its manual](https://randoop.github.io/randoop/manual/)
  - [Outline Slide]({{site.baseurl}}/assets/files/teaching/2020/cs453/cs453-randoop-dd.pdf)
- 31 Mar: [Mutation Testing][slide06]
- 05 Apr: Mutation Testing Hands-on with PIT
  - [PIT](http://pitest.org): a practical mutation testing tool for Java
- 07 Apr: [Regression Testing][slide07]
- 12 Apr: Group Project Proposal
- 14 Apr: Group Project Proposal
- 19 Apr: No Lecture - Midterm Week
- 21 Apr: No Lecture - Midterm Week
- 26 Apr: [Fault Localisation][slide08]
- 28 Apr: Literature Review & Discussion - Fault Localisation
- 03 May: [Search Based Test Data Generation][slide09]
  - [EvoSuite](http://www.evosuite.org): a Search Based Test Data Generation tool for Java
  - [AVMFramework](http://avmframework.org): a reference implementation of Alternating Variable Method
- 05 May: No Lecture (Children's Day)
- 10 May: [Non-testable Programs and Metamorphic Testing][slide10]
- 12 May: Project Milestone Day
- 17 May: Web Testing Automation Hands-on
  - [Selenium](https://www.seleniumhq.org) and [Firefox Driver](https://github.com/mozilla/geckodriver/releases)
  - [SikuliX](http://sikulix.com)
  - [Outline Slide]({{site.baseurl}}/assets/files/teaching/2020/cs453/cs453-web-automation.pdf)
- 19 May: No Lecture (Happy Birthday, Buddha!)
- 24 May: [Test Flakiness][slide11]
- 26 May: No Lecture (ICSE 2021 Week)
- 31 May: Code Defenders - Mutation Testing Game
- 02 Jun: [Testing Deep Neural Networks][slide12]
- 07 Jun: Project Presentation
- 09 Jun: Project Presentation
- 14 Jun: Final Exam Week
- 16 Jun: **CS453 Final Exam**

</div>

<div id="Assignments" class="tabcontent" markdown="1">
### Assignments

**Assignment 0: GitHub Classroom Onboarding**

You need to get familiar with GitHub Classroom: create a GitHub account if you do not have one, and learn the basics of Git. The assignment invitation link is [here](https://classroom.github.com/a/AywYr5WQ).

**Assignment 1: Introduction to Metaprogramming**

You will learn how to manipulate Python code using `ast` module. This assignment takes up 5% of total course grade. The assignment invitation link is [here](https://classroom.github.com/a/0OMyOenS).

**Assignment 2: Python Coverage Profiler**

Your task is to write a coverage profiler for Python that can measure statement, branch, and condition coverage. This assignment takes up 15% of total course grade. The assignment invitation link is [here](https://classroom.github.com/a/qDXg4OCu).

**Assignment 3: Mutation Testing**

Your task is to write a full mutation testing tool that mutates the give Python code, executes the given test cases against the generated mutants, and finally produces kill matrices. This assignment takes up 10% of total course grade. The assignment link is [here](https://classroom.github.com/a/4wJZ3Izk)

**Assignment 4: Delta Debugging**

Your task will be to implement a delta debugging tool that minimises an error-revealing input. First, we will implement a linear and recursive DD for fake input. Subsequently, we will move onto Hierarchical Delta Debutting for Python programs (i.e., working with ASTs). The assignment link is [here](https://classroom.github.com/a/D8V9WiYp).
</div>

<div id="Projects" class="tabcontent" markdown="1">

### Project Aim

All teams should develop and/or implement an automated software testing technique based on an idea discussed during the course. I would encourage teams to pursue a novel idea, but a faithful reproduction of a state-of-the-art technique with solid evaluation would also do. If you are uncertain about your team's idea, I will be happy to discuss it.

### Proposal

All teams will give a presentation on 20th and 22nd April to explain their project topics. I expect **three things to be described clearly** in the talk:

- A testing problem the team aims to solve
- The technique the team is proposing
- A way of evaluation to show the proposed technique works and is competent

### Team Project Deliverables

Each team should submit the following:

- the team report
- the implementation: a public repository link in the report (e.g. github or bitbucket repo)
The team report should include:

- a precise description of the problem you attempted to solve
- a clear description of how you tried to solve the problem
- a result of experimental comparison of before and after: in other words, what benefits did your solution bring?

Additionally, each individual member should submit a separate individual report via KLMS:

- details of what you have contributed to the project
- peer assessment of your team members (yourself not included): use the scale of 10 to evaluate each of your teammates, and write clear justification for your score.

**The submission deadline is 22th June, 6pm, GMT+9.** The following is a submission checklist:

- Make sure you have put your group report (as pdf) and your presentation slides (as pdf) in your public project repository; make sure that we would be able to easily find it (i.e., don't hide it in an obscure folder).
- Make sure one student from your team has submitted the repo link (plain text) on KLMS.
- Make sure you have submitted your individual report (as pdf) on KLMS.

The final presentation dates for teams have been announced in the schedule section. Each team will have up to 15 minutes. If your team is scheduled on the early date, you can just report the progress up to that point, with a clear plan for the remaining work.

### Teams

Form your teams by 6th April - write down the member names in the Google Sheet document (link will be available from the Slack workspace).

### Examples from the previous years

I've picked a few projects from 2019 that I thought was interesting below. 

- [DVWA Attacker](/assets/files/teaching/2020/cs453/CS453-Project-Report-Team-2-2019.pdf)
- [Search-based software test data generation for string constraints](/assets/files/teaching/2020/cs453/CS453-Project-Report-Team-3-2019.pdf)
- [SWAGFuzzer​: Fuzzer with State diversity in RESTful API](/assets/files/teaching/2020/cs453/CS453-Project-Report-Team-4-2019.pdf)
- [PyTeG: Test Data Generation for Python](/assets/files/teaching/2020/cs453/CS453-Project-Report-Team-8-2019.pdf)

</div>

<div id="Reading List" class="tabcontent" markdown="1">

### Paper List

- J. Liang, S. Elbaum, and G. Rothermel. [Redefining prioritization: Continuous prioritization for continuous integration](https://dl.acm.org/citation.cfm?id=3180213). In Proceedings of the 40th International Conference on Software Engineering, ICSE ’18, pages 688–698, New York, NY, USA, 2018. ACM.

- M. Harman and P. McMinn. [A theoretical and empirical analysis of evolutionary testing and hill climbing for structural test data generation](https://dl.acm.org/citation.cfm?id=1273475). In Proceedings of the International Symposium on Software Testing and Analysis (ISSTA 2007), pages pp. 73–83. ACM Press, July 2007.

- K. Pei, Y. Cao, J. Yang, and S. Jana. [DeepXplore: Automated whitebox testing of deep learning systems](http://www.cs.columbia.edu/~junfeng/papers/deepxplore-sosp17.pdf). In Proceedings of the 26th Symposium on Operating Systems Principles, SOSP ’17, pages 1–18, New York, NY, USA, 2017. ACM.

- Q. Zhu, A, Panichella, and A. Zaidman. [An Investigation of Compression Techniques to Speed up Mutation Testing](http://orbilu.uni.lu/handle/10993/33866). In 2018 IEEE International Conference on Software Testinv, Validation, and Verification (ICST 2018), to appear.

- J. Bell, O. Legunsen, M. Hilton, L. Eloussi, T. Yung, D. Marinov. [DeFlaker: Automatically Detecting Flaky Tests](http://www.jonbell.net/icse18-deflaker.pdf). In 2018 International Conference on Software Engineering (ICSE 2018)

- A. Amar and P. Rigby, [Mining Historical Test Logs to Predict Bugs and Localize Faults in the Test Logs](https://users.encs.concordia.ca/~pcr/paper/Amar2019ICSE-draft.pdf). In 2019 International Conference on Software Engineering (ICSE 2019), to appear.

- T. Gu, C. Sun, X. Ma, C. Cao, C. Xu, Y. Yang, Q. Zhang, J. Lu, and Z. Su, [Practical GUI Testing of Android Applications via Model Abstraction and Refinement](http://moon.nju.edu.cn/people/xiaoxingma/pubs/2019-ICSE-TGu-APE.pdf). In 2019 International Conference on Software Engineering (ICSE 2019), to appear.

- M. Fazzini, M. Prammer, M. d’Amorim, and A. Orso. [Automatically translating bug reports into test cases for mobile apps](https://dl.acm.org/citation.cfm?id=3213869). In Proceedings of the 27th ACM SIGSOFT International Symposium on Software Testing and Analysis, ISSTA 2018, pages 141–152, New York, NY, USA, 2018. ACM.

- M. M. Almasi, H. Hemmati, G. Fraser, P. McMinn, and J. Benefelds. [Search-based detection of deviation failures in the migration of legacy spreadsheet applications](https://dl.acm.org/citation.cfm?id=3213861). In Proceedings of the 27th ACM SIGSOFT International Symposium on Software Testing and Analysis, ISSTA 2018, pages 266–275, 2018. ACM.

- M. Kim, S.-C. Cheung, and S. Kim. [Which generated test failures are fault revealing? Prioritizing failures based on inferred precondition violations using PAF](https://dl.acm.org/citation.cfm?doid=3236024.3236058). In Proceedings of the 2018 26th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering, ESEC/FSE 2018, pages 679–690, New York, NY, USA, 2018. ACM.

- J. Kim, R. Feldt, and S. Yoo. [Guiding deep learning system testing using surprise adequacy](https://arxiv.org/abs/1808.08444). In Proceedings of the 41th International Conference on Software Engineering, ICSE 2019, 2019.

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

[slide00]: {{site.baseurl}}/assets/files/teaching/cs453/cs453slide00.pdf
[slide01]: {{site.baseurl}}/assets/files/teaching/cs453/cs453slide01.pdf
[slide02]: {{site.baseurl}}/assets/files/teaching/cs453/cs453slide02.pdf
[slide03]: {{site.baseurl}}/assets/files/teaching/cs453/cs453slide03.pdf
[slide04]: {{site.baseurl}}/assets/files/teaching/cs453/cs453slide04.pdf
[slide05]: {{site.baseurl}}/assets/files/teaching/cs453/cs453slide05.pdf
[slide06]: {{site.baseurl}}/assets/files/teaching/cs453/cs453slide06.pdf
[slide07]: {{site.baseurl}}/assets/files/teaching/cs453/cs453slide07.pdf
[slide08]: {{site.baseurl}}/assets/files/teaching/cs453/cs453slide08.pdf
[slide09]: {{site.baseurl}}/assets/files/teaching/cs453/cs453slide09.pdf
[slide10]: {{site.baseurl}}/assets/files/teaching/cs453/cs453slide10.pdf
[slide11]: {{site.baseurl}}/assets/files/teaching/cs453/cs453slide11.pdf
[slide12]: {{site.baseurl}}/assets/files/teaching/cs453/cs453slide12.pdf

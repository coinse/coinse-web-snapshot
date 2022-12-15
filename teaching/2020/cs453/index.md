---
layout: page
title: CS453 Automated Software Testing, Spring 2020
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
~~Location: N1, Room 111~~

**The classes will indefinitely be held using zoom ([https://zoom.us](https://zoom.us)).** You can find the link on KLMS.

### Exams and Grades

Please refer to [the announcement made on 20th April]({{site.baseurl}}/assets/files/teaching/2020/cs453/cs453-spring2020-exam-announcement.pdf).

### Lecturer

Shin Yoo [shin.yoo@kaist.ac.kr](mailto:shin.yoo@kaist.ac.kr)
Office: E3-1 Room 2405

### Communication

All class announcements, as well as Q&A, will take place using a dedicated Slack workspace. **You are required to join [cs453-2020.slack.com](https://cs453-2020.slack.com/)** if you want to continue this course. It is strongly recommended that you install either a desktop or a mobile client, to get notifications. **Email the lecturer or one of the TAs to get the invitation link, if you do not have one.** When you sign up, please set your username as your real first name, followed by "(your student id number)". For example, "Shin (20201234)"."

### Syllabus

This course is concerned with a broad range of software testing techniques, with a heavy emphasis on automation, tools, and frameworks, as well as the research outputs behind them. The topic will include, but are not limited to: black box testing/combinatorial testing, random testing, concepts of coverage, structural testing, mutation testing, regression testing, testability transformation, automated debugging, etc.

### Prerequisite

- **Strong programming skills**: you are required to actively contribute to group and individual project, which involves serious implementation. There will be also a number of hands-on sessions where we will program together during the class.
- Unix/Linux-savvy: you should be familiar with the usual build tools and Unix/Linux command line environments.
- Git-aware: you will be required to submit a github repository as part of your project deliverable.
- Ideally, CS350 Introduction to Software Engineering.
- Also, ideally, a laptop you can bring to the classroom. **If this becomes a problem, let me know**.

### Evaluation

- Coursework: 25%
- Midterm Exam: 30%
- Project: 25%
- Quiz: 10%
- Class Participation: 10%

### Teaching Assistant

- [Gabin An](https://coinse.kaist.ac.kr/members/gabin/) [agb94@kaist.ac.kr](mailto:agb94@kaist.ac.kr)

### References

We do not have a *textbook* per se, and the course will be based on slides and other reading material that are deemed appropriate. However, if you want to get broader sense for some of the topics dealt by this course, I recommend the following books and publications.

- Paul Ammann and Jeff Offutt. Introduction to Software Testing (2nd Ed.)
- Andreas Zeller. Why Programs Fail (2nd Ed.)
- Y. Jia and M. Harman. [An analysis and survey of the development of mutation testing](http://ieeexplore.ieee.org/document/5487526/). IEEE transactions on software engineering, 37(5):649–678.
- P. McMinn. [Search-based software test data generation: A survey](http://onlinelibrary.wiley.com/doi/10.1002/stvr.294/abstract). Software Testing, Verification and Reliability, 14(2):105–156, June 2004.
</div>

<div id="Schedule" class="tabcontent" markdown="1">
### Lecture Schedule

I **had** two conference trips to make in Spring 2020, but both have been rescheduled due to public health concerns. In previous years, we usually made up for the lost time by allocating extra hours to give all project teams enough time to present - this time, we won't have to do that. CS453 will run a flexible schedule and finish wiehin 14 weeks in Spring 2020.

- 16 Mar: [Introduction][slide00] & [Testing Fundamentals][slide01]
- 18 Mar: [Black Box Testing & Combinatorial Interaction Testing][slide02]
- 23 Mar: [Testing Finite State Machines][slide03]
- 25 Mar: [Control and Data Flow][slide04]
- 30 Mar: [Random and Adaptive Random Testing][slide05]
  - [Randoop](https://randoop.github.io/randoop/): a random unit test generation tool for Java
  - [Hypothesis](https://github.com/HypothesisWorks/hypothesis-python)
- 01 Apr: [Search Based Test Data Generation][slide06]
  - [EvoSuite](http://www.evosuite.org): a Search Based Test Data Generation tool for Java
  - [AVMFramework](http://avmframework.org): a reference implementation of Alternating Variable Method
- 06 Apr: [Mutation Testing][slide07]
  - [PIT](http://pitest.org): a practical mutation testing tool for Java
- 08 Apr: [Regression Testing][slide08]
- 13 Apr: [Fault Localisation][slide09]
- 15 Apr: _No Lecture (Election Day)_
- 20 Apr: Group Project Proposal - Teams 1, 3, 5, 7, 9
- 22 Apr: Group Project Proposal - Teams 2, 4, 6, 8, 10
- 27 Apr: [Untestable Programs and Metamorphic Testing][slide10]
- 29 Apr: [Testing Deep Neural Networks][slide11]
- 04 May: _No Lecture (Midterm week)_
- 06 May: **Mid-term Exam (take home, 24 hours)**
- 11 May: Random Testing & Delta Debugging Hands-on
  - [Randoop](https://github.com/randoop/randoop) and [its manual](https://randoop.github.io/randoop/manual/)
  - [Outline Slide]({{site.baseurl}}/assets/files/teaching/2020/cs453/cs453-randoop-dd.pdf)
- 13 May: Mutation Testing Hands-on with Code Defender
- 18 May: Web Testing Automation Hands-on
  - [Selenium](https://www.seleniumhq.org) and [Firefox Driver](https://github.com/mozilla/geckodriver/releases)
  - [SikuliX](http://sikulix.com)
  - [Outline Slide]({{site.baseurl}}/assets/files/teaching/2020/cs453/cs453-web-automation.pdf)
- 20 May: ~Project milestone~ - repalced with a 1 page progress update
- 25 May: Team 5, Team 2
- 27 May: Team 1, Team 7
- 01 Jun: Team 6, Team 4
- 03 Jun: Team 9, Team 10
- 08 Jun: Team 8, Team 3
- 10 Jun: Project Presentation (Team 7, 6, 2)
- 15 Jun: Project Presentation (Team 5, 8, 4)
- 17 Jun: Project Presentation (Team 3, 1, 10, 9)
</div>

<div id="Assignments" class="tabcontent" markdown="1">
### Assignments

- **Coursework #1**: [What does a fault look like, and what can we do about them automatically?][cw1] Due by 23:59, 27 March 2020 - Submit via KLMS

- **Coursework #2**: [Search Based Test Data Generation][cw2] Due by 23:59, 1st June 2020 - Submit via KLMS. Public inputs are available from [here]({{site.baseurl}}/assets/files/teaching/2020/cs453/cs453-SBST-master.zip).

- **Coursework #3**: [Practical Mutation Testing][cw3] Due by 23:59 27th April 2020 - Submit via KLMS


</div>

<div id="Projects" class="tabcontent" markdown="1">

### Project Aim

All teams should develop and/or implement an automated software testing technique based on an idea discussed during the course. I would encourage teams to pursue a novel idea, but a faithful reproduction of a state-of-the-art technique with solid evaluation would also do. If you are uncertain about your team's idea, I will be happy to discuss it.

### Proposal

All teams will give a presentation on 20th and 22nd April to explain their project topics. I expect **three things to be described clearly** in the talk:

- A testing problem the team aims to solve
- The technique the team is proposing
- A way of evaluation to show the proposed technique works and is competent

### Paper Presentation

All teams also should prepare a 30 minute presentation about a paper. **Choose the paper your group wants to present, from the Reading List on this page, and let the lecturer/TAs know by 22nd April 2020**.

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
- peer assessment of your team members (yourself not included)

**The submission deadline is 24th June, 6pm, GMT+9.** Since there is also an indivudla report, **everyone should submit a zip file that contains both the group and the individual report into KLMS**.

The final presentation dates for teams have been announced in the schedule section. Each team will have 20 minutes. If your team is scheduled on the early date, you can just report the progress up to that point, with a clear plan for the remaining work.

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

[slide00]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cs453slide00.pdf
[slide01]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cs453slide01.pdf
[slide02]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cs453slide02.pdf
[slide03]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cs453slide03.pdf
[slide04]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cs453slide04.pdf
[slide05]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cs453slide05.pdf
[slide06]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cs453slide06.pdf
[slide07]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cs453slide07.pdf
[slide08]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cs453slide08.pdf
[slide09]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cs453slide09.pdf
[slide10]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cs453slide10.pdf
[slide11]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cs453slide11.pdf
[cw1]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cw1.pdf
[cw2]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cw2.pdf
[cw3]: {{site.baseurl}}/assets/files/teaching/2020/cs453/cw3.pdf

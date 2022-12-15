---
layout: page
title: SE Society Summer Lecture
---

Lecturer: Shin Yoo (shin.yoo@kaist.ac.kr)
Location: KAIST Seoul Campus
Dates: 11th to 13th July, 2018

## Hands-on 1: Travelling Salesman Problem Hands-on

The goal is to solve a TSP instance. An utility module, [`evaluate.py`](tsp/evaluate.py), and a data file [`bier127.dat`](tsp/bier127.dat) that contains a TSP instance (you can find the original file at [`bier127.tsp`](http://elib.zib.de/pub/mp-testdata/tsp/tsplib/tsp/bier127.tsp)), are available from this repository. It contains coordinates of 127 beer gardens in [Ausburg](https://en.wikipedia.org/wiki/Augsburg). Your goal is to find the shortest route that passes all the beer gardens!

The beer gardens have indices from 0 to 126. The shortest route is one permutation out of 127! possibilities. If you submit a permutation, i.e., a Python `list` of integers in [0, 126], to the function `evaluate` in `evaluate.py`, you will get the length of the route. For example, the following code snippet will give you the length of a random route:

```
import evaluate from evaluate
import random

random_route = list(range(127))
random.shuffle(random_route)
print(evaluate(random_route))
```

Try finding the shortest route using any method (but, preferably, using a metaheuristic based on what we have covered so far). We will walk through a GA based solver during the later part of the hands-on session.

### Downloads
- [evaluate.py][evaluate] and [bier127.dat][bier127]
- a [GA template][tsp_template] using DEAP

### Links
- [DEAP](https://github.com/DEAP/deap) and its [documentations](https://deap.readthedocs.io/en/master/)



[evaluate]: {{site.baseurl}}/assets/files/teaching/2018/sesociety/evaluate.py
[bier127]: {{site.baseurl}}/assets/files/teaching/2018/sesociety/bier127.dat
[tsp_template]: {{site.baseurl}}/assets/files/teaching/2018/sesociety/ga_template.py
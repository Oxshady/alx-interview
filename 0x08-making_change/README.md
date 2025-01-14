# 0x08. Making Change

## Description

This project focuses on solving the **"Making Change"** problem, a classic dynamic programming challenge. The objective is to determine the fewest number of coins needed to achieve a given amount of money using coins of specified denominations.

This problem is applicable in scenarios such as financial software development and optimization challenges where efficiency and resource minimization are crucial.

---

## Learning Objectives

By completing this task, you will:
- Understand and apply **dynamic programming** techniques.
- Optimize solutions for real-world problems.
- Work with nested loops and maintain state across iterations.

---

## Requirements

- **Language**: Python 3.x
- **Libraries**: Only standard Python libraries are allowed.
- **Prototype**: `def makeChange(coins, total):`
- **Inputs**:
  - `coins`: A list of integers representing coin denominations.
  - `total`: An integer representing the amount of money to make.
- **Outputs**:
  - Return the **fewest number of coins** needed to make the `total`.
  - Return `0` if the `total` is `0` or less.
  - Return `-1` if the total cannot be achieved with the given coins.

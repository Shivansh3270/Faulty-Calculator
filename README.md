
# Faulty Calculator

A fun JavaScript project that behaves like a normal calculator most of the time, but occasionally gives incorrect answers intentionally.

---

## Features
- Takes two numbers as input
- Supports basic operations:
  - Addition (`+`)
  - Subtraction (`-`)
  - Multiplication (`*`)
  - Division (`/`)
- Uses random logic to make the calculator faulty 10% of the time
- Displays result using JavaScript alerts

---

## How It Works
- `Math.random()` generates a random number between `0` and `1`
- If the random number is less than `0.1`, the calculator produces incorrect results
- Otherwise, it works like a normal calculator

---

## Faulty Operations

| Original Operation | Performed Operation |
|-------------------|--------------------|
| `+` | `-` |
| `-` | `/` |
| `*` | `+` |
| `/` | `**` (power) |

---

## Technologies Used
- HTML
- JavaScript

---

## Code Example

```javascript
let random = Math.random();

if(random < 0.1){
    // Faulty calculations
}
else{
    // Normal calculations
}
````

---

## How to Run

1. Copy the code into a JavaScript file (`script.js`)
2. Link it with an HTML file
3. Open the HTML file in your browser
4. Enter numbers and operator when prompted

---

## Project Purpose

This project was created for practicing:

* JavaScript conditions
* User input using `prompt()`
* Random number generation
* Basic calculator logic

---

```
```

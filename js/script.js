// Copyright (c) 2023 Lamees Hemdan All rights reserved
//
// Created by: Lamees Hemdan
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function doMathClicked () {
  // this function subtracts 3 numbers to get a certain number

  // input
  const firstNumber = parseInt(document.getElementById("number-1").value)
  const secondNumber = parseInt(document.getElementById("number-2").value)
  const thirdNumber = parseInt(document.getElementById("number-3").value)

  // process
  let counter = 0
  let answer = 0
  while (counter < thirdNumber) {
    answer = firstNumber - secondNumber - thirdNumber
    counter ++
  }

  // output
  document.getElementById('answer').innerHTML = "The difference is: " + answer
}

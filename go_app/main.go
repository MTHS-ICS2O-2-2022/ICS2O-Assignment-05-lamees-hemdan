// Created by: Lamees Hemdan
// Created on: May 2023
//
// This file contains the main function for the go_app application.

package main

import (
	"fmt"
)

func main() {
	// this function calculates the difference of 3 numbers
	var firstNumber int
	var secondNumber int
	var thirdNumber int
	var difference int

	// input
	fmt.Println("Enter the first number: ")
	fmt.Scanln(&firstNumber)
	fmt.Println("Enter the second number: ")
	fmt.Scanln(&secondNumber)
	fmt.Println("Enter the third number: ")
	fmt.Scanln(&thirdNumber)

	// process
	difference = firstNumber - secondNumber - thirdNumber

	// output
	fmt.Println("")
	fmt.Println("The difference is: ", difference)
}

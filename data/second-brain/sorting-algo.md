---
title: "Sorting Algorithms"
description: "A sorting algorithm is an algorithm that puts elements of a list into an order"
date: "2022-06-20"
---

Sorting a list of data in ascending, descending, or any order can help both humans and machine sort data efficiently and quickly, perhaps using an algorithm. The sorting algorithms works on data structures of different data types keeping consideration of [[asymptotic]] analysis.

### Simple Sorting

These algorithms are useful in sorting through data of any type. i.e int, string, object etc. Although the run time of these algorithms are notoriously slow.

1.  Bubble sort
2.  Selection sort
3.  Insertion sort

### Bubble Sort

It is the simplest of all sorting algorithms but very slow.(not advisable for large dataset).

The rules of this algorithms are as follows.

-   Compare only two indexes at a time starting at index the beginning
-   If the LHS is greater than the RHS SWAP positions else do nothing
-   Then, move one position to the right and repeat the previous step.
-   At each stage of the iteration, the largest or greatest element must be on the extreme end of the RHS.
-   Finally repeat all step.

```java

  static void bubbleSort(int[] arr) {
	int temp = 0;
	for(int i=0; i < arr.length; i++){
		for(int j=1; j < (arr.length - i); j++){
		if(arr[j-1] > arr[j]){
			temp = arr[j-1];
			arr[j-1] = arr[j];
			arr[j] = temp;
			} 
		} 
	} 
} 

//Time Complexity is mostly = 0(n^2)

```

> The only comparison done here is check if the LHS > RHS. and for each iteration n - 1 is always sorted (where n = length of the array).

### Selection Sort:

It’s a very basic and straight forward way of sorting here are the steps:

1.Scan through the dataset, and locate the smallest date.

1.  Store that smallest date for reference.
2.  If the nothing smaller than what we currently have stored, swap our smallest date to the first index i.e index[0]
3.  Now repeat the above process, this time start scanning from index[i]+1 (because index[i] is already sorted.(where i = currentIndex))
4.  Reiterate the process till you get to the last data which MUST be the largest.


```java
static void selectionSort(int f[]){
	for(int i = 0; i < f.length; i = i + 1){  
		int currMin = i;
		for(int j = i + 1; j < f.length; j = j + 1){
			if(f[j] < f[currMin]){
				currMin = j;
			}	
	}
		int temp = f[i];
		f[i] = f[currMin];
		f[currMin] = temp;
	}
}

//Time Complexity for best & worst case is = 0(n^2)
```

### Insertion Sort

This algorithm is a basic one. Here it’s very similar to sorting a pack of card by hand.

1.  Iterate through the dataset starting at array[1] until array[array.lenght-1].
2.  We’d compare the element at our current position (a.k.a KEY) to it’s predecessors(KEY - 1....).
3.  If the element at current position KEY is smaller that the immediate predecessor, we’d continue the comparison to predecessors after Key immediate predecessor.
4.  Now we’d all those predecessors greater than KEY by one position forward to create space for KEY
5.  We’d insert key into its rightful space.

```java
static void insertionSort(int k[]){
		int j = 1;
	while(j < k.length){
		int key = j;
		while(key > 0 && k[key] < k[key-1]){
			int temp = k[key];
			k[key] = k[j-1];
			k[key-1] = temp;
			key = key - 1;
		}
			j = j + 1;
	}
}
```

### Divide & Conquer

Divide and Conquer is an algorithmic paradigm. A typical Divide and Conquer algorithm solves a problem using following three steps.

1.  **Divide**: Break the given problem into subproblems of same type.
2.  **Conquer**: Recursively solve these subproblems
3.  **Combine**: Appropriately combine the answers

### Merge Sort:

In merge sort the divide and conquer paradigm is implemented.

Given: An array **S** to sort, using divide & conquer we’d go this way:

1.  **Divide**: If s.length < 1 return s, because there’s nothing to be sorted. ELSE break the array into two such as S1 and S2, each containing about half of S elements. (i.e s1 has s.length/2 elements & s2 has the remaining s.length/2 elements)
2.  **Conquer**: Here, we’d recursively sort both s1 and s2
3.  **Combine**: Merge the sorted S1 and S2 together to form a sorted S.

```java
static void merge(int f[], int lowerB, int mid, int upperB){
		int i = lowerB;
		int j = mid;
		int t = 0;

	while(i < mid && j < upperB){
		if(f[i] <= f[j]){
			temp[t] = f[i]; i++; t++;
		}
		else{
			temp[t] = f[j]; j++; t++;
		}
	}
	while(i < mid){
		temp[t] = f[i]; i++; t++;
	}
	while(j < upperB){
		temp[t] = f[j]; j++; t++;
	}
		i = lowerB;
		t = 0;
		while(t < temp.length){
		f[i] = temp[t];
		i++; t++;
	}
}
```

```java
static void mergeSort(int f[], int lowerB, int upperB){
	if(lowerB + 1 < upperB){
		int mid = (lowerB + upperB)/2;
		mergeSort(f, lowerB, mid);
		mergeSort(f, mid, upperB);
		merge(f, lowerB, mid, upperB);
	}
}

//Time complexity is 0(nlogn)
```


### Further Reading

-   [William Fuset's Sorting Algorithm Implementation](https://github.com/ahmedsaheed/Algorithms/tree/master/src/main/java/com/williamfiset/algorithms/sorting)

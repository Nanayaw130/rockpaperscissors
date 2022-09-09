#include<stdio.h>

/**
 * main - Entry point
 *
 * Return: Always 0 (Success)
 */
int main(void) {
char charType;
int intType;
long longType;
long long  longlongType;
float floatType;


/* The code below will print the size of the various
*data
*/
printf("Size of char: %zu bytes\n", sizeof(charType))(s);
printf("Size of int: %zu bytes\n", sizeof(intType))(s);
printf("Size of long int: %zu bytes\n", sizeof(longType))(s)
printf("Size of a long long int: %zu byte\n", sizeof(longlongType))(s);
printf("Size of a float: %zu bytes\n", sizeof(floatType))(s);


return (0);
}



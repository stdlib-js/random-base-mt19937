/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
* Generate C test fixtures.
*
* ## Notes
*
* -   Run this script from the directory in which fixtures should be written.
*
*/

#include <stdlib.h>
#include <stdio.h>

/**
* Define prototypes for external functions.
*/
extern void init_by_array( unsigned long *init_key, int key_length );
extern void init_genrand( unsigned long s );
extern unsigned long genrand_int32();
extern double genrand_res53();

/**
* Generates a linearly spaced numeric array of doubles.
*
* ## Notes
*
* -   Assumes that the output array has at least 2 elements.
* -   Output array is guaranteed to include both the start and end values.
*
*
* @param out    output array
* @param len    array length
* @param start  first value
* @param end    last value
*/
void linspace_f64( double *out, const unsigned int len, const double start, const double end ) {
	unsigned int i;
	double incr;

	incr = (end-start) / (len-1);
	for ( i = 0; i < len-1; i++ ) {
		out[ i ] = start + (incr*i);
	}
	out[ i ] = end;
}

/**
* Generates a linearly spaced numeric array of integers.
*
* ## Notes
*
* -   Assumes that the output array has at least 2 elements.
* -   Output array is guaranteed to include both the start and end values.
*
*
* @param out    output array
* @param len    array length
* @param start  first value
* @param end    last value
*/
void linspace_ui32( unsigned int *out, const unsigned int len, const unsigned int start, const unsigned int end ) {
	unsigned int incr;
	unsigned int i;

	incr = (end-start) / (len-1);
	for ( i = 0; i < len-1; i++ ) {
		out[ i ] = start + (incr*i);
	}
	out[ i ] = end;
}

/**
* Generates a random double on the interval [0,1].
*
* @return random double
*/
double rand_double() {
	int r = rand();
	return (double)r / ( (double)RAND_MAX + 1.0 );
}

/**
* Generates an array of pseudorandom doubles drawn from a uniform distribution.
*
* @param out  output array
* @param len  array length
* @param a    lower bound (inclusive)
* @param b    upper bound (exclusive)
*/
void rand_array_f64( double *out, const unsigned int len, const double a, const double b ) {
	unsigned int i;
	double delta;

	delta = b - a;

	for ( i = 0; i < len; i++ ) {
		out[ i ] = a + ( rand_double()*delta );
	}
}

/**
* Generates an array of pseudorandom integers drawn from a uniform distribution.
*
* ## Notes
*
* -   WARNING: the method used here is not particularly robust, as some integer values may be sampled more frequently than others.
*
*
* @param out  output array
* @param len  array length
* @param a    lower bound (inclusive)
* @param b    upper bound (exclusive)
*/
void rand_array_ui32( unsigned int *out, const unsigned int len, const unsigned int a, const unsigned int b ) {
	unsigned int i;
	unsigned int r;
	double delta;

	delta = (double)b - (double)a;

	for ( i = 0; i < len; i++ ) {
		r = (unsigned int)( delta * rand_double() ); // truncation
		out[ i ] = a + r;
	}
}

/**
* Casts an array of integers to an array of doubles.
*
* @param out  output array
* @param x    input array
* @param len  array length
*/
void ui32_to_f64( double *out, unsigned int *x, unsigned int len ) {
	unsigned int i;

	for ( i = 0; i < len; i++ ) {
		out[ i ] = (double) x[ i ];
	}
}

/**
* Casts an array of doubles to an array of integers.
*
* @param out  output array
* @param x    input array
* @param len  array length
*/
void f64_to_ui32( unsigned int *out, double *x, unsigned int len ) {
	unsigned int i;

	for ( i = 0; i < len; i++ ) {
		out[ i ] = (unsigned int) x[ i ];
	}
}

/**
* Writes an array of doubles to a file as a series of comma-separated values.
*
* @param f    file to write to
* @param x    array of doubles
* @param len  array length
*/
void write_array_f64( FILE *f, const double *x, const unsigned int len ) {
	unsigned int i;

	for ( i = 0; i < len; i++ ) {
		fprintf( f, "%.17g", x[ i ] );
		if ( i < len-1 ) {
			fprintf( f, "," );
		}
	}
}

/**
* Writes an array of integers to a file as a series of comma-separated values.
*
* @param f    file to write to
* @param x    array of integers
* @param len  array length
*/
void write_array_ui32( FILE *f, const unsigned int *x, const unsigned int len ) {
	unsigned int i;

	for ( i = 0; i < len; i++ ) {
		fprintf( f, "%u", x[ i ] );
		if ( i < len-1 ) {
			fprintf( f, "," );
		}
	}
}

/**
* Writes a named array of doubles to a file as JSON.
*
* @param f     file to write to
* @param name  array name
* @param x     data
* @param len   array length
*/
void write_named_array_f64( FILE *f, const char *name, const double *x, const unsigned int len ) {
	fprintf( f, "\"%s\":[", name );
	write_array_f64( f, x, len );
	fprintf( f, "]" );
}

/**
* Writes a named array of integers to a file as JSON.
*
* @param f     file to write to
* @param name  array name
* @param x     data
* @param len   array length
*/
void write_named_array_ui32( FILE *f, const char *name, const unsigned int *x, const unsigned int len ) {
	fprintf( f, "\"%s\":[", name );
	write_array_ui32( f, x, len );
	fprintf( f, "]" );
}

/**
* Writes data to a file as JSON.
*
* ## Notes
*
* -   This function SHOULD be tailored to the input data (e.g., input types, output types, number of arguments, etc) and may vary from use case to use case.
*
*
* @param f    file to write to
* @param y    results
* @param len  array length
*/
void write_data_as_json_ui32( FILE *f, const unsigned int *y, const unsigned int len ) {
	fprintf( f, "{" );
	write_named_array_ui32( f, "expected", y, len );
	fprintf( f, "}" );
}

/**
* Writes data to a file as JSON.
*
* ## Notes
*
* -   This function SHOULD be tailored to the input data (e.g., input types, output types, number of arguments, etc) and may vary from use case to use case.
*
*
* @param f    file to write to
* @param y    results
* @param len  array length
*/
void write_data_as_json_f64( FILE *f, const double *y, const unsigned int len ) {
	fprintf( f, "{" );
	write_named_array_f64( f, "expected", y, len );
	fprintf( f, "}" );
}

/**
* Generates test fixtures.
*
* @param seed  PRNG seed
* @param len   number of output values
* @param name  output filename
*/
void generate_ui32_integer_seed( const unsigned int seed, const unsigned int len, const char *name ) {
	unsigned int *y;
	unsigned int i;
	FILE *f;

	// Allocate an output array:
	y = (unsigned int*) malloc( len * sizeof(unsigned int) );
	if ( y == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Initialize the PRNG:
	init_genrand( seed );

	// Generate fixture data:
	for ( i = 0; i < len; i++ ) {
		y[ i ] = genrand_int32();
	}
	// Open a new file:
	f = fopen( name, "w" );
	if ( f == NULL ) {
		printf( "Error opening file.\n" );
		exit( 1 );
	}
	// Write data as JSON:
	write_data_as_json_ui32( f, y, len );

	// Close the file:
	fclose( f );

	// Free allocated memory:
	free( y );
}

/**
* Generates test fixtures.
*
* @param seed    PRNG seed array
* @param nwords  seed array length
* @param len     number of output values
* @param name    output filename
*/
void generate_ui32_array_seed( unsigned long *seed, const unsigned int nwords, const unsigned int len, const char *name ) {
	unsigned int *y;
	unsigned int i;
	FILE *f;

	// Allocate an output array:
	y = (unsigned int*) malloc( len * sizeof(unsigned int) );
	if ( y == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Initialize the PRNG:
	init_by_array( seed, nwords );

	// Generate fixture data:
	for ( i = 0; i < len; i++ ) {
		y[ i ] = genrand_int32();
	}
	// Open a new file:
	f = fopen( name, "w" );
	if ( f == NULL ) {
		printf( "Error opening file.\n" );
		exit( 1 );
	}
	// Write data as JSON:
	write_data_as_json_ui32( f, y, len );

	// Close the file:
	fclose( f );

	// Free allocated memory:
	free( y );
}

/**
* Generates test fixtures.
*
* @param seed  PRNG seed
* @param len   number of output values
* @param name  output filename
*/
void generate_f64_integer_seed( const unsigned int seed, const unsigned int len, const char *name ) {
	unsigned int i;
	double *y;
	FILE *f;

	// Allocate an output array:
	y = (double*) malloc( len * sizeof(double) );
	if ( y == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Initialize the PRNG:
	init_genrand( seed );

	// Generate fixture data:
	for ( i = 0; i < len; i++ ) {
		y[ i ] = genrand_res53();
	}
	// Open a new file:
	f = fopen( name, "w" );
	if ( f == NULL ) {
		printf( "Error opening file.\n" );
		exit( 1 );
	}
	// Write data as JSON:
	write_data_as_json_f64( f, y, len );

	// Close the file:
	fclose( f );

	// Free allocated memory:
	free( y );
}

/**
* Generates test fixtures.
*
* @param seed    PRNG seed array
* @param nwords  seed array length
* @param len     number of output values
* @param name    output filename
*/
void generate_f64_array_seed( unsigned long *seed, const unsigned int nwords, const unsigned int len, const char *name ) {
	unsigned int i;
	double *y;
	FILE *f;

	// Allocate an output array:
	y = (double*) malloc( len * sizeof(double) );
	if ( y == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Initialize the PRNG:
	init_by_array( seed, nwords );

	// Generate fixture data:
	for ( i = 0; i < len; i++ ) {
		y[ i ] = genrand_res53();
	}
	// Open a new file:
	f = fopen( name, "w" );
	if ( f == NULL ) {
		printf( "Error opening file.\n" );
		exit( 1 );
	}
	// Write data as JSON:
	write_data_as_json_f64( f, y, len );

	// Close the file:
	fclose( f );

	// Free allocated memory:
	free( y );
}

/**
* Main execution sequence.
*/
int main( void ) {
	unsigned int len;

	// Define the array length:
	len = 1000;

	// Define a seed array:
	unsigned long seed[ 4 ] = { 0x123, 0x234, 0x345, 0x456 };

	// Generate fixture data:
	generate_ui32_integer_seed( 1234, len, "uint32_integer_seed.json" );
	generate_ui32_array_seed( seed, 4, len, "uint32_array_seed.json" );

	generate_f64_integer_seed( 1234, len, "float64_integer_seed.json" );
	generate_f64_array_seed( seed, 4, len, "float64_array_seed.json" );

	return 0;
}
